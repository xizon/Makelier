
/**
 * CSS Compatibility
 *
 * Required dependency: "postcss postcss-value-parser"
 *
 * Provides fallback declarations for CSS features that are unsupported
 * by older browsers.
 */
/*

@layer theme {
    :root,
    :host {
        --mkl-color-neon-cyan: #22f0ff;
    }
}

.mkl\:bg-neon-cyan\/\[0\.06\] {
    background-color: var(--mkl-color-neon-cyan)
}
.mkl\:bg-neon-cyan,
.mkl\:bg-neon-cyan\/10 {
    background-color: var(--mkl-color-neon-cyan)
}

==================>

.mkl\:bg-neon-cyan\/\[0\.06\] {
    background-color: rgba(34, 240, 255, 0.06)
}
.mkl\:bg-neon-cyan {
    background-color: var(--mkl-color-neon-cyan)
}
.mkl\:bg-neon-cyan\/10 {
    background-color: rgba(34, 240, 255, 0.1)
}

*/

/**
 * Create the CSS compatibility plugin.
 *
 * This plugin should run after Tailwind CSS compilation and before CSS minification.
 */
export { colorMixFallback } from './color-mix-fallback.ts';