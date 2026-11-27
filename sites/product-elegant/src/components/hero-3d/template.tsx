import './style.css';


interface Hero3DProps {
    eyebrow?: string;
    title?: string;
    accent?: string;
    description?: string;
    nextLabel?: string;
    nextSelector?: string;
}


export function Template({
    eyebrow = '',
    title = '',
    accent = '',
    description = '',
    nextLabel = '',
    nextSelector,
}: Hero3DProps) {
    return (
        <section
            className="mkl-hero"
            data-next={nextSelector}
        >
            <canvas
                className="mkl-hero__canvas"
                aria-hidden="true"
            ></canvas>

            <div className="mkl-hero__rail" aria-hidden="true"></div>
            <div className="mkl-hero__cross" aria-hidden="true"></div>

            <div className="mkl-hero__copy">
                {eyebrow ? (
                    <p className="mkl-hero__eyebrow">
                        <span className="mkl-hero__pip" aria-hidden="true"></span>
                        {eyebrow}
                    </p>
                ) : null}
                {title || accent ? (
                    <h1 className="mkl-hero__title">
                        {title}
                        {accent ? (
                            <span className="mkl-hero__accent">{accent}</span>
                        ) : null}
                    </h1>
                ) : null}
                {description ? (
                    <p className="mkl-hero__description">{description}</p>
                ) : null}
            </div>

            <button
                className="mkl-hero__next"
                type="button"
                data-scroll-next=""
            >
                {nextLabel && nextLabel !== '' ? (
                    <span className="mkl-hero__next-label">{nextLabel}</span>
                ) : null}
                <span className="mkl-hero__next-arrow" aria-hidden="true"></span>
            </button>
        </section>
    );
}
