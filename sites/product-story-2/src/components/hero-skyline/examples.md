# HeroSkyline

## Overview

Full-screen opening scene. Two skyline layers and the title move at different speeds as you scroll, so the near skyline rises over the board. A caption is typed out under the hero after load. The board is an inline SVG placeholder; pass `image` to use a photo or render instead.

## Examples

### Basic Usage

```tsx
<HeroSkyline
    id="mkl-scene-1"
    title="BLOCK 8.5"
    kicker="A short film by CRATE"
    tagline="The deck that turns the walk to the spot into the best part of the session."
    caption="You skate the long way."
/>
```

### Custom Board Image

```tsx
<HeroSkyline id="mkl-scene-1" image="./assets/board-hero.png" />
```

## API Reference

| Parameter | Type | Default | Required | Description |
|---|---|---|---|---|
| `id` | `string` | `'mkl-scene-1'` | - | Element id; the scene target for `ScrollNav`. |
| `kicker` | `string` | `'A short film by CRATE'` | - | Small line above the title. |
| `title` | `string` | `'BLOCK 8.5'` | - | Giant headline. |
| `tagline` | `string` | product line | - | Paragraph under the title. |
| `caption` | `string` | `'You skate the long way.'` | - | Text typed out at the bottom. |
| `image` | `string` | `''` | - | Optional board image URL. Empty uses the built-in SVG. |

## Dependencies

- [GSAP](https://gsap.com) with ScrollTrigger - parallax scrub
