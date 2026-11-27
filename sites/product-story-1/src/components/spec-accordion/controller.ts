export function mount(element: HTMLElement | null): (() => void) | void {
    if (!element) return;

    const items = Array.from(element.querySelectorAll<HTMLElement>('[data-accordion-item]'));

    const handleToggle = (e: Event) => {
        const trigger = e.currentTarget as HTMLElement;
        const currentItem = trigger.closest<HTMLElement>('[data-accordion-item]');
        if (!currentItem) return;

        const isAlreadyOpen = currentItem.classList.contains('is-open');

        items.forEach((item) => {
            item.classList.remove('is-open', 'mkl:border-[#d4ff00]/40');
            const btn = item.querySelector('[data-accordion-trigger]');
            btn?.setAttribute('aria-expanded', 'false');
        });

        if (!isAlreadyOpen) {
            currentItem.classList.add('is-open', 'mkl:border-[#d4ff00]/40');
            trigger.setAttribute('aria-expanded', 'true');
        }
    };

    const triggers = Array.from(element.querySelectorAll<HTMLElement>('[data-accordion-trigger]'));
    triggers.forEach((btn) => btn.addEventListener('click', handleToggle));

    return () => {
        triggers.forEach((btn) => btn.removeEventListener('click', handleToggle));
    };
}
