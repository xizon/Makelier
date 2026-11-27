# \[Additional Notes\] Style Conventions

Use Tailwind utilities first. Add custom CSS only when utilities are insufficient or when a component needs dedicated selectors, animations, or complex visual effects.

## Prefix rule

Each Site reads its Tailwind prefix from `src/styles/tailwind.css`. The default is `mkl`; examples below assume that default.

- **`mkl:` is for Tailwind utilities only**: `mkl:flex`, `mkl:hover:bg-black`.
- **`mkl-` is for custom classes and IDs**: `mkl-primary-menu`, `mkl-primary-menu__link`, `#mkl-primary-menu`.
- Use the configured Site prefix, not a hard-coded `mkl`, when the Site uses another prefix.
- Namespace custom names with the component or page name. Prefer the prefix-hyphen form for all new custom names.

## Example

```tsx
<nav className="mkl:flex mkl:items-center mkl-primary-menu" id="mkl-primary-menu">
    <a className="mkl-primary-menu__link">Home</a>
</nav>
```

```css
.mkl-primary-menu {
    .mkl-primary-menu__link {
        color: white;

        &:hover {
            color: #a78bfa;
        }
    }
}
```

```ts
const menu = element.querySelector('.mkl-primary-menu');
const link = menu?.querySelector('.mkl-primary-menu__link');
```

No escaping is needed because custom names contain no colon.

## Recommendations

1. Read the target Site's `tailwind.css` before writing styles; never assume its prefix.
2. Prefer Tailwind utilities for ordinary layout, spacing, typography, colors, and responsive states.
3. Use prefixed custom classes for component/page-specific styling and JavaScript selector hooks.
4. Keep selectors scoped to the component or page; avoid generic names such as `.container`, `.title`, or `#content`.
5. Do not use a colon in new custom class or ID names. It is reserved for Tailwind utilities.

## Legacy colon names

Only preserve colon-based custom names when maintaining existing code or when compatibility requires it. Escape the colon in selectors:

```css
/* CSS: one backslash */
.mkl\:legacy-menu { }
```

```ts
// JavaScript string: two backslashes
element.querySelector('.mkl\\:legacy-menu');
```
