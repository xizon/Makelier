---
name: architecture-interior-site
type: solution
label: Architecture and interior studio site
description: A visual portfolio website for architecture studios, interior designers, landscape architects and spatial design practices. Focus on project photography, design philosophy and professional credibility.
tags: [architecture, interior, design-studio, landscape, projects, editorial, portfolio]
---

# Architecture and interior studio site

## Goal and audience

Showcase the studio's design quality through carefully presented projects, architectural photography and a clear design philosophy.

Visitors include property developers, private clients, commercial businesses and people looking for architecture or interior design services.

## Sections

| Section | Content | Visual | Motion / interaction | Component hints |
|---|---|---|---|---|
| Hero | Studio name, positioning and featured project image | Full-width architectural image with minimal typography | Slow image reveal and subtle text entrance | hero, image-hero |
| Selected Projects | 4-8 projects with images, names, locations and project types | Large image grid or editorial project list | Image masks and subtle hover transitions | project-grid, project-gallery |
| Studio | Studio introduction, philosophy and design approach | Spacious editorial typography and studio photography | Gentle text reveal | about, editorial-text |
| Expertise | Architecture, interior design, planning or other services | Minimal typography-led service list | Staggered entrance | service-list |
| Featured Project | One detailed project with description, specifications and multiple images | Immersive image sequence with generous whitespace | Scroll-based image transitions | project-detail, image-gallery |
| Journal / Press | Articles, publications, awards or studio news | Editorial list with thumbnails | Subtle hover movement | journal, article-list |
| Contact | Studio address, email, phone and enquiry details | Minimal contact layout | Underline and opacity transitions | contact, footer |

## Tokens

Default look: gallery minimal. Use warm neutral colors and restrained typography to let architectural photography lead the experience.

```css
@theme {
  --color-bg: #f2f0ea;
  --color-surface: #ffffff;
  --color-text: #24231f;
  --color-text-muted: #77756e;
  --color-primary: #8b806d;
  --color-accent: #8b806d;
  --radius-card: 2px;
  --font-heading: "Inter", sans-serif;
  --duration-base: 600ms;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}
```

Responsive: prioritize large project imagery, consistent image ratios and generous spacing. On mobile, use a single-column project layout and avoid oversized fixed-height sections.

## Variants

| Variant | Changes relative to the default |
|---|---|
| Warm editorial | Cream background, warm gray typography and natural material photography |
| Contemporary studio | White background, precise grid, modern sans-serif typography and restrained accents |
| Dark monochrome | Near-black background, muted typography and high-contrast architectural imagery |
| Art gallery | More experimental composition, oversized project images and minimal supporting text |

## Motion and interaction principles

- Photography and spatial composition take priority over animation.
- Prefer slow image reveals, restrained transitions and subtle parallax.
- Avoid excessive motion that distracts from project details.
- Keep project navigation simple and predictable.
- Respect `prefers-reduced-motion`.
- On mobile, replace complex parallax with static image presentation.
- Interaction logic lives only in a component's `controller.ts`.

## Wizard questions

- **Q1 Style**: "Which visual direction best represents your studio?"
  1. Gallery minimal (recommended): warm neutrals, generous whitespace and photography-led layouts.
  2. Warm editorial: natural materials, soft colors and refined typography.
  3. Contemporary studio: clean grids, white backgrounds and precise layouts.
  4. Dark monochrome: dramatic imagery and understated dark surfaces.

- **Q2 Motion level**: "How should visitors experience the projects?"
  1. Subtle image transitions (recommended): slow reveals and restrained hover effects.
  2. Immersive project storytelling: large image sequences and scroll-based transitions.
  3. Editorial navigation: smooth transitions between project sections and pages.

- **Q3 Content and language**: "Please provide the studio name, introduction, services, selected projects, project descriptions, locations, photography and contact details. Which language should the website use? You may skip unavailable information."

## Content needed from the user

Studio name, positioning, introduction, services, project names, project categories, project locations, completion dates (optional), project descriptions, architectural photography, press or awards (optional), contact details and website language.

Missing project information should use placeholders. Never invent project locations, construction details, awards or client names.

## Rules and acceptance

- Project photography must remain the primary focus.
- Use consistent image treatment and avoid unnecessary decorative effects.
- Preserve image proportions and avoid layout shifts.
- Do not invent project specifications or professional credentials.
- Respect `prefers-reduced-motion`.
- Done when: projects are easy to browse; imagery is presented consistently; the studio's design philosophy is clear; mobile layouts remain usable; build and typecheck pass.