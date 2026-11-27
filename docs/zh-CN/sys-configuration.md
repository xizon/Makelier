# 14. Makelier 配置

[🏠 返回项目主文档](../../README.zh-CN.md#table-of-contents)

Makelier 支持通过项目根目录下的 `makelier.config.ts` 进行项目级配置。

## 14.1 构建选项

| 选项 | 默认值 | 说明 |
|---|---|---|
| `build.html.beautify` | `true` | 在构建过程中启用 HTML 格式化。 |
| `build.css.compatibility` | `true` | 启用针对旧版浏览器（例如 Safari 16.0.3）的 CSS 兼容性处理。 |
| `build.images.enabled` | `true` | 启用图片优化。 |
| `build.images.quality` | `80` | 设置图片压缩质量（1–100）。 |
| `build.images.formats` | `['jpeg', 'png', 'webp', 'avif']` | 指定需要优化的图片格式。 |

## 14.2 配置示例

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
