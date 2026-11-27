
# 9. 管理全局样式


[🏠 返回项目主文档](../../README.zh-CN.md#table-of-contents)


项目使用 Tailwind CSS v4 管理全局样式，并通过自定义前缀（Prefix）区分 Makelier 的工具类，减少与第三方样式及宿主页面之间的命名冲突。每个 Site 都拥有独立的全局样式，统一存放在该 Site 的 `src/styles/` 目录下。默认全局样式入口为：`sites/{your_site_name}/src/styles/tailwind.css`


**默认前缀为 `mkl`**，你也可以根据实际项目需要自定义前缀。

## 9.1 全局样式入口

在 `tailwind.css` 中引入 Tailwind CSS：

```css
@import "tailwindcss" prefix(mkl);

/* Make sure utilities used inside pages / components are always picked up. */
@source "../pages";
@source "../components";
```

其中，`prefix(mkl)` 用于设置 Tailwind CSS 的自定义前缀。

如果需要修改前缀，例如使用 `app`，只需调整为：

```css
@import "tailwindcss" prefix(app);

/* Make sure utilities used inside pages / components are always picked up. */
@source "../pages";
@source "../components";
```

注意：CSS 入口中配置的前缀，需要与页面和组件模板中使用的前缀保持一致。

## 9.2 使用带前缀的工具类

启用自定义前缀后，Tailwind CSS 工具类需要在原有类名前添加前缀，并使用冒号分隔。

例如，默认使用 `mkl` 前缀时：

```tsx
export default function Example() {
    return (
        <section className="mkl:bg-primary mkl:text-white mkl:p-8">
            <h1 className="mkl:font-display mkl:text-4xl">
                Hello World
            </h1>
        </section>
    );
}
```

<details>
<summary>👉 [点击展开]</summary>

| 原始工具类 | 使用前缀后的写法 |
|---|---|
| `flex` | `mkl:flex` |
| `grid` | `mkl:grid` |
| `bg-primary` | `mkl:bg-primary` |
| `text-white` | `mkl:text-white` |
| `p-8` | `mkl:p-8` |
| `md:flex` | `mkl:md:flex` |
| `max-[760px]:grid-cols-1` | `mkl:max-[760px]:grid-cols-1` |

</details>

注意，前缀需要放在所有响应式变体、状态变体和其他变体之前。

> 冒号前缀用于 Tailwind 工具类，横线前缀用于自定义 class 和 ID。简明命名规范请参阅[样式规范速查](./style-conventions.md)。

## 9.3 定义基础样式

<details>
<summary>👉 [点击展开]</summary>

可以通过 `@layer base` 定义网站的基础样式，例如页面背景、字体和默认文本颜色：

```css
@layer base {
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #ffffff;
        color: #111111;
    }
}
```

基础样式属于普通 CSS，不需要添加 Tailwind 前缀。

</details>

## 9.4 定义设计变量

<details>
<summary>👉 [点击展开]</summary>

使用 Tailwind CSS v4 的 `@theme` 定义设计变量，Tailwind 会根据变量生成对应的工具类。

```css
@theme {
    --color-primary: #2563eb;
    --color-secondary: #64748b;
    --font-display: "Inter", sans-serif;
}
```

例如，使用默认 `mkl` 前缀时，可以在页面中使用：

```tsx
<section className="mkl:bg-primary mkl:text-secondary mkl:font-display">
    Hello World
</section>
```

</details>

## 9.5 在页面中引入全局样式

在页面的 `index.tsx` 中引入全局样式：

```tsx
import '@/styles/tailwind.css';
```

这里的 `@` 别名指向当前 Site 的 `src/` 目录。

完成引入后，页面模板和组件模板均可直接使用已经配置好的 Tailwind CSS 工具类，无需在每个组件模板中重复引入全局样式。



---


[🏠 返回项目主文档](../../README.zh-CN.md#table-of-contents)