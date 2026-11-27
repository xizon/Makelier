# FaqAccordion

## Overview

Heading on the left, accordion on the right. One item is open at a time; opening one closes the others. Panels animate smoothly and the plus icon turns into a cross.

## Examples

### Basic Usage

```tsx
<FaqAccordion
    id="mkl-faq"
    heading="BEFORE YOU RESERVE"
    items={[
        { q: 'When will it ship?', a: 'First batch ships in March, in numbered runs.' },
        { q: 'Can I get my deposit back?', a: 'Yes. Cancel any time before it ships.' },
    ]}
/>
```

## API Reference

| Parameter | Type | Default | Required | Description |
|---|---|---|---|---|
| `id` | `string` | `'mkl-faq'` | - | Element id. |
| `heading` | `string` | `'BEFORE YOU RESERVE'` | - | Left-hand title. |
| `items` | `{ q: string; a: string }[]` | one sample item | - | Questions and answers. |

## Dependencies

None.
