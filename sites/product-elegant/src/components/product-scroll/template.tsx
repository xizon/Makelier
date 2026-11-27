
import './style.css';

type ProductScrollProps = {
    title?: string;
    accent?: string;
    description?: string;
};

export function Template({
    title = '',
    accent = '',
    description = '',
}: ProductScrollProps) {
    return (
        <section className="mkl-product">
            <div className="mkl-product__sticky">
                <div className="mkl-product__text">
                    {title || accent ? (
                        <h2 className="mkl-product__title">
                            {title}
                            {title && accent ? '\u00a0' : ''}
                            {accent ? <em>{accent}</em> : null}
                        </h2>
                    ) : null}

                    {description ? (
                        <p>
                            {description}
                        </p>
                    ) : null}
                </div>

                <div
                    className="mkl-product__object"
                    aria-hidden="true"
                >
                    <div className="mkl-product__ring mkl-product__ring--a"></div>

                    <div className="mkl-product__ring mkl-product__ring--b"></div>

                    <div className="mkl-product__main"></div>
                </div>
            </div>
        </section>
    );
}
