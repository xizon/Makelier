import './style.css';

type Item = { q: string; a: string };

type Props = {
    id?: string;
    heading?: string;
    items?: Item[];
};

export function Template({ id = 'mkl-faq', heading = 'BEFORE YOU RESERVE', items = [{ q: 'When will it ship?', a: 'In numbered batches.' }] }: Props) {
    return (
        <section id={id} className="mkl-faq-accordion">
            <div className="mkl-faq-accordion__wrap mkl:mx-auto mkl:w-full mkl:max-w-400 mkl:px-[clamp(20px,6vw,96px)]">
            <h2 className="mkl-faq-accordion__heading">{heading}</h2>
            <div className="mkl-faq-accordion__list">
                {items.map((item) => (
                    <div className="mkl-faq-accordion__item" data-acc-item>
                        <button className="mkl-faq-accordion__trigger" type="button" aria-expanded="false" data-acc-trigger>
                            <span>{item.q}</span>
                            <i aria-hidden="true" />
                        </button>
                        <div className="mkl-faq-accordion__panel">
                            <div>
                                <p>{item.a}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}
