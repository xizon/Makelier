import { gsap, ScrollTrigger, countUp, typewrite, reduced } from '../../lib/motion';

export function mount(element: HTMLElement | null): (() => void) | void {
    if (element === null) return;

    const counters = Array.from(element.querySelectorAll<HTMLElement>('[data-count-to]'));
    counters.forEach((el) => {
        el.textContent = (0).toFixed(Number(el.dataset.decimals ?? 0));
    });

    let cancelTyping = () => {};
    const tweens: gsap.core.Tween[] = [];
    let removeTick = () => {};

    const ctx = gsap.context(() => {
        gsap.from('[data-line]', {
            yPercent: 115,
            duration: 0.9,
            stagger: 0.1,
            ease: 'power4.out',
            scrollTrigger: { trigger: element, start: 'top 65%', once: true },
        });

        ScrollTrigger.create({
            trigger: element,
            start: 'top 55%',
            once: true,
            onEnter: () => {
                counters.forEach((el) => {
                    tweens.push(countUp(el, Number(el.dataset.countTo), Number(el.dataset.decimals ?? 0)));
                });
                const target = element.querySelector<HTMLElement>('[data-caption-target]');
                if (target) cancelTyping = typewrite(target, element.dataset.caption ?? '', 24);
            },
        });

        if (element.dataset.streaks === 'true' && !reduced()) {
            // Rows slide sideways with scroll position, alternating direction.
            gsap.utils.toArray<HTMLElement>('[data-streak]').forEach((row, i) => {
                const dir = i % 2 === 0 ? -1 : 1;
                gsap.fromTo(
                    row,
                    { xPercent: -28 * dir },
                    {
                        xPercent: 28 * dir,
                        ease: 'none',
                        scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: true },
                    },
                );
            });

            // Scroll speed drives a horizontal-only blur plus a lean on the headline.
            const blur = element.querySelector<SVGElement>('[data-blur]');
            const headline = element.querySelector<HTMLElement>('[data-headline]');
            let visible = false;
            let last = window.scrollY;
            let blurNow = 0;
            let leanNow = 0;
            ScrollTrigger.create({
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                onToggle: (self) => {
                    visible = self.isActive;
                },
            });
            const tick = () => {
                const y = window.scrollY;
                const delta = y - last;
                last = y;
                blurNow += (Math.min(Math.abs(delta) * 1.4, 48) - blurNow) * 0.14;
                leanNow += (Math.max(-14, Math.min(14, -delta * 0.5)) - leanNow) * 0.14;
                if (!visible) return;
                blur?.setAttribute('stdDeviation', `${blurNow.toFixed(2)} 0`);
                if (headline) headline.style.transform = `skewX(${leanNow.toFixed(2)}deg)`;
            };
            gsap.ticker.add(tick);
            removeTick = () => gsap.ticker.remove(tick);
        }
    }, element);

    return () => {
        removeTick();
        cancelTyping();
        tweens.forEach((tween) => tween.kill());
        ctx.revert();
    };
}
