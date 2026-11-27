/**
 * WordPress View Entry
 */

import '../../sites/_official/src/components/pricing-table'; // It must be "index.ts"
import { mountComponents } from '../../core/runtime/bridge/register';

console.log('[Makelier][WP] View entry loaded');

function start() {
    console.log('[Makelier][WP] Starting mount');

    const cleanup = mountComponents();

    console.log('[Makelier][WP] Mount completed');

    return cleanup;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, {
        once: true,
    });
} else {
    start();
}