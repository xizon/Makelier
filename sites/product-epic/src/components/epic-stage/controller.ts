import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { clamp01, createScrollEngine, lerp, smoothstep } from './_scripts/math-scroll';
import { createFrameApplier, createWindowPresets, type WindowRect } from './_scripts/viewport-frame';
import { buildGalleryScene } from './_scripts/gallery-scene';
import { buildArenaScene } from './_scripts/arena-scene';
import { registerScrollChoreography } from './_scripts/scroll-choreo';
import { initUiInteractions, playHeroReveal } from './_scripts/ui-interactions';

export interface EpicStageOptions {
    frameLabels?: Record<string, string>;
    invertedFrameLabel?: string;
    invalidEmailMessage?: string;
    successToastMessage?: string;
}

export function mount(
    element: HTMLElement | null,
    options: EpicStageOptions = {}
): (() => void) | void {
    if (element === null) return;


    let parsedFrameLabels: Record<string, string> | undefined;
    if (element.dataset.frameLabels) {
        try {
            parsedFrameLabels = JSON.parse(element.dataset.frameLabels);
        } catch {
            // ignore malformed JSON
        }
    }

    const {
        frameLabels = parsedFrameLabels ?? {
            top: 'MVNDVS — THE PANTHEON',
            ch1: 'TABVLA I — THE EYE',
            ch2: 'TABVLA II — NEURAL RENDERING',
            ch3: 'TABVLA III — TOUCH & SOUND',
            ch4: 'TABVLA IV — THE DRAFTING',
            ch5: 'TABVLA V — THE LAUREL',
            ch6: '',
        },
        invertedFrameLabel = element.dataset.invertedFrameLabel ?? 'THE WORLD YOU LEFT',
        invalidEmailMessage = element.dataset.invalidEmailMessage ?? 'The eagle needs a valid address.',
        successToastMessage = element.dataset.successToastMessage ?? 'Engraved in the rolls of the Empire · GRATIAS TIBI',
    } = options;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = window.innerWidth;
    let H = window.innerHeight;
    const getCtx = () => ({ W, H, isMob: W < 820 });

    element.querySelectorAll('#loader .e-rays').forEach((g) => {
        for (let i = 0; i < 14; i++) {
            const a = (i / 14) * Math.PI * 2;
            const l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            l.setAttribute('x1', String(60 + Math.cos(a) * 22));
            l.setAttribute('y1', String(35 + Math.sin(a) * 22 * 0.62));
            l.setAttribute('x2', String(60 + Math.cos(a) * 30));
            l.setAttribute('y2', String(35 + Math.sin(a) * 30 * 0.62));
            l.setAttribute('pathLength', '1');
            g.appendChild(l);
        }
    });

    const scrollEngine = createScrollEngine();
    const lenis = new Lenis({ duration: 1.3, smoothWheel: !reduce });
    lenis.on('scroll', () => {
        ScrollTrigger.update();
        scrollEngine.applyScroll();
    });
    const onTickLenis = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(onTickLenis);
    gsap.ticker.lagSmoothing(0);
    lenis.stop();

    const win: WindowRect = { x: W / 2 - 30, y: H * 0.54 - 30, w: 60, h: 60, r: 30 };
    const frameState = { alpha: 1, inverted: false };
    const view = { ox: 0, oy: 0, ow: 1, oh: 1 };

    const stageClip = element.querySelector<HTMLElement>('#stageClip')!;
    const frameEl = element.querySelector<HTMLElement>('#frame')!;
    const corners = frameEl.querySelectorAll<HTMLElement>('.corner');
    const labelEl = element.querySelector<HTMLElement>('#frameLabel')!;
    const cursor = element.querySelector<HTMLElement>('#cursor')!;

    const WS = createWindowPresets(getCtx);
    const applyWin = createFrameApplier(stageClip, frameEl, corners, labelEl, getCtx);

    const canvas = element.querySelector<HTMLCanvasElement>('#gl')!;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.localClippingEnabled = true;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 60);
    const pipCam = new THREE.PerspectiveCamera(38, 1, 0.1, 60);

    const arenaScene = new THREE.Scene();
    const arenaCam = new THREE.PerspectiveCamera(46, W / H, 0.1, 200);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;

    const gallery = buildGalleryScene(scene);
    const arena = buildArenaScene(arenaScene, envTex, gallery.bGoldM);

    const sceneState: Record<string, number> = {
        camZ: 7.8,
        camY: 0.25,
        rx: 0.07,
        ry: 0.35,
        spinAmp: 1,
        red: 0.35,
        lens: 0.35,
        dust: 1,
        fogRed: 0,
        aScale: 1,
        asm: 0,
    };
    const arenaState: Record<string, number> = { orbA: 0.55, orbR: 26, orbY: 13 };

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMouseMove = (e: MouseEvent) => {
        mouse.tx = (e.clientX / W - 0.5) * 2;
        mouse.ty = (e.clientY / H - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    let world: 'gallery' | 'arena' = 'gallery';
    function setWorld(w: 'gallery' | 'arena') {
        if (w === world) return;
        world = w;
        if (w === 'arena') {
            arenaScene.add(gallery.gB);
            gallery.gB.position.set(0, 3.6, 0);
            gallery.gB.scale.setScalar(1.5);
            gallery.gB.rotation.set(0, 0, 0);
            gallery.clipPlane.constant = 20;
            gallery.bFillM.opacity = 0.88;
            gallery.bLineM.opacity = 0.3;
            gallery.gB.visible = true;
        } else {
            gallery.drag.add(gallery.gB);
            gallery.gB.position.set(0, 0, 0);
            gallery.gB.scale.setScalar(1);
            gallery.gB.rotation.set(0, 0, 0);
            gallery.bFillM.opacity = 0.08;
            gallery.bLineM.opacity = 0.95;
        }
    }

    const dragObj = { x: 0, y: 0 };
    let dragging = false;
    let lx = 0;
    let ly = 0;

    const onPointerDown = (e: PointerEvent) => {
        if (e.pointerType !== 'mouse') return;
        dragging = true;
        lx = e.clientX;
        ly = e.clientY;
        stageClip.setPointerCapture(e.pointerId);
        gsap.killTweensOf(dragObj);
        cursor.classList.add('drag');
    };
    const onPointerMove = (e: PointerEvent) => {
        if (!dragging) return;
        dragObj.y += (e.clientX - lx) * 0.006;
        dragObj.x = clamp01(dragObj.x + (e.clientY - ly) * 0.004, -0.5, 0.5);
        lx = e.clientX;
        ly = e.clientY;
    };
    const endDrag = () => {
        if (!dragging) return;
        dragging = false;
        cursor.classList.remove('drag');
        gsap.to(dragObj, { x: 0, y: 0, duration: 1.6, ease: 'elastic.out(1,.45)' });
    };
    stageClip.addEventListener('pointerdown', onPointerDown);
    stageClip.addEventListener('pointermove', onPointerMove);
    stageClip.addEventListener('pointerup', endDrag);
    stageClip.addEventListener('pointercancel', endDrag);

    registerScrollChoreography({
        addSegment: scrollEngine.addSegment,
        WS,
        win,
        frameState,
        sceneState,
        arenaState,
        labelEl,
        invertedFrameLabel,
        setWorld,
    });

    const clock = new THREE.Clock();
    let spinPhase = 0;
    let et = 0;

    function render() {
        const dt = Math.min(clock.getDelta(), 0.05);
        et += dt;
        spinPhase += dt * 0.45 * sceneState.spinAmp;
        mouse.x += (mouse.tx - mouse.x) * 0.05;
        mouse.y += (mouse.ty - mouse.y) * 0.05;

        gallery.headset.scale.setScalar(Math.max(sceneState.aScale, 0.0001));
        gallery.headset.visible = sceneState.aScale > 0.002;
        gallery.rig.rotation.x = sceneState.rx;
        gallery.rig.rotation.y = sceneState.ry;
        gallery.rig.position.y = Math.sin(et * 1.15) * 0.1 * Math.min(1, sceneState.spinAmp + 0.25);
        gallery.spin.rotation.y = spinPhase;
        gallery.drag.rotation.y = dragObj.y;
        gallery.drag.rotation.x = dragObj.x;

        gallery.halo1.rotation.z = et * 0.12;
        gallery.halo2.rotation.z = -et * 0.08;
        gallery.halo1.material.opacity = 0.18 + sceneState.lens * 0.12;
        gallery.halo2.material.opacity = 0.1 + sceneState.lens * 0.07;

        gallery.dustA.rotation.y = et * 0.024 * sceneState.dust;
        gallery.dustB.rotation.y = -et * 0.036 * sceneState.dust;
        gallery.redLight.intensity = sceneState.red;
        gallery.matLens.emissiveIntensity = sceneState.lens * (0.85 + 0.15 * Math.sin(et * 2.3));

        if (scene.fog instanceof THREE.FogExp2) {
            scene.fog.density = 0.045 + sceneState.fogRed * 0.02;
            scene.fog.color.setRGB(
                0.05 + sceneState.fogRed * 0.075,
                0.035 - sceneState.fogRed * 0.018,
                0.024 - sceneState.fogRed * 0.014
            );
        }

        gallery.gB.visible = world === 'arena' || sceneState.asm > 0.002;
        if (world !== 'arena') {
            gallery.clipPlane.constant = -2.8 + 5.9 * smoothstep(clamp01(sceneState.asm * 1.12));
        }
        for (const p of gallery.parts) {
            const t = smoothstep(clamp01((sceneState.asm - p.d) / 0.5));
            p.obj.position.lerpVectors(p.sp, p.fp, t);
            p.obj.rotation.set(lerp(p.sr.x, p.fr.x, t), lerp(p.sr.y, p.fr.y, t), lerp(p.sr.z, p.fr.z, t));
        }

        for (const n of arena.numerals) {
            n.a += dt * n.v;
            n.sp.position.set(
                Math.cos(n.a) * n.r,
                n.y + Math.sin(et * 0.6 + n.r) * 0.5,
                Math.sin(n.a) * n.r
            );
        }
        for (const b of arena.banners) b.rotation.z = Math.sin(et * 0.7 + b.userData.ph) * 0.045;
        arena.aRed.intensity = 2 + Math.sin(et * 1.7) * 0.5;
        arena.arenaDust.rotation.y = et * 0.012;
        if (world === 'arena') {
            gallery.gB.position.y = 3.6 + Math.sin(et * 0.9) * 0.28;
            gallery.gB.rotation.y = et * 0.35;
        }

        const fx = frameState.inverted ? Math.sin(et * 0.8) * 7 : 0;
        const fy = frameState.inverted ? Math.cos(et * 0.62) * 6 : 0;
        applyWin(win, frameState.alpha, frameState.inverted, view, fx, fy);

        renderer.setScissorTest(false);
        renderer.setViewport(0, 0, W, H);
        if (world === 'gallery') {
            camera.position.set(mouse.x * 0.45, sceneState.camY - mouse.y * 0.3, sceneState.camZ);
            camera.lookAt(0, 0, 0);
            camera.setViewOffset(W, H, view.ox * W, view.oy * H, view.ow * W, view.oh * H);
            renderer.render(scene, camera);
        } else {
            const a = arenaState.orbA + et * 0.02;
            arenaCam.position.set(
                Math.sin(a) * arenaState.orbR,
                arenaState.orbY + Math.sin(et * 0.5) * 0.3,
                Math.cos(a) * arenaState.orbR
            );
            arenaCam.lookAt(0, 3.2, 0);
            renderer.render(arenaScene, arenaCam);
            if (frameState.inverted && win.w > 8) {
                const rx = win.x + fx;
                const ry = win.y + fy;
                renderer.clearDepth();
                renderer.setScissorTest(true);
                renderer.setScissor(rx, H - ry - win.h, win.w, win.h);
                renderer.setViewport(rx, H - ry - win.h, win.w, win.h);
                renderer.setClearColor(0x0e0a07, 1);
                renderer.clear(true, true, false);
                pipCam.aspect = win.w / win.h;
                pipCam.updateProjectionMatrix();
                pipCam.position.set(mouse.x * 0.35, sceneState.camY - mouse.y * 0.25, sceneState.camZ);
                pipCam.lookAt(0, 0, 0);
                renderer.render(scene, pipCam);
                renderer.setClearColor(0x000000, 0);
                renderer.setScissorTest(false);
            }
        }
    }
    gsap.ticker.add(render);

    const cleanupUi = initUiInteractions({
        lenis,
        cursor,
        labelEl,
        frameLabels,
        isInverted: () => frameState.inverted,
        invalidEmailMessage,
        successToastMessage,
        getViewport: () => ({ W, H }),
    });

    scrollEngine.rebuildOffsets(H);
    scrollEngine.applyScroll(true);
    playHeroReveal(win, WS.hero(), lenis, () => scrollEngine.applyScroll(true));

    const onFontsReady = () => {
        scrollEngine.rebuildOffsets(H);
        ScrollTrigger.refresh();
    };
    document.fonts.ready.then(onFontsReady);

    const onStRefresh = () => {
        scrollEngine.rebuildOffsets(H);
        scrollEngine.applyScroll(true);
    };
    ScrollTrigger.addEventListener('refresh', onStRefresh);

    let rto: ReturnType<typeof setTimeout>;
    const onResize = () => {
        clearTimeout(rto);
        rto = setTimeout(() => {
            W = window.innerWidth;
            H = window.innerHeight;
            renderer.setSize(W, H);
            arenaCam.aspect = W / H;
            arenaCam.updateProjectionMatrix();
            scrollEngine.rebuildOffsets(H);
            scrollEngine.applyScroll(true);
            ScrollTrigger.refresh();
        }, 250);
    };
    window.addEventListener('resize', onResize);

    return () => {
        clearTimeout(rto);
        cleanupUi();
        ScrollTrigger.removeEventListener('refresh', onStRefresh);
        stageClip.removeEventListener('pointerdown', onPointerDown);
        stageClip.removeEventListener('pointermove', onPointerMove);
        stageClip.removeEventListener('pointerup', endDrag);
        stageClip.removeEventListener('pointercancel', endDrag);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onResize);
        gsap.ticker.remove(onTickLenis);
        gsap.ticker.remove(render);
        lenis.destroy();
        renderer.dispose();
    };
}
