import { gsap, typewrite } from '../../lib/motion';

export function mount(element: HTMLElement | null): (() => void) | void {
    if (element === null) return;

    let cancel = () => {};
    const ctx = gsap.context(() => {
        const trigger = { trigger: element, start: 'top top', end: 'bottom top', scrub: true };
        gsap.to('[data-layer="far"]', { yPercent: -14, ease: 'none', scrollTrigger: trigger });
        gsap.to('[data-layer="near"]', { yPercent: -60, ease: 'none', scrollTrigger: trigger });
        gsap.to('[data-layer="board"]', { yPercent: 8, ease: 'none', scrollTrigger: trigger });
        gsap.to('[data-layer="title"]', { yPercent: -35, opacity: 0.15, ease: 'none', scrollTrigger: trigger });
        gsap.from('[data-hero-in]', { y: 70, opacity: 0, duration: 1.1, stagger: 0.12, ease: 'power4.out' });
    }, element);

    const target = element.querySelector<HTMLElement>('[data-caption-target]');
    const timer = window.setTimeout(() => {
        if (target) cancel = typewrite(target, element.dataset.caption ?? '');
    }, 1100);

    return () => {
        window.clearTimeout(timer);
        cancel();
        ctx.revert();
    };
}
