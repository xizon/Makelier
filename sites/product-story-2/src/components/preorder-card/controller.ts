export function mount(element: HTMLElement | null): (() => void) | void {
    if (element === null) return;

    const button = element.querySelector<HTMLButtonElement>('[data-hold]');
    if (!button) return;

    // Click toggles the held state; CSS swaps the label and shows the note.
    const onClick = () => {
        const held = !element.hasAttribute('data-held');
        element.toggleAttribute('data-held', held);
        button.setAttribute('aria-pressed', String(held));
    };
    button.addEventListener('click', onClick);

    return () => button.removeEventListener('click', onClick);
}
