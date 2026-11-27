import { gsap } from 'gsap';

export function mount(element: HTMLElement | null): (() => void) | void {
    if (!element) return;

    const offsetTarget = element.dataset.offsetTarget;
    const extraOffset = Number(element.dataset.offset) || 0;
    if (!element) return;

    // Remove the initial URL hash and remember whether a top reset is needed.
    const shouldReturnToTop = Boolean(window.location.hash);

    if (shouldReturnToTop) {
        window.history.replaceState(
            window.history.state,
            '',
            `${window.location.pathname}${window.location.search}`
        );
    }

    //
    const menu = element.querySelector<HTMLElement>(
        '.mkl-primary-menu__list'
    );

    const indicator = element.querySelector<HTMLElement>(
        '.mkl-primary-menu__indicator'
    );

    const links = Array.from(
        element.querySelectorAll<HTMLAnchorElement>(
            '.mkl-primary-menu__link'
        )
    );

    const hamburger = element.querySelector<HTMLButtonElement>('.mkl-primary-menu__hamburger');

    if (!menu || !indicator || links.length === 0) return;

    const handleHamburgerClick = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const primaryMenuEl = menu.parentElement;
        if (primaryMenuEl !== null) {
            primaryMenuEl.classList.toggle('is-open');
        }
    };

    if (hamburger) {
        hamburger.addEventListener('click', handleHamburgerClick);
    } else {
        console.warn('Hamburger element not found!');
    }

    // Detect whether the user's operating system has the "Reduce Motion" setting enabled.
    const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    let activeLink: HTMLAnchorElement | null = null;
    let hoveredLink: HTMLAnchorElement | null = null;
    // Prevents IntersectionObserver from overriding active state during programmatic jumps.
    let isProgrammaticScroll = false;
    let scrollUnlockTimer: number | null = null;
    // Ensures initial document offsets are captured once layout settles and aren't overwritten after overlap/collapse.
    let hasRecordedInitialCache = false;
    let lastViewportWidth = window.innerWidth;
    let lastViewportHeight = window.innerHeight;

    // Stores each anchor element's document-relative Y offset (`topInDoc`) after initial media & layout settle.
    const topCache = new Map<string, number>();

    let hasReturnedToTop = false;

    const scrollToY = (destinationY: number) => {
        isProgrammaticScroll = true;

        if (scrollUnlockTimer !== null) {
            window.clearTimeout(scrollUnlockTimer);
        }

        window.scrollTo({
            top: Math.max(0, destinationY),
            behavior: reduceMotion ? 'auto' : 'smooth',
        });

        scrollUnlockTimer = window.setTimeout(() => {
            isProgrammaticScroll = false;
            scrollUnlockTimer = null;
        }, reduceMotion ? 50 : 800);
    };


    const getScrollOffset = () => {
        const target = offsetTarget
            ? document.querySelector<HTMLElement>(offsetTarget)
            : null;

        return (target?.getBoundingClientRect().height ?? 0) + extraOffset;
    };

    // Collect unique target section IDs referenced by hash links in the menu.
    const collectTargetIds = (): string[] => {
        const idsFromLinks = links
            .map((l) => l.getAttribute('href')?.trim() ?? '')
            .filter((href) => href.startsWith('#') && href.length > 1)
            .map((href) => href.slice(1));

        return Array.from(new Set(idsFromLinks));
    };

    // Snapshot each section's true vertical position in the document (`window.scrollY + rect.top`).
    const captureTopCache = (force = false) => {
        if (hasRecordedInitialCache && !force) return;

        const ids = collectTargetIds();
        const currentScrollY = window.scrollY;

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const topInDoc = Math.round(currentScrollY + el.getBoundingClientRect().top);
            topCache.set(id, topInDoc);
        });

        if (topCache.size > 0) {
            hasRecordedInitialCache = true;
            lastViewportWidth = window.innerWidth;
            lastViewportHeight = window.innerHeight;
        }
    };


    const updateActiveSection = () => {
        if (isProgrammaticScroll || !hasRecordedInitialCache) return;

        // Use cached document positions instead of live Scene positions.
        const currentY = window.scrollY + window.innerHeight * 0.3;

        const currentSection = Array.from(topCache.entries())
            .sort((a, b) => a[1] - b[1])
            .filter(([, top]) => top <= currentY)
            .at(-1);

        if (!currentSection) return;

        const [id] = currentSection;

        const link = links.find(
            (item) => item.getAttribute('href') === `#${id}`
        );

        if (!link) return;

        updateHash(id);

        if (link !== activeLink) {
            applyActiveLink(link, 'location');

            if (!hoveredLink) {
                moveIndicator(link);
            }
        }
    };


    // Wait for window load plus image/video readiness, then let two animation frames and a short
    // settle delay finish before recording initial section offsets.
    const waitForMediaAndCacheInitialPositions = (): (() => void) => {
        let cancelled = false;
        let settleTimer: number | null = null;
        const cleanups: Array<() => void> = [];

        const scheduleCapture = () => {
            if (cancelled) return;
            requestAnimationFrame(() => {
                if (cancelled) return;
                requestAnimationFrame(() => {
                    if (cancelled) return;
                    if (settleTimer !== null) {
                        window.clearTimeout(settleTimer);
                    }

                    //
                    // !!! IMPORTANT:
                    // ------
                    // FIXED: If the Scene has already altered the section layout during initialization, 
                    // then even after returning to the top, this value may no longer represent the correct initial position.
                    settleTimer = window.setTimeout(() => {
                        if (cancelled) return;

                        // Ensure the page is at the top before capturing section positions.
                        if (shouldReturnToTop && !hasReturnedToTop) {
                            hasReturnedToTop = true;

                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: 'instant',
                            });

                            // Wait for the scene layout to settle at the top.
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    if (!cancelled) {
                                        captureTopCache(true);
                                    }
                                });
                            });

                            return;
                        }

                        captureTopCache(false);
                    }, 150);



                });
            });
        };

        const mediaPromises: Promise<void>[] = [];

        const imgs = Array.from(document.querySelectorAll<HTMLImageElement>('img'));
        imgs.forEach((img) => {
            if (img.complete) return;
            mediaPromises.push(
                new Promise<void>((resolve) => {
                    const onDone = () => {
                        img.removeEventListener('load', onDone);
                        img.removeEventListener('error', onDone);
                        resolve();
                    };
                    img.addEventListener('load', onDone, { once: true });
                    img.addEventListener('error', onDone, { once: true });
                    cleanups.push(() => {
                        img.removeEventListener('load', onDone);
                        img.removeEventListener('error', onDone);
                    });
                })
            );
        });

        const videos = Array.from(document.querySelectorAll<HTMLVideoElement>('video'));
        videos.forEach((video) => {
            if (video.readyState >= 1) return;
            mediaPromises.push(
                new Promise<void>((resolve) => {
                    const onDone = () => {
                        video.removeEventListener('loadedmetadata', onDone);
                        video.removeEventListener('error', onDone);
                        resolve();
                    };
                    video.addEventListener('loadedmetadata', onDone, { once: true });
                    video.addEventListener('error', onDone, { once: true });
                    cleanups.push(() => {
                        video.removeEventListener('loadedmetadata', onDone);
                        video.removeEventListener('error', onDone);
                    });
                })
            );
        });

        const winLoadPromise =
            document.readyState === 'complete'
                ? Promise.resolve()
                : new Promise<void>((resolve) => {
                      const onLoad = () => {
                          window.removeEventListener('load', onLoad);
                          resolve();
                      };
                      window.addEventListener('load', onLoad, { once: true });
                      cleanups.push(() => window.removeEventListener('load', onLoad));
                  });

        Promise.all([winLoadPromise, ...mediaPromises]).then(scheduleCapture);

        if (document.readyState === 'complete' && mediaPromises.length === 0) {
            scheduleCapture();
        }

        // Fallback timer so slow media never prevents cache initialization indefinitely.
        const maxWaitTimer = window.setTimeout(scheduleCapture, 2500);
        cleanups.push(() => window.clearTimeout(maxWaitTimer));

        return () => {
            cancelled = true;
            if (settleTimer !== null) {
                window.clearTimeout(settleTimer);
            }
            cleanups.forEach((fn) => fn());
        };
    };

    const getPageLink = () => {
        const pathname = window.location.pathname;

        return links.find((link) => {
            const page = link.dataset.page;
            return page && pathname.includes(`${page}.html`);
        }) ?? null;
    };

    const moveIndicator = (
        link: HTMLAnchorElement,
        immediate = false
    ) => {
        const menuRect = menu.getBoundingClientRect();
        const linkRect = link.getBoundingClientRect();

        const x = linkRect.left - menuRect.left;
        const y = linkRect.top - menuRect.top;

        gsap.killTweensOf(indicator);

        gsap.to(indicator, {
            x,
            y,
            width: linkRect.width,
            height: linkRect.height,
            opacity: 1,
            duration: immediate || reduceMotion ? 0 : 0.65,
            ease: 'power3.inOut',
            overwrite: true,
        });
    };

    const applyActiveLink = (
        targetLink: HTMLAnchorElement | null,
        ariaValue: 'page' | 'location' = 'location'
    ) => {
        activeLink = targetLink;
        links.forEach((item) => {
            const active = item === targetLink;
            item.classList.toggle('is-active', active);
            if (active) {
                item.setAttribute('aria-current', ariaValue);
            } else {
                item.removeAttribute('aria-current');
            }
        });
    };

    const updateHash = (id: string) => {
        const hash = `#${id}`;

        if (window.location.hash === hash) return;

        window.history.replaceState(
            window.history.state,
            '',
            `${window.location.pathname}${window.location.search}${hash}`
        );
    };


    const handleEnter = (event: Event) => {
        const link = event.currentTarget as HTMLAnchorElement;
        hoveredLink = link;
        moveIndicator(link);
    };

    const handleLeave = () => {
        hoveredLink = null;

        if (activeLink) {
            moveIndicator(activeLink);
        } else {
            gsap.to(indicator, {
                opacity: 0,
                duration: 0.25,
                ease: 'power2.out',
            });
        }
    };

    activeLink = links.find((link) => link.classList.contains('is-active')) ?? getPageLink();

    const linkClickHandlerMap = new Map<HTMLAnchorElement, (event: MouseEvent) => void>();

    links.forEach((link) => {
        const isActive = link === activeLink;
        link.classList.toggle('is-active', isActive);
        if (isActive) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }

        link.addEventListener('mouseenter', handleEnter);
        link.addEventListener('focus', handleEnter);



        // !!! IMPORTANT: Fix the issue where upward scrolling fails when sections overlap
        // ------
        /*
        =========
        CHECK(Output to the Chrome console): 
        =========
        Array.from(document.querySelectorAll('[id]')).map(el => ({
            id: el.id,
            topInDoc: Math.round(window.scrollY + el.getBoundingClientRect().top)
        }));   
        
        
        =========
        DEBUG:
        =========
        const el = document.getElementById('mkl-about');
        console.log('rect.top:', el?.getBoundingClientRect().top, 'window.scrollY:', window.scrollY, 'scrollingElement:', document.scrollingElement);
        window.scrollTo({ top: 0, behavior: 'auto' });


        const target = document.getElementById('mkl-about');
        console.log('before scrollY:', window.scrollY, 'target rect.top:', target?.getBoundingClientRect().top);
        window.scrollTo({ top: 0, behavior: 'auto' });
        console.log('after scrollTo(0) scrollY:', window.scrollY);


        =========
        SOLUTION:
        =========
        1. Identifying the root cause of the "failure to scroll upward" issue
        By logging the positions of various anchor points within the document (calculated as `window.scrollY + el.getBoundingClientRect().top`) to the console, it becomes clear that when using `<Scenes>` and `<SceneItem>` components, relying on `getBoundingClientRect().top` for real-time target position calculation simply returns the current position—effectively preventing upward navigation.

        2. Automatic sampling after media loading and initial layout stabilization
        The `waitForMediaAndCacheInitialPositions()` function automatically records the `topInDoc` value for each anchor point into a `topCache` (avoiding any hardcoded pixel values).

        3. Locking the initial cache to prevent corruption from subsequent scrolling
        A `hasRecordedInitialCache` flag locks the initial snapshot. This ensures that if nodes collapse or overlap as the user scrolls further down the page, the cached coordinates remain accurate and are not overwritten by incorrect values. The cache is refreshed only when the viewport dimensions change and the page is positioned near the top (`window.scrollY <= 1`).

        4. Utilizing the cache for navigation and preventing state conflicts
        When a navigation item is clicked, the system retrieves the target Y-coordinate from `topCache.get(targetId)` and invokes `window.scrollTo`. During this programmatic scroll, an `isProgrammaticScroll` flag is used to temporarily disable the `IntersectionObserver`-based automatic highlighting. Additionally, all timers, event listeners, and GSAP animations are cleaned up upon component unmounting.

        */

        const handleLinkClick = (event: MouseEvent) => {
            const href = link.getAttribute('href') ?? '';
            if (!href.startsWith('#') || href.length < 2) return;

            const targetId = href.slice(1);
            const target = document.getElementById(targetId);
            if (!target) return;

            event.preventDefault();

            const primaryMenuEl = menu.parentElement;
            if (primaryMenuEl !== null) {
                primaryMenuEl.classList.remove('is-open');
            }

            // Capture on demand if the user clicks before the initial media-ready snapshot finishes.
            if (!hasRecordedInitialCache) {
                captureTopCache(false);
            }

            // Prefer the cached initial `topInDoc` over live `getBoundingClientRect()`, because
            // scene/section transitions can collapse or align earlier targets to the current scroll offset.
            const cachedTop = topCache.get(targetId);
            const rawTop =
                typeof cachedTop === 'number'
                    ? cachedTop
                    : Math.round(window.scrollY + target.getBoundingClientRect().top);


            const destinationY = Math.max(0,rawTop - getScrollOffset());

            //
            scrollToY(destinationY);

            //
            applyActiveLink(link, 'location');
            moveIndicator(link);
            history.replaceState(null, '', href);
        };

        link.addEventListener('click', handleLinkClick);
        linkClickHandlerMap.set(link, handleLinkClick);
    });

    menu.addEventListener('mouseleave', handleLeave);

    const sectionIds = collectTargetIds();

    // Sync active menu indicator with scroll position when not in the middle of a click jump.
    let scrollTicking = false;

    const handleScroll = () => {
        if (scrollTicking) return;

        scrollTicking = true;

        requestAnimationFrame(() => {
            updateActiveSection();
            scrollTicking = false;
        });
    };

    // !!! IMPORTANT: DO NOT USE "IntersectionObserver()" ==> <Scenes> problems
    // ------
    window.addEventListener('scroll', handleScroll, {
        passive: true,
    });

    if (activeLink) {
        moveIndicator(activeLink, true);
    }

    const cleanupCacheWaiter = waitForMediaAndCacheInitialPositions();

    const handleResize = () => {
        const target = hoveredLink ?? activeLink;

        if (target) {
            moveIndicator(target, true);
        }

        const widthChanged = Math.abs(window.innerWidth - lastViewportWidth) > 1;
        const heightChanged = Math.abs(window.innerHeight - lastViewportHeight) > 1;

        // Only refresh cached positions on real viewport resize while near the top of the page,
        // avoiding polluted coordinates when scrolled down into overlapping/collapsed scenes.
        if ((widthChanged || heightChanged) && window.scrollY <= 1) {
            captureTopCache(true);
        }
    };

    window.addEventListener('resize', handleResize);

    return () => {
        cleanupCacheWaiter();

        if (scrollUnlockTimer !== null) {
            window.clearTimeout(scrollUnlockTimer);
        }

        window.removeEventListener('scroll', handleScroll);

        if (hamburger) {
            hamburger.removeEventListener('click', handleHamburgerClick);
        }

        links.forEach((link) => {
            link.removeEventListener('mouseenter', handleEnter);
            link.removeEventListener('focus', handleEnter);
            const clickHandler = linkClickHandlerMap.get(link);
            if (clickHandler) {
                link.removeEventListener('click', clickHandler);
            }
        });

        menu.removeEventListener('mouseleave', handleLeave);
        window.removeEventListener('resize', handleResize);

        gsap.killTweensOf(indicator);
    };
}