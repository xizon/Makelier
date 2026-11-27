import './style.css';

const METRICS = [
    { target: 7, decimals: 0, suffix: '-PLY', label: 'Hard Rock Maple x Bidirectional Carbon Core', bar: '92%' },
    { target: 1180, decimals: 0, suffix: 'g', label: 'Ultra-Light Deck Weight', bar: '85%' },
    { target: 42.5, decimals: 1, suffix: '\u00b0', label: 'CNC Forged Truck Geometry Angle', bar: '78%' },
    { target: 99, decimals: 0, suffix: 'A', label: 'High-Rebound Flatspot-Resistant Urethane', bar: '96%' },
];

export function Template() {
    return (
        <section
            id="sec-metrics"
            className="mkl-metrics-counter mkl:relative mkl:py-28 mkl:px-6 mkl:max-w-7xl mkl:mx-auto"
        >
            <div className="mkl:flex mkl:flex-col mkl:md:flex-row mkl:md:items-end mkl:justify-between mkl:mb-16 mkl:gap-6">
                <div>
                    <p className="mkl:text-xs mkl:font-mono mkl:tracking-widest mkl:text-[#d4ff00] mkl:uppercase">
                        03 // ENGINEERED TELEMETRY
                    </p>
                    <h2 className="mkl:text-3xl mkl:sm:text-5xl mkl:font-black mkl:tracking-tight mkl:mt-2 mkl:text-white">
                        Tuned for Every Pop and Landing
                    </h2>
                </div>
                <p className="mkl:text-zinc-400 mkl:max-w-md mkl:text-sm mkl:leading-relaxed">
                    Hot-pressed carbon prepreg bonded with high-density maple plies boosts structural snap resistance by 38% without sacrificing boardfeel.
                </p>
            </div>

            <div className="mkl:grid mkl:grid-cols-1 mkl:sm:grid-cols-2 mkl:lg:grid-cols-4 mkl:gap-6">
                {METRICS.map((item, index) => (
                    <div
                        key={index}
                        className="mkl-metrics-card mkl:p-7 mkl:rounded-2xl mkl:bg-zinc-900/70 mkl:border mkl:border-white/10 mkl:hover:border-[#d4ff00]/50 mkl:transition-colors"
                    >
                        <div className="mkl:flex mkl:items-baseline mkl:gap-1 mkl:font-black mkl:text-4xl mkl:sm:text-5xl mkl:text-white mkl:tracking-tight">
                            <span
                                className="mkl-counter-num mkl:inline-block"
                                data-target={item.target}
                                data-decimals={item.decimals}
                            >
                                0
                            </span>
                            <span className="mkl:text-xl mkl:font-mono mkl:text-[#d4ff00]">
                                {item.suffix}
                            </span>
                        </div>

                        <p className="mkl:mt-4 mkl:text-sm mkl:text-zinc-400 mkl:leading-snug">
                            {item.label}
                        </p>

                        <div className="mkl:mt-6 mkl:w-full mkl:h-1 mkl:bg-white/10 mkl:rounded-full mkl:overflow-hidden">
                            <div
                                className="mkl-counter-bar mkl:h-full mkl:bg-[#d4ff00] mkl:origin-left"
                                data-width={item.bar}
                                style={{ width: '0%' }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
