# Epic Hero

## Overview

A full-viewport hero section featuring a Latin motto, split-character title, decorative separator, product details, and an animated scroll cue.

## Examples

### Basic Usage

Pass the content props from the page.

```tsx
<EpicHero
    id="top"
    latinMotto="EX MARMORE · IN AETERNVM"
    titlePrimary="OCVLUS"
    titleSecondary="IMPERIVM"
    subtitle="THE EYE OF THE EMPIRE · NEURAL HEADSET"
    specLine="DUAL 8K · 120 HZ · HAPTIC CROWN · SPATIAL SOUND"
    scrollHintText="DESCEND THE SAGA"
/>
```

## API Reference

| Parameter | Type | Default | Required | Description |
|---|---|---|---|---|
| `id` | `string` | `'top'` | - | Section anchor ID. |
| `latinMotto` | `string` | `''` | - | Italicized Latin motto above the title. Not rendered when empty. |
| `titlePrimary` | `string` | `''` | - | Primary display title line. |
| `titleSecondary` | `string` | `''` | - | Secondary display title line. |
| `subtitle` | `string` | `''` | - | Product tagline below the separator. |
| `specLine` | `string` | `''` | - | Product specifications line. |
| `scrollHintText` | `string` | `''` | - | Scroll prompt displayed near the bottom edge. |

## Dependencies

- None.
