# Viewer360

## Overview

Interactive 360-degree Three.js 3D skateboard showcase supporting drag orbit rotation, auto-spin toggle, quick camera presets, custom `.glb`/`.gltf` model URLs, and custom deck/grip/carbon texture URLs.

## Examples

### Basic Usage

```tsx
<Viewer360
    modelUrl=""
    useDemoGlb={false}
    deckTexture="./assets/3d/demo-deck-graphic.png"
    gripTexture="./assets/3d/demo-grip-tape.png"
    carbonTexture="./assets/3d/demo-carbon-map.png"
/>
```

## API Reference

| Parameter | Type | Default | Required | Description |
|---|---|---|---|---|
| `modelUrl` | `string` | `''` | - | External `.glb` or `.gltf` model URL. |
| `deckTexture` | `string` | `'./assets/3d/demo-deck-graphic.png'` | - | Deck graphic image texture URL. |
| `gripTexture` | `string` | `'./assets/3d/demo-grip-tape.png'` | - | Grip tape texture image URL. |
| `carbonTexture` | `string` | `'./assets/3d/demo-carbon-map.png'` | - | Carbon fiber accent texture URL. |
| `useDemoGlb` | `boolean` | `false` | - | Load bundled `./assets/3d/demo-skateboard.glb` when `modelUrl` is empty. |

## Dependencies

- [three](https://threejs.org/) - `^0.177.0` (`three` and `three/examples/jsm/loaders/GLTFLoader.js`)
