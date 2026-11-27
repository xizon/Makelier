# Primary Menu

## Overview

A compact primary navigation with an animated active/hover indicator. The component also supports configurable scroll offsets to prevent target sections from being hidden behind fixed or sticky elements.

## Examples

### Basic Usage

The default theme is dark. The component currently provides links to the sample pages.

```tsx
<div style={{ background: '#333', position: 'relative', width: '100%', height: '100px' }}>
    <PrimaryMenu
        style={{ position: 'absolute' }}
        links={[
            { href: './index.html', page: 'index', label: 'Home', active: true },
            { href: './about.html', page: 'about', label: 'About' },
            {
                href: 'https://github.com',
                page: 'github',
                label: 'GitHub',
                newWindow: true,
            },
        ]}
    />
</div>
```

### Scroll Offset

To specify an element whose height should be excluded from the navigation scroll destination. The selector supports both class and ID selectors.

Such as:  `<PrimaryMenu offsetTarget=".site-header" offset={10} .../>`

> The controller automatically measures the target element's current height and adds the optional `offset` value. If `offsetTarget` is omitted, no element height is subtracted. The default `offset` is `0`.

## API Reference

| Parameter | Type | Default | Required | Description |
|---|---|---|---|---|
| `theme` | `string` | `'dark'` | - | Selects the visual theme. Use `'light'` for the light variant; other values render the dark variant. |
| `links` | `PrimaryMenuLink[]` | `defaultLinks` | - | Defines the navigation items. Each item specifies its destination, page identifier, label, and optional new-window behavior. |
| `className` | `string` | `""` | - | Adds custom CSS classes to the navigation element. |
| `style` | `Record<string, string \| number>` | - | - | Applies custom inline CSS styles to the navigation element. |
| `offsetTarget` | `string` | - | - | CSS selector of the element whose height should be subtracted from the scroll destination. Supports class and ID selectors. |
| `offset` | `number` | `0` | - | Adds extra scroll offset in pixels after measuring `offsetTarget`. |
| `...props` | `object` | - | - | Accepts additional HTML attributes and forwards them to the root `<nav>` element. |

### PrimaryMenuLink Properties

| Property | Type | Required | Description |
|---|---|---|---|
| `href` | `string` | ✅ | Destination URL of the link. |
| `page` | `string` | ✅ | Page identifier used by the controller to detect the active page. |
| `label` | `string` | ✅ | Visible link text. |
| `newWindow` | `boolean` | - | Opens the link in a new tab when set to `true`. |
| `active` | `boolean` | - | Sets the navigation item as active by default. |

## Dependencies

- `gsap`