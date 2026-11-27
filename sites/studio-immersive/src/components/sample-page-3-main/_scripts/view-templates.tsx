import type { ViewContent, ViewKey } from './data';

/**
 * Markup for each page's content.
 * The shell (template.tsx) puts exactly one of these inside <main>.
 * The router later reads `.mkl-view` out of the fetched HTML and swaps it in.
 *
 * All copy comes from `content`; nothing is written here. Elements the view
 * controllers look up (hero title, works track, contact title) are always
 * rendered, even when their text is empty.
 */

function HomeView({ hero }: Pick<ViewContent, 'hero'>) {
    return (
        <section className="mkl-view mkl-view--home" data-view="home">
            <div className="mkl-hero">
                <h1 className="mkl-hero__title" data-split>
                    {hero?.title ?? ''}
                </h1>
                <p className="mkl-hero__sub">{hero?.subtitle ?? ''}</p>
            </div>
        </section>
    );
}

function WorksView({ works = [] }: Pick<ViewContent, 'works'>) {
    return (
        <section className="mkl-view mkl-view--works" data-view="works">
            <div className="mkl-works">
                <div className="mkl-works__track">
                    {works.map((w, i) => (
                        <article className="mkl-work" data-ratio={w.ratio} data-motif={w.motif} key={`${w.title ?? 'work'}-${i}`}>
                            <div className="mkl-work__rise">
                                <div className="mkl-work__tilt">
                                    <div
                                        className="mkl-work__face"
                                        style={{
                                            background: `linear-gradient(${w.angle}deg, hsl(${w.h1} 64% 46%) 0%, hsl(${w.h2} 72% 16%) 100%)`,
                                        }}
                                    >
                                        {w.image ? (
                                            <img
                                                className="mkl-work__img"
                                                src={w.image}
                                                alt={w.title ?? ''}
                                                loading={i < 4 ? 'eager' : 'lazy'}
                                                decoding="async"
                                                draggable={false}
                                            />
                                        ) : (
                                            <span className="mkl-work__motif"></span>
                                        )}
                                        <span className="mkl-work__sheen"></span>
                                        <span className="mkl-work__edge"></span>
                                        {w.title ? <h2 className="mkl-work__title">{w.title}</h2> : null}
                                        {w.kind ? <p className="mkl-work__kind">{w.kind}</p> : null}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AboutView({ about }: Pick<ViewContent, 'about'>) {
    const lines = about?.lines ?? [];
    return (
        <section className="mkl-view mkl-view--about" data-view="about">
            <div className="mkl-about">
                {about?.title ? <h1 className="mkl-visually-hidden">{about.title}</h1> : null}
                {lines.map((line, i) => (
                    <p className="mkl-about__line" data-line key={`${i}-${line}`}>
                        {line}
                    </p>
                ))}
                <span className="mkl-about__cursor" aria-hidden="true"></span>
            </div>
        </section>
    );
}

function ContactView({ contact }: Pick<ViewContent, 'contact'>) {
    const links = contact?.links ?? [];
    const seal = contact?.seal ?? '';
    const gap = '\u00a0\u00a0\u00a0\u00a0\u00a0';
    const sealText = seal ? Array(3).fill(seal).join(gap) + gap : '';
    return (
        <section className="mkl-view mkl-view--contact" data-view="contact">
            <div className="mkl-contact">
                <h1 className="mkl-contact__title" data-words>
                    {contact?.title ?? ''}
                </h1>
                <ul className="mkl-contact__list">
                    {links.map((l, i) => (
                        <li className="mkl-contact__item" key={`${l.label}-${i}`}>
                            <a
                                className="mkl-contact__link"
                                href={l.href}
                                target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                                rel={l.href.startsWith('mailto:') ? undefined : 'noopener'}
                            >
                                <span className="mkl-contact__label">{l.label}</span>
                                {l.note ? <span className="mkl-contact__note">{l.note}</span> : null}
                                <svg className="mkl-contact__icon" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M6 18L18 6M9 6h9v9"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </li>
                    ))}
                </ul>
                <svg className="mkl-seal" viewBox="0 0 200 200" aria-hidden="true">
                    <defs>
                        <path id="mkl-seal-path" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
                    </defs>
                    {sealText ? (
                        <g className="mkl-seal__ring">
                            <text className="mkl-seal__text">
                                <textPath href="#mkl-seal-path" textLength="458">
                                    {sealText}
                                </textPath>
                            </text>
                        </g>
                    ) : null}
                    <g className="mkl-seal__star">
                        <path
                            d="M100 80v40M80 100h40M86 86l28 28M114 86L86 114"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                        />
                    </g>
                </svg>
            </div>
        </section>
    );
}

export function renderView(view: ViewKey, content: ViewContent = {}) {
    switch (view) {
        case 'works':
            return <WorksView works={content.works} />;
        case 'about':
            return <AboutView about={content.about} />;
        case 'contact':
            return <ContactView contact={content.contact} />;
        default:
            return <HomeView hero={content.hero} />;
    }
}
