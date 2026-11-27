import './style.css';

type Props = {
    id?: string;
    label?: string;
    name?: string;
    price?: string;
    financing?: string;
    cta?: string;
    heldLabel?: string;
    note?: string;
    perks?: string[];
};

export function Template({
    id = 'mkl-preorder',
    label = 'Preorder - first run of 1,200 decks',
    name = 'BLOCK 8.5',
    price = '$89',
    financing = 'or 4 payments of $22.25, 0% APR',
    cta = 'Hold my deck',
    heldLabel = 'Deck held',
    note = 'Held in this browser. Nothing was charged. Click again to release it.',
    perks = ['Deposit fully refundable until your deck ships', 'Free shipping in the lower 48', '30-day session guarantee'],
}: Props) {
    return (
        <section id={id} className="mkl-preorder-card">
            <p className="mkl-preorder-card__label">{label}</p>
            <h2 className="mkl-preorder-card__name">{name}</h2>
            <p className="mkl-preorder-card__price">{price}</p>
            <p className="mkl-preorder-card__fin">{financing}</p>
            <button className="mkl-preorder-card__button" type="button" aria-pressed="false" data-hold>
                <span data-label-idle>{cta}</span>
                <span data-label-held>{heldLabel}</span>
            </button>
            <p className="mkl-preorder-card__note">{note}</p>
            <ul className="mkl-preorder-card__perks">
                {perks.map((perk) => (
                    <li>{perk}</li>
                ))}
            </ul>
        </section>
    );
}
