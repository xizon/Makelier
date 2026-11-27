# Changelog


#### = 1.1.92-alpha (November 27, 2026) =

* core: Tailwind CSS adaptation for the WordPress editor, compatible with older browsers.
* core: Force the exclusion of third-party libraries from the generated WordPress editor view.


#### = 1.1.90-alpha (November 25, 2026) =

* core: Supports automatic generation of scripts for the native WordPress Gutenberg editor.
* core: Changing a React component export to an export of the entire application
* feat: convert Makelier attributes to WordPress schema。
* fix: inject component attributes in WordPress editor builds
* fix: explicitly define Tailwind CSS source paths.
* core: optimize shared styles for Gutenberg blocks


#### = 1.1.60-alpha (November 18, 2026) =

* core: Added a system feature configuration file, `makelier.config.ts` (disabled by default), to support specialized build-time functionality.
* core: Page renderer process optimization.
* fix: (core) Fixing Rendered SEO Titles.
* fix: (core) Fixed an issue where testing could not be performed when the component folder did not exist.
* fix: (core) Added a CSS compatibility fallback for Tailwind CSS v4 color-mix() utilities to ensure opacity-based colors render correctly in older browsers, including Safari 16.0.
* fix: (core) improve React component export compatibility
   - Integrate Template Engine into React component export.
   - Transform JSX.Element references to React-compatible ReactNode types.
   - Preserve Template Props and handle templates without parameters.
   - Rewrite site component aliases to relative import paths.
   - Support both @/components/ and @/site/<site>/components/ aliases.
   - Ensure inline CSS custom properties use React-compatible style objects.
   - Improve Next.js and TypeScript compatibility.
* feat: (core) add cross-site component dependency export
   - Add recursive dependency collection and deduplication
   - Support cross-site component resolution and import rewriting
   - Transform TSX files and process JSX imports
   - Generate React entry points automatically
   - Copy component assets and manifests
   - Add comprehensive unit tests and verify end-to-end export
* feat: (core) add React export support with JSX type normalization
   - Add React export transformation for site templates.
   - Normalize native JSX attributes for React compatibility.
   - Convert HTML class attributes to className and label for to htmlFor.
   - Preserve class attributes on React components and Web Components.
   - Detect and convert site children type aliases to ReactNode.
   - Preserve standalone JSX.Element type aliases.
   - Automatically add ReactNode type imports when needed.
   - Support recursive Props type reference resolution.
   - Add transformer and React export tests.

   

#### = 1.1.53-alpha (November 6, 2026) =

* fix: (core) The component allows online preview of Tailwind styles for the current site.
* refactor: (core) Resolve HTML formatting issues during the build process.
* tweak: Remove unnecessary injected functions.
* chore: Optimize demos.


#### = 1.1.31-alpha (November 5, 2026) =

* fix: (core) TSX parsing errors caused by ASCII byte offsets in template files. Significantly enhance the fault tolerance of custom templates.
* new: Added two new immersive, scrolling story templates.


#### = 1.1.25-alpha (November 3, 2026) =

* tweak: Renaming the default site in the `sites/` directory. e.g. `product-elegant`, `portfolio-modern` and `studio-immersive`. 
  > Template Naming Convention: `{category}-{style}`
  
* tweak: Separate the existing sites into formal website templates.
* fix: Fixed a bug in the navigation component.
* core: Enhanced the test cases for the playground.
* core: Agent solution package.


#### = 1.0.1-alpha (October 20, 2026) =

* chore: Example pages and component optimization.
* core: Fixed a parsing bug in the component live preview.



#### = 1.0.0-alpha (October 17, 2026) =

* First release.
