export interface EpicNavOptions {
    solidThresholdPx?: number;
}

export function mount(
    element: HTMLElement | null,
    options: EpicNavOptions = {}
): (() => void) | void {
    if (element === null) return;

    const attrThreshold = element.dataset.solidThreshold ? Number(element.dataset.solidThreshold) : undefined;
    const solidThresholdPx = options.solidThresholdPx ?? attrThreshold ?? 60;
    const onScroll = () => {
        element.classList.toggle('is-solid', window.scrollY > solidThresholdPx);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', onScroll);
    };
}
