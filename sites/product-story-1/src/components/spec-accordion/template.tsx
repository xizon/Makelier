import './style.css';

const ACCORDION_ITEMS = [
    {
        q: '01 / What is included in the complete pre-order setup?',
        a: 'Every KINETIC-01 Founders Edition ships as a ride-ready complete: 7-ply maple/carbon deck, 5.25" hollow chromoly trucks, ABEC-9 ceramic-shielded bearings, 54mm 99A wheels, and die-cut grip tape.',
    },
    {
        q: '02 / When do Batch 01 pre-orders ship, and can I switch deck widths?',
        a: 'Batch 01 units ship in order of reservation within 14 business days after pre-order close. You can switch between 8.0", 8.25", and 8.5" up to 48 hours before dispatch.',
    },
    {
        q: '03 / Does the carbon layer get brittle in cold weather?',
        a: 'No. Toughened aerospace epoxy carbon prepreg is impact-tested from -20C to 65C across 12,000 drop cycles, retaining over 60% more pop consistency than standard all-maple decks.',
    },
    {
        q: '04 / What does the deck warranty and replacement program cover?',
        a: 'Batch 01 riders receive 180-day replacement coverage against delamination or structural defects under normal skating, plus 50% off replacement decks for life.',
    },
];

export function Template() {
    return (
        <section
            id="sec-specs"
            className="mkl-spec-accordion mkl:py-28 mkl:px-6 mkl:max-w-4xl mkl:mx-auto"
        >
            <div className="mkl:mb-12">
                <p className="mkl:text-xs mkl:font-mono mkl:tracking-widest mkl:text-[#d4ff00]">
                    05 // SPECIFICATIONS & FAQ
                </p>
                <h2 className="mkl:text-3xl mkl:sm:text-5xl mkl:font-black mkl:text-white mkl:mt-2">
                    Technical Specs & Pre-Order FAQ
                </h2>
            </div>

            <div className="mkl:space-y-4">
                {ACCORDION_ITEMS.map((item, idx) => (
                    <div
                        key={idx}
                        data-accordion-item
                        className={`mkl-accordion-item mkl:rounded-2xl mkl:border mkl:border-white/10 mkl:bg-zinc-900/50 mkl:overflow-hidden mkl:transition-colors ${
                            idx === 0 ? 'is-open mkl:border-[#d4ff00]/40' : ''
                        }`}
                    >
                        <button
                            type="button"
                            data-accordion-trigger
                            aria-expanded={idx === 0 ? 'true' : 'false'}
                            className="mkl:w-full mkl:px-6 mkl:py-5 mkl:flex mkl:items-center mkl:justify-between mkl:gap-4 mkl:text-left mkl:cursor-pointer"
                        >
                            <span className="mkl:text-base mkl:sm:text-lg mkl:font-bold mkl:text-white">
                                {item.q}
                            </span>
                            <span className="mkl-accordion-icon mkl:w-7 mkl:h-7 mkl:rounded-full mkl:border mkl:border-white/20 mkl:flex mkl:items-center mkl:justify-center mkl:text-[#d4ff00] mkl:font-mono mkl:shrink-0">
                                +
                            </span>
                        </button>

                        <div className="mkl-accordion-panel">
                            <div className="mkl-accordion-inner mkl:px-6 mkl:pb-6 mkl:text-sm mkl:sm:text-base mkl:text-zinc-400 mkl:leading-relaxed">
                                {item.a}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
