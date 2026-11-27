export function mount(element: HTMLElement | null): (() => void) | void {
    if (!element) return;

    const sizeBtns = Array.from(element.querySelectorAll<HTMLElement>('[data-size-btn]'));
    const reserveBtn = element.querySelector<HTMLButtonElement>('#mkl-reserve-btn');
    const feedback = element.querySelector<HTMLElement>('#mkl-reserve-feedback');
    let selectedSize = '8.25"';

    const handleSizeSelect = (e: Event) => {
        const btn = e.currentTarget as HTMLElement;
        selectedSize = btn.dataset.sizeBtn || '8.25"';

        sizeBtns.forEach((b) => {
            const active = b === btn;
            b.classList.toggle('mkl:border-[#d4ff00]', active);
            b.classList.toggle('mkl:bg-[#d4ff00]', active);
            b.classList.toggle('mkl:text-black', active);
            b.classList.toggle('mkl:font-bold', active);
            b.classList.toggle('mkl:border-white/15', !active);
            b.classList.toggle('mkl:text-zinc-300', !active);
        });

        if (reserveBtn) {
            reserveBtn.textContent = `Reserve Deck (${selectedSize})`;
        }
    };

    const handleReserve = () => {
        if (feedback) {
            feedback.textContent = `✓ Reserved KINETIC-01 [${selectedSize}] Batch 01 slot`;
        }
    };

    sizeBtns.forEach((b) => b.addEventListener('click', handleSizeSelect));
    reserveBtn?.addEventListener('click', handleReserve);

    return () => {
        sizeBtns.forEach((b) => b.removeEventListener('click', handleSizeSelect));
        reserveBtn?.removeEventListener('click', handleReserve);
    };
}
