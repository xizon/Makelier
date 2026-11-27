export function mount(element: HTMLElement | null): (() => void) | void {
    if (element === null) return;

    const items = Array.from(element.querySelectorAll<HTMLElement>('[data-acc-item]'));

    const setOpen = (item: HTMLElement, open: boolean) => {
        item.toggleAttribute('data-open', open);
        item.querySelector('[data-acc-trigger]')?.setAttribute('aria-expanded', String(open));
    };

    const onClick = (event: Event) => {
        const item = (event.currentTarget as HTMLElement).closest<HTMLElement>('[data-acc-item]');
        if (!item) return;
        const willOpen = !item.hasAttribute('data-open');
        items.forEach((other) => setOpen(other, false));
        setOpen(item, willOpen);
    };

    const triggers = items.map((item) => item.querySelector<HTMLElement>('[data-acc-trigger]'));
    triggers.forEach((trigger) => trigger?.addEventListener('click', onClick));

    return () => triggers.forEach((trigger) => trigger?.removeEventListener('click', onClick));
}
