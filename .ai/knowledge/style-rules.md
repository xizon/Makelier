# Style Rules (Single Source of Truth)

This document is the **single source of truth** for all component and page styling rules in Makelier.

All related rule files (`component-rules.md`, `page-rules.md`, `site-rules.md`) and skills (`create-component`, `create-page`) must reference this document rather than duplicating, redefining, or diverging from its rules.

When styling requirements change, update this document first. Related rule files and skills should reference the relevant sections instead of maintaining independent copies.

---

## 1. Reading Prefix & Unconfigured Handling

- **Core rule: one prefix, two separators**: Reserve `mkl:` (prefix + colon) for **Tailwind utility classes only**, and use `mkl-` (prefix + hyphen) for **all custom class and ID names**. `mkl` is the system default prefix, taken from `prefix(mkl)` in `tailwind.css`; always read the actual value from the target Site (see below) rather than assuming it.

- **Always read the target Site's `src/styles/tailwind.css`** before writing or modifying components or pages. Check whether a Tailwind prefix is configured using `prefix(...)` (e.g., `@import "tailwindcss" prefix(mkl);`). Never assume the prefix value.

- **When a prefix is configured**: Use the configured prefix for all Tailwind utility classes. For example, if the configuration is `prefix(mkl)`, Tailwind utilities must use the `mkl:` prefix.

- **When no prefix is configured**: Do not add any prefix to Tailwind utilities. Use ordinary, unprefixed Tailwind utility classes.

- **Custom class and ID naming**: When a prefix is configured, use the configured prefix followed by a hyphen for custom class and ID names by default (e.g., `mkl-primary-menu`, `mkl-product-card`). Do not confuse this naming convention with Tailwind's colon-based utility prefix.

- **When no prefix is configured**: Do not invent a Site prefix for custom class or ID names. Use appropriately namespaced, colon-free custom names (e.g., `product-card`, `my-product-card`), following the existing Site convention.

---

## 2. Tailwind First

- When writing components or pages, **use Tailwind utility classes by default** unless the user specifically requests custom class names or styles.

- Always match Tailwind utilities to the prefix configured in the target Site's `src/styles/tailwind.css`.

- Introduce custom class names only when Tailwind utilities cannot adequately achieve the required layout, visual effect, interaction, or selector hook.

- Use custom CSS for requirements that are difficult or impractical to express with Tailwind utilities, including:
  - Complex animations and keyframes.
  - Advanced pseudo-elements and pseudo-class combinations.
  - Complex gradients, masks, and clipping effects.
  - SVG-specific styling.
  - Complex selectors and component-specific visual effects.
  - Third-party library integration where custom styling is required.

- Do not create custom classes merely to replace simple Tailwind utilities that already provide the required styling.

- Do not duplicate the same styling in Tailwind utilities and `style.css` unless there is a clear technical reason.

---

## 3. Custom Class & ID Naming and Namespacing

### 3.1 Recommended Naming: Prefix + Hyphen

**Always prefer the configured Site prefix followed by a hyphen for custom class and ID names.**

Rule of thumb: `mkl:` belongs to Tailwind utilities (`mkl:flex`); `mkl-` belongs to custom classes and IDs (`mkl-primary-menu`).

For example, when the Tailwind prefix is `mkl`:

- Component root: `.mkl-primary-menu`
- Component child: `.mkl-primary-menu__link`
- Component modifier: `.mkl-primary-menu--light`
- Page root: `.mkl-product-page`
- Page section: `.mkl-product-page__hero`
- Custom ID: `#mkl-primary-menu`

This convention is recommended because:

- It avoids colon escaping in CSS selectors.
- It avoids double-backslash escaping in JavaScript selector strings.
- It keeps custom class and ID names visually distinct from Tailwind utility classes.
- It improves readability in HTML, CSS, and JavaScript.
- It reduces selector-related mistakes when components are reused across Sites or integrated into host pages.

### 3.2 Component / Page Namespacing

- Custom class names must include the component or page name as a namespace, even when unprefixed.
- Custom ID names should also use meaningful component or page namespaces.
- Avoid generic names such as `.container`, `.title`, `.wrapper`, `.custom-button`, or `#content`.
- Prefer BEM-style naming for component structures when appropriate:
  - Block: `.mkl-primary-menu`
  - Element: `.mkl-primary-menu__link`
  - Modifier: `.mkl-primary-menu--light`

### 3.3 Colon-Style Custom Classes & IDs (Legacy Compatibility Only)

