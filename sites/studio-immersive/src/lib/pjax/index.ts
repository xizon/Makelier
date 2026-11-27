/**
 * pjax — a tiny, framework-agnostic "no-refresh page navigation" helper.
 *
 * What it does (and ONLY this):
 *   1. intercepts clicks on matching links (default: `a[data-pjax]`)
 *   2. fetches the target page (cached + hover/focus prefetch)
 *   3. extracts the view element from the fetched HTML and swaps it into a container
 *   4. syncs <title>, meta description, canonical, <html lang>, body classes
 *   5. updates the address bar (History API) and handles back/forward
 *   6. falls back to a normal navigation on ANY failure
 *
 * What it does NOT know about: GSAP, Three.js, your nav bar, your animations,
 * your view names. Those are plugged in through `mount()` (one page handle per
 * view) and the optional hooks (`onStart` / `onSwap` / `onDone` / `onError`).
 *
 * Note: <script> tags inside the fetched page are NOT executed (the swapped
 * node comes from DOMParser). Put behaviour in `mount()` instead.
 */

/* ------------------------------------------------------------------------ */
/* Types                                                                    */
/* ------------------------------------------------------------------------ */

/** What `mount()` returns: the lifecycle of one page view. All members optional. */
export interface PageHandle {
    /** Play the entrance. The returned promise resolves when it has finished. */
    enter?(): void | Promise<void>;
    /** Play the exit. Navigation waits for it (in parallel with the fetch). */
    leave?(): void | Promise<void>;
    /** Stop everything the page started (tweens, listeners, observers, timers). */
    destroy?(): void;
}

export interface PjaxPageInfo<K extends string = string> {
    key: K;
    url: URL;
    el: HTMLElement;
}

export interface PjaxTransition<K extends string = string> {
    from: PjaxPageInfo<K>;
    to: { key: K; url: URL };
    /** `true` for a link click / `go()`, `false` for back/forward. */
    push: boolean;
}

export interface PjaxSwapEvent<K extends string = string> extends PjaxTransition<K> {
    /** The new view element, already inside the container, before `mount()` runs. */
    el: HTMLElement;
    /** The parsed fetched document (read extra things from it if you need). */
    doc: Document;
}

export interface PjaxOptions<K extends string = string> {
    /** Where the views are swapped. Selector or element. Required. */
    container: string | HTMLElement;

    /**
     * Creates the controller for a view. Called once for the initial page
     * (`initial: true`) and after every swap. Everything the handle starts
     * must be stopped in its `destroy()`.
     */
    mount(key: K, el: HTMLElement, info: { url: URL; initial: boolean }): PageHandle | void;

    /**
     * Decides which URLs pjax handles and gives them a key.
     * Return `null` to let the browser navigate normally.
     * Default: every same-origin URL, keyed by its pathname.
     */
    match?(url: URL): K | null;

    /** Fallback key of the initial page when `match(location)` returns null. */
    initialKey?: K;

    /** Element delegating click/prefetch events. Default: `document`. */
    root?: HTMLElement | Document;
    /** Links to intercept. Default: `a[data-pjax]`. */
    linkSelector?: string;
    /** The element taken out of the fetched page. Default: `[data-pjax-view]`. */
    viewSelector?: string;

    /** Cache fetched pages in memory. Default: `true`. */
    cache?: boolean;
    /** Prefetch on pointer-over / focus / touchstart. Default: `true`. */
    prefetch?: boolean;
    /** Custom page loader (auth headers, other transport...). Must resolve to HTML text. */
    load?(url: string): Promise<string>;

    /**
     * Head/body syncing. `true` (default): title, meta description, canonical,
     * html lang and body classes. `false`: do nothing. Function: do it yourself.
     */
    syncHead?: boolean | ((doc: Document) => void);

    /** Scroll reset after a swap. Default: `'window'`. */
    scroll?: 'window' | 'container' | false | ((container: HTMLElement) => void);

    /** Class toggled while a navigation is in flight. Default: `is-pjax-loading`. */
    busyClass?: string | null;
    /** Element receiving `busyClass`. Default: `root` if it is an element, else <html>. */
    busyTarget?: HTMLElement;

    /** Before the exit animation / fetch starts. */
    onStart?(t: PjaxTransition<K>): void;
    /** New view is in the DOM, head synced, history updated; `mount()` has NOT run yet. */
    onSwap?(e: PjaxSwapEvent<K>): void;
    /** New view mounted and its `enter()` finished. */
    onDone?(t: PjaxTransition<K> & { el: HTMLElement }): void;
    /** Something failed. Return `false` to suppress the hard-navigation fallback. */
    onError?(err: unknown, t: { to: { key: K; url: URL }; push: boolean }): boolean | void;
}

