# pjax — Seamless Page Navigation (Standalone Module)

A lightweight, framework-independent pjax utility with no dependencies on animation libraries or application-specific code. Implemented in a single `index.ts` file (~300 lines, zero dependencies).

It does **one thing only**: handle page transitions.

1. Intercept link clicks.
2. Fetch target pages (with caching and hover/focus prefetching).
3. Extract the view element from the fetched HTML and swap it into the container.
4. Synchronize `<title>`, meta description, canonical URL, `<html lang>`, and body classes.
5. Update the browser URL using the History API and handle back/forward navigation.
6. Automatically fall back to a regular page navigation if anything fails.

It knows **nothing about** GSAP, Three.js, navigation highlighting, available pages, or page-specific animations. All of these are integrated externally through `mount()` and a few lifecycle hooks.

---

## 1. Directory Structure

```text
src/
├─ lib/
│  └─ pjax/
│     ├─ index.ts      ← Copy this file to use it in any project
│     └─ README.md
└─ components/
   └─ sample-page-3-main/
      └─ controller.ts ← Only handles integration: fonts, WebGL stage, navigation state
```

> Import it from `controller.ts` using the relative path `../../lib/pjax`. If your build configuration maps `@/` to `src/`, you can also use `@/lib/pjax`.

---

## 2. Get Started in 5 Minutes (Plain HTML, No Application-Specific Code Required)

**Every page remains a complete HTML document** (SEO-friendly, directly accessible, and fully functional even with JavaScript disabled). Each page contains a view element, and links that should use pjax are marked with `data-pjax`.

```html
<!-- about.html / works.html / ... Same structure across pages -->
<head>
  <title>About</title>
</head>
<body>
  <nav>
    <a href="./works.html" data-pjax>Works</a>
    <a href="./about.html" data-pjax>About</a>
  </nav>

  <main id="main">
    <section data-pjax-view>  <!-- Only this element gets replaced -->
      ... Page-specific content ...
    </section>
  </main>
</body>
```

```ts
import { createPjax } from './lib/pjax';

const pjax = createPjax({
    container: '#main',
    mount(key, el) {
        // key = pathname by default, e.g. "/about.html"
        // el  = the newly inserted <section data-pjax-view>
        return {
            enter()   { /* Enter animation */ },
            leave()   { /* Leave animation (navigation waits for it) */ },
            destroy() { /* Clean up listeners, timers, and animations */ },
        };
    },
});

pjax.start();
```

All three methods returned by `mount()` are **optional** and can be synchronous or return Promises. If you don't need animations, simply return nothing:

```ts
createPjax({ container: '#main', mount: () => {} }).start();
```

---

## 3. What Happens During a Page Transition

```text
Link clicked
  │
  ├─ onStart(t)
  ├─ ┬─ Fetch target page (load, with cache)       ┐ In parallel
  │  └─ Current page handle.leave()                ┘
  ├─ Parse HTML and extract the viewSelector element
  ├─ Current page handle.destroy()
  ├─ container.replaceChildren(newElement)
  │    → Reset scroll position
  │    → Synchronize head
  │    → history.pushState
  ├─ onSwap({ el, doc, … })       ← Update navigation and set initial states
  ├─ mount(key, el)               ← Create the new page controller
  ├─ handle.enter()
  └─ onDone(…)

  Any step throws an error → onError(err) → Fall back to regular navigation
```

---

## 4. Configuration Options