The `mkl:` form is reserved for Tailwind utilities. **Do not create new custom classes or IDs with a colon.** For new code, use the configured Site prefix followed by a hyphen (for example, `mkl-primary-menu`).

Colon-style custom names (for example, `mkl:primary-menu`) are supported only when maintaining existing code or when compatibility requires preserving an established Site convention. They are not an alternative naming style for new components or pages. If an existing colon-style custom name must be retained, every literal colon in its selectors **must** be escaped as described below.

For example:

- `.mkl:primary-menu`
- `.mkl:primary-menu__link`
- `#mkl:primary-menu`

When using colon-style custom names:

- Escape every literal colon in CSS selectors with a single backslash.
- Escape every literal colon in JavaScript selector strings with a double backslash.
- Keep the actual HTML class or ID value unchanged.
- Follow the escaping rules in Section 5.
- An unescaped colon is parsed as a pseudo-class: in CSS the rule is silently dropped or matches nothing, and in `querySelector` it throws a `SyntaxError`.

Do not use colon-style custom names unless there is a specific reason to do so.

### 3.4 Unprefixed Custom Classes & IDs

- Unprefixed, colon-free custom **class** names may be used when no Tailwind prefix is configured or when following an existing unprefixed Site convention.
- Examples: `.product-card`, `.my-product-card__title`.
- **Custom IDs are stricter:** when a Tailwind prefix is configured, every project-owned ID must use that prefix followed by a hyphen (for example, `mkl-product-gallery`). Do not create or retain unprefixed project-owned IDs in a prefixed Site.
- When no prefix is configured, use a meaningful, namespaced ID such as `product-gallery`.

### 3.5 No Mixing Within a Site

- Never mix prefixed and unprefixed **custom class** naming conventions within the same Site.
- For IDs, the rule is mandatory: if the Site has a configured prefix, all project-owned IDs must use `<prefix>-...`; do not make exceptions based on older page conventions.
- This restriction applies only to custom names. It does not prohibit using Tailwind utilities alongside custom classes.

For example, the following is valid when the Site uses `prefix(mkl)`:

```tsx
<div className="mkl:flex mkl:items-center mkl-primary-menu">
```

Here:

- `mkl:flex` and `mkl:items-center` are Tailwind utilities.
- `mkl-primary-menu` is a custom component class.

This is not considered mixing naming conventions.

### 3.6 Tailwind Variant Ordering

For Tailwind utilities, the configured prefix must appear before all responsive, state, or arbitrary variants.

Correct:

```tsx
className="mkl:md:flex mkl:hover:bg-black mkl:max-[760px]:grid-cols-1"
```

Incorrect:

```tsx
className="md:mkl:flex hover:mkl:bg-black"
```

---

## 4. Three-Way Syntax Reference

The following table distinguishes Tailwind utilities, recommended custom names, and optional colon-style custom names.

| Usage | Template (`template.tsx` / `index.tsx`) | Stylesheet (`style.css`) | JavaScript (`controller.ts`) | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Recommended custom class** | `className="mkl-primary-menu"` | `.mkl-primary-menu { ... }` | `element.querySelector('.mkl-primary-menu')` | No escaping required |
| **Custom child class** | `className="mkl-primary-menu__link"` | `.mkl-primary-menu__link { ... }` | `element.querySelector('.mkl-primary-menu__link')` | Use component namespace |
| **Custom modifier class** | `className="mkl-primary-menu--light"` | `.mkl-primary-menu--light { ... }` | `element.querySelector('.mkl-primary-menu--light')` | BEM-style modifier |
| **Recommended custom ID** | `id="mkl-primary-menu"` | `#mkl-primary-menu { ... }` | `document.querySelector('#mkl-primary-menu')` | No escaping required |
| **Colon-style custom class (allowed)** | `className="mkl:primary-menu"` | `.mkl\:primary-menu { ... }` | `element.querySelector('.mkl\\:primary-menu')` | Escape colons in selectors |
| **Legacy colon-style custom ID (avoid)** | `id="mkl:primary-menu"` | `#mkl\:primary-menu { ... }` | `document.querySelector('#mkl\\:primary-menu')` | Migrate to `mkl-primary-menu` |
| **Unprefixed custom class** | `className="my-primary-menu"` | `.my-primary-menu { ... }` | `element.querySelector('.my-primary-menu')` | Allowed when consistent with the Site convention |
| **Unprefixed custom ID** | `id="my-primary-menu"` | `#my-primary-menu { ... }` | `document.querySelector('#my-primary-menu')` | Not allowed when the Site has a configured prefix |
| **Tailwind utility class** | `className="mkl:flex mkl:text-xl"` | *(No custom CSS needed)* | N/A | Follows `prefix(...)` in `tailwind.css` |
| **Tailwind state variant** | `className="mkl:hover:bg-black"` | *(No custom CSS needed)* | N/A | Prefix precedes the variant |

