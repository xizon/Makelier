# Epic Finale

## Overview

A closing section featuring a sticky `FINIS.` title, fresco backdrop, pricing details, pre-order CTA buttons, a technical specifications grid, and an editorial footer.

## Examples

### Basic Usage

Pass the closing content, product details, specifications, and footer text from the page.

```tsx
<EpicFinale
    finisTitle="FINIS."
    finisSubtitle="THE EYE CLOSES · THE GAMES BEGIN"
    kicker="VIII · GLADIVS — THE MUSTER"
    heading="Arm your legion."
    price="$ 1,199"
    priceNote="STRUCK BY THE IMPERIAL MINT · MMXXV · AUTUMN"
    primaryCtaText="ENGRAVE A PRE-ORDER"
    secondaryCtaText="REVIEW THE SPECS"
    specs={[
        { key: 'FIELD OF VIEW', value: '210°' },
        { key: 'REFRESH', value: '120 Hz' },
    ]}
    footerLatin="SENATVS · POPVLVSQVE · GAMERQVE"
/>
```

### With a Background Image

Set `frescoImageUrl` to provide a background image for the closing content.

```tsx
<EpicFinale
    id="ch8"
    specsId="specs"
    finisTitle="FINIS."
    finisSubtitle="THE FINAL CHAPTER"
    frescoImageUrl="/images/fresco.webp"
    heading="The story continues."
    secondaryCtaText="VIEW SPECIFICATIONS"
    secondaryCtaHref="#specs"
    specs={[
        { key: 'DISPLAY', value: 'DUAL 8K' },
        { key: 'REFRESH RATE', value: '120 Hz' },
    ]}
    footerCopyright="© 2026 Makelier."
/>
```

## API Reference

| Parameter | Type | Default | Required | Description |
|---|---|---|---|---|
| `id` | `string` | `'ch8'` | - | ID of the finale section. |
| `specsId` | `string` | `'specs'` | - | Anchor ID assigned to the specifications grid. |
| `finisTitle` | `string` | `''` | - | Sticky closing display title. |
| `finisSubtitle` | `string` | `''` | - | Subtitle displayed with the closing title. |
| `frescoImageUrl` | `string` | `''` | - | Optional background image URL for the fresco backdrop. |
| `kicker` | `string` | `''` | - | Small label above the main heading. |
| `heading` | `string` | `''` | - | Main heading for the closing content. |
| `price` | `string` | `''` | - | Formatted product price. |
| `priceNote` | `string` | `''` | - | Supporting note displayed beside the price. |
| `primaryCtaText` | `string` | `''` | - | Label for the primary pre-order button. |
| `secondaryCtaText` | `string` | `''` | - | Label for the secondary anchor link. |
| `secondaryCtaHref` | `string` | `'#specs'` | - | Destination of the secondary link. |
| `specs` | `SpecItem[]` | `[]` | - | Specification items. Each item contains `key: string` and `value: string`. |
| `approvalNote` | `string` | `''` | - | Note displayed below the specifications grid. |
| `footerLatin` | `string` | `''` | - | Latin motto in the footer. |
| `footerTagline` | `string` | `''` | - | Main footer tagline. |
| `footerCopyright` | `string` | `''` | - | Copyright or colophon line in the footer. |

## Dependencies

- None.
