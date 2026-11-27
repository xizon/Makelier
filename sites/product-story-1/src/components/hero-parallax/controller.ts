export function mount(element: HTMLElement | null): (() => void) | void {
    if (!element) return;

    const typeEl = element.querySelector<HTMLElement>('#mkl-hero-typewriter');
    let phrases: string[] = [];
    if (typeEl?.dataset.phrases) {
        try {
            phrases = JSON.parse(typeEl.dataset.phrases);
        } catch {
            phrases = [typeEl.textContent || ''];
        }
    }

    let phraseIdx = 0;
    let charIdx = phrases[0]?.length || 0;
    let isDeleting = false;
    let typeTimer: number | undefined;

    const tickTypewriter = () => {
        if (!typeEl || phrases.length === 0) return;
        const current = phrases[phraseIdx];

        if (!isDeleting) {
            charIdx++;
            typeEl.textContent = current.slice(0, charIdx);
            if (charIdx >= current.length) {
                isDeleting = true;
                typeTimer = window.setTimeout(tickTypewriter, 2000);
                return;
            }
            typeTimer = window.setTimeout(tickTypewriter, 55);
        } else {
            charIdx--;
            typeEl.textContent = current.slice(0, charIdx);
            if (charIdx <= 0) {
                isDeleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
                typeTimer = window.setTimeout(tickTypewriter, 350);
                return;
            }
            typeTimer = window.setTimeout(tickTypewriter, 28);
        }
    };

    typeTimer = window.setTimeout(() => {
        isDeleting = true;
        tickTypewriter();
    }, 2200);

    const boardEl = element.querySelector<HTMLElement>('#mkl-parallax-board');
    const backMountain = element.querySelector<HTMLElement>('#mkl-mountain-back');
    const frontMountain = element.querySelector<HTMLElement>('#mkl-mountain-front');

    const handleParallax = () => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const scrolled = Math.max(0, -rect.top);
        if (boardEl) {
            boardEl.style.transform = `translate3d(0, ${scrolled * 0.28}px, 0) scale(${1 - scrolled * 0.00012})`;
        }
        if (backMountain) {
            backMountain.style.transform = `translate3d(0, ${-scrolled * 0.14}px, 0)`;
        }
        if (frontMountain) {
            frontMountain.style.transform = `translate3d(0, ${-scrolled * 0.26}px, 0)`;
        }
    };

    window.addEventListener('scroll', handleParallax, { passive: true });
    handleParallax();

    return () => {
        if (typeTimer) clearTimeout(typeTimer);
        window.removeEventListener('scroll', handleParallax);
    };
}
