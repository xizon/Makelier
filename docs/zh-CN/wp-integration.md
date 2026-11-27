
# 13. 在 WordPress 中使用 Block

[🏠 返回项目主文档](../../README.zh-CN.md#table-of-contents)


Site 里的组件可以导出为 WordPress Gutenberg 插件，在区块编辑器中以 Block 的形式使用。

> 目前仅支持导出**单个 Site**，不支持 `all`。


## 13.1 通过命令导出（推荐）

> 导出的包会放到 `dist-wp` 目录中.

指定 Site：
```bash
npm run export:wp -- my-site
```

## 13.2 在 WordPress 中使用

1. 运行上面的导出命令，生成该 Site 的 Gutenberg 插件。
2. 将生成的插件安装到 WordPress（在后台「插件 → 安装插件 → 上传插件」中上传，或直接放入 `wp-content/plugins/` 目录）。
3. 在「插件」页面启用该插件。
4. 编辑文章或页面，在区块编辑器中点击「+」，搜索组件名称，即可插入对应的 Block。

## 13.3 常见问题

<details>
<summary>👉 [点击展开]</summary>

- 每次只能导出一个 Site。如需导出多个 Site，请分别执行命令。
- 修改组件后，需要重新执行导出命令，并重新安装或覆盖 WordPress 中的插件，改动才会生效。

</details>


---


[🏠 返回项目主文档](../../README.zh-CN.md#table-of-contents)
