# PreorderCard

## Overview

Price card for the preorder section. One button toggles between "hold" and "held": the label swaps, the card's button turns green and a short note appears. Clicking again releases it. Nothing is charged or stored.

## Examples

### Basic Usage

```tsx
<PreorderCard
    id="mkl-preorder"
    name="BLOCK 8.5"
    price="$89"
    financing="or 4 payments of $22.25, 0% APR"
    cta="Hold my deck"
    heldLabel="Deck held"
    perks={['Deposit fully refundable until your deck ships', 'Free shipping in the lower 48']}
/>
```

## API Reference

| Parameter | Type | Default | Required | Description |
|---|---|---|---|---|
| `id` | `string` | `'mkl-preorder'` | - | Element id; target of the nav button. |
| `label` | `string` | first-run label | - | Small line above the name. |
| `name` | `string` | `'BLOCK 8.5'` | - | Product name. |
| `price` | `string` | `'$89'` | - | Display price. |
| `financing` | `string` | 4-payment line | - | Line under the price. |
| `cta` | `string` | `'Hold my deck'` | - | Button text before holding. |
| `heldLabel` | `string` | `'Deck held'` | - | Button text after holding. |
| `note` | `string` | held note | - | Line shown while held. |
| `perks` | `string[]` | three perks | - | Bullet list under the button. |

## Dependencies

None.
