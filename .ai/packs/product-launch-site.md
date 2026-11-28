---
name: product-launch-site
type: solution
label: Product launch site
description: A focused marketing website for launching a digital product, SaaS platform, software tool, app or new technology product. Emphasize product value, key features, visual demonstration and conversion.
tags: [product, launch, saas, software, app, technology, startup, marketing]
---

# Product launch site

## Goal and audience

Introduce a product clearly, demonstrate its value and guide visitors toward a specific action such as signing up, requesting access, booking a demo or purchasing.

Visitors include potential users, decision-makers, early adopters and business customers.

## Sections

| Section | Content | Visual | Motion / interaction | Component hints |
|---|---|---|---|---|
| Hero | Product name, main value proposition, supporting text and primary CTA | Bold product presentation with a product screenshot or visual | Product reveal and subtle background movement | hero, product-hero |
| Key Benefits | 3-4 primary user benefits | Clear typography and concise benefit statements | Staggered text reveal | benefit-grid |
| Product Showcase | Product interface, screenshots or product demonstration | Large UI presentation with carefully framed screenshots | Screenshot transitions or interactive preview | product-showcase, device-frame |
| Features | 4-8 core features with descriptions | Modular feature layouts with supporting visuals | Scroll reveal and subtle hover feedback | feature-grid, feature-card |
| Specifications | Supported platforms, integrations, technical details or plans | Structured information layout | Minimal transitions | specification-list |
| Proof / FAQ | Testimonials, customer results, common questions or trust information | Quote layout and accordion | Accordion transitions | testimonials, faq-accordion |
| Conversion CTA | Sign-up, purchase, demo request or early-access action | Strong visual contrast and focused message | Button feedback and form state transitions | cta, signup-form, contact-form |

## Tokens

Default look: dark technology. Use a restrained dark palette, clear typography and a distinctive accent color.

```css
@theme {
  --color-bg: #0e1117;
  --color-surface: #171c25;
  --color-border: #2a3443;
  --color-text: #f3f5f7;
  --color-text-muted: #9aa5b4;
  --color-primary: #78e6d0;
  --color-accent: #78e6d0;
  --radius-card: 12px;
  --font-heading: "Inter", sans-serif;
  --duration-base: 400ms;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}
```

Responsive: product screenshots must remain readable on mobile. Stack feature layouts vertically and keep the primary CTA accessible. Avoid loading large product demonstrations before they are needed.

## Variants

| Variant | Changes relative to the default |
|---|---|
| Clean product | White background, neutral surfaces, restrained accent and clear product screenshots |
| Premium minimal | Dark or light monochrome palette, generous whitespace and refined typography |
| Bold launch | Strong accent colors, oversized headlines and expressive visual transitions |
| Friendly SaaS | Soft colors, rounded surfaces, approachable typography and simple illustrations |

## Motion and interaction principles

- Motion should help visitors understand the product, not obscure its functionality.
- Product demonstrations should be purposeful and lightweight.
- Prefer short transitions for UI states and slightly longer transitions for visual storytelling.
- Avoid endless decorative animations.
- Respect `prefers-reduced-motion`.
- On mobile, use static screenshots or simplified demonstrations when interactive previews are too heavy.
- Interaction logic lives only in a component's `controller.ts`.

## Wizard questions

- **Q1 Style**: "What visual direction should the product launch follow?"
  1. Dark technology (recommended): dark surfaces, crisp typography and a distinctive accent.
  2. Clean product: bright backgrounds, clear layouts and straightforward product presentation.
  3. Premium minimal: refined typography, restrained colors and generous whitespace.
  4. Bold launch: expressive headlines and stronger visual compositions.

- **Q2 Motion level**: "How should the product be demonstrated?"
  1. Subtle motion (recommended): product reveals, simple transitions and hover feedback.
  2. Interactive showcase: animated product previews and interface demonstrations.
  3. Immersive storytelling: scroll-based product narratives and larger visual transitions.

- **Q3 Content and language**: "Please provide the product name, one-line value proposition, target audience, key benefits, feature list, screenshots or product images, pricing (optional), primary CTA and contact details. Which language should the website use? You may skip unavailable information."

## Content needed from the user

Product name, tagline, value proposition, target audience, product description, key benefits, feature descriptions, product screenshots, supported platforms, integrations, pricing (optional), testimonials or proof points (optional), primary CTA destination, contact details and website language.

Missing information should remain clearly identifiable placeholders. Never invent customer numbers, performance claims, testimonials, integrations, pricing or product capabilities.

## Rules and acceptance

- The product value proposition must be clear in the first screen.
- The primary CTA must be visually prominent and functional.
- Product screenshots must be genuine or clearly marked as placeholders.
- Avoid unsupported product claims and fabricated testimonials.
- Respect `prefers-reduced-motion`.
- Done when: visitors understand what the product does and why it matters; key features are easy to scan; the primary conversion action is clear; mobile layouts work; build and typecheck pass.