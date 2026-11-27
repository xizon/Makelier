import './style.css';

type Props = {
    id?: string;
    kicker?: string;
    title?: string;
    tagline?: string;
    caption?: string;
    image?: string;
};

// Blocky skyline path from a seeded generator (build time, deterministic).
function skyline(seed: number, base: number, amp: number): string {
    let s = seed;
    let x = 0;
    let d = `M0 220 L0 ${base}`;
    const rnd = () => {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
    };
    while (x < 1600) {
        const w = 28 + rnd() * 72;
        const h = Math.round(base - rnd() * amp);
        d += ` L${Math.round(x)} ${h} L${Math.round(x + w)} ${h}`;
        x += w;
    }
    return `${d} L1600 220 Z`;
}

export function Template({
    id = '',
    kicker = '',
    title = 'Title',
    tagline = '',
    caption = '',
    image = '',
}: Props) {
    return (
        <section id={id} className="mkl-hero-skyline mkl:relative mkl:overflow-hidden" data-caption={caption}>
            <div className="mkl-hero-skyline__sky" />
            <svg className="mkl-hero-skyline__layer mkl-hero-skyline__layer--far" data-layer="far" viewBox="0 0 1600 220" preserveAspectRatio="none">
                <path d={skyline(7, 120, 90)} />
            </svg>
            <div className="mkl-hero-skyline__board" data-layer="board">
                {image !== '' ? (
                    <img src={image} alt="CRATE Block 8.5 deck" />
                ) : (
                    <svg viewBox="0 0 600 170" role="img">
                        <path className="mkl-hero-skyline__deck" d="M14 44 Q14 30 40 34 L150 54 Q300 66 450 54 L560 34 Q586 30 586 44 Q586 60 560 60 L450 76 Q300 88 150 76 L40 60 Q14 60 14 44Z" />
                        <path className="mkl-hero-skyline__stripe" d="M60 52 Q300 72 540 52" />
                        <rect className="mkl-hero-skyline__truck" x="130" y="84" width="60" height="12" rx="3" />
                        <rect className="mkl-hero-skyline__truck" x="410" y="84" width="60" height="12" rx="3" />
                        <circle className="mkl-hero-skyline__wheel" cx="140" cy="118" r="26" />
                        <circle className="mkl-hero-skyline__wheel" cx="460" cy="118" r="26" />
                    </svg>
                )}
            </div>
            <svg className="mkl-hero-skyline__layer mkl-hero-skyline__layer--near" data-layer="near" viewBox="0 0 1600 220" preserveAspectRatio="none">
                <path d={skyline(23, 90, 80)} />
            </svg>
            <div className="mkl-hero-skyline__stage mkl:absolute mkl:inset-0 mkl:mx-auto mkl:max-w-400">
            <div className="mkl-hero-skyline__copy" data-layer="title">
                <p className="mkl-hero-skyline__kicker" data-hero-in>{kicker}</p>
                <h1 className="mkl-hero-skyline__title" data-hero-in>{title}</h1>
                <p className="mkl-hero-skyline__tagline" data-hero-in>{tagline}</p>
            </div>
            <span className="mkl-hero-skyline__badge" data-hero-in>Preorder open</span>
            <p className="mkl-hero-skyline__scroll">Scroll</p>
            </div>
            <p className="mkl-hero-skyline__caption" data-caption-target />
        </section>
    );
}
