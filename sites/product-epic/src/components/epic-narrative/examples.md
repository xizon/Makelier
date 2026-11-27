# Epic Narrative

## Overview

A narrative chapter component with four layout variants: standard text, split plate, technical blueprint, and dual-act sticky arena. Use the `chapterClass` to connect each chapter to the page's scroll choreography.

## Examples

### Basic Usage

Use the standard layout for a chapter with a heading, body copy, and optional animated statistics.

```tsx
<EpicNarrative
    id="ch1"
    chapterClass="ch1"
    watermark="I"
    kicker="I · OCVLVS — THE EYE"
    heading="To see, is to exist."
    body="The Romans left one eye eternally open in the dome of the Pantheon..."
    stats={[
        { value: 210, unit: '° FIELD OF VIEW' },
        { value: 8, unit: 'K PER EYE' },
    ]}
/>
```

### Blueprint Layout

Set `layout="blueprint"` to render the technical drafting plate and its callout labels.

```tsx
<EpicNarrative
    id="ch4"
    chapterClass="ch4"
    layout="blueprint"
    watermark="IV"
    kicker="IV · CONSCRIBERE — THE DRAFTING"
    heading="Every empire begins as a line."
    captionNote="FOGLIVS I · THE DRAFTING OF THE EYE"
    blueprintLabels={{
        dimWidth: '188 MM',
        dimHeight: '112 MM',
        lensSpec: 'OCVLVS · 52 MM',
    }}
/>
```

### Dual-Act Arena Layout

Provide two acts when using `layout="arena-dual"`.

```tsx
<EpicNarrative
    id="ch7"
    chapterClass="ch7"
    layout="arena-dual"
    watermark="VII"
    arenaActs={[
        {
            sub: 'ACT I · THE CROWD',
            title: 'THE EMPIRE GATHERS',
            footer: 'A NEW WORLD OPENS',
        },
        {
            sub: 'ACT II · THE ARENA',
            title: 'THE GAMES BEGIN',
            footer: 'FORTVNA FAVET FORTIBVS',
        },
    ]}
/>
```

## API Reference

| Parameter | Type | Default | Required | Description |
|---|---|---|---|---|
| `id` | `string` | - | Yes | Section anchor ID. |
| `chapterClass` | `'ch1' \| 'ch2' \| 'ch3' \| 'ch4' \| 'ch5' \| 'ch6' \| 'ch7'` | - | Yes | Chapter class used by the page layout and scroll choreography. |
| `layout` | `'standard' \| 'split-plate' \| 'blueprint' \| 'arena-dual'` | `'standard'` | - | Visual layout variant. |
| `watermark` | `string` | `''` | - | Large Roman numeral watermark behind the chapter content. |
| `kicker` | `string` | `''` | - | Chapter index and subtitle line. |
| `heading` | `string` | `''` | - | Main chapter heading. |
| `body` | `string` | `''` | - | Descriptive paragraph. |
| `stats` | `StatItem[]` | `[]` | - | Animated statistics. Each item contains `value: number` and `unit: string`. |
| `captionNote` | `string` | `''` | - | Figure caption used by supported layouts. |
| `blueprintLabels` | `BlueprintLabels` | `{}` | - | Text labels rendered in the blueprint SVG. Supported fields: `dimWidth`, `dimHeight`, `lensSpec`, `part1`, `part2`, `part3`, `detailLabel`, `titleBlock1`, `titleBlock2`, `titleBlock3`, and `figCaption`. |
| `arenaActs` | `[ArenaAct, ArenaAct]` | - | - | Two acts used by the `arena-dual` layout. Each act contains `sub`, `title`, and `footer` string fields. |

## Dependencies

- None.
