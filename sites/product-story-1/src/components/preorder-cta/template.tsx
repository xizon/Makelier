import './style.css';

export function Template() {
    return (
        <section
            id="sec-preorder"
            className="mkl-preorder-cta mkl:py-28 mkl:px-6 mkl:max-w-5xl mkl:mx-auto"
        >
            <div className="mkl:rounded-3xl mkl:p-8 mkl:sm:p-14 mkl:bg-gradient-to-br mkl:from-zinc-900 mkl:via-zinc-950 mkl:to-black mkl:border mkl:border-[#d4ff00]/30 mkl:relative mkl:overflow-hidden">
                <div className="mkl:flex mkl:flex-col mkl:lg:flex-row mkl:lg:items-center mkl:justify-between mkl:gap-10">
                    <div>
                        <span className="mkl:inline-block mkl:px-3 mkl:py-1 mkl:rounded-md mkl:bg-[#d4ff00]/15 mkl:text-[#d4ff00] mkl:text-xs mkl:font-mono">
                            BATCH 01 // 74 OF 500 REMAINING
                        </span>
                        <h2 className="mkl:text-3xl mkl:sm:text-5xl mkl:font-black mkl:text-white mkl:mt-4">
                            KINETIC-01 Pre-Order
                        </h2>
                        <p className="mkl:text-zinc-400 mkl:mt-3 mkl:max-w-md mkl:text-sm mkl:leading-relaxed">
                            Pick your deck width to lock in a laser-etched serial number and lifetime half-price deck replacements.
                        </p>

                        <div className="mkl:mt-6 mkl:flex mkl:items-center mkl:gap-3">
                            {['8.0"', '8.25"', '8.5"'].map((size, idx) => (
                                <button
                                    key={size}
                                    type="button"
                                    data-size-btn={size}
                                    className={`mkl-size-btn mkl:px-4 mkl:py-2 mkl:rounded-xl mkl:font-mono mkl:text-sm mkl:border mkl:cursor-pointer mkl:transition ${
                                        idx === 1
                                            ? 'is-selected mkl:border-[#d4ff00] mkl:bg-[#d4ff00] mkl:text-black mkl:font-bold'
                                            : 'mkl:border-white/15 mkl:text-zinc-300 mkl:hover:border-white/40'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mkl:flex mkl:flex-col mkl:items-start mkl:lg:items-end mkl:shrink-0">
                        <div className="mkl:text-zinc-500 mkl:text-sm mkl:line-through mkl:font-mono">
                            Retail $219
                        </div>
                        <div className="mkl:text-5xl mkl:font-black mkl:text-white mkl:tracking-tight mkl:mt-1">
                            $179
                        </div>
                        <button
                            type="button"
                            id="mkl-reserve-btn"
                            className="mkl:mt-6 mkl:px-8 mkl:py-4 mkl:rounded-2xl mkl:bg-[#d4ff00] mkl:text-black mkl:font-black mkl:tracking-wider mkl:text-sm mkl:uppercase mkl:hover:brightness-110 mkl:active:scale-95 mkl:transition mkl:cursor-pointer"
                        >
                            Reserve Deck (8.25")
                        </button>
                        <p id="mkl-reserve-feedback" className="mkl:mt-3 mkl:text-xs mkl:font-mono mkl:text-[#d4ff00] mkl:h-4" />
                    </div>
                </div>
            </div>
        </section>
    );
}
