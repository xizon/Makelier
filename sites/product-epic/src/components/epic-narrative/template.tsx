export interface StatItem {
    value: number;
    unit: string;
}

export interface BlueprintLabels {
    dimWidth?: string;
    dimHeight?: string;
    lensSpec?: string;
    part1?: string;
    part2?: string;
    part3?: string;
    detailLabel?: string;
    titleBlock1?: string;
    titleBlock2?: string;
    titleBlock3?: string;
    figCaption?: string;
}

export interface ArenaAct {
    sub: string;
    title: string;
    footer: string;
}

export interface EpicNarrativeProps {
    id: string;
    chapterClass: 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch5' | 'ch6' | 'ch7';
    layout?: 'standard' | 'split-plate' | 'blueprint' | 'arena-dual';
    watermark?: string;
    kicker?: string;
    heading?: string;
    body?: string;
    stats?: StatItem[];
    captionNote?: string;
    blueprintLabels?: BlueprintLabels;
    arenaActs?: [ArenaAct, ArenaAct];
}

export function Template({
    id,
    chapterClass,
    layout = 'standard',
    watermark = '',
    kicker = '',
    heading = '',
    body = '',
    stats = [],
    captionNote = '',
    blueprintLabels = {},
    arenaActs,
}: EpicNarrativeProps) {
    if (layout === 'split-plate') {
        return (
            <section className={`chapter ${chapterClass}`} id={id}>
                {watermark && <span className="wm" data-wm>{watermark}</span>}
                <div className="ch-head">
                    {kicker && <p className="kicker"><i className="k-line"></i>{kicker}</p>}
                    {heading && <h2 data-split>{heading}</h2>}
                </div>
                <div className="plate" data-fade>
                    {body && <p className="body">{body}</p>}
                    {stats.length > 0 && (
                        <div className="stats">
                            {stats.map((st, idx) => (
                                <div className="stat" key={idx}>
                                    <span className="num" data-n={st.value}>0</span>
                                    <span className="unit">{st.unit}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        );
    }

    if (layout === 'blueprint') {
        return (
            <section className={`chapter ${chapterClass}`} id={id}>
                {watermark && <span className="wm" data-wm>{watermark}</span>}
                <div className="bp-head">
                    {kicker && <p className="kicker"><i className="k-line"></i>{kicker}</p>}
                    {heading && <h2 data-split>{heading}</h2>}
                </div>
                <div className="sticky">
                    <div className="bp-wrap">
                        <svg width="20" className="bp" viewBox="0 0 640 470">
                            <defs>
                                <filter id="wob" x="-5%" y="-5%" width="110%" height="110%">
                                    <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" seed="11" result="n" />
                                    <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" />
                                </filter>
                            </defs>
                            <g filter="url(#wob)">
                                <g className="g1">
                                    <rect className="t" pathLength="1" x="18" y="16" width="604" height="438" />
                                    <rect className="t" pathLength="1" x="26" y="24" width="588" height="422" />
                                    <rect className="t" pathLength="1" x="412" y="376" width="202" height="70" />
                                    <line className="t" pathLength="1" x1="412" y1="400" x2="614" y2="400" />
                                    <line className="t" pathLength="1" x1="412" y1="424" x2="614" y2="424" />
                                </g>
                                <g className="g2">
                                    <line className="d" pathLength="1" x1="40" y1="252" x2="600" y2="252" />
                                    <line className="d" pathLength="1" x1="225" y1="58" x2="225" y2="412" />
                                    <circle className="d" pathLength="1" cx="225" cy="252" r="86" />
                                    <circle className="d" pathLength="1" cx="225" cy="252" r="134" />
                                </g>
                                <g className="g3">
                                    <path className="s" pathLength="1" d="M118,214 C114,178 150,158 210,154 C272,150 316,168 328,196 C340,224 342,276 328,304 C314,330 266,346 210,344 C156,342 122,320 118,286 Z" />
                                    <path className="t" pathLength="1" d="M172,168 C176,118 286,116 292,164" />
                                    <path className="t" pathLength="1" d="M312,208 C400,192 416,304 314,322" />
                                    <path className="t" pathLength="1" d="M306,198 C404,182 424,314 310,334" />
                                    <path className="t" pathLength="1" d="M138,206 C120,234 120,272 138,298" />
                                </g>
                                <g className="g4">
                                    <ellipse className="s" pathLength="1" cx="162" cy="252" rx="26" ry="64" />
                                    <ellipse className="d" pathLength="1" cx="162" cy="252" rx="13" ry="44" />
                                    <circle className="t" pathLength="1" cx="268" cy="252" r="18" />
                                    <circle className="t" pathLength="1" cx="268" cy="252" r="8" />
                                    <circle className="s" pathLength="1" cx="520" cy="120" r="56" />
                                    <circle className="d" pathLength="1" cx="520" cy="120" r="20" />
                                    <path className="t" pathLength="1" d="M482,142 C496,96 546,94 558,142" />
                                    <line className="d" pathLength="1" x1="186" y1="204" x2="468" y2="108" />
                                </g>
                                <g className="g5">
                                    <line className="t" pathLength="1" x1="334" y1="242" x2="343" y2="251" />
                                    <line className="t" pathLength="1" x1="346" y1="245" x2="355" y2="254" />
                                    <line className="t" pathLength="1" x1="358" y1="248" x2="367" y2="257" />
                                    <line className="t" pathLength="1" x1="370" y1="251" x2="379" y2="260" />
                                    <line className="t" pathLength="1" x1="382" y1="254" x2="391" y2="263" />
                                    <line className="t" pathLength="1" x1="394" y1="257" x2="403" y2="266" />
                                    <line className="t" pathLength="1" x1="126" y1="234" x2="136" y2="244" />
                                    <line className="t" pathLength="1" x1="124" y1="250" x2="134" y2="260" />
                                    <line className="t" pathLength="1" x1="124" y1="266" x2="134" y2="276" />
                                    <line className="t" pathLength="1" x1="126" y1="282" x2="136" y2="292" />
                                </g>
                                <g className="g6">
                                    <line className="t" pathLength="1" x1="118" y1="104" x2="328" y2="104" />
                                    <line className="t" pathLength="1" x1="118" y1="98" x2="118" y2="110" />
                                    <line className="t" pathLength="1" x1="328" y1="98" x2="328" y2="110" />
                                    <line className="t" pathLength="1" x1="376" y1="154" x2="376" y2="344" />
                                    <line className="t" pathLength="1" x1="370" y1="154" x2="382" y2="154" />
                                    <line className="t" pathLength="1" x1="370" y1="344" x2="382" y2="344" />
                                </g>
                                <g className="g7">
                                    <line className="t" pathLength="1" x1="150" y1="208" x2="96" y2="152" />
                                    <line className="t" pathLength="1" x1="150" y1="300" x2="104" y2="392" />
                                    <line className="t" pathLength="1" x1="126" y1="292" x2="88" y2="352" />
                                    <line className="t" pathLength="1" x1="392" y1="258" x2="470" y2="352" />
                                    <text x="223" y="96" textAnchor="middle">{blueprintLabels.dimWidth || ''}</text>
                                    <text transform="rotate(-90 390 252)" x="390" y="252" textAnchor="middle">{blueprintLabels.dimHeight || ''}</text>
                                    <text x="38" y="140">{blueprintLabels.lensSpec || ''}</text>
                                    <text x="58" y="408">{blueprintLabels.part1 || ''}</text>
                                    <text x="34" y="370">{blueprintLabels.part2 || ''}</text>
                                    <text x="476" y="368">{blueprintLabels.part3 || ''}</text>
                                    <text x="520" y="198" textAnchor="middle">{blueprintLabels.detailLabel || ''}</text>
                                    <text x="424" y="392">{blueprintLabels.titleBlock1 || ''}</text>
                                    <text x="424" y="416">{blueprintLabels.titleBlock2 || ''}</text>
                                    <text x="424" y="438">{blueprintLabels.titleBlock3 || ''}</text>
                                    <text className="cap" x="40" y="446">{blueprintLabels.figCaption || ''}</text>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                {captionNote && <p className="bp-cap">{captionNote}</p>}
            </section>
        );
    }

    if (layout === 'arena-dual' && arenaActs) {
        return (
            <section className={`chapter ${chapterClass}`} id={id} >
                {watermark && <span className="wm" data-wm>{watermark}</span>}
                <div className="sticky">
                    <div id="t1zone">
                        <p className="mom-sub">{arenaActs[0].sub}</p>
                        <h2 className="mom-big">{arenaActs[0].title}</h2>
                        <p className="mom-s2">{arenaActs[0].footer}</p>
                    </div>
                    <div id="t2zone" style={{ display: 'none' }}>
                        <p className="mom-sub">{arenaActs[1].sub}</p>
                        <h2 className="mom-big">{arenaActs[1].title}</h2>
                        <p className="mom-s2">{arenaActs[1].footer}</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={`chapter ${chapterClass}`} id={id}>
            {watermark && <span className="wm" data-wm>{watermark}</span>}
            <div className="ch-copy">
                {kicker && <p className="kicker"><i className="k-line"></i>{kicker}</p>}
                {heading && <h2 data-split>{heading}</h2>}
                {body && <p className="body" data-fade>{body}</p>}
                {stats.length > 0 && (
                    <div className="stats" data-fade>
                        {stats.map((st, idx) => (
                            <div className="stat" key={idx}>
                                <span className="num" data-n={st.value}>0</span>
                                <span className="unit">{st.unit}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {captionNote && <p className="ch-note">{captionNote}</p>}
        </section>
    );
}
