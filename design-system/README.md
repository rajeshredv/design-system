# Design system: Button & Toggle

Vue 3 and plain-CSS implementations of the Button and Toggle component sets from the Figma file
[Style library — Components](https://www.figma.com/design/fPrKkOBCh1zkIKQqgRSQrF/Style-library-Components--Copy-?node-id=2145-2648&m=dev).

- [`tokens.css`](./tokens.css) — design tokens (color, spacing, radius, typography), named after the Figma variables they were extracted from.
- [`components/Button.vue`](./components/Button.vue) and [`components/Toggle.vue`](./components/Toggle.vue) — the Vue components.
- [`button.css`](./button.css) and [`toggle.css`](./toggle.css) — the same components as plain CSS, for pages without Vue.
- [`button.html`](./button.html) and [`toggle.html`](./toggle.html) — documentation pages (variants in both themes, tokens, specs, accessibility). They share [`docs.css`](./docs.css) and [`docs.js`](./docs.js).
- [`demo.html`](./demo.html) — a build-free gallery of every variant/size/state, for visual QA against the Figma frames.

Every component supports light and dark mode. See [Light and dark mode](#light-and-dark-mode).

Import the tokens once, globally:

```js
import "./design-system/tokens.css";
```

## Usage

```vue
<script setup>
import Button from "./design-system/components/Button.vue";
</script>

<template>
  <Button variant="primary" size="medium">Reply</Button>
  <Button variant="negative" size="medium" loading>Delete</Button>
  <Button variant="secondary" full-width>Cancel</Button>
  <Button variant="link" href="/all">View all</Button>
</template>
```

## Props

| Prop        | Type      | Default     | Notes                                                                 |
|-------------|-----------|-------------|------------------------------------------------------------------------|
| `variant`   | `String`  | `'primary'` | `primary` \| `secondary` \| `ghost` \| `negative` \| `negative-secondary` \| `link` |
| `size`      | `String`  | `'medium'`  | `small` \| `medium` \| `large`. Ignored by `link`.                     |
| `fullWidth` | `Boolean` | `false`     | Stretches to 100% of the container.                                    |
| `disabled`  | `Boolean` | `false`     | Native disabled state.                                                 |
| `loading`   | `Boolean` | `false`     | Swaps the label for a spinner and blocks interaction.                  |
| `pressed`   | `Boolean` | `false`     | Forces the outlined "Activated/Focus" look, for toggle-style buttons.  |
| `href`      | `String`  | —           | Renders an `<a>` instead of a `<button>`.                              |

Slots: default (label), `icon` (leading icon, 20–24px depending on size).

Real interaction states (`:hover`, `:active`, `:focus-visible`, `:disabled`) are handled in CSS — you don't need a prop for them. `pressed` exists only for buttons that must stay visually "on" (e.g. an active filter chip), and doubles as the state to force in visual QA.

## Toggle

```vue
<script setup>
import { ref } from "vue";
import Toggle from "./design-system/components/Toggle.vue";
const notify = ref(true);
</script>

<template>
  <Toggle v-model="notify">Email notifications</Toggle>
  <Toggle v-model="notify" label="Email notifications" />  <!-- no visible label -->
  <Toggle :model-value="true" disabled>Sync</Toggle>
</template>
```

| Prop         | Type      | Default | Notes                                                        |
|--------------|-----------|---------|--------------------------------------------------------------|
| `modelValue` | `Boolean` | `false` | On / Off. Use with `v-model`.                                |
| `disabled`   | `Boolean` | `false` | Renders the Off disabled / On disabled frames.               |
| `label`      | `String`  | —       | Accessible name when there's no visible label in the slot.   |

Slot: default (visible label). Renders a native `<input type="checkbox" role="switch">`, so Space toggles it and screen readers announce "on" / "off". Without Vue, use the same input with `class="toggle"` and `toggle.css`.

## Light and dark mode

Colors come from the Figma `Colors` collection, which has Light and Dark modes. Each token in `tokens.css` is written as `light-dark(<Light>, <Dark>)`:

- By default, components follow the OS setting (`prefers-color-scheme`).
- `data-theme="dark"` or `data-theme="light"` forces a theme. It works on `<html>` for the whole page, or on any container for one area.

```html
<html data-theme="dark">
<section data-theme="light">…</section>
```

No component needs extra CSS for dark mode, as long as it only uses color tokens and no hex values. `light-dark()` needs Chrome 123, Safari 17.5 or Firefox 120 or later.

## Design tokens

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--color-button-800` | `#0087ed` | `#4dadf5` | Primary default background / Ghost & Link text / Toggle On track |
| `--color-button-1000` | `#0076ce` | `#479edf` | Primary hover background / activated border & text / focus ring |
| `--color-button-100` | `#e5f3fd` | `#273742` | Primary activated background / Toggle On disabled track |
| `--color-negative-800` | `#eb5757` | `#ff7d7d` | Negative default background / negative-secondary text |
| `--color-negative-1000` | `#dd5151` | `#ed6a6a` | Negative hover background |
| `--color-negative-100` | `#fdeeee` | `#483131` | Negative activated background / negative-secondary default background |
| `--color-negative-200` | `#ffe5e5` | `#603737` | negative-secondary hover background |
| `--color-bg-1` | `#ffffff` | `#2b2b2b` | Text on filled buttons / Toggle knob |
| `--color-bg-2` | `#f6f6f6` | `#1d1d1d` | Secondary default background |
| `--color-bg-hover` | `#f1f4f7` | `#3d3d3d` | Secondary / Ghost hover background |
| `--color-bg-border` | `#e6e6e6` | `#3d3d3d` | Toggle Off disabled track |
| `--color-text-primary` | `#222222` | `#e3e3e3` | Secondary activated border & text |
| `--color-text-t3` | `#4d4d4d` | `#b3b3b3` | Secondary default text |
| `--color-disabled` | `#c4c4c4` | `#464646` | Toggle Off track (`--color-text-disabled` points to it for secondary disabled text) |
| `--space-xs` … `--space-3xl` | `2px` – `20px` | | Padding scale (`XS, S, M, L, BTN, XL, 3XL` in Figma) |
| `--radius-sm` / `--radius-lg` | `4px` / `8px` | | Small & Medium vs. Large corner radius |
| `--radius-pill` | `28px` | | Toggle track & knob |
| `--font-size-sm` / `--font-size-md` | `14px` / `16px` | | Small vs. Medium/Large label size |

Full token list in [`tokens.css`](./tokens.css).

## Known design inconsistencies (flagged, not silently fixed)

The Figma page contains a couple of one-off frames whose colors don't match their sibling sizes. Rather than bake the inconsistency into the component, this implementation keeps each `variant` visually consistent across sizes and flags the outliers here for design QA:

- **`Buttons-Primary-Large` ("Agree")** uses `Text/Primary` (`#222`) / `Text/T3` instead of the `Button/*` blue scale every other primary size uses. This implementation keeps `variant="primary" size="large"` in blue, matching `Buttons-Primary-Fullwidth`, which *does* use the blue scale at the same size.
- **`Buttons-Secondary/Small` ("Join")** uses the light-blue `Button/100` / `Button/600` scale instead of the neutral `BG/2` scale used by `Buttons-Secondary/Medium` and `Buttons-Secondary-Large`. This implementation keeps `variant="secondary"` neutral at every size.
- **Toggle contrast.** The Off track (`Disabled`) is about 1.7:1 against the page in light mode and 1.5:1 in dark mode, below the WCAG 3:1 minimum for controls. In dark mode the knob (`BG/1`, `#2b2b2b`) is also about 1.5:1 against the Off track, and nearly disappears on the disabled tracks. The On state passes in both themes. Kept as designed.
- **Dark-mode button labels.** In dark mode `BG/1` is `#2b2b2b`, so filled buttons get dark labels on a lighter blue or red. This follows Figma and passes contrast (about 5.8:1 on primary), but it's worth confirming it's intended.

If either button-color divergence is intentional, it likely deserves its own variant name (e.g. `dark`) rather than being reached via a `size` change on `primary`/`secondary` — worth confirming with design before extending the enum.
