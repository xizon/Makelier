export interface WindowRect {
    x: number;
    y: number;
    w: number;
    h: number;
    r: number;
}

export interface ViewportContext {
    W: number;
    H: number;
    isMob: boolean;
}

export function createWindowPresets(getCtx: () => ViewportContext) {
    return {
        hero: (): WindowRect => {
            const { W, H, isMob } = getCtx();
            const d = Math.min(W, H) * (isMob ? 0.76 : 0.52);
            return { x: (W - d) / 2, y: (H - d) / 2 + H * 0.07, w: d, h: d, r: d / 2 };
        },
        stele: (): WindowRect => {
            const { W, H, isMob } = getCtx();
            if (isMob) {
                const w = W * 0.74;
                const h = Math.min(H * 0.48, w * 1.62);
                return { x: (W - w) / 2, y: H * 0.06, w, h, r: 22 };
            }
            const w = Math.min(W * 0.3, 520);
            const h = Math.min(H * 0.62, w * 1.72);
            return { x: W - w - W * 0.09, y: (H - h) / 2, w, h, r: 22 };
        },
        cine: (): WindowRect => {
            const { W, H, isMob } = getCtx();
            const w = isMob ? W * 0.92 : Math.min(W * 0.68, H * 1.4);
            const h = w * 0.5625;
            return { x: (W - w) / 2, y: (H - h) / 2 + H * (isMob ? 0.12 : 0.13), w, h, r: 16 };
        },
        mirror: (): WindowRect => {
            const { W, H, isMob } = getCtx();
            if (isMob) {
                const w = W * 0.58;
                const h = Math.min(H * 0.46, w * 1.7);
                return { x: (W - w) / 2, y: H * 0.08, w, h, r: w / 2 };
            }
            const w = Math.min(W * 0.23, 380);
            const h = Math.min(H * 0.64, w * 2.05);
            return { x: W - w - W * 0.1, y: (H - h) / 2, w, h, r: w / 2 };
        },
        medal: (): WindowRect => {
            const { W, H, isMob } = getCtx();
            const d = isMob ? W * 0.2 : Math.min(W, H) * 0.15;
            return isMob
                ? { x: W - d - 18, y: 92, w: d, h: d, r: d / 2 }
                : { x: W - d - 34, y: H - d - 34, w: d, h: d, r: d / 2 };
        },
        canvas: (): WindowRect => {
            const { W, H, isMob } = getCtx();
            const w = isMob ? W * 0.86 : Math.min(W * 0.58, H * 0.86);
            const h = w * 0.88;
            return { x: (W - w) / 2, y: (H - h) / 2 + H * 0.04, w, h, r: 26 };
        },
        full: (): WindowRect => {
            const { W, H } = getCtx();
            return { x: 0, y: 0, w: W, h: H, r: 0 };
        },
        invSeed: (): WindowRect => {
            const { W, H } = getCtx();
            return { x: W / 2 - 20, y: H / 2 - 20, w: 40, h: 40, r: 20 };
        },
        invStart: (): WindowRect => {
            const { W, H, isMob } = getCtx();
            if (isMob) {
                const w = W * 0.68;
                const h = w * 0.78;
                return { x: (W - w) / 2, y: H * 0.5 - h * 0.18, w, h, r: 24 };
            }
            const w = Math.min(W * 0.42, H * 0.62);
            const h = w * 0.74;
            return { x: W - w - W * 0.09, y: (H - h) / 2, w, h, r: 24 };
        },
        invFloat: (): WindowRect => {
            const { W, H, isMob } = getCtx();
            if (isMob) {
                const w = W * 0.52;
                const h = w * 0.74;
                return { x: (W - w) / 2, y: H * 0.1, w, h, r: 22 };
            }
            const w = Math.min(W * 0.28, H * 0.42);
            const h = w * 0.74;
            return { x: W - w - W * 0.1, y: H * 0.16, w, h, r: 22 };
        },
        finis: (): WindowRect => {
            const { W, H, isMob } = getCtx();
            const d = Math.min(W, H) * (isMob ? 0.42 : 0.3);
            return { x: (W - d) / 2, y: H * 0.14, w: d, h: d, r: d / 2 };
        },
    };
}

export function createFrameApplier(
    stageClip: HTMLElement,
    frameEl: HTMLElement,
    corners: NodeListOf<HTMLElement>,
    labelEl: HTMLElement,
    getCtx: () => ViewportContext
) {
    return function applyWin(
        win: WindowRect,
        frameAlpha: number,
        inverted: boolean,
        view: { ox: number; oy: number; ow: number; oh: number },
        fx = 0,
        fy = 0
    ) {
        const { W, H } = getCtx();
        if (inverted) {
            stageClip.style.clipPath = 'none';
            stageClip.classList.add('inv');
            frameEl.style.transform = `translate(${fx}px,${fy}px)`;
        } else {
            stageClip.style.clipPath = `inset(${win.y}px ${W - win.x - win.w}px ${H - win.y - win.h}px ${win.x}px round ${win.r}px)`;
            stageClip.classList.remove('inv');
            frameEl.style.transform = 'none';
        }
        frameEl.style.top = `${win.y}px`;
        frameEl.style.left = `${win.x}px`;
        frameEl.style.width = `${win.w}px`;
        frameEl.style.height = `${win.h}px`;
        frameEl.style.borderRadius = `${win.r}px`;
        frameEl.style.opacity = String(frameAlpha);

        const cOp = Math.max(0, Math.min(1, (170 - win.r) / 140)) * frameAlpha;
        corners.forEach((c) => (c.style.opacity = String(cOp)));
        labelEl.style.opacity = String(frameAlpha * 0.95);

        view.ox = win.x / W;
        view.oy = win.y / H;
        view.ow = Math.max(win.w / W, 0.001);
        view.oh = Math.max(win.h / H, 0.001);
    };
}
