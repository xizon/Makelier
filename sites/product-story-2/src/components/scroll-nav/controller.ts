import Lenis from 'lenis';
import { gsap, ScrollTrigger, reduced } from '../../lib/motion';

export function mount(element: HTMLElement | null): (() => void) | void {
    if (element === null) return;

    // Eased smooth scroll (not the browser's native speed), wired into ScrollTrigger.
    const lenis = reduced()
        ? null
        : new Lenis({ duration: 1.3, easing: (t: number) => 1 - Math.pow(1 - t, 4) });
    const onTick = (time: number) => lenis?.raf(time * 1000);
    if (lenis) {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(onTick);
        gsap.ticker.lagSmoothing(0);
    }

    const links = Array.from(element.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
    const triggers: ScrollTrigger[] = [];

    // Timeline: each step's line fills while its scene passes through the viewport.
    links.forEach((link) => {
        if (!link.hasAttribute('data-nav-step')) return;
        const target = document.querySelector<HTMLElement>(link.getAttribute('href') ?? '');
        const fill = link.querySelector<HTMLElement>('[data-nav-fill]');
        if (!target || !fill) return;
        const apply = (self: ScrollTrigger) => {
            fill.style.transform = `scaleX(${self.progress})`;
        };
        triggers.push(
            ScrollTrigger.create({
                trigger: target,
                // clamp() keeps start/end inside the scrollable range, so the last
                // scenes still reach 100% when the page cannot scroll any further.
                start: 'clamp(top 60%)',
                end: 'clamp(bottom 60%)',
                onUpdate: apply,
                onRefresh: apply,
                onToggle: (self) => link.toggleAttribute('data-active', self.isActive),
            }),
        );
    });

    const onClick = (event: Event) => {
        const link = event.currentTarget as HTMLAnchorElement;
        const target = document.querySelector<HTMLElement>(link.getAttribute('href') ?? '');
        if (!target) return;
        event.preventDefault();
        if (lenis) lenis.scrollTo(target);
        else target.scrollIntoView({ behavior: 'auto' });
    };
    links.forEach((link) => link.addEventListener('click', onClick));

    return () => {
        links.forEach((link) => link.removeEventListener('click', onClick));
        triggers.forEach((trigger) => trigger.kill());
        if (lenis) {
            gsap.ticker.remove(onTick);
            lenis.destroy();
        }
    };
}
