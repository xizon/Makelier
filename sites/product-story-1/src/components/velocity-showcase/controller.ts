export function mount(element: HTMLElement | null): (() => void) | void {
    if (!element) return;

    const track = element.querySelector<HTMLElement>('#mkl-velocity-track');
    const blurNode = element.querySelector<SVGFEGaussianBlurElement>('#mkl-motion-blur-node');
    const readout = element.querySelector<HTMLElement>('#mkl-velocity-readout');

    let lastScrollY = window.scrollY;
    let smoothVelocity = 0;
    let rafId = 0;

    const update = () => {
        const rect = element.getBoundingClientRect();
        const scrollable = element.offsetHeight - window.innerHeight;
        const progress =
            scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;

        const currentY = window.scrollY;
        const rawDelta = currentY - lastScrollY;
        lastScrollY = currentY;
        smoothVelocity += (rawDelta - smoothVelocity) * 0.18;

        const absVel = Math.abs(smoothVelocity);

        if (track) {
            const maxShift = Math.max(0, track.scrollWidth - track.clientWidth);
            const translateX = -progress * maxShift;
            const skew = Math.max(-5, Math.min(5, -smoothVelocity * 0.08));
            track.style.transform = `translate3d(${translateX}px, 0, 0) skewX(${skew.toFixed(2)}deg)`;
        }

        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (blurNode) {
            const blurX = inView ? Math.min(18, absVel * 0.28) : 0;
            blurNode.setAttribute('stdDeviation', `${blurX.toFixed(2)} 0`);
        }

        if (readout && inView) {
            const kmh = Math.min(68, Math.round(absVel * 0.85));
            readout.textContent = `${kmh} KM/H`;
        }

        rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);

    return () => {
        cancelAnimationFrame(rafId);
    };
}
