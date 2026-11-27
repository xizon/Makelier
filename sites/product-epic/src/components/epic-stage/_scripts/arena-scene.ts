import * as THREE from 'three';
import gsap from 'gsap';
import { PI } from './math-scroll';
import { createDustPoints, makeDustTexture, makeNumeralTexture } from './three-textures';

export function buildArenaScene(
    arenaScene: THREE.Scene,
    envMap: THREE.Texture | null,
    goldIrisBase: THREE.MeshStandardMaterial
) {
    arenaScene.background = new THREE.Color(0x0e0805);
    arenaScene.fog = new THREE.FogExp2(0x140a06, 0.026);
    arenaScene.environment = envMap;

    const arena = new THREE.Group();
    arenaScene.add(arena);

    const stone = new THREE.MeshStandardMaterial({ color: 0x2b241c, roughness: 0.92, metalness: 0.05, envMapIntensity: 0.25 });
    const stoneD = new THREE.MeshStandardMaterial({ color: 0x201a13, roughness: 0.95, envMapIntensity: 0.2 });
    const matGold = new THREE.MeshStandardMaterial({ color: 0xc9a227, roughness: 0.22, metalness: 1, envMapIntensity: 1.25 });
    const banners: THREE.Mesh[] = [];

    const place = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number) => {
        const m = new THREE.Mesh(geo, mat);
        m.position.set(x, y, z);
        arena.add(m);
        return m;
    };

    function ringOfColumns(R: number, n: number, h: number, arcFrac = 1, y0 = 0) {
        for (let i = 0; i < n; i++) {
            const a = (i / n) * PI * 2 * arcFrac + 0.3;
            const x = Math.cos(a) * R;
            const z = Math.sin(a) * R;
            place(new THREE.CylinderGeometry(0.32, 0.4, h, 10), stone, x, h / 2 + y0, z);
            place(new THREE.BoxGeometry(0.95, 0.26, 0.95), stoneD, x, h + 0.13 + y0, z);
            place(new THREE.BoxGeometry(1.05, 0.3, 1.05), stoneD, x, 0.15 + y0, z);
            if (arcFrac === 1 && i % 3 === 0) {
                const ban = new THREE.Mesh(
                    new THREE.PlaneGeometry(1.15, 3.2),
                    new THREE.MeshStandardMaterial({ color: 0x571410, roughness: 0.9, side: THREE.DoubleSide, emissive: 0x2a0806, emissiveIntensity: 0.4 })
                );
                ban.position.set(Math.cos(a) * (R - 0.55), h - 1.9, Math.sin(a) * (R - 0.55));
                ban.rotation.y = -a + PI / 2;
                ban.userData.ph = i;
                arena.add(ban);
                banners.push(ban);
            }
        }
    }

    ringOfColumns(20, 18, 6);
    {
        const ent = new THREE.Mesh(new THREE.TorusGeometry(20, 0.38, 8, 80), stoneD);
        ent.rotation.x = PI / 2;
        ent.position.y = 6.45;
        arena.add(ent);
    }
    ringOfColumns(30, 14, 10, 0.72);
    {
        const ent2 = new THREE.Mesh(new THREE.TorusGeometry(30, 0.5, 8, 60, PI * 1.44), stoneD);
        ent2.rotation.x = PI / 2;
        ent2.position.y = 10.5;
        ent2.rotation.z = 0.3;
        arena.add(ent2);
    }

    const ground = new THREE.Mesh(new THREE.CircleGeometry(70, 64), new THREE.MeshStandardMaterial({ color: 0x120d09, roughness: 0.95 }));
    ground.rotation.x = -PI / 2;
    arena.add(ground);

    const grid = new THREE.PolarGridHelper(42, 16, 8, 64, 0x8a6b2f, 0x3a2c16);
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.3;
    grid.position.y = 0.02;
    arena.add(grid);

    place(new THREE.CylinderGeometry(3, 3.5, 0.7, 48), stone, 0, 0.35, 0);
    {
        const pr = new THREE.Mesh(new THREE.TorusGeometry(3.1, 0.06, 10, 64), matGold);
        pr.rotation.x = PI / 2;
        pr.position.y = 0.74;
        arena.add(pr);
    }

    const eyeGrp = new THREE.Group();
    eyeGrp.position.set(0, 12.5, 0);
    eyeGrp.rotation.x = 0.32;
    arena.add(eyeGrp);
    eyeGrp.add(
        new THREE.Mesh(
            new THREE.SphereGeometry(3.4, 24, 16),
            new THREE.MeshBasicMaterial({ color: 0xd9b24a, wireframe: true, transparent: true, opacity: 0.22 })
        )
    );
    {
        const irisMat = goldIrisBase.clone();
        irisMat.clippingPlanes = null;
        const iris = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.05, 10, 64), irisMat);
        iris.position.z = 2.95;
        eyeGrp.add(iris);

        const pts: THREE.Vector3[] = [];
        for (let i = 0; i < 24; i++) {
            const a = (i / 24) * PI * 2;
            pts.push(
                new THREE.Vector3(Math.cos(a) * 1.7, Math.sin(a) * 1.7, 2.85),
                new THREE.Vector3(Math.cos(a) * 2.5, Math.sin(a) * 2.5, 2.2)
            );
        }
        eyeGrp.add(
            new THREE.LineSegments(
                new THREE.BufferGeometry().setFromPoints(pts),
                new THREE.LineBasicMaterial({ color: 0xc9a227, transparent: true, opacity: 0.5 })
            )
        );
    }

    gsap
        .timeline({ repeat: -1, repeatDelay: 5.5 })
        .to(eyeGrp.scale, { y: 0.05, duration: 0.3, ease: 'power2.in' })
        .to(eyeGrp.scale, { y: 1, duration: 0.38, ease: 'power2.out' }, '+=.14');

    const numerals: { sp: THREE.Sprite; a: number; r: number; y: number; v: number }[] = [];
    ['XII', 'MMXXV', 'XCIX', 'IV', 'I', 'CDXCVIII', 'VII', 'LXX'].forEach((str, i) => {
        const sp = new THREE.Sprite(
            new THREE.SpriteMaterial({ map: makeNumeralTexture(str), transparent: true, opacity: 0.8, depthWrite: false })
        );
        const s = 0.9 + Math.random() * 1.3;
        sp.scale.set(2.4 * s, 1.2 * s, 1);
        numerals.push({
            sp,
            a: (i / 8) * PI * 2,
            r: 9 + Math.random() * 10,
            y: 3.5 + Math.random() * 7,
            v: (0.05 + Math.random() * 0.08) * (i % 2 ? 1 : -1),
        });
        arena.add(sp);
    });

    const arenaDust = createDustPoints(makeDustTexture(), 360, [60, 22, 60]);
    (arenaDust.material as THREE.PointsMaterial).opacity = 0.5;
    (arenaDust.material as THREE.PointsMaterial).size = 0.22;
    arena.add(arenaDust);

    arenaScene.add(new THREE.HemisphereLight(0x4a3a28, 0x0d0705, 0.8));
    const aKey = new THREE.DirectionalLight(0xffd9a6, 1.9);
    aKey.position.set(8, 14, 10);
    arenaScene.add(aKey);
    const aRed = new THREE.PointLight(0xb0342a, 2.2, 40);
    aRed.position.set(0, 2.5, 6);
    arenaScene.add(aRed);
    const aRim = new THREE.DirectionalLight(0x51749e, 0.7);
    aRim.position.set(-10, 6, -12);
    arenaScene.add(aRim);

    return { banners, numerals, arenaDust, aRed };
}