| Option | Type | Default | Description |
|---|---|---|---|
| `container` | `string \| HTMLElement` | **Required** | The container where the view is inserted |
| `mount` | `(key, el, { url, initial }) => PageHandle \| void` | **Required** | Creates the page controller. Called once for the initial page (`initial: true`) and again after every transition |
| `match` | `(url: URL) => K \| null` | Same-origin URLs; key defaults to pathname | Determines which URLs are handled by pjax and provides the page key. Returning `null` triggers regular navigation |
| `initialKey` | `K` | – | Fallback key when `match` cannot resolve the initial page URL |
| `root` | `HTMLElement \| Document` | `document` | Scope for delegated event listeners |
| `linkSelector` | `string` | `a[data-pjax]` | Selector for links to intercept |
| `viewSelector` | `string` | `[data-pjax-view]` | Selector used to extract the view element from fetched pages (also used to find the initial view) |
| `cache` | `boolean` | `true` | Cache fetched pages in memory |
| `prefetch` | `boolean` | `true` | Prefetch pages on `pointerover`, `focusin`, and `touchstart` |
| `load` | `(url) => Promise<string>` | Built-in `fetch` | Custom page loader (e.g. to add request headers or use a different transport) |
| `syncHead` | `boolean \| (doc) => void` | `true` | `true`: synchronize title, description, canonical URL, lang, and body classes; `false`: disable synchronization; function: provide custom synchronization |
| `scroll` | `'window' \| 'container' \| false \| fn` | `'window'` | Controls scroll reset behavior after a transition |
| `busyClass` | `string \| null` | `is-pjax-loading` | Class added to `busyTarget` while a transition is in progress |
| `busyTarget` | `HTMLElement` | `root` if it is an element; otherwise `<html>` | Element that receives the loading class |
| `onStart` | `(t) => void` | – | Called when a transition starts |
| `onSwap` | `({ from, to, el, doc, push }) => void` | – | Called after the new view is inserted into the DOM, **before `mount()`** |
| `onDone` | `(t & { el }) => void` | – | Called after the new page's `enter()` completes |
| `onError` | `(err, t) => boolean \| void` | – | Return `false` to prevent fallback navigation |

### Instance Methods

| Method | Description |
|---|---|
| `start({ waitFor?, enter? })` | Mounts the initial page and starts listening. `waitFor`: wait for a Promise before the initial `enter()` (e.g. font loading). `enter: false`: skip the automatic initial entrance animation. Returns a Promise that resolves after the initial entrance completes |
| `go(href, { push? })` | Programmatically navigate to a URL. Unmatched URLs automatically use regular navigation |
| `prefetch(href)` | Manually prefetch a page into the cache |
| `clearCache()` | Clear the page cache |
| `current` | Current page `{ key, url, el }` |
| `destroy()` | Remove listeners, destroy the current page, and restore `history.scrollRestoration` |

---

## 5. Common Usage Patterns

### 5.1 Custom Route Matching (Mapping URLs to Page Keys)

```ts
// Only handle works.html / about.html, etc. All other URLs use regular navigation.
const KEYS = ['home', 'works', 'about', 'contact'] as const;
type Key = (typeof KEYS)[number];

createPjax<Key>({
    container: '#main',
    match: (url) => {
        const file = url.pathname.split('/').pop()!.replace(/\.html?$/, '');
        return (KEYS as readonly string[]).includes(file) ? (file as Key) : null;
    },
    mount: (key, el) => FACTORIES[key](el),
});
```

The same approach works with WordPress, PHP, and pretty URLs. Simply define your own matching rules:

```ts
match: (url) => (url.pathname.startsWith('/blog/') ? 'blog' : url.pathname === '/' ? 'home' : null)
```

### 5.2 One Controller Per Page (Complete Separation Between Page Logic and pjax)

```ts
type Factory = (el: HTMLElement) => PageHandle;

const FACTORIES: Record<Key, Factory> = {
    home: createHome,       // Each page manages its own animations and WebGL interactions
    works: createWorks,
    about: createAbout,
    contact: createContact,
};

createPjax({ container: '#main', match, mount: (key, el) => FACTORIES[key](el) });
```

The `PageHandle` contract is simple: **everything started inside `mount()` must be fully cleaned up inside `destroy()`** (`removeEventListener`, `gsap.ticker.remove`, `ResizeObserver.disconnect`, `killTweensOf`, etc.). This is essential to prevent memory leaks after repeated page transitions.

### 5.3 Navigation Highlighting, Body State, and Initial View Setup

Navigation highlighting belongs to the site shell, not pjax. Handle it in `onSwap`:

