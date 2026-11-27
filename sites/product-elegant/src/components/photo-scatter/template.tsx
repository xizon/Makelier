import './style.css';

type PhotoTile = {
    color: string;
    src?: string;
    alt?: string;
    depth?: number;
    shift?: number;
    label?: string;
};

type PhotoScatterProps = {
    title?: string;
    description?: string;
    tiles?: PhotoTile[];
};

const slots = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

export function Template({
    title = '',
    description = '',
    tiles = [],
}: PhotoScatterProps) {
    return (
        <section className="mkl-photo-scatter">
            <header className="mkl-photo-scatter__header">
                <div>
                    {title ? (
                        <h2 className="mkl-photo-scatter__title">{title}</h2>
                    ) : null}
                </div>
                {description ? (
                    <p className="mkl-photo-scatter__lede">{description}</p>
                ) : null}
                <span className="mkl-photo-scatter__mark" aria-hidden="true"></span>
            </header>

            <div className="mkl-photo-scatter__board">
                {tiles.map((tile, index) => {
                    const slot = slots[index] ?? 'x';
                    return (
                        <figure
                            key={`${tile.label ?? tile.color}-${index}`}
                            className={`mkl-photo-scatter__tile mkl-photo-scatter__tile--${slot}`}
                            data-parallax={tile.depth ?? 0.4}
                            data-shift={tile.shift ?? 0}
                        >
                            {tile.src ? (
                                <img src={tile.src} alt={tile.alt ?? ''} />
                            ) : (
                                <span
                                    className="mkl-photo-scatter__field"
                                    style={{ background: tile.color }}
                                ></span>
                            )}
                            {tile.label ? <figcaption>{tile.label}</figcaption> : null}
                        </figure>
                    );
                })}
            </div>
        </section>
    );
}
