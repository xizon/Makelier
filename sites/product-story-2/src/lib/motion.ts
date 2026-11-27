import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function reduced(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Types `text` into `el` one character at a time. Returns a cancel function. */
export function typewrite(el: HTMLElement, text: string, cps = 22): () => void {
    if (reduced()) {
        el.textContent = text;
        return () => {};
    }
    let i = 0;
    const timer = window.setInterval(() => {
        i += 1;
        el.textContent = text.slice(0, i);
        if (i >= text.length) window.clearInterval(timer);
    }, 1000 / cps);
    return () => window.clearInterval(timer);
}

/** Counts `el` from 0 up to `to`, then pops it. */
export function countUp(el: HTMLElement, to: number, decimals = 0, duration = 1.6): gsap.core.Tween {
    const state = { v: 0 };
    return gsap.to(state, {
        v: to,
        duration: reduced() ? 0 : duration,
        ease: 'power3.out',
        onUpdate: () => {
            el.textContent = state.v.toFixed(decimals);
        },
        onComplete: () => {
            el.textContent = to.toFixed(decimals);
            gsap.fromTo(el, { scale: 1.18 }, { scale: 1, duration: 0.45, ease: 'back.out(3)' });
        },
    });
}
