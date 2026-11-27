export interface NavLinkItem {
    label: string;
    href: string;
}

export interface EpicNavProps {
    brandMain?: string;
    brandSub?: string;
    brandHref?: string;
    solidThresholdPx?: number;
    links?: NavLinkItem[];
    ctaText?: string;
}

export function Template({
    brandMain = '',
    brandSub = '',
    brandHref = '#top',
    solidThresholdPx,
    links = [],
    ctaText = '',
}: EpicNavProps) {
    return (
        <nav
            id="nav"
            data-solid-threshold={solidThresholdPx !== undefined ? String(solidThresholdPx) : undefined}
        >
            <a className="brand" href={brandHref} data-scroll>
                <svg width="20" viewBox="0 0 48 24" fill="none">
                    <path
                        d="M3 12 C11 3.5 37 3.5 45 12 C37 20.5 11 20.5 3 12 Z"
                        stroke="#c9a227"
                        strokeWidth="1.4"
                    />
                    <circle cx="24" cy="12" r="5" stroke="#e6c46a" strokeWidth="1.2" />
                    <circle cx="24" cy="12" r="1.8" fill="#e6c46a" />
                </svg>
                {brandMain} {brandSub && <em>{brandSub}</em>}
            </a>
            <div className="links">
                {links.map((item) => (
                    <a key={item.href} data-scroll href={item.href}>
                        {item.label}
                    </a>
                ))}
                {ctaText && (
                    <button
                        className="btn"
                        id="reserveBtn"
                        style={{ padding: '.7em 1.8em .7em 2.05em', fontSize: '11px' }}
                    >
                        {ctaText}
                    </button>
                )}
            </div>
        </nav>
    );
}
