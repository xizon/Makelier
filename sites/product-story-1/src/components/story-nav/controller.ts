export function mount(element: HTMLElement | null): (() => void) | void {
    if (!element) return;

    const fillBar = element.querySelector<HTMLElement>('#mkl-timeline-fill');
    const nodes = Array.from(element.querySelectorAll<HTMLElement>('[data-nav-node]'));

    const updateTimeline = () => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;

        if (fillBar) {
            fillBar.style.transform = `scaleX(${progress})`;
        }

        const viewportMid = window.scrollY + window.innerHeight * 0.45;
        let activeId = 'sec-hero';

        nodes.forEach((node) => {
            const targetId = node.dataset.navNode;
            if (!targetId) return;
            const section = document.getElementById(targetId);
            if (section && section.offsetTop <= viewportMid) {
                activeId = targetId;
            }
        });

        nodes.forEach((node) => {
            const isActive = node.dataset.navNode === activeId;
            node.classList.toggle('mkl:text-[#d4ff00]', isActive);
            node.classList.toggle('mkl:text-zinc-400', !isActive);
        });
    };

    const handleNodeClick = (e: Event) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLElement;
        const id = target.dataset.navNode;
        if (!id) return;
        const el = document.getElementById(id);
        if (el) {
            window.dispatchEvent(
                new CustomEvent('mkl:smooth-scroll-to', { detail: { top: el.offsetTop } })
            );
        }
    };

    nodes.forEach((n) => n.addEventListener('click', handleNodeClick));
    window.addEventListener('scroll', updateTimeline, { passive: true });
    updateTimeline();

    return () => {
        nodes.forEach((n) => n.removeEventListener('click', handleNodeClick));
        window.removeEventListener('scroll', updateTimeline);
    };
}