### Example: Recommended Naming

Template:

```tsx
<nav className="mkl-primary-menu">
    <ul className="mkl-primary-menu__list">
        <li className="mkl-primary-menu__item">
            <a className="mkl-primary-menu__link">
                Home
            </a>
        </li>
    </ul>
</nav>
```

Stylesheet:

```css
.mkl-primary-menu {
    position: fixed;

    .mkl-primary-menu__list {
        display: flex;
        gap: 12px;
    }

    .mkl-primary-menu__link {
        color: white;

        &:hover {
            color: #a78bfa;
        }
    }
}
```

Controller:

```ts
const menu = element.querySelector('.mkl-primary-menu');
const links = element.querySelectorAll('.mkl-primary-menu__link');
```

No escaping is required.

---

## 5. CSS & JavaScript Escaping

### 5.1 Recommended: Avoid Escaping Through Hyphen-Based Names

When custom class and ID names use the recommended prefix-plus-hyphen convention, no escaping is needed.

Example:

HTML:

```html
<nav class="mkl-primary-menu">
```

CSS:

```css
.mkl-primary-menu {
    /* Styles */
}
```

JavaScript:

```ts
element.querySelector('.mkl-primary-menu');
```

### 5.2 CSS Files (`style.css`)

When using colon-style custom classes or IDs, escape each literal colon with a single backslash in CSS selectors.

Class example:

HTML:

```html
<nav class="mkl:primary-menu">
```

CSS:

```css
.mkl\:primary-menu {
    /* Styles */
}
```

ID example:

HTML:

```html
<nav id="mkl:primary-menu">
```

CSS:

```css
#mkl\:primary-menu {
    /* Styles */
}
```

The backslash is only part of the CSS selector syntax. It does not change the actual HTML class or ID value.

### 5.3 JavaScript Strings (`controller.ts`)

When writing colon-style selectors inside JavaScript strings, use double backslashes to represent a literal backslash.

Class example:

```ts
element.querySelector('.mkl\\:primary-menu');
```

ID example:

```ts
document.querySelector('#mkl\\:primary-menu');
```

The distinction is important:

- CSS source: `\:`
  - Example: `.mkl\:primary-menu`
- JavaScript string: `\\`
  - Example: `'.mkl\\:primary-menu'`

Do not write the following JavaScript selector:

```ts
element.querySelector('.mkl\:primary-menu');
```

In a JavaScript string literal, `\:` is just `:` (the backslash is dropped), so the selector reaches the engine unescaped and `querySelector` throws a `SyntaxError`.

Escaping is only needed in selector strings (`querySelector`, `querySelectorAll`, `closest`, `matches`). APIs that take a raw name, such as `classList.add/remove/toggle/contains`, `getElementById`, and `getAttribute`/`setAttribute`, use the literal value with no backslash. For example: `el.classList.add('mkl:hidden')` and `document.getElementById('mkl:primary-menu')`.

### 5.4 Prefer `data-*` Hooks or Element References

Inside `controller.ts`, prefer querying `data-*` attributes or using direct element references instead of relying on class selectors for JavaScript behavior.

Example:

Template:

```tsx
<nav className="mkl-primary-menu" data-primary-menu>
    <ul data-primary-menu-list>
        <li data-primary-menu-indicator />
        <li data-primary-menu-item>
            <a data-primary-menu-link href="./index.html">
                Home
            </a>
        </li>
    </ul>
</nav>
```

Controller:

```ts
const list = element.querySelector('[data-primary-menu-list]');
const indicator = element.querySelector('[data-primary-menu-indicator]');
const links = element.querySelectorAll('[data-primary-menu-link]');
```

Benefits:

- No colon escaping.
- CSS class names can change without breaking controller selectors.
- Behavior hooks remain explicit and independent of visual styling.
- Easier component refactoring and maintenance.

Use `data-*` attributes for behavior and custom classes for styling whenever practical.

### 5.5 When No Prefix Is Configured

When no Tailwind prefix is configured:

- Do not add a Site prefix to Tailwind utilities.
- Use the Site's established unprefixed custom naming convention.
- Prefer colon-free custom class and ID names.
- No CSS or JavaScript escaping is required for these names.

---

## 6. Isolation & Third-Party Libraries

### 6.1 No CSS Modules or Hashed Class Names

