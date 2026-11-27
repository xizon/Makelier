# Epic Stage

## Overview

A global picture-in-picture WebGL stage with an ocular preloader, eyelid transition, custom cursor, and scroll-driven scene choreography.

## Examples

### Basic Usage

Place the stage component once on the page. It provides the shared visual stage and loader for the experience.

```tsx
<EpicStage
    loaderText="ROMA AETERNA"
    initialFrameLabel="MVNDVS — THE PANTHEON"
/>
```

### Custom Stage Labels and Messages

Pass custom labels and form feedback messages to the stage controller through the component props.

```tsx
<EpicStage
    loaderText="ROMA AETERNA"
    initialFrameLabel="MVNDVS — THE PANTHEON"
    frameLabels={{
        top: 'MVNDVS — THE PANTHEON',
        ch1: 'TABVLA I — THE EYE',
        ch2: 'TABVLA II — NEURAL RENDERING',
        ch3: 'TABVLA III — TOUCH & SOUND',
    }}
    invertedFrameLabel="THE WORLD YOU LEFT"
    invalidEmailMessage="Please enter a valid email address."
    successToastMessage="Your request has been received."
/>
```

## API Reference

| Parameter | Type | Default | Required | Description |
|---|---|---|---|---|
| `loaderText` | `string` | `''` | - | Subtitle displayed below the ocular preloader. |
| `initialFrameLabel` | `string` | `''` | - | Initial label displayed on the stage frame. |
| `frameLabels` | `Record<string, string>` | Controller defaults | - | Frame labels mapped by section key, such as `top` and `ch1`–`ch6`. |
| `invertedFrameLabel` | `string` | `'THE WORLD YOU LEFT'` (controller) | - | Frame label displayed during the inverted picture-in-picture chapter. |
| `invalidEmailMessage` | `string` | `'The eagle needs a valid address.'` (controller) | - | Validation message shown when the email address is invalid. |
| `successToastMessage` | `string` | `'Engraved in the rolls of the Empire · GRATIAS TIBI'` (controller) | - | Toast message shown after successful form submission. |

## Dependencies

- `three`
- `gsap`
- `lenis`
