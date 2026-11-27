import './style.css';

type PricingPlan = {
    name: string;
    price: string;
    cadence: string;
    summary: string;
    features: string[];
    action: string;
    href: string;
    featured?: boolean;
};

type PricingCardsProps = {
    kicker?: string;
    title?: string;
    description?: string;
    plans?: PricingPlan[];
};

const defaultPlans: PricingPlan[] = [];

export function Template({
    plans = defaultPlans,
}: PricingCardsProps) {
    return (
        <section className="mkl-pricing-cards">
            <div className="mkl-pricing-cards__inner">

                <header className="mkl-pricing-cards__header">
                    <p className="mkl-pricing-cards__kicker">
                        Plans
                    </p>
                    <h2 className="mkl-pricing-cards__title">
                        Choose a pace
                    </h2>
                    <p className="mkl-pricing-cards__description">
                        Three ways to publish interactive pages. The cards arrive in order once they enter view.
                    </p>
                </header>

                <div className="mkl-pricing-cards__grid">
                    {plans.map((plan) => {
                        const cardClass = plan.featured
                            ? 'mkl-pricing-cards__card mkl-pricing-cards__card--featured'
                            : 'mkl-pricing-cards__card';

                        return (
                            <article
                                key={plan.name}
                                className={cardClass}
                            >
                                <div className="mkl-pricing-cards__meta">
                                    <h3 className="mkl-pricing-cards__name">
                                        {plan.name}
                                    </h3>
                                    {plan.featured ? (
                                        <span className="mkl-pricing-cards__badge">
                                            Featured
                                        </span>
                                    ) : null}
                                </div>

                                <p className="mkl-pricing-cards__price">
                                    {plan.price}
                                    <span className="mkl-pricing-cards__cadence">
                                        {plan.cadence}
                                    </span>
                                </p>

                                <p className="mkl-pricing-cards__summary">
                                    {plan.summary}
                                </p>

                                <ul className="mkl-pricing-cards__features">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="mkl-pricing-cards__feature"
                                        >
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={plan.href}
                                    className="mkl-pricing-cards__action"
                                >
                                    {plan.action}
                                </a>
                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
