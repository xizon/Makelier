# Epic Modal

## Overview

A reservation dialog with a blurred backdrop, form validation feedback, and a floating toast notification. The modal and toast are controlled by the component's controller.

## Examples

### Basic Usage

Pass the modal content and form labels from the page.

```tsx
<EpicModal
    latinHeader="SACRAMENTVM"
    heading="Engrave your name"
    description="No deposit required. On the day of release, the Imperial Mint will send word by eagle."
    nameLabel="NAME"
    namePlaceholder="Gaius Julius"
    emailLabel="WORD BY EAGLE (EMAIL)"
    emailPlaceholder="name@roma.im"
    submitText="SUBMIT THE ENGRAVING"
/>
```

## API Reference

| Parameter | Type | Default | Required | Description |
|---|---|---|---|---|
| `latinHeader` | `string` | `''` | - | Uppercase italic header above the modal title. Not rendered when empty. |
| `heading` | `string` | `''` | - | Modal heading. Not rendered when empty. |
| `description` | `string` | `''` | - | Supporting text below the heading. Not rendered when empty. |
| `nameLabel` | `string` | `''` | - | Label for the name input. |
| `namePlaceholder` | `string` | `''` | - | Placeholder for the name input. |
| `emailLabel` | `string` | `''` | - | Label for the email input. |
| `emailPlaceholder` | `string` | `''` | - | Placeholder for the email input. |
| `submitText` | `string` | `''` | - | Submit button label. The button is not rendered when empty. |

## Dependencies

- None.
