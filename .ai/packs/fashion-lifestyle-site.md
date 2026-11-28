---
name: fashion-lifestyle-site
type: solution
label: Fashion and lifestyle brand site
description: A visual brand website for fashion labels, clothing brands, beauty products and lifestyle businesses. Focus on campaign imagery, collections, brand identity and product presentation.
tags: [fashion, lifestyle, clothing, beauty, brand, campaign, collection, editorial]
---

# Fashion and lifestyle brand site

## Goal and audience

Build a distinctive brand experience that communicates the brand's identity, visual language and product value through campaign imagery and editorial storytelling.

Visitors include potential customers, brand followers, retail partners and people discovering the brand for the first time.


## Sections

| Section | Content | Visual | Motion / interaction | Component hints |
|---|---|---|---|---|
| Hero Campaign | Campaign headline, brand message and featured image or video | Full-screen campaign photography with minimal text | Image reveal and subtle text entrance | hero, campaign-hero |
| Collection | Featured products or collection categories | Editorial product grid with large imagery | Image hover transitions and subtle product reveals | product-grid, collection |
| Brand Story | Brand background, values and creative direction | Editorial typography with supporting imagery | Text reveal and image movement | brand-story, editorial-text |
| Featured Details | Product materials, craftsmanship or key characteristics | Close-up photography and structured information | Image sequence and subtle transitions | product-feature, image-gallery |
| Lookbook | Campaign images, seasonal collections and styled looks | Asymmetric editorial image layout | Scroll-based image reveals | lookbook, gallery |
| Journal | Brand news, interviews, stories or articles | Minimal editorial article list | Subtle hover feedback | journal, article-list |
| Shop / Contact | Shop link, store details, social links or enquiry information | Clear CTA with brand-consistent styling | Button and link feedback | shop-cta, contact, footer |

## Tokens

Default look: luxury editorial. Use warm neutrals, understated typography and carefully controlled accent colors.

```css
@theme {
  --color-bg: #f4f1ec;
  --color-surface: #ffffff;
  --color-text: #24211f;
  --color-text-muted: #827b74;
  --color-primary: #a87962;
  --color-accent: #a87962;
  --radius-card: 2px;
  --font-heading: "Inter", sans-serif;
  --duration-base: 500ms;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}
```

Responsive: use large campaign imagery while preserving subject visibility on mobile. Product grids should adapt to smaller screens without compressing product photography.

## Variants

| Variant | Changes relative to the default |
|---|---|
| Modern minimal | White or light gray background, clean grid and restrained typography |
| Streetwear bold | Dark surfaces, strong typography, high-contrast imagery and graphic accents |
| Organic lifestyle | Earthy colors, natural textures, soft imagery and relaxed layouts |
| Editorial luxury | Large serif typography, sophisticated spacing and restrained visual details |

## Motion and interaction principles

- Campaign imagery should lead the visual experience.
- Use image transitions and typography animation to reinforce brand storytelling.
- Avoid excessive motion that competes with product photography.
- Product hover effects should remain subtle and predictable.
- Respect `prefers-reduced-motion`.
- On mobile, simplify hover-only interactions into accessible tap interactions.
- Interaction logic lives only in a component's `controller.ts`.

## Wizard questions

- **Q1 Style**: "Which visual direction best matches your brand?"
  1. Luxury editorial (recommended): refined typography, warm neutrals and sophisticated imagery.
  2. Modern minimal: clean layouts and understated visual details.
  3. Streetwear bold: expressive typography and high-contrast visual identity.
  4. Organic lifestyle: natural colors, textures and relaxed compositions.

- **Q2 Motion level**: "How should the campaign experience feel?"
  1. Subtle motion (recommended): gentle image reveals and refined hover transitions.
  2. Immersive editorial: large image sequences and scroll-based storytelling.
  3. Expressive motion: stronger transitions and more dynamic visual compositions.

- **Q3 Content and language**: "Please provide the brand name, brand introduction, products or collections, campaign images, product highlights, shop or social links and contact details. Which language should the website use? You may skip unavailable information."

## Content needed from the user

Brand name, tagline, introduction, brand story, product or collection names, product descriptions, campaign photography, product images, shop URL (optional), store details (optional), social links, contact details and website language.

Missing product details should remain placeholders. Never invent prices, materials, product availability, sustainability claims or brand history.

## Rules and acceptance

- Preserve a consistent brand identity throughout the website.
- Campaign and product imagery must remain visually prominent.
- Do not use generic e-commerce layouts unless the user specifically requests a store.
- Avoid unsupported product claims and fabricated brand history.
- Respect `prefers-reduced-motion`.
- Done when: the brand identity is immediately recognizable; collections are easy to explore; images display correctly on mobile; shop or contact actions are clear; build and typecheck pass.