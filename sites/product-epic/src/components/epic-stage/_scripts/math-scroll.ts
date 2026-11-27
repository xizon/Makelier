export const PI = Math.PI;

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const clamp01 = (v: number, min = 0, max = 1) => Math.max(min, Math.min(max, v));
export const smoothstep = (t: number) => t * t * (3 - 2 * t);

export interface ScrollSegment {
    el: Element;
    startExpr: string;
    endExpr: string;
    onProgress: (p: number, raw: number) => void;
    startPx: number;
    endPx: number;
    lastP: number;
}

export function createScrollEngine() {
    const segments: ScrollSegment[] = [];

    function addSegment(
        selectorOrEl: string | Element | null,
        startExpr: string,
        endExpr: string,
        onProgress: (p: number, raw: number) => void
    ) {
        const el = typeof selectorOrEl === 'string' ? document.querySelector(selectorOrEl) : selectorOrEl;
        if (!el) return;
        segments.push({
            el,
            startExpr,
            endExpr,
            onProgress,
            startPx: 0,
            endPx: 1,
            lastP: -1,
        });
    }

    function evalAnchorPx(el: Element, expr: string, scrollY: number, viewportH: number): number {
        const rect = el.getBoundingClientRect();
        const docTop = rect.top + scrollY;
        const [elPart, vpPart] = expr.split(' ');
        const elY =
            elPart === 'top' ? docTop : elPart === 'center' ? docTop + rect.height / 2 : docTop + rect.height;
        const vpY = vpPart.endsWith('%')
            ? (parseFloat(vpPart) / 100) * viewportH
            : vpPart === 'top'
                ? 0
                : vpPart === 'center'
                    ? viewportH / 2
                    : vpPart === 'bottom'
                        ? viewportH
                        : parseFloat(vpPart);
        return elY - vpY;
    }

    function rebuildOffsets(viewportH: number) {
        const scY = window.scrollY;
        for (const sg of segments) {
            sg.startPx = evalAnchorPx(sg.el, sg.startExpr, scY, viewportH);
            sg.endPx = evalAnchorPx(sg.el, sg.endExpr, scY, viewportH);
        }
    }

    function applyScroll(force = false) {
        const y = window.scrollY;
        if (force) {
            for (const sg of segments) {
                if (y < sg.startPx && sg.lastP > 0) sg.onProgress(0, 0);
            }
        }
        for (const sg of segments) {
            const raw = clamp01((y - sg.startPx) / Math.max(sg.endPx - sg.startPx, 1));
            const p = smoothstep(raw);
            if (force) {
                if (y < sg.startPx) {
                    sg.lastP = 0;
                    continue;
                }
            } else if (p === sg.lastP) {
                continue;
            }
            sg.lastP = p;
            sg.onProgress(p, raw);
        }
    }

    return { addSegment, rebuildOffsets, applyScroll };
}