- Do not use CSS Modules or generated hashed class names for component or page styling.
- Keep final HTML class names readable and predictable.
- Style isolation relies on naming conventions, namespaces, and scoped selectors rather than generated class names.

### 6.2 Do Not Alter Third-Party Library Classes

- Never force-rename, prefix, or modify class names owned by third-party libraries.
- Examples include:
  - Swiper classes.
  - Three.js overlays.
  - GSAP-related integration elements.
  - External widgets and embedded UI libraries.
- Third-party class names must remain unchanged so their JavaScript and CSS integrations continue to work.

Custom wrapper classes may be added around third-party elements when necessary.

Example:

```tsx
<div className="mkl-product-gallery">
    <div className="swiper">
        <div className="swiper-wrapper">
            {/* Slides */}
        </div>
    </div>
</div>
```

Here, `.mkl-product-gallery` is a Makelier custom class, while `.swiper` and `.swiper-wrapper` remain third-party classes.

### 6.3 Scoping Awareness

- Naming conventions reduce CSS collisions but do not create a Shadow DOM boundary.
- Keep custom selectors scoped to the component or page namespace.
- Avoid broad global selectors such as `div`, `section`, `button`, or `*` in component stylesheets unless there is a clear reason.
- Avoid modifying global styles from component-level stylesheets.
- Prefer selectors scoped to the component root.

Example:

```css
.mkl-product-card {
    .mkl-product-card__title {
        font-size: 20px;
    }

    .mkl-product-card__button {
        cursor: pointer;
    }
}
```

---

## 7. Stylesheet Locations & `bodyClass`

### 7.1 Component Styles

- Component stylesheets must be placed at:

```text
sites/<site>/src/components/<name>/style.css
```

- Import the stylesheet at the top of `template.tsx`:

```tsx
import './style.css';
```

- Components may omit `style.css` when all styling can be handled adequately through Tailwind utilities or supported inline styles.
- Follow `component-rules.md` for component authoring forms, while keeping styling decisions governed by this document.

### 7.2 Page Styles

- Page stylesheets must be placed at:

```text
sites/<site>/src/pages/<name>/style.css
```

- Import the stylesheet in `index.tsx`:

```tsx
import './style.css';
```

- Keep page-specific styles scoped to the page namespace.
- Avoid placing page-specific styles in global stylesheets unless they are intentionally shared.

### 7.3 `bodyClass` (in Page `manifest.json`)

- `bodyClass` supports space-separated class names injected into the `<body>` element.
- When a Tailwind prefix is configured, the recommended convention is to use the Site prefix followed by a hyphen.

Recommended:

```json
{
    "bodyClass": "mkl-samplepage-1"
}
```

CSS:

```css
.mkl-samplepage-1 {
    /* Page-specific styles */
}
```

No escaping is required.

Colon-style names are allowed but not recommended.

Example:

```json
{
    "bodyClass": "mkl:samplepage-1"
}
```

CSS:

```css
.mkl\:samplepage-1 {
    /* Page-specific styles */
}
```

JavaScript selector:

```ts
document.querySelector('.mkl\\:samplepage-1');
```

Unprefixed names are also permitted when following the Site's existing convention:

```json
{
    "bodyClass": "samplepage-1"
}
```

CSS:

```css
.samplepage-1 {
    /* Page-specific styles */
}
```

Follow the existing naming convention of the Site. Do not mix prefixed and unprefixed custom class naming conventions within the same Site.

---

## 8. Inline Styles (`style={{ ... }}`)

Inline styles are a supported, lightweight alternative to `style.css`. However, they do not replace the Tailwind-first approach described in Section 2.

### 8.1 When to Use Inline Styles

Use inline styles when:

- The user explicitly requests inline styles.
- The component is small and a separate stylesheet would be unnecessary overhead.
- A style value is dynamically driven by a component prop or runtime data.
- A dynamic value cannot be reasonably expressed using existing Tailwind utilities.

Example:

```tsx
<div style={{ backgroundColor: color }}>
    Content
</div>
```

### 8.2 Syntax

- Use a JavaScript object.
- Use camelCase CSS property names.
- Write lengths as strings with units.
- Numeric values may be used for CSS properties that accept unitless numbers or React's supported numeric style values.

Example:

```tsx
<div
    style={{
        width: '100%',
        borderRadius: '12px',
        opacity: 0.8,
        zIndex: 10,
    }}
>
    Content
</div>
```

Static HTML output should render inline styles as a normal `style="..."` attribute.

### 8.3 Limits

Inline styles cannot express:

