import { gsap } from 'gsap';

export function mount(element: HTMLElement | null): (() => void) | void {
    if (!element) return;

    const counters = Array.from(element.querySelectorAll<HTMLElement>('.mkl-counter-num'));
    const bars = Array.from(element.querySelectorAll<HTMLElement>('.mkl-counter-bar'));
    let triggered = false;

    const runAnimation = () => {
        if (triggered) return;
        triggered = true;

        counters.forEach((el, idx) => {
            const target = parseFloat(el.dataset.target || '0');
            const decimals = parseInt(el.dataset.decimals || '0', 10);
            const state = { val: 0 };

            gsap.fromTo(
                el,
                { scale: 0.65, y: 14, opacity: 0.2 },
                {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    duration: 0.75,
                    delay: idx * 0.1,
                    ease: 'back.out(2.2)',
                }
            );

            gsap.to(state, {
                val: target,
                duration: 1.5,
                delay: idx * 0.1,
                ease: 'power3.out',
                onUpdate: () => {
                    el.textContent =
                        decimals > 0
                            ? state.val.toFixed(decimals)
                            : Math.round(state.val).toLocaleString();
                },
            });
        });

        bars.forEach((bar, idx) => {
            const targetWidth = bar.dataset.width || '100%';
            gsap.to(bar, {
                width: targetWidth,
                duration: 1.3,
                delay: 0.15 + idx * 0.1,
                ease: 'expo.out',
            });
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                runAnimation();
                observer.disconnect();
            }
        },
        { threshold: 0.28 }
    );

    observer.observe(element);

    return () => {
        observer.disconnect();
        gsap.killTweensOf(counters);
        gsap.killTweensOf(bars);
    };
}