export interface Pjax<K extends string = string> {
    /**
     * Mounts the initial page and starts listening.
     * @param opts.waitFor  wait for this (fonts, assets...) before the first `enter()`
     * @param opts.enter    set `false` to skip the first `enter()` entirely
     * Resolves after the first entrance has finished.
     */
    start(opts?: { waitFor?: PromiseLike<unknown>; enter?: boolean }): Promise<void>;
    /** Navigate programmatically. Same-page and unmatched URLs are handled for you. */
    go(href: string, opts?: { push?: boolean }): Promise<void>;
    /** Warm the cache for a URL. */
    prefetch(href: string): void;
    clearCache(): void;
    /** The page currently shown (null before `start()`). */
    readonly current: PjaxPageInfo<K> | null;
    /** Remove listeners and destroy the current page. */
    destroy(): void;
}

/* ------------------------------------------------------------------------ */
/* Implementation                                                           */
/* ------------------------------------------------------------------------ */

const samePath = (a: URL, b: URL) => a.pathname === b.pathname && a.search === b.search;

export function createPjax<K extends string = string>(options: PjaxOptions<K>): Pjax<K> {
    const {
        mount,
        match = (url: URL) => (url.origin === location.origin ? (url.pathname as K) : null),
        initialKey,
        root = document,
        linkSelector = 'a[data-pjax]',
        viewSelector = '[data-pjax-view]',
        cache: useCache = true,
        prefetch: usePrefetch = true,
        load: customLoad,
        syncHead = true,
        scroll = 'window',
        busyClass = 'is-pjax-loading',
    } = options;

    const busyTarget =
        options.busyTarget ?? (root instanceof HTMLElement ? root : document.documentElement);

    let container!: HTMLElement;
    let current: (PjaxPageInfo<K> & { handle: PageHandle }) | null = null;
    let started = false;
    let destroyed = false;
    let busy = false;
    let pending: { url: URL; push: boolean } | null = null;
    let prevScrollRestoration: ScrollRestoration | null = null;
    let pageBodyClasses: string[] = [];
    const pages = new Map<string, Promise<string>>();

    /** Only same-origin URLs can ever be handled. */
    const resolve = (url: URL): K | null => (url.origin === location.origin ? match(url) : null);

    /* ---- loading ----------------------------------------------------------- */

    const fetchHtml =
        customLoad ??
        (async (href: string) => {
            const r = await fetch(href, { credentials: 'same-origin' });
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            const type = r.headers.get('content-type') || '';
            if (type && !/html/i.test(type)) throw new Error(`Not an HTML page (${type})`);
            return r.text();
        });

    const load = (url: URL): Promise<string> => {
        const u = new URL(url.href);
        u.hash = '';
        const href = u.href;
        if (!useCache) return fetchHtml(href);
        let p = pages.get(href);
        if (!p) {
            p = fetchHtml(href);
            p.catch(() => pages.delete(href)); // never cache a failure
            pages.set(href, p);
        }
        return p;
    };

    /* ---- head / scroll ------------------------------------------------------ */

    const defaultSyncHead = (doc: Document) => {
        if (doc.title) document.title = doc.title;

        const copyAttr = (selector: string, attr: string) => {
            const next = doc.querySelector(selector);
            const here = document.querySelector(selector);
            const value = next?.getAttribute(attr);
            if (here && value != null) here.setAttribute(attr, value);
        };
        copyAttr('meta[name="description"]', 'content');
        copyAttr('link[rel="canonical"]', 'href');

        const lang = doc.documentElement.getAttribute('lang');
        if (lang) document.documentElement.setAttribute('lang', lang);

        // Swap only the classes that belonged to the previous page, so classes
        // added by other scripts on <body> survive.
        const next = Array.from(doc.body.classList);
        document.body.classList.remove(...pageBodyClasses);
        document.body.classList.add(...next);
        pageBodyClasses = next;
    };

    const resetScroll = () => {
        if (scroll === false) return;
        if (typeof scroll === 'function') scroll(container);
        else if (scroll === 'container') container.scrollTop = 0;
        else window.scrollTo(0, 0);
    };

    const setBusy = (on: boolean) => {
        if (busyClass) busyTarget.classList.toggle(busyClass, on);
    };

    /* ---- navigation ----------------------------------------------------------- */

    /** Leave pjax: a real navigation. After a popstate the URL is already the target, so reload. */
    const hardNavigate = (url: URL, push: boolean) => {
        if (push) location.assign(url.href);
        else location.reload();
    };

    async function go(href: string, opts: { push?: boolean } = {}): Promise<void> {
        const push = opts.push ?? true;
        const url = new URL(href, location.href);
        if (!started || destroyed || !current) return;

        const key = resolve(url);
        if (key == null) {
            hardNavigate(url, push);
            return;
        }
        if (busy) {
            pending = { url, push }; // keep only the latest request
            return;
        }
        if (samePath(url, current.url)) {
            // Same page: nothing to swap. Let #hash links scroll as usual.
            if (push && url.hash) location.hash = url.hash;
            return;
        }

        busy = true;
        const from = current;
        const transition: PjaxTransition<K> = {
            from: { key: from.key, url: from.url, el: from.el },
            to: { key, url },
            push,
        };

        try {
            setBusy(true);
            options.onStart?.(transition);

            // Fetch and exit animation run in parallel.
            const [html] = await Promise.all([load(url), Promise.resolve(from.handle.leave?.())]);

            const doc = new DOMParser().parseFromString(html, 'text/html');
            const incoming = doc.querySelector<HTMLElement>(viewSelector);
            if (!incoming) throw new Error(`No "${viewSelector}" found in the fetched page`);

            from.handle.destroy?.();
            const el = document.importNode(incoming, true) as HTMLElement;
            container.replaceChildren(el);
            resetScroll();

            if (typeof syncHead === 'function') syncHead(doc);
            else if (syncHead) defaultSyncHead(doc);
            if (push) history.pushState({ pjax: true, key }, '', url.href);

            const next = { key, url, el, handle: {} as PageHandle };
            current = next;
            options.onSwap?.({ ...transition, el, doc });

            next.handle = mount(key, el, { url, initial: false }) ?? {};
            setBusy(false);
            await next.handle.enter?.();
            options.onDone?.({ ...transition, el });
        } catch (err) {
            setBusy(false);
            if (options.onError?.(err, { to: transition.to, push }) !== false) hardNavigate(url, push);
            return;
        } finally {
            busy = false;
            setBusy(false);
        }

        if (pending) {
            const next = pending;
            pending = null;
            void go(next.url.href, { push: next.push });
        }
    }

    /* ---- events --------------------------------------------------------------- */

    const linkOf = (e: Event) => (e.target as Element | null)?.closest?.<HTMLAnchorElement>(linkSelector) ?? null;

    const onClick = (e: Event) => {
        const ev = e as MouseEvent;
        if (ev.defaultPrevented || ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
        const a = linkOf(e);
        if (!a) return;
        if ((a.target && a.target !== '_self') || a.hasAttribute('download')) return;
        const url = new URL(a.href, location.href);
        if (resolve(url) == null) return;
        // Pure #hash link on the current page: let the browser scroll.
        if (current && samePath(url, current.url) && url.hash) return;
        ev.preventDefault();
        void go(url.href, { push: true });
    };

    const onPrefetch = (e: Event) => {
        const a = linkOf(e);
        if (!a) return;
        const url = new URL(a.href, location.href);
        if (resolve(url) != null) load(url).catch(() => undefined);
    };

    const onPop = () => {
        void go(location.href, { push: false });
    };

    /* ---- public API ----------------------------------------------------------- */

    return {
        async start(opts = {}) {
            if (started) return;
            const c =
                typeof options.container === 'string'
                    ? document.querySelector<HTMLElement>(options.container)
                    : options.container;
            if (!c) throw new Error('[pjax] container not found');
            container = c;

            const el = container.querySelector<HTMLElement>(viewSelector);
            if (!el) throw new Error(`[pjax] initial view "${viewSelector}" not found in container`);

            const url = new URL(location.href);
            const key = resolve(url) ?? initialKey;
            if (key == null) throw new Error('[pjax] cannot work out the initial key; pass `initialKey`');

            started = true;
            pageBodyClasses = Array.from(document.body.classList);
            if ('scrollRestoration' in history) {
                prevScrollRestoration = history.scrollRestoration;
                history.scrollRestoration = 'manual';
            }
            history.replaceState({ ...(history.state ?? {}), pjax: true, key }, '', location.href);

            const handle = mount(key, el, { url, initial: true }) ?? {};
            current = { key, url, el, handle };

            root.addEventListener('click', onClick);
            if (usePrefetch) {
                root.addEventListener('pointerover', onPrefetch);
                root.addEventListener('focusin', onPrefetch);
                root.addEventListener('touchstart', onPrefetch, { passive: true });
            }
            window.addEventListener('popstate', onPop);

            if (opts.enter === false) return;
            try {
                if (opts.waitFor) await opts.waitFor;
                if (!destroyed) await handle.enter?.();
            } catch (err) {
                console.error('[pjax] initial enter failed', err);
            }
        },

        go,

        prefetch(href) {
            const url = new URL(href, location.href);
            if (resolve(url) != null) load(url).catch(() => undefined);
        },

        clearCache() {
            pages.clear();
        },

        get current() {
            return current ? { key: current.key, url: current.url, el: current.el } : null;
        },

        destroy() {
            if (destroyed) return;
            destroyed = true;
            root.removeEventListener('click', onClick);
            root.removeEventListener('pointerover', onPrefetch);
            root.removeEventListener('focusin', onPrefetch);
            root.removeEventListener('touchstart', onPrefetch);
            window.removeEventListener('popstate', onPop);
            if (prevScrollRestoration && 'scrollRestoration' in history) {
                history.scrollRestoration = prevScrollRestoration;
            }
            current?.handle.destroy?.();
            pages.clear();
            pending = null;
        },
    };
}
