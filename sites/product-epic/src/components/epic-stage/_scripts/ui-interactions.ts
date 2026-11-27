import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type Lenis from 'lenis';

export interface UiBindings {
    lenis: Lenis;
    cursor: HTMLElement;
    labelEl: HTMLElement;
    frameLabels: Record<string, string>;
    isInverted: () => boolean;
    invalidEmailMessage: string;
    successToastMessage: string;
    getViewport: () => { W: number; H: number };
}

export function initUiInteractions({
    lenis,
    cursor,
    labelEl,
    frameLabels,
    isInverted,
    invalidEmailMessage,
    successToastMessage,
    getViewport,
}: UiBindings): () => void {
    let curLabel = '';
    (
        [
            ['#top', 'top'],
            ['#ch1', 'ch1'],
            ['#ch2', 'ch2'],
            ['#ch3', 'ch3'],
            ['#ch4', 'ch4'],
            ['#ch5', 'ch5'],
            ['#ch6', 'ch6'],
            ['#ch7', 'ch6'],
            ['#ch8', 'ch6'],
        ] as const
    ).forEach(([sel, key]) =>
        ScrollTrigger.create({
            trigger: sel,
            start: 'top 55%',
            end: 'bottom 55%',
            onToggle: (self) => {
                if (!self.isActive || curLabel === key || isInverted()) return;
                curLabel = key;
                const txt = frameLabels[key];
                if (txt) {
                    labelEl.textContent = txt;
                    gsap.fromTo(labelEl, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' });
                }
            },
        })
    );

    function splitChars(el: Element) {
        const txt = el.textContent || '';
        el.textContent = '';
        const inners: HTMLElement[] = [];

        // Split by consecutive non-blanks and blanks, preserving original spaces.
        const tokens = txt.split(/(\s+)/);

        for (const token of tokens) {
            if (!token) continue;

            // Pure blank: Use actual spaces or non-breaking/standard spaces as placeholders, without wrapping them as animated characters.
            if (/^\s+$/.test(token)) {
                el.appendChild(document.createTextNode(token));
                continue;
            }

            // Single word: Wrap in `.word` to prevent line breaks within the word.
            const word = document.createElement('span');
            word.className = 'word';
            word.style.display = 'inline-block';
            word.style.whiteSpace = 'nowrap';

            for (const ch of token) {
                const w = document.createElement('span');
                w.className = 'ch';
                w.style.display = 'inline-block';

                const i = document.createElement('i');
                i.style.display = 'inline-block';
                i.textContent = ch;

                w.appendChild(i);
                word.appendChild(w);
                inners.push(i);
            }

            el.appendChild(word);
        }

        return inners;
    }


    document.querySelectorAll('[data-split]').forEach((el) => {
        if (el.closest('.hero')) return;
        gsap.from(splitChars(el), {
            yPercent: 118,
            duration: 1.1,
            stagger: 0.04,
            ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 80%' },
        });
    });

    document.querySelectorAll('[data-fade]').forEach((el) =>
        gsap.from(el, {
            y: 44,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 84%' },
        })
    );

    document.querySelectorAll('.chapter .kicker').forEach((el) => {
        gsap.from(el, { opacity: 0, x: -24, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 86%' } });
        const line = el.querySelector('.k-line');
        if (line) {
            gsap.from(line, { scaleX: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 86%' } });
        }
    });

    document.querySelectorAll('[data-wm]').forEach((el) =>
        gsap.fromTo(
            el,
            { yPercent: 24 },
            {
                yPercent: -18,
                ease: 'none',
                scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
            }
        )
    );

    document.querySelectorAll<HTMLElement>('.num').forEach((n) => {
        const end = +(n.dataset.n || 0);
        const obj = { v: 0 };
        ScrollTrigger.create({
            trigger: n,
            start: 'top 86%',
            once: true,
            onEnter: () =>
                gsap.to(obj, {
                    v: end,
                    duration: 1.7,
                    ease: 'power3.out',
                    onUpdate: () => {
                        n.textContent = String(Math.round(obj.v));
                    },
                }),
        });
    });


    // SVG blueprint
    // ===
    const bpTL = gsap.timeline({
        scrollTrigger: {
            trigger: '#ch4',
            start: 'top 80%',   // The closer to 100% (the bottom of the viewport), the earlier the trigger occurs—for example, 'top 85%'
            end: 'bottom 70%', // The end point can also be set slightly earlier to ensure the animation finishes before reaching the very bottom of the scroll area
            scrub: 0.6,
        },
    });

    ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7'].forEach((g) => {
        const els = document.querySelectorAll(`.bp .${g} [pathLength]`);
        if (!els.length) return;

        bpTL.fromTo(
            els,
            { strokeDashoffset: 1 },
            {
                strokeDashoffset: 0,
                ease: 'none', //For 'scrub' animations, it is recommended to use 'linear' or 'none' to avoid stuttering caused by double-easing.
                stagger: {
                    each: 0.04,
                    from: 'start',
                },
                duration: 0.6,
            },
            '+=0.08'
        );
    });

    bpTL.to(
        '.bp text',
        {
            opacity: 1,
            stagger: 0.05,
            duration: 0.3,
        },
        '-=0.2'
    );



    // ===
    const nav = document.getElementById('nav');
    ScrollTrigger.create({ start: 60, end: 'max', onToggle: (s) => nav?.classList.toggle('is-solid', s.isActive) });

    const scrollLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-scroll]'));
    const onScrollClick = (e: Event) => {
        e.preventDefault();
        const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (target) lenis.scrollTo(target, { duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 4) });
    };
    scrollLinks.forEach((a) => a.addEventListener('click', onScrollClick));

    const modal = document.getElementById('modal') as HTMLElement;
    const mCard = modal.querySelector('.modal-card') as HTMLElement;
    const mMail = document.getElementById('fMail') as HTMLInputElement;
    const mErr = document.getElementById('mError') as HTMLElement;

    function openModal() {
        modal.style.display = 'flex';
        lenis.stop();
        gsap.fromTo(modal.querySelector('.veil'), { opacity: 0 }, { opacity: 1, duration: 0.5 });
        gsap.fromTo(mCard, { y: 46, opacity: 0, rotateX: 8 }, { y: 0, opacity: 1, rotateX: 0, duration: 0.9, ease: 'expo.out' });
    }

    function closeModal() {
        gsap.to(mCard, { y: 26, opacity: 0, duration: 0.35, ease: 'power2.in' });
        gsap.to(modal.querySelector('.veil'), {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
                modal.style.display = 'none';
                lenis.start();
            },
        });
    }

    const resBtn1 = document.getElementById('reserveBtn');
    const resBtn2 = document.getElementById('reserveBtn2');
    const mClose = document.getElementById('mClose');
    const veil = modal.querySelector('.veil');
    const mForm = document.getElementById('mForm');

    resBtn1?.addEventListener('click', openModal);
    resBtn2?.addEventListener('click', openModal);
    mClose?.addEventListener('click', closeModal);
    veil?.addEventListener('click', closeModal);

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
    };
    window.addEventListener('keydown', onKeyDown);

    const toastEl = document.getElementById('toast') as HTMLElement;
    function toast(msg: string) {
        toastEl.textContent = msg;
        gsap.killTweensOf(toastEl);
        gsap.fromTo(toastEl, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
        gsap.to(toastEl, { opacity: 0, y: -12, duration: 0.5, delay: 2.6, ease: 'power2.in' });
    }

    const onFormSubmit = (e: Event) => {
        e.preventDefault();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mMail.value.trim())) {
            mErr.textContent = invalidEmailMessage;
            mMail.classList.remove('err');
            void mMail.offsetWidth;
            mMail.classList.add('err');
            return;
        }
        mErr.textContent = '';
        mMail.classList.remove('err');
        closeModal();
        mMail.value = '';
        const fName = document.getElementById('fName') as HTMLInputElement | null;
        if (fName) fName.value = '';
        toast(successToastMessage);
    };
    mForm?.addEventListener('submit', onFormSubmit);

    const { W, H } = getViewport();
    const cpos = { x: W / 2, y: H / 2, tx: W / 2, ty: H / 2 };
    const onCursorMove = (e: MouseEvent) => {
        cpos.tx = e.clientX;
        cpos.ty = e.clientY;
    };
    window.addEventListener('mousemove', onCursorMove);

    const onTickCursor = () => {
        cpos.x += (cpos.tx - cpos.x) * 0.18;
        cpos.y += (cpos.ty - cpos.y) * 0.18;
        cursor.style.transform = `translate(${cpos.x}px,${cpos.y}px)`;
    };
    gsap.ticker.add(onTickCursor);

    const onMouseOver = (e: MouseEvent) => {
        const target = e.target as Element | null;
        cursor.classList.toggle('on', !!target?.closest('a,button,input,.stage-clip'));
    };
    window.addEventListener('mouseover', onMouseOver);

    return () => {
        scrollLinks.forEach((a) => a.removeEventListener('click', onScrollClick));
        resBtn1?.removeEventListener('click', openModal);
        resBtn2?.removeEventListener('click', openModal);
        mClose?.removeEventListener('click', closeModal);
        veil?.removeEventListener('click', closeModal);
        window.removeEventListener('keydown', onKeyDown);
        mForm?.removeEventListener('submit', onFormSubmit);
        window.removeEventListener('mousemove', onCursorMove);
        window.removeEventListener('mouseover', onMouseOver);
        gsap.ticker.remove(onTickCursor);
    };
}

