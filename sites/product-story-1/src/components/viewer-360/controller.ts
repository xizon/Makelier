import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


export function mount(element: HTMLElement | null): (() => void) | void {
    if (!element) return;

    const configEl = element.querySelector<HTMLElement>('#mkl-3d-config');
    const host = element.querySelector<HTMLElement>('#mkl-3d-canvas-host');
    if (!host) return;

    const yawReadout = element.querySelector<HTMLElement>('#mkl-3d-yaw');
    const pitchReadout = element.querySelector<HTMLElement>('#mkl-3d-pitch');
    const spinBtn = element.querySelector<HTMLButtonElement>('#mkl-3d-autospin');
    const presetBtns = Array.from(element.querySelectorAll<HTMLElement>('[data-camera-preset]'));

    const demoGlbUrl = configEl?.dataset.demoGlb || './assets/3d/demo-skateboard.glb';
    const customModelUrl = (configEl?.dataset.modelUrl || '').trim();
    const useDemoGlb = configEl?.dataset.useDemoGlb === 'true';
    const targetModelUrl = customModelUrl || (useDemoGlb ? demoGlbUrl : '');

    const deckTexUrl = (configEl?.dataset.deckTexture || '').trim();
    const gripTexUrl = (configEl?.dataset.gripTexture || '').trim();
    const carbonTexUrl = (configEl?.dataset.carbonTexture || '').trim();

    const width = Math.max(300, host.clientWidth);
    const height = Math.max(300, host.clientHeight);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0c, 0.045);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 6.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    host.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xd4ff00, 4.5, 16);
    rimLight.position.set(-3.5, 2.5, -2.5);
    scene.add(rimLight);

    const grid = new THREE.GridHelper(14, 28, 0x2a2a35, 0x16161d);
    grid.position.y = -1.25;
    scene.add(grid);

    const textureLoader = new THREE.TextureLoader();
    const gltfLoader = new GLTFLoader();

    const deckMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.35,
        roughness: 0.32,
    });

    const gripMat = new THREE.MeshStandardMaterial({
        color: 0x18181b,
        roughness: 0.9,
        metalness: 0.08,
    });

    const carbonAccentMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.5,
        roughness: 0.25,
    });

    if (deckTexUrl) {
        textureLoader.load(deckTexUrl, (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace;
            deckMat.map = tex;
            deckMat.needsUpdate = true;
        });
    }

    if (gripTexUrl) {
        textureLoader.load(gripTexUrl, (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace;
            gripMat.map = tex;
            gripMat.color.setHex(0xffffff);
            gripMat.needsUpdate = true;
        });
    }

    if (carbonTexUrl) {
        textureLoader.load(carbonTexUrl, (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace;
            carbonAccentMat.map = tex;
            carbonAccentMat.needsUpdate = true;
        });
    }

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    const buildProceduralRig = () => {
        const rig = new THREE.Group();

        const deckMesh = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.12, 1.25), deckMat);
        deckMesh.castShadow = true;
        deckMesh.receiveShadow = true;
        rig.add(deckMesh);

        const stripeMesh = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.135, 0.2), carbonAccentMat);
        stripeMesh.position.y = -0.005;
        rig.add(stripeMesh);

        const gripMesh = new THREE.Mesh(new THREE.BoxGeometry(3.9, 0.02, 1.15), gripMat);
        gripMesh.position.y = 0.065;
        rig.add(gripMesh);

        const truckMat = new THREE.MeshStandardMaterial({
            color: 0xcbd5e1,
            metalness: 0.85,
            roughness: 0.22,
        });
        const bushingMat = new THREE.MeshStandardMaterial({
            color: 0xd4ff00,
            roughness: 0.45,
            metalness: 0.1,
        });
        const wheelMat = new THREE.MeshStandardMaterial({
            color: 0xf4f4f6,
            roughness: 0.4,
            metalness: 0.05,
        });
        const bearingMat = new THREE.MeshStandardMaterial({
            color: 0xd4ff00,
            metalness: 0.65,
            roughness: 0.25,
        });

        [-1.35, 1.35].forEach((axX) => {
            // Baseplate
            const baseplate = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.05, 0.64), truckMat);
            baseplate.position.set(axX, -0.08, 0);
            rig.add(baseplate);

            // Kingpin & bushing detail
            const bushing = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.14, 16), bushingMat);
            bushing.position.set(axX, -0.15, 0);
            rig.add(bushing);

            // Hanger
            const hanger = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.24, 1.18), truckMat);
            hanger.position.set(axX, -0.2, 0);
            hanger.castShadow = true;
            rig.add(hanger);

            // Axle
            const axle = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.56, 16), truckMat);
            axle.rotation.x = Math.PI / 2;
            axle.position.set(axX, -0.26, 0);
            rig.add(axle);

            [-0.72, 0.72].forEach((wz) => {
                const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.2, 24), wheelMat);
                wheel.rotation.x = Math.PI / 2;
                wheel.position.set(axX, -0.26, wz);
                wheel.castShadow = true;
                rig.add(wheel);

                const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.215, 16), bearingMat);
                cap.rotation.x = Math.PI / 2;
                cap.position.set(axX, -0.26, wz);
                rig.add(cap);

                // Outer axle nut
                const nut = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.065, 0.065, 0.06, 6),
                    truckMat
                );
                nut.rotation.x = Math.PI / 2;
                nut.position.set(axX, -0.26, wz > 0 ? wz + 0.12 : wz - 0.12);
                rig.add(nut);
            });
        });

        return rig;
    };

    const proceduralRig = buildProceduralRig();
    rootGroup.add(proceduralRig);

    if (targetModelUrl) {
        gltfLoader.load(
            targetModelUrl,
            (gltf) => {
                rootGroup.remove(proceduralRig);
                const loaded = gltf.scene;
                loaded.traverse((child) => {
                    if ((child as THREE.Mesh).isMesh) {
                        const mesh = child as THREE.Mesh;
                        mesh.castShadow = true;
                        mesh.receiveShadow = true;
                        if (deckMat.map) {
                            mesh.material = deckMat;
                        }
                    }
                });
                rootGroup.add(loaded);
            },
            undefined,
            () => {}
        );
    }

    let targetRotY = 0.45;
    let targetRotX = 0.28;
    let currentRotY = targetRotY;
    let currentRotX = targetRotX;
    let autoSpin = true;
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const presets: Record<string, { rotX: number; rotY: number }> = {
        hero: { rotX: 0.28, rotY: 0.45 },
        deck: { rotX: 0.65, rotY: 1.55 },
        trucks: { rotX: -0.55, rotY: 0.75 },
        top: { rotX: 1.15, rotY: 0.2 },
    };

    const handlePointerDown = (e: PointerEvent) => {
        isDragging = true;
        prevX = e.clientX;
        prevY = e.clientY;
        host.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: PointerEvent) => {
        if (!isDragging) return;
        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;
        prevX = e.clientX;
        prevY = e.clientY;

        targetRotY += dx * 0.012;
        targetRotX = Math.max(-1.25, Math.min(1.25, targetRotX + dy * 0.01));
    };

    const handlePointerUp = (e: PointerEvent) => {
        if (!isDragging) return;
        isDragging = false;
        if (host.hasPointerCapture(e.pointerId)) {
            host.releasePointerCapture(e.pointerId);
        }
    };

    const handleSpinToggle = () => {
        autoSpin = !autoSpin;
        if (spinBtn) {
            spinBtn.textContent = `Auto-Spin: ${autoSpin ? 'ON' : 'OFF'}`;
            spinBtn.setAttribute('aria-pressed', String(autoSpin));
        }
    };

    const handlePresetClick = (e: Event) => {
        const btn = e.currentTarget as HTMLElement;
        const key = btn.dataset.cameraPreset || 'hero';
        const preset = presets[key];
        if (preset) {
            targetRotX = preset.rotX;
            targetRotY = preset.rotY;
        }
        presetBtns.forEach((b) => {
            const active = b === btn;
            b.classList.toggle('mkl:border-[#d4ff00]', active);
            b.classList.toggle('mkl:bg-[#d4ff00]', active);
            b.classList.toggle('mkl:text-black', active);
            b.classList.toggle('mkl:font-bold', active);
            b.classList.toggle('mkl:border-white/15', !active);
            b.classList.toggle('mkl:text-zinc-300', !active);
        });
    };

    const handleResize = () => {
        const w = Math.max(300, host.clientWidth);
        const h = Math.max(300, host.clientHeight);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    };

    host.addEventListener('pointerdown', handlePointerDown);
    host.addEventListener('pointermove', handlePointerMove);
    host.addEventListener('pointerup', handlePointerUp);
    spinBtn?.addEventListener('click', handleSpinToggle);
    presetBtns.forEach((b) => b.addEventListener('click', handlePresetClick));
    window.addEventListener('resize', handleResize);

    let rafId = 0;
    const animate = () => {
        if (autoSpin && !isDragging) {
            targetRotY += 0.0065;
        }

        currentRotY += (targetRotY - currentRotY) * 0.1;
        currentRotX += (targetRotX - currentRotX) * 0.1;

        rootGroup.rotation.y = currentRotY;
        rootGroup.rotation.x = currentRotX;
        rootGroup.position.y = Math.sin(performance.now() * 0.0022) * 0.08;

        if (yawReadout) {
            const degY = Math.round(((currentRotY * 180) / Math.PI) % 360);
            yawReadout.textContent = `${degY}°`;
        }
        if (pitchReadout) {
            const degX = Math.round((currentRotX * 180) / Math.PI);
            pitchReadout.textContent = `${degX}°`;
        }

        renderer.render(scene, camera);
        rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
        cancelAnimationFrame(rafId);
        host.removeEventListener('pointerdown', handlePointerDown);
        host.removeEventListener('pointermove', handlePointerMove);
        host.removeEventListener('pointerup', handlePointerUp);
        spinBtn?.removeEventListener('click', handleSpinToggle);
        presetBtns.forEach((b) => b.removeEventListener('click', handlePresetClick));
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
        if (renderer.domElement.parentNode === host) {
            host.removeChild(renderer.domElement);
        }
    };
}
