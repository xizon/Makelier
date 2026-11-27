import { defineConfig } from 'vite';
/*
TEST: npx vite --config tests/preact-browser/vite.preact.config.ts

====================================================================

 Template.tsx
        │
        ▼
     Preact h()
        │
        ▼
preact-render-to-string
        │
        ▼
    HTML String
        │
        ▼
WordPress createElement(RawHTML)
        │
        ▼
    React Element
        │
        ▼
   Gutenberg save()
        │
        ▼
  Static HTML Output
        │
        ▼
  WordPress Post Content
*/


export default defineConfig({
    root: 'tests/preact-browser',
});