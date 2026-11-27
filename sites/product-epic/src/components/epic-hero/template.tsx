export interface EpicHeroProps {
    id?: string;
    latinMotto?: string;
    titlePrimary?: string;
    titleSecondary?: string;
    subtitle?: string;
    specLine?: string;
    scrollHintText?: string;
}

export function Template({
    id = 'top',
    latinMotto = '',
    titlePrimary = '',
    titleSecondary = '',
    subtitle = '',
    specLine = '',
    scrollHintText = '',
}: EpicHeroProps) {
    return (
        <section className="hero" id={id}>
            {latinMotto && <p className="latin">{latinMotto}</p>}
            <h1 className="title">
                {titlePrimary && (
                    <span className="t1" data-split>
                        {titlePrimary}
                    </span>
                )}
                {titleSecondary && (
                    <span className="t2" data-split>
                        {titleSecondary}
                    </span>
                )}
            </h1>
            <div className="hero-foot">
                <svg width="20" className="sep" viewBox="0 0 220 10">
                    <line x1="0" y1="5" x2="94" y2="5" />
                    <path d="M110 0 L115 5 L110 10 L105 5 Z" />
                    <line x1="126" y1="5" x2="220" y2="5" />
                </svg>
                {subtitle && <p className="hero-sub">{subtitle}</p>}
                {specLine && <p className="hero-spec">{specLine}</p>}
            </div>
            {scrollHintText && (
                <div className="scroll-hint">
                    <span className="hint-line"></span>
                    <span>{scrollHintText}</span>
                </div>
            )}
        </section>
    );
}