```ts
createPjax({
    ...,
    onSwap: ({ to, el }) => {
        el.style.visibility = 'hidden'; // Keep the new view hidden until enter() to prevent flashing
        document.querySelectorAll('.nav a').forEach((a) =>
            a.classList.toggle('is-active', (a as HTMLElement).dataset.key === to.key));
    },
});
```

### 5.4 Keeping Elements Persistent Across Pages (Player / WebGL Canvas / Navigation)

Simply place these elements **outside** the `container`. pjax only replaces the view inside the container, so everything outside it remains untouched.

In this project, the WebGL stage, navigation, and footer are all persistent elements.

### 5.5 Wait for Fonts or Other Resources Before the Initial Entrance

```ts
await pjax.start({ waitFor: document.fonts.ready });
document.body.removeAttribute('data-boot');
```

### 5.6 Programmatic Navigation

```ts
pjax.go('./works.html');                     // Same behavior as clicking a link
pjax.go('./works.html', { push: false });    // Navigate without adding a history entry
```

### 5.7 Error Handling

```ts
createPjax({
    ...,
    onError(err, { to }) {
        console.warn('pjax failed', to.url.href, err);
        // return false;   // Return false to prevent fallback navigation and handle the error yourself (e.g. show a notification)
    },
});
```

### 5.8 Custom Head Synchronization / Page Loading

```ts
createPjax({
    ...,
    syncHead: (doc) => {                      // Choose exactly what to synchronize
        document.title = doc.title;
        document.querySelector('link[rel=canonical]')?.setAttribute(
            'href', doc.querySelector('link[rel=canonical]')?.getAttribute('href') ?? '');
    },
    load: (url) => fetch(url, { headers: { 'X-Requested-With': 'pjax' } }).then((r) => r.text()),
    cache: false,                              // Disable caching for dynamic content
});
```

### 5.9 Multiple Independent pjax Instances in One Project

Use `root`, `container`, and `linkSelector` to isolate each instance:

```ts
createPjax({ root: sidebarEl, container: sidebarMain, linkSelector: 'a[data-side]', … });
createPjax({ root: document,   container: '#main',    linkSelector: 'a[data-pjax]', … });
```

### 5.10 Page Unload / HMR

```ts
const pjax = createPjax({ … });
pjax.start();

// During development hot module replacement or when tearing down the entire site:
pjax.destroy();
```

---

## 6. Behavioral Details (Things Worth Knowing)

- **Only the view element is replaced.** Scripts inside fetched HTML are not executed. Put page-specific behavior in `mount()` rather than inline scripts in your HTML.
- The following clicks are **not intercepted** and are left to the browser: Ctrl/Cmd/Shift/Alt + click, non-left clicks, `target="_blank"`, links with `download`, cross-origin links, URLs for which `match` returns `null`, and same-page `#anchor` links.
- Navigating to the same page (same pathname + search) does not trigger another transition.
- If another link is clicked while a transition is in progress, only the **most recent request** is kept and executed after the current transition finishes.
- Fallback behavior: for click-triggered navigation or `go()`, pjax calls `location.assign(url)`; for back/forward navigation (where the address bar has already changed), it calls `location.reload()` without adding another history entry.
- The following conditions are treated as failures and trigger fallback navigation: non-2xx HTTP responses, non-HTML responses, missing `viewSelector` elements in fetched pages, or errors thrown by `mount()` / `enter()`. Failed requests are **never added to the cache**.
- By default, `syncHead` replaces body classes while preserving classes added by other scripts after `start()`. Only classes belonging to the previous page are replaced. All body classes present when `start()` is called are considered part of the initial page.
- Calling `start()` sets `history.scrollRestoration` to `manual` to prevent the browser and entrance animations from competing over scroll position. `destroy()` restores the previous setting.

---

## 7. Reusing pjax in Other Projects

1. Copy `lib/pjax/index.ts`.
2. Add a `container` and `viewSelector` element to each page, and mark navigable links with `data-pjax`.
3. Initialize it with `createPjax({ container, mount }).start()`.

There are **zero dependencies**. No GSAP, Three.js, or any project-specific files are required.