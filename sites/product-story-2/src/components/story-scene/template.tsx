import './style.css';

type Stat = { value: number; decimals?: number; unit?: string; label: string };

type Props = {
    id: string;
    kicker: string;
    lines: string[];
    align?: 'left' | 'right';
    tone?: 'ink' | 'hot' | 'acid';
    stats?: Stat[];
    caption?: string;
    streaks?: boolean;
};

const STREAKS = ['PUSH PUSH PUSH PUSH', 'KICK KICK KICK KICK', 'SLIDE SLIDE SLIDE', 'GRIND GRIND GRIND'];

export function Template({ id, kicker, lines, align = 'left', tone = 'ink', stats = [], caption = '', streaks = false }: Props) {
    return (
        <section
            id={id}
            className={`mkl-story-scene mkl-story-scene--${align} mkl-story-scene--${tone} mkl:relative mkl:flex mkl:items-center mkl:overflow-hidden`}
            data-caption={caption}
            data-streaks={streaks ? 'true' : 'false'}
        >
            {streaks ? (
                <>
                    <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
                        <filter id={`${id}-blur`} x="-30%" y="-10%" width="160%" height="120%">
                            <feGaussianBlur data-blur stdDeviation="0 0" />
                        </filter>
                    </svg>
                    <div className="mkl-story-scene__field" data-field style={{ filter: `url(#${id}-blur)` }}>
                        {STREAKS.map((text) => (
                            <div className="mkl-story-scene__streak" data-streak>{text}</div>
                        ))}
                    </div>
                </>
            ) : null}
            <div className="mkl-story-scene__wrap mkl:relative mkl:z-10 mkl:mx-auto mkl:w-full mkl:max-w-400 mkl:px-[clamp(20px,6vw,96px)]">
            <div className="mkl-story-scene__inner">
                <p className="mkl-story-scene__kicker">{kicker}</p>
                <h2 className="mkl-story-scene__headline" data-headline>
                    {lines.map((line) => (
                        <span className="mkl-story-scene__mask">
                            <span data-line>{line}</span>
                        </span>
                    ))}
                </h2>
                {stats.length > 0 ? (
                    <div className="mkl-story-scene__stats">
                        {stats.map((stat) => (
                            <div className="mkl-story-scene__stat">
                                <b data-count-to={stat.value} data-decimals={stat.decimals ?? 0}>{stat.value}</b>
                                <span>{stat.unit ?? ''}</span>
                                <small>{stat.label}</small>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
            </div>
            <p className="mkl-story-scene__caption" data-caption-target />
        </section>
    );
}
