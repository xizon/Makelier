---
name: restaurant-hospitality-site
type: solution
label: Restaurant and hospitality site
description: A visual business website for restaurants, cafes, bars, boutique hotels and hospitality brands. Focus on atmosphere, offerings, location and reservations or enquiries.
tags: [restaurant, cafe, hospitality, hotel, dining, food, travel, reservation]
---

# Restaurant and hospitality site

## Goal and audience

Communicate the atmosphere and experience of the venue while making essential visitor information easy to find.

Visitors should quickly understand what the venue offers, where it is located, when it is open and how to make a reservation or enquiry.

## Sections

| Section | Content | Visual | Motion / interaction | Component hints |
|---|---|---|---|---|
| Hero | Venue name, short introduction and primary reservation CTA | Atmospheric photography, large typography and strong composition | Slow image reveal and subtle text entrance | hero, image-hero |
| About / Experience | Venue story, concept and atmosphere | Editorial text paired with venue photography | Gentle fade and image reveal | about, editorial-text |
| Menu / Offerings | Menu categories, signature dishes or hospitality services | Clean menu layout with supporting photography | Subtle hover feedback | menu, offering-list |
| Gallery | Interior, food, rooms or guest experience photography | Image grid or editorial gallery | Image reveal and lightbox interaction | gallery, image-grid |
| Highlights | Signature experiences, facilities or special offerings | Structured feature cards | Staggered entrance | feature-grid |
| Location / Hours | Address, opening hours, map and practical visitor information | Clear information layout with map or location image | Map interaction and link feedback | location, opening-hours |
| Reservation / Contact | Reservation link, phone, email or enquiry form | Prominent CTA and simple contact layout | Form validation and button feedback | reservation, contact-form, footer |


## Tokens

Default look: warm modern. Use natural tones, warm surfaces and photography that communicates the atmosphere of the venue.

```css
@theme {
  --color-bg: #f6f1e8;
  --color-surface: #fffdf9;
  --color-text: #29231f;
  --color-text-muted: #81776e;
  --color-primary: #a45e3b;
  --color-accent: #a45e3b;
  --radius-card: 8px;
  --font-heading: "Inter", sans-serif;
  --duration-base: 400ms;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}
```

Responsive: prioritize clear opening hours, location and reservation actions. On mobile, keep important visitor information easy to access and ensure menus are readable without horizontal scrolling.

## Variants

| Variant | Changes relative to the default |
|---|---|
| Fine dining | Dark or warm neutral surfaces, elegant typography and refined photography |
| Cafe casual | Light background, friendly typography and relaxed imagery |
| Boutique retreat | Natural colors, spacious layouts and immersive photography |
| Contemporary urban | Strong contrast, clean grids and modern typography |

## Motion and interaction principles

- Photography should communicate the venue's atmosphere.
- Keep reservation and contact interactions direct and easy to use.
- Avoid motion that delays access to essential information.
- Use simple gallery transitions and restrained hover effects.
- Respect `prefers-reduced-motion`.
- Ensure all essential information is available without hover.
- Interaction logic lives only in a component's `controller.ts`.

## Wizard questions

- **Q1 Style**: "What atmosphere should the website communicate?"
  1. Warm modern (recommended): natural colors, welcoming imagery and clean layouts.
  2. Fine dining: refined typography, elegant photography and sophisticated details.
  3. Cafe casual: relaxed compositions and friendly visual language.
  4. Boutique retreat: spacious layouts and immersive photography.

- **Q2 Motion level**: "How should visitors explore the venue?"
  1. Subtle motion (recommended): gentle image reveals and simple hover feedback.
  2. Immersive gallery: larger image transitions and an interactive photo experience.
  3. Editorial storytelling: scroll-based transitions that introduce the venue and its offerings.

- **Q3 Content and language**: "Please provide the venue name, introduction, menu or services, photography, address, opening hours, reservation method and contact details. Which language should the website use? You may skip unavailable information."

## Content needed from the user

Venue name, tagline, introduction, venue type, menu or service descriptions, signature offerings, photography, address, opening hours, reservation URL or method, phone, email, social links and website language.

Missing details should remain placeholders. Never invent addresses, opening hours, menu prices, reservation availability or customer reviews.

## Rules and acceptance

- Location, opening hours and reservation details must be easy to find.
- Do not fabricate menu items, prices or venue information.
- Ensure forms and reservation links have clear feedback.
- Maintain readable menu layouts on mobile.
- Respect `prefers-reduced-motion`.
- Done when: visitors can understand the venue quickly; offerings are clear; location and reservation information are accessible; mobile experience works; build and typecheck pass.