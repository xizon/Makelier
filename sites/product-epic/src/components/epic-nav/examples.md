# Epic Navigation

## Overview

A fixed top navigation bar with an ocular SVG emblem, smooth-scroll anchor links, and an optional primary CTA button. The navigation background becomes solid after the configured scroll threshold.

## Examples

### Basic Usage

Pass the navigation content from the page.

```tsx
<EpicNav
    brandMain="Makelier"
    brandHref="#top"
    links={[
        { label: 'NARRATIVE', href: '#ch1' },
        { label: 'SPECS', href: '#specs' },
    ]}
    ctaText="RESERVE"
/>
```

### Custom Scroll Threshold

Set `solidThresholdPx` to change when the solid navigation background appears.

```tsx
<EpicNav
    brandMain="Makelier"
    brandSub="Studio"
    brandHref="#top"
    solidThresholdPx={100}
    links={[
        { label: 'STORY', href: '#ch1' },
        { label: 'DETAILS', href: '#specs' },
    ]}
/>
```

## API Reference

| Parameter | Type | Default | Required | Description |
|---|---|---|---|---|
| `brandMain` | `string` | `''` | - | Primary brand wordmark. |
| `brandSub` | `string` | `''` | - | Optional secondary brand suffix. |
| `brandHref` | `string` | `'#top'` | - | Destination of the brand link. |
| `links` | `NavLinkItem[]` | `[]` | - | Navigation links. Each item contains `label: string` and `href: string`. |
| `ctaText` | `string` | `''` | - | CTA button label. The button is not rendered when empty. |
| `solidThresholdPx` | `number` | `60` (controller) | - | Scroll offset in pixels after which the solid navigation background is applied. |

## Dependencies

- None.
