export function mount(element: HTMLElement | null): (() => void) | void {
    if (!element) return;

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isTicking = false;

    const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const startLoop = () => {
        if (isTicking) return;
        isTicking = true;

        const step = () => {
            const diff = targetY - currentY;
            if (Math.abs(diff) < 0.4) {
                currentY = targetY;
                window.scrollTo(0, currentY);
                isTicking = false;
                return;
            }
            currentY += diff * 0.085;
            window.scrollTo(0, currentY);
            requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    const onWheel = (e: WheelEvent) => {
        if (e.ctrlKey) return;
        e.preventDefault();
        targetY = Math.max(0, Math.min(maxScroll(), targetY + e.deltaY));
        startLoop();
    };

    const onJumpTo = (e: Event) => {
        const custom = e as CustomEvent<{ top: number }>;
        targetY = Math.max(0, Math.min(maxScroll(), custom.detail.top));
        startLoop();
    };

    const onNativeScroll = () => {
        if (!isTicking) {
            currentY = window.scrollY;
            targetY = window.scrollY;
        }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('mkl:smooth-scroll-to', onJumpTo);
    window.addEventListener('scroll', onNativeScroll, { passive: true });

    return () => {
        window.removeEventListener('wheel', onWheel);
        window.removeEventListener('mkl:smooth-scroll-to', onJumpTo);
        window.removeEventListener('scroll', onNativeScroll);
    };
}
