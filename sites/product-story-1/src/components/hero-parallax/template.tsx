import './style.css';

export function Template() {
    return (
        <section
            id="sec-hero"
            className="mkl-hero-parallax mkl:relative mkl:min-h-[115vh] mkl:pt-28 mkl:pb-24 mkl:flex mkl:flex-col mkl:justify-between mkl:overflow-hidden mkl:select-none"
        >
            <div className="mkl:absolute mkl:inset-0 mkl:pointer-events-none">
                <div className="mkl:absolute mkl:top-1/4 mkl:left-1/2 mkl:-translate-x-1/2 mkl:w-[680px] mkl:h-[680px] mkl:rounded-full mkl:bg-[#d4ff00]/10 mkl:blur-[140px]" />
            </div>

            <div className="mkl:relative mkl:z-20 mkl:max-w-5xl mkl:mx-auto mkl:px-6 mkl:text-center">
                <div className="mkl:inline-flex mkl:items-center mkl:gap-2 mkl:px-3.5 mkl:py-1 mkl:rounded-full mkl:border mkl:border-white/15 mkl:bg-white/5 mkl:text-xs mkl:font-mono mkl:text-[#d4ff00] mkl:mb-6">
                    <span>FOUNDERS EDITION // LIMITED BATCH OF 500 NUMBERED DECKS</span>
                </div>

                <h1 className="mkl:text-5xl mkl:sm:text-7xl mkl:md:text-8xl mkl:tracking-tight mkl:leading-[0.98] mkl:text-white">
                    CARVE THE
                    <br />
                    <span className="mkl:text-transparent mkl:bg-clip-text mkl:bg-gradient-to-r mkl:from-white mkl:via-[#d4ff00] mkl:to-emerald-300">
                        CONCRETE WAVE
                    </span>
                </h1>

                <div className="mkl:mt-6 mkl:h-8 mkl:flex mkl:items-center mkl:justify-center mkl:text-base mkl:sm:text-xl mkl:font-mono mkl:text-zinc-300">
                    <span className="mkl:text-[#d4ff00] mkl:mr-2">&gt;</span>
                    <span
                        id="mkl-hero-typewriter"
                        data-phrases='["7-Ply North American Hard Rock Maple x Bidirectional Carbon","Instant pop and zero lag built for high-drop street and transition","Save $40 on Batch 01 pre-orders with custom titanium truck bolts"]'
                    >
                        7-Ply North American Hard Rock Maple x Bidirectional Carbon
                    </span>
                    <span className="mkl-type-cursor" aria-hidden="true" />
                </div>
            </div>

            <div
                id="mkl-parallax-board"
                className="mkl-hero-parallax__board mkl:relative mkl:z-10 mkl:max-w-4xl mkl:w-full mkl:mx-auto mkl:px-6 mkl:my-6 mkl:pointer-events-none"
            >
                <svg
                    viewBox="0 0 920 340"
                    className="mkl:w-full mkl:h-auto mkl:drop-shadow-[0_35px_55px_rgba(0,0,0,0.85)]"
                    fill="none"
                >
                    <defs>
                        <linearGradient id="deckGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e1e24" />
                            <stop offset="45%" stopColor="#121216" />
                            <stop offset="100%" stopColor="#26262f" />
                        </linearGradient>
                        <linearGradient id="neonStripe" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#d4ff00" />
                            <stop offset="60%" stopColor="#9eff00" />
                            <stop offset="100%" stopColor="#00ffa3" />
                        </linearGradient>
                    </defs>

                    <g transform="rotate(-9 460 170)">
                        {/* Deck main chassis + inner ply lamination line */}
                        <rect
                            x="90"
                            y="95"
                            width="740"
                            height="150"
                            rx="75"
                            fill="url(#deckGrad)"
                            stroke="#3f3f46"
                            strokeWidth="3"
                        />
                        <rect
                            x="98"
                            y="102"
                            width="724"
                            height="136"
                            rx="68"
                            stroke="#d4ff00"
                            strokeOpacity="0.22"
                            strokeWidth="1.2"
                            strokeDasharray="6 6"
                        />

                        {/* Carbon weave diagonal stripes */}
                        <path
                            d="M170 97 L260 243 M210 97 L300 243 M610 97 L700 243 M650 97 L740 243"
                            stroke="url(#neonStripe)"
                            strokeWidth="6"
                            strokeLinecap="round"
                        />
                        <path
                            d="M188 97 L278 243 M628 97 L718 243"
                            stroke="#ffffff"
                            strokeOpacity="0.16"
                            strokeWidth="1.5"
                        />

                        {/* Kinetic wave flow curve */}
                        <path
                            d="M150 170 C280 120, 390 220, 520 170 C620 130, 700 185, 770 170"
                            stroke="#d4ff00"
                            strokeWidth="4"
                            strokeDasharray="12 8"
                        />

                        {/* Hand-drawn / marker style model badge */}
                        <text
                            x="460"
                            y="179"
                            textAnchor="middle"
                            fill="#ffffff"
                            fontSize="30"
                            letterSpacing="6"
                            style={{ fontFamily: 'var(--mkl-font-display)' }}
                        >
                            KINETIC // 01
                        </text>

                        {/* Mounting bolt pattern (front & rear truck holes) */}
                        <circle cx="205" cy="142" r="4" fill="#d4ff00" />
                        <circle cx="205" cy="198" r="4" fill="#d4ff00" />
                        <circle cx="255" cy="142" r="4" fill="#d4ff00" />
                        <circle cx="255" cy="198" r="4" fill="#d4ff00" />
                        <circle cx="665" cy="142" r="4" fill="#d4ff00" />
                        <circle cx="665" cy="198" r="4" fill="#d4ff00" />
                        <circle cx="715" cy="142" r="4" fill="#d4ff00" />
                        <circle cx="715" cy="198" r="4" fill="#d4ff00" />

                        {/* Trucks, bushings, axles & urethane wheels */}
                        <rect x="215" y="74" width="38" height="22" rx="6" fill="#d4ff00" />
                        <rect x="215" y="244" width="38" height="22" rx="6" fill="#d4ff00" />
                        <rect x="667" y="74" width="38" height="22" rx="6" fill="#d4ff00" />
                        <rect x="667" y="244" width="38" height="22" rx="6" fill="#d4ff00" />
                        <circle cx="234" cy="170" r="10" fill="#27272a" stroke="#d4ff00" strokeWidth="2" />
                        <circle cx="686" cy="170" r="10" fill="#27272a" stroke="#d4ff00" strokeWidth="2" />
                        <rect x="226" y="92" width="16" height="156" rx="4" fill="#71717a" />
                        <rect x="678" y="92" width="16" height="156" rx="4" fill="#71717a" />
                    </g>
                </svg>
            </div>

            <div className="mkl:absolute mkl:inset-x-0 mkl:bottom-0 mkl:z-20 mkl:pointer-events-none">
                <svg
                    id="mkl-mountain-back"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="mkl-hero-parallax__mountain-back mkl:w-full mkl:h-56 mkl:sm:h-72 mkl:block"
                >
                    <path
                        fill="#141419"
                        d="M0,224 C240,90 420,280 720,160 C1020,40 1220,210 1440,110 L1440,320 L0,320 Z"
                    />
                    <path
                        fill="none"
                        stroke="#d4ff00"
                        strokeOpacity="0.16"
                        strokeWidth="1.5"
                        strokeDasharray="8 10"
                        d="M0,236 C240,104 420,292 720,174 C1020,54 1220,224 1440,124"
                    />
                </svg>
                <svg
                    id="mkl-mountain-front"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="mkl-hero-parallax__mountain-front mkl:w-full mkl:h-48 mkl:sm:h-64 mkl:-mt-36 mkl:block"
                >
                    <path
                        fill="#0a0a0c"
                        stroke="#27272a"
                        strokeWidth="2"
                        d="M0,140 C320,300 540,60 880,190 C1140,290 1310,120 1440,170 L1440,320 L0,320 Z"
                    />
                </svg>
            </div>
        </section>
    );
}
