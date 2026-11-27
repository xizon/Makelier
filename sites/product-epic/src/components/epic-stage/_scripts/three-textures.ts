import * as THREE from 'three';
import { PI } from './math-scroll';

export function makeEyeTexture(): THREE.CanvasTexture {
    const s = 512;
    const c = document.createElement('canvas');
    c.width = c.height = s;
    const x = c.getContext('2d')!;
    const m = s / 2;

    const bg = x.createRadialGradient(m, m, 0, m, m, m);
    bg.addColorStop(0, '#241708');
    bg.addColorStop(0.7, '#120b05');
    bg.addColorStop(1, '#0a0603');
    x.fillStyle = bg;
    x.fillRect(0, 0, s, s);

    x.strokeStyle = '#c9a227';
    x.lineWidth = 7;
    x.beginPath();
    x.arc(m, m, 236, 0, 7);
    x.stroke();

    x.lineWidth = 2;
    x.globalAlpha = 0.8;
    x.beginPath();
    x.arc(m, m, 200, 0, 7);
    x.stroke();
    x.beginPath();
    x.arc(m, m, 118, 0, 7);
    x.stroke();

    x.globalAlpha = 0.55;
    for (let i = 0; i < 28; i++) {
        const a = (i / 28) * PI * 2;
        x.beginPath();
        x.moveTo(m + Math.cos(a) * 206, m + Math.sin(a) * 206);
        x.lineTo(m + Math.cos(a) * 226, m + Math.sin(a) * 226);
        x.stroke();
    }

    x.globalAlpha = 1;
    const ir = x.createRadialGradient(m, m, 4, m, m, 112);
    ir.addColorStop(0, '#0c0703');
    ir.addColorStop(0.75, '#1c1106');
    ir.addColorStop(1, '#3d2b10');
    x.fillStyle = ir;
    x.beginPath();
    x.arc(m, m, 112, 0, 7);
    x.fill();

    x.fillStyle = 'rgba(232,201,106,.95)';
    x.beginPath();
    x.arc(m + 26, m - 30, 13, 0, 7);
    x.fill();

    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
}

export function makeDustTexture(): THREE.CanvasTexture {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const x = c.getContext('2d')!;
    const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(242,204,116,1)');
    g.addColorStop(0.35, 'rgba(220,170,80,.55)');
    g.addColorStop(1, 'rgba(200,150,60,0)');
    x.fillStyle = g;
    x.fillRect(0, 0, 64, 64);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
}

export function makeNumeralTexture(str: string): THREE.CanvasTexture {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 128;
    const x = c.getContext('2d')!;
    x.font = '700 72px Cinzel, Georgia, serif';
    x.textAlign = 'center';
    x.textBaseline = 'middle';
    x.shadowColor = 'rgba(230,196,106,.9)';
    x.shadowBlur = 22;
    x.fillStyle = '#e6c46a';
    x.fillText(str, 128, 68);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
}

export function createDustPoints(
    dustTex: THREE.Texture,
    count: number,
    spread: [number, number, number]
): THREE.Points {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        let x: number;
        let y: number;
        let z: number;
        do {
            x = (Math.random() - 0.5) * spread[0];
            y = (Math.random() - 0.5) * spread[1];
            z = (Math.random() - 0.5) * spread[2];
        } while (x * x + y * y + z * z < 4);
        pos.set([x, y, z], i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return new THREE.Points(
        g,
        new THREE.PointsMaterial({
            map: dustTex,
            size: 0.085,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        })
    );
}
