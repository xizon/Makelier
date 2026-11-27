export interface SpecItem {
    key: string;
    value: string;
}

export interface EpicFinaleProps {
    id?: string;
    specsId?: string;
    finisTitle?: string;
    finisSubtitle?: string;
    frescoImageUrl?: string;
    kicker?: string;
    heading?: string;
    price?: string;
    priceNote?: string;
    primaryCtaText?: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    specs?: SpecItem[];
    approvalNote?: string;
    footerLatin?: string;
    footerTagline?: string;
    footerCopyright?: any;
}

export function Template({
    id = 'ch8',
    specsId = 'specs',
    finisTitle = '',
    finisSubtitle = '',
    frescoImageUrl = '',
    kicker = '',
    heading = '',
    price = '',
    priceNote = '',
    primaryCtaText = '',
    secondaryCtaText = '',
    secondaryCtaHref = '#specs',
    specs = [],
    approvalNote = '',
    footerLatin = '',
    footerTagline = '',
    footerCopyright = '',
}: EpicFinaleProps) {
    return (
        <section className="chapter ch8" id={id}>
            <div className="finis-zone">
                <div className="sticky">
                    {finisTitle && <h2 className="finis-big" id="finisBig">{finisTitle}</h2>}
                    {finisSubtitle && <p className="finis-sub" id="finisSub">{finisSubtitle}</p>}
                </div>
            </div>

            <div className="fin-content">
                <div
                    className="finale-fresco"
                    style={frescoImageUrl ? { backgroundImage: `url('${frescoImageUrl}')` } : undefined}
                ></div>
                <div className="inner">
                    {kicker && <p className="kicker"><i className="k-line"></i>{kicker}</p>}
                    {heading && <h2 data-split>{heading}</h2>}

                    {(price || priceNote) && (
                        <div className="price-row" data-fade>
                            {price && <span className="price">{price}</span>}
                            {priceNote && <span className="price-note">{priceNote}</span>}
                        </div>
                    )}

                    {(primaryCtaText || secondaryCtaText) && (
                        <div className="cta-row" data-fade>
                            {primaryCtaText && (
                                <button className="btn" id="reserveBtn2">{primaryCtaText}</button>
                            )}
                            {secondaryCtaText && (
                                <a className="btn ghost" data-scroll href={secondaryCtaHref}>
                                    {secondaryCtaText}
                                </a>
                            )}
                        </div>
                    )}

                    {specs.length > 0 && (
                        <div className="specs" id={specsId} data-fade>
                            {specs.map((item, idx) => (
                                <div className="spec" key={idx}>
                                    <span className="s-k">{item.key}</span>
                                    <span className="s-v">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {approvalNote && <p className="docs-cap">{approvalNote}</p>}

                    <footer>
                        {footerLatin && <p className="f-lat">{footerLatin}</p>}
                        {footerTagline && <p className="f-cn">{footerTagline}</p>}
                        {footerCopyright && <p className="f-tiny">{footerCopyright}</p>}
                    </footer>
                </div>
            </div>
        </section>
    );
}
