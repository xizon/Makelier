# StoryScene

## Overview

One screen of the scroll story. The headline lines rise out of a mask, stats count up from 0 and pop when they land, and the caption is typed out under the scene. With `streaks`, giant outlined words slide sideways as you scroll and get a horizontal-only blur that grows with scroll speed, while the headline leans in the scroll direction.

## Examples

### Basic Usage

```tsx
<StoryScene
    id="mkl-scene-2"
    kicker="Scene 02 - The street"
    lines={['THE CITY', 'IS A SKATE', 'PARK.']}
    caption="Every curb has a name."
/>
```

### Count-up Stats

```tsx
<StoryScene
    id="mkl-scene-3"
    kicker="Scene 03 - Built"
    lines={['TAKES THE', 'HIT.']}
    stats={[
        { value: 7, unit: 'PLY', label: 'Canadian maple' },
        { value: 8.5, decimals: 1, unit: 'IN', label: 'Deck width' },
    ]}
    caption="Seven plies. Zero excuses."
/>
```

### Speed Mode

```tsx
<StoryScene
    id="mkl-scene-4"
    kicker="Scene 04 - Speed"
    lines={['FASTER THAN', 'THE LIGHT.']}
    align="right"
    tone="hot"
    streaks
    stats={[{ value: 52, unit: 'MM', label: 'Wheel diameter' }]}
    caption="Push once."
/>
```

## API Reference

| Parameter | Type | Default | Required | Description |
|---|---|---|---|---|
| `id` | `string` | - | ✅ | Element id; the scene target for `ScrollNav`. Also names the blur filter in speed mode. |
| `kicker` | `string` | - | ✅ | Small label above the headline. |
| `lines` | `string[]` | - | ✅ | Headline, one entry per line. |
| `align` | `'left' \| 'right'` | `'left'` | - | Text side. |
| `tone` | `'ink' \| 'hot' \| 'acid'` | `'ink'` | - | Background glow colour. |
| `stats` | `{ value: number; decimals?: number; unit?: string; label: string }[]` | `[]` | - | Numbers that count up when the scene enters. |
| `caption` | `string` | `''` | - | Typewriter line at the bottom. |
| `streaks` | `boolean` | `false` | - | Enables the sliding rows and velocity motion blur. |

## Dependencies

- [GSAP](https://gsap.com) with ScrollTrigger - reveals, scrub, ticker
