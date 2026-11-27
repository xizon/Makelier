import gsap from 'gsap';
import { clamp01, lerp, PI, smoothstep } from './math-scroll';
import type { WindowRect } from './viewport-frame';

export interface ChoreoBindings {
    addSegment: (
        selectorOrEl: string | Element | null,
        startExpr: string,
        endExpr: string,
        onProgress: (p: number, raw: number) => void
    ) => void;
    WS: Record<string, () => WindowRect>;
    win: WindowRect;
    frameState: { alpha: number; inverted: boolean };
    sceneState: Record<string, number>;
    arenaState: Record<string, number>;
    labelEl: HTMLElement;
    invertedFrameLabel: string;
    setWorld: (w: 'gallery' | 'arena') => void;
}

export function registerScrollChoreography({
    addSegment,
    WS,
    win,
    frameState,
    sceneState,
    arenaState,
    labelEl,
    invertedFrameLabel,
    setWorld,
}: ChoreoBindings) {
    const wseg = (
        el: string,
        s: string,
        e: string,
        fromF: () => WindowRect,
        toF: () => WindowRect,
        extra?: (p: number) => void
    ) =>
        addSegment(el, s, e, (p) => {
            const A = fromF();
            const B = toF();
            win.x = lerp(A.x, B.x, p);
            win.y = lerp(A.y, B.y, p);
            win.w = lerp(A.w, B.w, p);
            win.h = lerp(A.h, B.h, p);
            win.r = lerp(A.r, B.r, p);
            extra && extra(p);
        });

    const sseg = (
        el: string,
        s: string,
        e: string,
        A: Record<string, number>,
        B: Record<string, number>,
        extra?: (p: number) => void
    ) =>
        addSegment(el, s, e, (p) => {
            for (const k in B) {
                sceneState[k] = k in A ? lerp(A[k], B[k], p) : B[k] * p + (1 - p) * (sceneState[k] ?? 0);
            }
            extra && extra(p);
        });

    const aseg = (el: string, s: string, e: string, A: Record<string, number>, B: Record<string, number>) =>
        addSegment(el, s, e, (p) => {
            for (const k in B) arenaState[k] = lerp(A[k], B[k], p);
        });

    wseg('#ch1', 'top 88%', 'top 24%', WS.hero, WS.stele);
    wseg('#ch2', 'top 88%', 'top 24%', WS.stele, WS.cine);
    wseg('#ch3', 'top 88%', 'top 24%', WS.cine, WS.mirror);
    wseg('#ch4', 'top 85%', 'top 20%', WS.mirror, WS.medal);
    wseg('#ch5', 'top 88%', 'top 22%', WS.medal, WS.canvas);
    wseg('#ch6', 'top 88%', 'top 12%', WS.canvas, WS.full, (p) => {
        frameState.alpha = 1 - p;
    });
    wseg('#ch7', 'top 84%', 'top 18%', WS.invSeed, WS.invStart, (p) => {
        frameState.inverted = p > 0;
        frameState.alpha = p;
        if (p > 0) {
            if (labelEl.textContent !== invertedFrameLabel) {
                labelEl.textContent = invertedFrameLabel;
                gsap.fromTo(labelEl, { y: 10 }, { y: 0, duration: 0.6 });
            }
        } else if (labelEl.textContent === invertedFrameLabel) {
            labelEl.textContent = '';
            Object.assign(win, WS.full());
        }
    });
    wseg('#ch7', 'center center', 'bottom 65%', WS.invStart, WS.invFloat);
    wseg('#ch8', 'top 92%', 'top 16%', WS.invFloat, WS.finis);

    const S0 = { camZ: 7.8, camY: 0.25, rx: 0.07, ry: 0.35, spinAmp: 1, red: 0.35, lens: 0.35, dust: 1, fogRed: 0 };
    const S1 = { camZ: 6.6, camY: 0.15, rx: 0.17, ry: 2.6, spinAmp: 0.3, red: 0.7, lens: 0.5 };
    const S2 = { camZ: 3.55, camY: 0.05, rx: 0.02, ry: 2 * PI, spinAmp: 0, red: 0.55, lens: 1.7, dust: 0.7 };
    const S3 = { camZ: 5.4, camY: 0.12, rx: 0.12, ry: 2 * PI + 1.45, spinAmp: 0, red: 1.25, lens: 0.6 };
    const S4 = { camZ: 7.7, camY: 0.2, rx: 0.05, ry: 2 * PI + 2.7, spinAmp: 0.55, red: 0.25, lens: 0.35, dust: 0.8, fogRed: 0 };
    const S5 = { camZ: 6.4, camY: 0.1, rx: 0.04, ry: 4 * PI, spinAmp: 0, red: 0.45, lens: 0.4, dust: 0.7, fogRed: 0.08 };
    const S6 = { camZ: 5, camY: 0.15, ry: 4 * PI + 0.55, spinAmp: 0, red: 3.2, lens: 0.4, dust: 3.6, fogRed: 1 };
    const S7 = { camZ: 7.4, camY: 0.22, rx: 0.06, ry: 6 * PI, spinAmp: 0.9, red: 0.3, lens: 0.5, dust: 1, fogRed: 0 };
    const S8 = { camZ: 7.8, spinAmp: 0.6, red: 0.25, lens: 0.35, ry: 6 * PI + 0.4 };

    sseg('#ch1', 'top 80%', 'top 18%', S0, S1);
    sseg('#ch2', 'top 80%', 'top 18%', S1, S2);
    sseg('#ch3', 'top 80%', 'top 18%', S2, S3);
    sseg('#ch4', 'top 80%', 'top 18%', S3, S4);
    sseg('#ch5', 'top 88%', 'top 15%', S4, S5);
    addSegment('#ch5', 'top 86%', 'top 55%', (p) => {
        sceneState.aScale = 1 - p;
    });
    addSegment('#ch5', 'top 55%', 'bottom 60%', (p) => {
        sceneState.asm = p;
    });
    sseg('#ch6', 'top 80%', 'top 10%', S5, S6);
    sseg('#ch7', 'top 84%', 'top 16%', S6, S7, (p) => {
        sceneState.aScale = p;
        sceneState.asm = 1;
    });
    sseg('#ch8', 'top 92%', 'top 12%', S7, S8);

    const A0 = { orbA: 0.55, orbR: 26, orbY: 13 };
    const A1 = { orbA: 1.7, orbR: 13, orbY: 4.6 };
    const A2 = { orbA: 2.9, orbR: 10.5, orbY: 5.4 };
    const A3 = { orbA: 3.95, orbR: 14, orbY: 6.8 };
    aseg('#ch6', 'center center', 'bottom bottom', A0, A1);
    aseg('#ch7', 'top 80%', 'bottom 80%', A1, A2);
    aseg('#ch8', 'top 90%', 'bottom bottom', A2, A3);

    const lidT = document.getElementById('lidT');
    const lidB = document.getElementById('lidB');
    addSegment('#ch6', 'top -20%', 'top -120%', (_p, raw) => {
        const c = raw < 0.55 ? smoothstep(clamp01(raw / 0.45)) : 1 - smoothstep(clamp01((raw - 0.55) / 0.45));
        const v = `scaleY(${c})`;
        if (lidT) lidT.style.transform = v;
        if (lidB) lidB.style.transform = v;
        setWorld(raw >= 0.45 ? 'arena' : 'gallery');
    });

    const t1 = document.getElementById('t1zone');
    const t2 = document.getElementById('t2zone');
    addSegment('#ch6', 'top 20%', 'top -16%', (p) => {
        if (!t1) return;
        const inn = smoothstep(clamp01(p / 0.45));
        const out = smoothstep(clamp01((p - 0.62) / 0.38));
        t1.style.display = 'block';
        t1.style.opacity = String(inn * (1 - out));
        t1.style.transform = `scale(${0.92 + inn * 0.1 + out * 0.12})`;
        if (p === 0 && out === 0) t1.style.display = '';
    });
    addSegment('#ch6', 'top -80%', 'top -125%', (p) => {
        if (!t2) return;
        t2.style.display = 'block';
        t2.style.opacity = String(p);
        t2.style.transform = `scale(${0.94 + p * 0.07})`;
        if (p === 0) t2.style.display = 'none';
    });

    const finBig = document.getElementById('finisBig');
    const finSub = document.getElementById('finisSub');
    addSegment('.finis-zone', 'top 55%', 'top -85%', (p) => {
        const inn = smoothstep(clamp01(p / 0.35));
        const out = smoothstep(clamp01((p - 0.72) / 0.28));
        const op = String(inn * (1 - out));
        const sc = `scale(${0.94 + inn * 0.06 + out * 0.14})`;
        if (finBig) {
            finBig.style.opacity = op;
            finBig.style.transform = sc;
        }
        if (finSub) finSub.style.opacity = op;
    });
    addSegment('.fin-content', 'top 90%', 'top 45%', (p) => {
        frameState.alpha = 1 - p;
    });
}
