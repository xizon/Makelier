
import './style.css';

type PrimaryMenuLink = {
    href: string;
    page: string;
    label: string;
    newWindow?: boolean;
    active?: boolean;
};

type PrimaryMenuProps = {
    theme?: 'light' | 'dark' | string;
    links?: PrimaryMenuLink[];
    className?: string;
    style?: Record<string, string | number>;

    // Scroll offset configuration
    offsetTarget?: string;
    offset?: number;

    [key: string]: any;
};

const defaultLinks: PrimaryMenuLink[] = [];

export function Template({
    theme = 'dark',
    links = defaultLinks,
    className = '',
    style,
    offsetTarget,
    offset = 0,
    ...props
}: PrimaryMenuProps) {
    return (
        <nav
            className={`mkl-primary-menu ${theme === 'light' ? 'is-light' : 'is-dark'} ${className}`.trim()}
            style={style}
            data-offset-target={offsetTarget}
            data-offset={offset}
            {...props}
        >
            <button className="mkl-primary-menu__hamburger" type="button">
                <span className="mkl-hamburger-line"></span>
                <span className="mkl-hamburger-line"></span>
                <span className="mkl-hamburger-line"></span>
            </button>

            <ul className="mkl-primary-menu__list">
                <li className="mkl-primary-menu__indicator" />

                {links.map(({ href, page, label, newWindow, active }) => (
                    <li key={page} className="mkl-primary-menu__item">
                        <a
                            href={href}
                            data-page={page}
                            target={newWindow ? '_blank' : '_self'}
                            rel={newWindow ? 'noopener noreferrer' : undefined}
                            className={`mkl-primary-menu__link ${active ? 'is-active' : ''}`.trim()}
                            aria-current={active ? 'page' : undefined}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
