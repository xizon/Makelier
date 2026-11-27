import './style.css';

const CHAPTERS = [
    { id: 'sec-hero', label: '01 // Carve' },
    { id: 'sec-3d-viewer', label: '02 // 360 3D' },
    { id: 'sec-metrics', label: '03 // Telemetry' },
    { id: 'sec-velocity', label: '04 // Velocity' },
    { id: 'sec-specs', label: '05 // Specs' },
    { id: 'sec-preorder', label: '06 // Pre-Order' },
];

export function Template() {
    return (
        <header className="mkl-story-nav mkl:fixed mkl:top-0 mkl:left-0 mkl:right-0 mkl:z-50 mkl:backdrop-blur-md mkl:bg-black/70 mkl:border-b mkl:border-white/10">
            <div className="mkl:max-w-7xl mkl:mx-auto mkl:px-6 mkl:h-16 mkl:flex mkl:items-center mkl:justify-between mkl:gap-6">
                <a
                    href="#sec-hero"
                    data-nav-node="sec-hero"
                    className="mkl:flex mkl:items-center mkl:gap-2.5 mkl:font-black mkl:tracking-widest mkl:text-sm mkl:uppercase mkl:text-white"
                >
                    <span className="mkl:w-2.5 mkl:h-2.5 mkl:rounded-full mkl:bg-[#d4ff00] mkl:inline-block" />
                    Makelier
                </a>

                <nav className="mkl:hidden mkl:lg:flex mkl:items-center mkl:gap-7 mkl:relative">
                    {CHAPTERS.map((item, idx) => (
                        <button
                            key={item.id}
                            type="button"
                            data-nav-node={item.id}
                            data-index={idx}
                            className="mkl-story-nav__node mkl:text-xs mkl:font-mono mkl:tracking-wider mkl:text-zinc-400 mkl:hover:text-white mkl:transition-colors mkl:cursor-pointer mkl:py-1"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <button
                    type="button"
                    data-nav-node="sec-preorder"
                    className="mkl:px-4 mkl:py-1.5 mkl:rounded-full mkl:bg-[#d4ff00] mkl:text-black mkl:text-xs mkl:font-bold mkl:tracking-wider mkl:uppercase mkl:hover:brightness-110 mkl:transition mkl:cursor-pointer"
                >
                    Reserve Now $179
                </button>
            </div>

            <div className="mkl:w-full mkl:h-[2px] mkl:bg-white/10 mkl:relative mkl:overflow-hidden">
                <div
                    id="mkl-timeline-fill"
                    className="mkl-story-nav__fill mkl:h-full mkl:w-full mkl:bg-[#d4ff00] mkl:origin-left"
                    style={{ transform: 'scaleX(0)' }}
                />
            </div>
        </header>
    );
}