- `:hover` and other pseudo-classes.
- `:focus`, `:active`, and other interaction states.
- `@media` and responsive rules.
- `@keyframes` and CSS animations.
- Complex selector combinations.
- Pseudo-elements such as `::before` and `::after`.

Use Tailwind variants or `style.css` for these requirements.

### 8.4 Specificity and Theming

- Inline styles have high specificity and are difficult to override externally.
- Avoid excessive inline styling on components intended to support theming or external customization.
- Prefer CSS variables or class-based styles when a component requires extensive theme customization.

### 8.5 No Prefix or Escaping Required

Inline styles do not use class names or ID selectors.

Therefore:

- Tailwind prefix rules do not apply.
- CSS selector escaping does not apply.
- JavaScript selector escaping does not apply.

### 8.6 No Duplication

- Do not express the same style both inline and in `style.css`.
- Mixing Tailwind utilities with a small number of inline dynamic values on the same element is acceptable.
- Avoid duplicating static styles across Tailwind utilities, inline styles, and stylesheets.

### 8.7 Third-Party Libraries

- Do not use inline styles to override third-party library-owned elements.
- Use the third-party library's supported configuration or customization API instead.
- Custom wrapper elements may use inline styles when appropriate.

---

## 9. Style Checklist

Before completing a component or page, verify the following:

### Configuration

- [ ] Read the target Site's `src/styles/tailwind.css` to verify the active `prefix(...)`, or confirm that no prefix is configured.
- [ ] Tailwind utilities match the configured prefix.
- [ ] No assumed or hardcoded Tailwind prefix has been introduced without checking the Site configuration.

### Tailwind & Custom Naming

- [ ] Tailwind utilities are used first; custom classes are introduced only where utilities are insufficient.
- [ ] `mkl:` (prefix + colon) is used only for Tailwind utilities; custom classes and IDs use `mkl-` (prefix + hyphen).
- [ ] Custom classes include the component or page name as a namespace.
- [ ] Custom IDs use meaningful component or page namespaces.
- [ ] When a prefix is configured, every project-owned ID uses the configured prefix followed by a hyphen (e.g., `mkl-primary-menu`); no unprefixed custom IDs remain.
- [ ] Every ID reference is updated consistently: `href` fragments, `getElementById`, `querySelector` / `querySelectorAll`, `closest` / `matches`, and component props such as `nextSelector`.
- [ ] No new colon-style custom class or ID names are introduced; retain them only when maintaining existing code, and escape every selector correctly.
- [ ] Prefixed and unprefixed custom naming conventions are not mixed within the same Site.
- [ ] Tailwind utilities and custom class names are correctly distinguished; using `mkl:` utilities alongside `mkl-` custom classes is valid.

### CSS & JavaScript

- [ ] Tailwind prefix precedes all responsive, state, and arbitrary variants (e.g., `mkl:md:flex`).
- [ ] Colon-style custom class and ID selectors escape literal colons with a single backslash in CSS.
- [ ] JavaScript selector strings use double backslashes for colon-style custom class and ID selectors.
- [ ] Prefer `data-*` hooks or direct element references for controller behavior.
- [ ] Component styles are scoped to the component or page namespace.
- [ ] No unnecessary global selectors or styles have been introduced.

### Architecture & Compatibility

- [ ] No CSS Modules or hashed class names are used.
- [ ] Third-party library classes remain unchanged.
- [ ] Component and page stylesheets are placed in their prescribed locations.
- [ ] Stylesheets are imported from the appropriate `template.tsx` or `index.tsx`.
- [ ] `bodyClass` follows the Site's custom naming convention.
- [ ] Inline styles are used only where appropriate and do not duplicate stylesheet rules.

---

## 10. Source of Truth & Related Documents

This document governs all styling decisions in Makelier.

Related documentation and skills must reference this document rather than duplicating its detailed styling rules.

### Related Rule Files

- `component-rules.md`: Must reference this document for component styling, class naming, CSS organization, and inline style rules.
- `page-rules.md`: Must reference this document for page styling, page namespaces, stylesheet locations, and `bodyClass`.
- `site-rules.md`: Must reference this document for Site-wide Tailwind prefix configuration and custom naming consistency.

### Related Skills

- `create-component`: Must read and follow this document before generating or modifying component styles.
- `create-page`: Must read and follow this document before generating or modifying page styles.

### Maintenance Rules

- This document is the only authoritative source for styling conventions.
- Do not copy the full styling rules into related documents or skills.
- Related documents may contain short summaries or direct references to relevant sections.
- When a styling rule changes, update this document first and then update any references that depend on it.
- If another rule file or skill conflicts with this document, this document takes precedence.

