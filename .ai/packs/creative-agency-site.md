---
name: creative-agency-site
type: solution
label: Creative agency site
description: A portfolio-led website for creative agencies, branding studios, digital studios and marketing teams that need to present services, selected work and their creative approach. Do not use for individual designer portfolios or product-focused SaaS websites.
tags: [agency, creative, branding, digital-studio, marketing, services, portfolio]
---

# Creative agency site

## Goal and audience

Present the agency as a distinctive creative partner. Visitors should quickly understand the agency's capabilities, creative philosophy and quality of work, then feel confident starting a conversation.

The audience includes potential clients, brand managers, startup founders and businesses looking for creative or digital services.

## Sections

| Section | Content | Visual | Motion / interaction | Component hints |
|---|---|---|---|---|
| Hero | Agency positioning, headline, short introduction and primary CTA | Oversized typography, expressive composition, strong visual identity | Headline reveal, subtle image movement | hero, text-reveal |
| Selected Work | 3-6 featured projects with images, titles and categories | Large editorial project layouts, alternating image sizes | Image reveal on scroll; project hover transitions | project-grid, project-showcase |
| Services | Branding, design, development, strategy or other agency services | Clear service groups with strong typography | Staggered entrance; subtle hover feedback | service-grid, service-list |
| Approach | Creative philosophy, process and working principles | Editorial text layout, numbered stages or visual timeline | Scroll-based text reveal | process, timeline |
| About | Agency introduction, team or studio information | Photography-led composition with supporting text | Gentle image parallax | about, team |
| Testimonials | Client feedback and selected collaborations | Minimal quote layout with client attribution | Simple fade transition | testimonials, quote |
| Contact | Contact message, email and social links | Large typography and prominent contact details | Animated link underline | contact, footer |

## Tokens

Default look: dark editorial. Use a restrained palette with a strong visual accent. Put these in the target Site's global styles under `@theme`, following `.ai/knowledge/style-rules.md`.

```css
@theme {
  --color-bg: #101010;
  --color-surface: #191919;
  --color-text: #f5f5f0;
  --color-text-muted: #a3a39b;
  --color-primary: #d5ff3f;
  --color-accent: #d5ff3f;
  --radius-card: 4px;
  --font-heading: "Inter", sans-serif;
  --duration-base: 500ms;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}
```

Responsive: use large but controlled typography; preserve image proportions; stack editorial layouts vertically on mobile. Avoid horizontal overflow from oversized text or decorative elements.

## Variants

| Variant | Changes relative to the default |
|---|---|
| Light editorial | Warm white background, dark typography, restrained neutral colors and generous whitespace |
| Minimal business | White background, structured sections, smaller typography and subtle transitions |
| Experimental studio | Asymmetric layouts, oversized typography, layered imagery and more expressive motion |
| Colorful creative | Bright accent colors, playful graphic elements and stronger visual contrast |

## Motion and interaction principles

- Motion should reinforce the agency's creative identity without competing with project content.
- Use scroll reveals, image masks and typography transitions selectively.
- Avoid applying the same animation to every section.
- Keep transitions generally within 250-700ms.
- Respect `prefers-reduced-motion`.
- On mobile, simplify complex pointer-based and scroll-driven effects.
- Interaction logic lives only in a component's `controller.ts`.

## Wizard questions

- **Q1 Style**: "What visual direction should the agency website follow?"
  1. Dark editorial (recommended): bold typography, immersive imagery and a distinctive creative identity.
  2. Light editorial: spacious layouts, refined typography and a sophisticated visual presentation.
  3. Minimal business: structured, professional and understated.
  4. Experimental studio: expressive layouts and unconventional visual compositions.

- **Q2 Motion level**: "How expressive should the website interactions be?"
  1. Subtle motion (recommended): refined reveals, hover feedback and gentle transitions.
  2. Immersive storytelling: image sequences and scroll-based visual narratives.
  3. Experimental motion: stronger typography, masks and layered transitions.

- **Q3 Content and language**: "Please provide the agency name, introduction, services, selected projects, working approach, client testimonials (optional), contact details and preferred website language. You may skip anything that is not available."

## Content needed from the user

Agency name, one-line positioning, introduction, service descriptions, project titles and images, project summaries, working process, team information (optional), testimonials (optional), contact email, social links and website language.

Missing information should remain as clearly identifiable placeholders. Never invent client names, project results or testimonials.

## Rules and acceptance

- Selected work must be the primary visual focus.
- Do not use generic corporate layouts that weaken the agency's identity.
- Maintain readable typography and sufficient contrast.
- Do not invent clients, awards or business achievements.
- Respect `prefers-reduced-motion`.
- Done when: the agency's positioning is immediately understandable; featured work is visually prominent; contact is easy to find; mobile layouts work without horizontal scrolling; build and typecheck pass.