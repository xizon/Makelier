# ScrollNav

## Overview

Fixed top navigation. Each item links to a scene by element id; its line fills as that scene scrolls through the viewport and the active item is highlighted. Mounting it also turns on eased smooth scrolling for the page, and clicks scroll with the same easing.

## Examples

### Basic Usage

```tsx
<ScrollNav
    logo="Makelier"
    items={[
        { id: 'mkl-scene-1', label: '01 Cold open' },
        { id: 'mkl-scene-2', label: '02 The street' },
    ]}
    ctaLabel="Preorder"
    ctaHref="#mkl-preorder"
/>
```

## API Reference

| Parameter | Type | Default | Required | Description |
|---|---|---|---|---|
| `logo` | `string` | `'Makelier'` | - | Wordmark at the left. |
| `items` | `{ id: string; label: string }[]` | one item | - | Timeline steps. `id` is the target element id (without `#`). |
| `ctaLabel` | `string` | `'Preorder'` | - | Pill button text. |
| `ctaHref` | `string` | `'#mkl-preorder'` | - | Pill button target (element id). |

## Dependencies

- [GSAP](https://gsap.com) with ScrollTrigger - scroll-linked progress
- [Lenis](https://lenis.darkroom.engineering) - eased smooth scrolling
