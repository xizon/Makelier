import type { SysConfig } from './core/utils/types.ts';

const config: SysConfig = {
    build: {
        html: {
            beautify: true,
        },
        css: {
            compatibility: true,
        },
        images: {
            enabled: true,
            quality: 80,
            formats: [
                'jpeg',
                'png',
                'webp',
                'avif',
            ],
        },
    },
};

export default config;