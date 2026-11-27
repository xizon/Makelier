
# 13. Using Blocks in WordPress

[🏠 Back to Main README](../../README.md#table-of-contents)


Components in a Site can be exported as a WordPress Gutenberg plugin and used as Blocks in the block editor.

> Only **one Site** can be exported at a time. `all` is not supported.

## 13.1 Export with a Command  (Recommended)

> The exported package will be placed in the `dist-wp` directory.

Specify a Site:
```bash
npm run export:wp -- my-site
```

## 13.2 Use in WordPress

1. Run the export command above to generate the Gutenberg plugin for the Site.
2. Install the generated plugin in WordPress (upload it via "Plugins → Add New → Upload Plugin" in the admin, or place it in the `wp-content/plugins/` directory).
3. Activate the plugin on the "Plugins" page.
4. Edit a post or page, click "+" in the block editor, and search for the component name to insert the matching Block.

## 13.3 FAQ

<details>
<summary>👉 [Click to expand]</summary>

- Only one Site can be exported per run. To export multiple Sites, run the command separately for each.
- After changing a component, run the export command again and reinstall or overwrite the plugin in WordPress for the changes to take effect.

</details>


---


[🏠 Back to Main README](../../README.md#table-of-contents)
