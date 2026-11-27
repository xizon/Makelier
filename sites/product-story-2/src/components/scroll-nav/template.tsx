import './style.css';

type NavItem = { id: string; label: string };

type Props = {
    logo?: string;
    items?: NavItem[];
    ctaLabel?: string;
    ctaHref?: string;
};

export function Template({
    logo = 'Makelier',
    items = [{ id: 'mkl-scene-1', label: '01 Cold open' }],
    ctaLabel = 'Preorder',
    ctaHref = '#mkl-preorder',
}: Props) {
    return (
        <header className="mkl-scroll-nav" data-scroll-nav>
            <div className="mkl-scroll-nav__bar mkl:mx-auto mkl:flex mkl:w-full mkl:max-w-400 mkl:items-center mkl:justify-between mkl:gap-4 mkl:px-[clamp(20px,6vw,96px)]">
            <a className="mkl-scroll-nav__logo" href="#mkl-scene-1" data-nav-link>
                {logo}
            </a>
            <nav>
                <ul className="mkl-scroll-nav__list">
                    {items.map((item) => (
                        <li>
                            <a className="mkl-scroll-nav__link" href={`#${item.id}`} data-nav-link data-nav-step>
                                <i className="mkl-scroll-nav__fill" data-nav-fill />
                                <span className="mkl-scroll-nav__label">{item.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <a className="mkl-scroll-nav__cta" href={ctaHref} data-nav-link>
                {ctaLabel}
            </a>
            </div>
        </header>
    );
}
