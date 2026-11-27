import './style.css';

const SLIDES = [
    {
        tag: 'STAGE 01 // CONCAVE PROFILE',
        title: 'Progressive Lock-In Concave',
        desc: '11.5mm progressive concave geometry gives immediate foot lock during high-speed ollies and flip tricks.',
        stat: '11.5MM DEEP CONCAVE',
    },
    {
        tag: 'STAGE 02 // HOLLOW KINGPIN',
        title: 'Hollow Chromoly Kingpin Trucks',
        desc: '22% lighter mass with high-tensile impact toughness for crisp landings and responsive turns.',
        stat: '-22% WEIGHT REDUCTION',
    },
    {
        tag: 'STAGE 03 // URETHANE FORMULA',
        title: 'Dual-Density Flatspot-Proof Wheels',
        desc: 'Rigid inner core locks bearing alignment while a 99A outer shell glides fast over rough street and bowls.',
        stat: '54MM / 99A PRO SPEC',
    },
    {
        tag: 'STAGE 04 // TITANIUM HARDWARE',
        title: 'Grade-5 Titanium Mounting Bolts',
        desc: 'Corrosion-resistant precision hex bolts engineered to stay tight under heavy impact vibrations.',
        stat: 'TI-6AL-4V HARDWARE',
    },
];

export function Template() {
    return (
        <section
            id="sec-velocity"
            className="mkl-velocity-showcase mkl:relative mkl:h-[260vh]"
        >
            <svg className="mkl:sr-only" aria-hidden="true">
                <defs>
                    <filter id="mkl-horizontal-motion-blur">
                        <feGaussianBlur id="mkl-motion-blur-node" in="SourceGraphic" stdDeviation="0 0" />
                    </filter>
                </defs>
            </svg>

            <div className="mkl:sticky mkl:top-0 mkl:h-screen mkl:flex mkl:flex-col mkl:justify-center mkl:overflow-hidden mkl:px-6">
                <div className="mkl:max-w-7xl mkl:mx-auto mkl:w-full mkl:mb-10 mkl:flex mkl:items-center mkl:justify-between">
                    <div>
                        <p className="mkl:text-xs mkl:font-mono mkl:tracking-widest mkl:text-[#d4ff00]">
                            04 // KINETIC VELOCITY BLUR
                        </p>
                        <h2 className="mkl:text-3xl mkl:sm:text-5xl mkl:text-white mkl:mt-2">
                            Scroll Faster for Horizontal Blur
                        </h2>
                    </div>
                    <div className="mkl:hidden mkl:sm:flex mkl:items-center mkl:gap-2 mkl:text-xs mkl:font-mono mkl:text-zinc-400">
                        <span>SPEED METER:</span>
                        <span id="mkl-velocity-readout" className="mkl:text-[#d4ff00] mkl:w-16">
                            0 KM/H
                        </span>
                    </div>
                </div>

                <div
                    id="mkl-velocity-track"
                    className="mkl-velocity-track mkl:flex mkl:gap-8 mkl:max-w-7xl mkl:mx-auto mkl:w-full"
                    style={{ filter: 'url(#mkl-horizontal-motion-blur)' }}
                >
                    {SLIDES.map((slide, i) => (
                        <article
                            key={i}
                            className="mkl-velocity-card mkl:shrink-0 mkl:w-[85vw] mkl:md:w-[540px] mkl:p-8 mkl:sm:p-10 mkl:rounded-3xl mkl:bg-gradient-to-br mkl:from-zinc-900 mkl:to-zinc-950 mkl:border mkl:border-white/10 mkl:relative mkl:overflow-hidden"
                        >
                            {/* Hand-drawn style wave trace + baseline & ticks */}
                            <svg
                                viewBox="0 0 400 120"
                                className="mkl:w-full mkl:h-24 mkl:mb-6 mkl:opacity-85"
                                fill="none"
                            >
                                <line
                                    x1="10"
                                    y1="104"
                                    x2="390"
                                    y2="104"
                                    stroke="#ffffff"
                                    strokeOpacity="0.12"
                                    strokeDasharray="4 6"
                                />
                                <path
                                    d="M10 95 Q 130 15, 220 75 T 390 25"
                                    stroke="#d4ff00"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M10 100 Q 130 22, 220 82 T 390 32"
                                    stroke="#d4ff00"
                                    strokeOpacity="0.28"
                                    strokeWidth="1.2"
                                    strokeDasharray="5 5"
                                />
                                <circle cx={110 + i * 65} cy={55} r="8" fill="#d4ff00" />
                                <circle cx={110 + i * 65} cy={55} r="14" stroke="#d4ff00" strokeOpacity="0.4" strokeWidth="1.5" />
                            </svg>

                            <span className="mkl:text-xs mkl:font-mono mkl:text-[#d4ff00] mkl:tracking-wider">
                                {slide.tag}
                            </span>
                            <h3 className="mkl:text-2xl mkl:sm:text-3xl mkl:text-white mkl:mt-2">
                                {slide.title}
                            </h3>
                            <p className="mkl:mt-3 mkl:text-zinc-400 mkl:text-sm mkl:sm:text-base mkl:leading-relaxed">
                                {slide.desc}
                            </p>

                            <div className="mkl:mt-8 mkl:pt-4 mkl:border-t mkl:border-white/10 mkl:flex mkl:items-center mkl:justify-between mkl:text-xs mkl:font-mono">
                                <span className="mkl:text-zinc-500">TELEMETRY SPEC</span>
                                <span className="mkl:text-white mkl:font-bold">{slide.stat}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
