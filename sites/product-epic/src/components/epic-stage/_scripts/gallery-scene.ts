import * as THREE from 'three';
import { PI } from './math-scroll';
import { createDustPoints, makeDustTexture, makeEyeTexture } from './three-textures';

export interface RecompPart {
    obj: THREE.Object3D;
    fp: THREE.Vector3;
    fr: THREE.Euler;
    sp: THREE.Vector3;
    sr: THREE.Euler;
    d: number;
}

export function buildGalleryScene(scene: THREE.Scene) {
    scene.fog = new THREE.FogExp2(0x0d0906, 0.05);

    const eyeTex = makeEyeTexture();
    const dustTex = makeDustTexture();

    const matBody = new THREE.MeshStandardMaterial({ color: 0x191720, roughness: 0.34, metalness: 0.72, envMapIntensity: 0.9 });
    const matGold = new THREE.MeshStandardMaterial({ color: 0xc9a227, roughness: 0.22, metalness: 1, envMapIntensity: 1.25 });
    const matRed = new THREE.MeshStandardMaterial({ color: 0x571612, roughness: 0.88, metalness: 0.05, envMapIntensity: 0.35 });
    const matStrap = new THREE.MeshStandardMaterial({ color: 0x2b2733, roughness: 0.8, metalness: 0.25, envMapIntensity: 0.5 });
    const matLens = new THREE.MeshPhysicalMaterial({
        map: eyeTex,
        emissiveMap: eyeTex,
        emissive: 0xd8a838,
        emissiveIntensity: 0.3,
        color: 0xffffff,
        roughness: 0.14,
        metalness: 0.85,
        clearcoat: 1,
        clearcoatRoughness: 0.12,
        envMapIntensity: 1.1,
    });

    const rig = new THREE.Group();
    const spin = new THREE.Group();
    const drag = new THREE.Group();
    rig.add(spin);
    spin.add(drag);
    scene.add(rig);

    const headset = new THREE.Group();
    drag.add(headset);

    const addPartMesh = (
        geo: THREE.BufferGeometry,
        mat: THREE.Material,
        p: { x?: number; y?: number; z?: number; s?: [number, number, number]; r?: [number, number, number] } = {}
    ) => {
        const m = new THREE.Mesh(geo, mat);
        m.position.set(p.x || 0, p.y || 0, p.z || 0);
        if (p.s) m.scale.set(...p.s);
        if (p.r) m.rotation.set(...p.r);
        headset.add(m);
        return m;
    };

    addPartMesh(new THREE.SphereGeometry(1.1, 72, 48), matBody, { z: -0.08, s: [1.5, 1, 1.02] });
    addPartMesh(new THREE.TorusGeometry(0.78, 0.055, 20, 72), matGold, { z: 1.0 });
    addPartMesh(new THREE.CircleGeometry(0.75, 64), matLens, { z: 1.035 });
    addPartMesh(new THREE.TorusGeometry(0.5, 0.016, 12, 64), matGold, { z: 1.06 });
    addPartMesh(new THREE.TorusGeometry(0.95, 0.23, 20, 48), matRed, { y: -0.82, z: 0.12, r: [PI / 2, 0, 0], s: [1.42, 1.08, 1] });
    addPartMesh(new THREE.TorusGeometry(1.0, 0.12, 16, 56), matRed, { z: -0.5, s: [1.52, 1.02, 1] });
    addPartMesh(new THREE.CylinderGeometry(0.14, 0.14, 0.07, 32), matGold, { x: 1.64, y: 0.1, z: 0.22, r: [0, 0, PI / 2] });
    addPartMesh(new THREE.CylinderGeometry(0.14, 0.14, 0.07, 32), matGold, { x: -1.64, y: 0.1, z: 0.22, r: [0, 0, PI / 2] });
    addPartMesh(new THREE.TorusGeometry(1.14, 0.045, 12, 48, PI), matStrap, { z: -0.06, s: [1.46, 1.01, 1] });
    addPartMesh(new THREE.BoxGeometry(0.12, 0.34, 0.22), matStrap, { x: 1.6, z: -0.1 });
    addPartMesh(new THREE.BoxGeometry(0.12, 0.34, 0.22), matStrap, { x: -1.6, z: -0.1 });

    const sw = new THREE.Group();
    sw.rotation.y = 3.45;
    headset.add(sw);
    const rear = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.085, 14, 64, PI * 1.2), matStrap);
    rear.rotation.x = PI / 2;
    rear.position.set(0, 0.04, -0.12);
    rear.scale.set(1.24, 1, 1);
    sw.add(rear);

    const haloMat = new THREE.MeshBasicMaterial({ color: 0xd9b24a, transparent: true, opacity: 0.4 });
    const halo1 = new THREE.Mesh(new THREE.TorusGeometry(2.35, 0.011, 8, 128), haloMat);
    const halo2 = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.007, 8, 128), haloMat.clone());
    halo2.material.opacity = 0.22;
    halo1.rotation.x = 0.5;
    halo2.rotation.x = 1.25;
    rig.add(halo1, halo2);

    const dustA = createDustPoints(dustTex, 300, [16, 10, 10]);
    const dustB = createDustPoints(dustTex, 200, [12, 8, 8]);
    scene.add(dustA, dustB);

    scene.add(new THREE.HemisphereLight(0x40362a, 0x0a0705, 0.65));
    const keyLight = new THREE.DirectionalLight(0xffd9a6, 2.4);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0x51749e, 1.15);
    rimLight.position.set(-6, 2.5, -5);
    scene.add(rimLight);
    const redLight = new THREE.PointLight(0xb0342a, 0.35, 14);
    redLight.position.set(1.6, -1.8, 2.6);
    scene.add(redLight);
    const fillLight = new THREE.PointLight(0xd9a83e, 0.5, 12);
    fillLight.position.set(-2.4, 1.6, 2.2);
    scene.add(fillLight);

    const clipPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), -2.8);
    const bLineM = new THREE.LineBasicMaterial({ color: 0xd9b24a, transparent: true, opacity: 0.95, clippingPlanes: [clipPlane] });
    const bFillM = new THREE.MeshStandardMaterial({ color: 0x241c10, roughness: 0.4, metalness: 0.7, transparent: true, opacity: 0.08, clippingPlanes: [clipPlane], envMapIntensity: 0.6 });
    const bGoldM = new THREE.MeshStandardMaterial({ color: 0xc9a227, roughness: 0.25, metalness: 1, transparent: true, opacity: 0.9, clippingPlanes: [clipPlane], envMapIntensity: 1.2 });
    const bGlassM = new THREE.MeshStandardMaterial({ color: 0x0d0a12, roughness: 0.12, metalness: 0.9, emissive: 0x6b1d12, emissiveIntensity: 0.5, transparent: true, opacity: 0.92, clippingPlanes: [clipPlane] });

    const gB = new THREE.Group();
    drag.add(gB);
    const parts: RecompPart[] = [];

    function addPart(obj: THREE.Object3D, fp: [number, number, number], fr: [number, number, number] | null, d: number) {
        parts.push({
            obj,
            fp: new THREE.Vector3(...fp),
            fr: new THREE.Euler(...(fr || [0, 0, 0])),
            sp: new THREE.Vector3(...fp).add(new THREE.Vector3((Math.random() - 0.5) * 4, (Math.random() - 0.3) * 4, (Math.random() - 0.5) * 4)),
            sr: new THREE.Euler((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5),
            d,
        });
        gB.add(obj);
    }

    function edged(geo: THREE.BufferGeometry, fillMat: THREE.Material, edgeTh = 25) {
        const g = new THREE.Group();
        g.add(new THREE.Mesh(geo, fillMat));
        g.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo, edgeTh), bLineM));
        return g;
    }

    const arcS = -PI * 0.42;
    const arcL = PI * 0.84;
    addPart(edged(new THREE.CylinderGeometry(1.35, 1.35, 0.8, 48, 1, true, arcS, arcL), bFillM), [0, 0, 0], null, 0);
    addPart(edged(new THREE.CylinderGeometry(1.37, 1.37, 0.05, 48, 1, true, arcS, arcL), bFillM, 60), [0, 0.425, 0], null, 0.07);
    addPart(edged(new THREE.CylinderGeometry(1.37, 1.37, 0.05, 48, 1, true, arcS, arcL), bFillM, 60), [0, -0.425, 0], null, 0.12);
    addPart(edged(new THREE.CylinderGeometry(1.4, 1.4, 0.26, 48, 1, true, -PI * 0.36, PI * 0.72), bGlassM), [0, 0, 0], null, 0.18);
    addPart(edged(new THREE.SphereGeometry(0.3, 24, 16), bFillM), [1.31, 0, 0.34], [0, 0, 0], 0.24);
    {
        const p = edged(new THREE.SphereGeometry(0.3, 24, 16), bFillM);
        p.children.forEach((m) => m.scale.set(0.65, 1, 1));
        addPart(p, [-1.31, 0, 0.34], null, 0.3);
    }
    {
        const c = edged(new THREE.OctahedronGeometry(0.16), bGoldM, 1);
        c.children.forEach((m) => m.scale.set(0.5, 1.3, 0.28));
        addPart(c, [0, 0.62, 0.15], null, 0.36);
    }
    {
        const wr = new THREE.Group();
        const band = new THREE.Mesh(new THREE.TorusGeometry(1.12, 0.045, 10, 48, PI * 1.1), bFillM);
        const bandWrap = new THREE.Group();
        bandWrap.rotation.y = 1.41;
        band.rotation.x = PI / 2;
        bandWrap.add(band);
        wr.add(bandWrap);
        for (let i = 0; i < 14; i++) {
            const a = -1.62 + i * (3.24 / 13);
            const leaf = new THREE.Mesh(new THREE.OctahedronGeometry(0.09), bGoldM);
            leaf.scale.set(0.5, 1, 0.22);
            leaf.position.set(Math.sin(a) * 1.12, 0.07, -Math.cos(a) * 1.12);
            leaf.rotation.set(0.18 * (i % 2 ? 1 : -1), a, i % 2 ? 0.55 : -0.55);
            wr.add(leaf);
        }
        addPart(wr, [0, 0, -0.12], null, 0.44);
    }
    gB.visible = false;

    return {
        rig,
        spin,
        drag,
        headset,
        halo1,
        halo2,
        dustA,
        dustB,
        redLight,
        matLens,
        clipPlane,
        bLineM,
        bFillM,
        bGoldM,
        gB,
        parts,
    };
}
