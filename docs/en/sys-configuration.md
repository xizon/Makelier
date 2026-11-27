# 14. Makelier Configuration

[🏠 Back to Main README](../../README.md#table-of-contents)

Makelier supports project-level configuration through `makelier.config.ts` in the project root.

## 14.1 Build Options

| Option | Default | Description |
|---|---|---|
| `build.html.beautify` | `true` | Enable HTML formatting during the build process. |
| `build.css.compatibility` | `true` | Enable CSS compatibility processing for older browsers.(e.g. Safari 16.0.3) |
| `build.images.enabled` | `true` | Enable image optimization. |
| `build.images.quality` | `80` | Set image compression quality (1–100). |
| `build.images.formats` | `['jpeg', 'png', 'webp', 'avif']` | Specify the image formats to optimize. |

## 14.2 Example

```ts
export default {
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
```