export function playHeroReveal(
    win: { x: number; y: number; w: number; h: number; r: number },
    heroWinTarget: { x: number; y: number; w: number; h: number; r: number },
    lenis: Lenis,
    onSyncScroll: () => void
) {
    const splitHero = (el: Element | null) => {
        if (!el) return [] as HTMLElement[];
        const txt = el.textContent || '';
        el.textContent = '';
        const out: HTMLElement[] = [];
        for (const ch of txt) {
            const w = document.createElement('span');
            w.className = 'ch';
            const i = document.createElement('i');
            i.textContent = ch;
            w.appendChild(i);
            el.appendChild(w);
            out.push(i);
        }
        return out;
    };

    const heroChars = [...splitHero(document.querySelector('.t1')), ...splitHero(document.querySelector('.t2'))];
    gsap.set(heroChars, { yPercent: 118 });
    gsap.set(['.hero-foot', '.scroll-hint'], { opacity: 0, y: 20 });

    const cnt = { v: 0 };
    const numEl = document.querySelector('.loader-num');
    const reveal = gsap.timeline({ paused: true });
    reveal
        .to('#loader .eye', { scale: 1.14, opacity: 0, duration: 0.7, ease: 'power2.in' }, 0)
        .to('#loader .loader-num,#loader .loader-latin', { opacity: 0, duration: 0.4 }, 0)
        .to('#loader', { clipPath: 'inset(0 0 100% 0)', duration: 1.05, ease: 'expo.inOut' }, 0.35)
        .add(() => document.getElementById('loader')?.remove(), 1.5)
        .to(win, { ...heroWinTarget, duration: 2, ease: 'expo.out' }, 0.35)
        .to('.hero .latin', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 0.8)
        .to(heroChars, { yPercent: 0, duration: 1.3, stagger: 0.045, ease: 'power4.out' }, 0.85)
        .to('.hero-foot', { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 1.5)
        .to('.scroll-hint', { opacity: 1, y: 0, duration: 1 }, 1.8)
        .to('#nav', { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' }, 1.7)
        .add(() => {
            lenis.start();
            ScrollTrigger.refresh();
        }, 2.1)
        .add(() => onSyncScroll(), 2.4);

    gsap.to(cnt, {
        v: 100,
        duration: 1.5,
        ease: 'power2.inOut',
        onUpdate: () => {
            if (numEl) numEl.textContent = String(Math.round(cnt.v));
        },
        onComplete: () => reveal.play(),
    });
}
