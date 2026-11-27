import { gsap } from 'gsap';
import { viewFromPath, type ViewKey } from './_scripts/data';
import { createPjax } from '../../lib/pjax'; // or '@/lib/pjax' if your alias points at src/
import { FACTORIES, type Ctx } from './_scripts/view-controllers';
import type { Stage } from './_scripts/scene';


let booted = false;

const sleep = (ms: number) => new Promise<void>((res) => window.setTimeout(res, ms));

/**
 * Mounted once per full page load. Everything after that happens
 * inside this one shell, so it must survive page changes.
 *
 * Page switching itself lives in `lib/pjax`; this file only wires the shell's
 * own concerns (fonts, WebGL stage, nav marker) to it.
 */
export function mount(element: HTMLElement | null): (() => void) | void {
    // The system may also hand us inner elements; only the shell root counts.
    if (!element || !element.classList.contains('mkl-app') || booted) return;
    booted = true;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const host = element.querySelector<HTMLElement>('.mkl-main')!;
    const stageHost = element.querySelector<HTMLElement>('.mkl-stage')!;
    const viewEl = host.querySelector<HTMLElement>('.mkl-view[data-view]')!;
    const nav = element.querySelector<HTMLElement>('.mkl-nav')!;
    const mark = element.querySelector<HTMLElement>('.mkl-nav__mark')!;

    let currentKey: ViewKey = (viewEl.dataset.view as ViewKey) || viewFromPath(location.pathname) || 'home';

    // ---- stage (lazy: three.js is a separate chunk) ------------------------
    let stage: Stage | null = null;
    const stagePromise: Promise<Stage | null> = import('./_scripts/scene')
        .then((m) => m.createStage(stageHost, reduceMotion))
        .then((s) => {
            stage = s;
            if (!s) element.classList.add('mkl-nowebgl');
            else s.setView(currentKey);
            return s;
        })
        .catch(() => {
            element.classList.add('mkl-nowebgl');
            return null;
        });

    const ctx: Ctx = {
        reduce: reduceMotion,
        stage: () => stage,
        whenStage: () => Promise.race([stagePromise, sleep(2400).then(() => null)]),
    };

    // ---- nav marker + active link (shell concerns, not pjax concerns) -----------
    const placeMark = (animate: boolean) => {
        const link = nav.querySelector<HTMLElement>(`.mkl-nav__link[data-key="${currentKey}"]`);
        if (!link) return;
        const vars = { x: link.offsetLeft, width: link.offsetWidth, opacity: 1 };
        if (animate && !reduceMotion) gsap.to(mark, { ...vars, duration: 0.8, ease: 'expo.out' });
        else gsap.set(mark, vars);
    };
    const onResize = () => placeMark(false);
    window.addEventListener('resize', onResize);

    const setActive = (key: ViewKey) => {
        element.querySelectorAll<HTMLAnchorElement>('.mkl-nav__link').forEach((a) => {
            const on = a.dataset.key === key;
            a.classList.toggle('is-active', on);
            if (on) a.setAttribute('aria-current', 'page');
            else a.removeAttribute('aria-current');
        });
    };

    // ---- pjax ----------------------------------------------------------------------
    const pjax = createPjax<ViewKey>({
        container: host,
        root: element,
        viewSelector: '.mkl-view[data-view]',
        linkSelector: 'a[data-pjax]',
        match: (url) => viewFromPath(url.pathname), // "works.html" / "blog--works.html" -> 'works', else normal navigation
        initialKey: currentKey,
        scroll: 'container',
        busyClass: 'is-changing',

        // one controller per view (animations / interactions live there)
        mount: (key, el) => FACTORIES[key](el, ctx),

        // new view is in the DOM, its controller not yet created
        onSwap: ({ to, el }) => {
            el.style.visibility = 'hidden'; // the controller reveals it in enter()
            currentKey = to.key;
            element.dataset.view = to.key;
            setActive(to.key);
            placeMark(true);
            stage?.setView(to.key);
        },
    });

    placeMark(false);
    // Fonts change link widths; re-measure once they are in, then play the first entrance.
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
    const ready = fonts ? Promise.race([fonts.ready, sleep(1500)]) : sleep(0);

    void pjax
        .start({
            waitFor: ready.then(() => placeMark(false)),
        })
        .then(() => element.removeAttribute('data-boot'));

    return () => {
        window.removeEventListener('resize', onResize);
        pjax.destroy();
        stage?.destroy();
        booted = false;
    };
}
