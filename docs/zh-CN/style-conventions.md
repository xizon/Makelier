# \[补充\] 样式规范速查

优先使用 Tailwind 工具类。只有当工具类无法满足需求，或组件需要专属选择器、复杂动画和特殊视觉效果时，才编写自定义 CSS。

## 前缀规则

每个 Site 的 Tailwind 前缀以 `src/styles/tailwind.css` 中的配置为准。默认前缀是 `mkl`，以下示例均以此为例。

- **`mkl:` 只用于 Tailwind 工具类**：`mkl:flex`、`mkl:hover:bg-black`。
- **`mkl-` 用于自定义 class 和 ID**：`mkl-primary-menu`、`mkl-primary-menu__link`、`#mkl-primary-menu`。
- 如果 Site 使用了其他前缀，必须使用实际配置值，不要硬编码 `mkl`。
- 自定义名称应包含组件或页面的命名空间；新代码统一优先使用“前缀 + 横线”的形式。

## 示例

```tsx
<nav className="mkl:flex mkl:items-center mkl-primary-menu" id="mkl-primary-menu">
    <a className="mkl-primary-menu__link">Home</a>
</nav>
```

```css
.mkl-primary-menu {
    .mkl-primary-menu__link {
        color: white;

        &:hover {
            color: #a78bfa;
        }
    }
}
```

```ts
const menu = element.querySelector('.mkl-primary-menu');
const link = menu?.querySelector('.mkl-primary-menu__link');
```

自定义名称不包含冒号，因此 CSS 和 JavaScript 选择器都不需要转义。

## 推荐规则

1. 编写样式前先读取目标 Site 的 `tailwind.css`，不要假设前缀一定是 `mkl`。
2. 普通布局、间距、字体、颜色和响应式状态优先使用 Tailwind 工具类。
3. 组件或页面专属样式、JavaScript 查询钩子使用带前缀的自定义 class。
4. 选择器应限定在组件或页面范围内，避免 `.container`、`.title`、`#content` 等通用名称。
5. 新建自定义 class 和 ID 时不要使用冒号；冒号专门留给 Tailwind 工具类。

## 旧代码中的冒号命名

只有维护旧代码或兼容既有命名时，才保留冒号式自定义名称。选择器中必须转义冒号：

```css
/* CSS：一个反斜杠 */
.mkl\:legacy-menu { }
```

```ts
// JavaScript 字符串：两个反斜杠
element.querySelector('.mkl\\:legacy-menu');
```
