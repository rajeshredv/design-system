# Button

Vue 3 implementation of the Button component set from the Figma file
[Style library — Components](https://www.figma.com/design/fPrKkOBCh1zkIKQqgRSQrF/Style-library-Components--Copy-?node-id=2145-2648&m=dev).

- [`tokens.css`](./tokens.css) — design tokens (color, spacing, radius, typography), named after the Figma variables they were extracted from.
- [`components/Button.vue`](./components/Button.vue) — the component.
- [`demo.html`](./demo.html) — a build-free gallery of every variant/size/state, for visual QA against the Figma frames.

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

## Design tokens

| Token | Value | Used for |
|---|---|---|
| `--color-button-800` | `#0087ed` | Primary default background / Ghost & Link text |
| `--color-button-1000` | `#0076ce` | Primary hover background / activated border & text |
| `--color-button-100` | `#e5f3fd` | Primary activated background |
| `--color-negative-800` | `#eb5757` | Negative default background / negative-secondary text |
| `--color-negative-1000` | `#dd5151` | Negative hover background |
| `--color-negative-100` | `#fdeeee` | Negative activated background / negative-secondary default background |
| `--color-negative-200` | `#ffe5e5` | negative-secondary hover background |
| `--color-bg-1` | `#ffffff` | Text on filled buttons |
| `--color-bg-2` | `#f6f6f6` | Secondary default background |
| `--color-bg-hover` | `#f1f4f7` | Secondary / Ghost hover background |
| `--color-text-primary` | `#222222` | Secondary activated border & text |
| `--color-text-t3` | `#4d4d4d` | Secondary default text |
| `--color-text-disabled` | `#c4c4c4` | Secondary disabled text |
| `--space-xs` … `--space-3xl` | `2px` – `20px` | Padding scale (`XS, S, M, L, BTN, XL, 3XL` in Figma) |
| `--radius-sm` / `--radius-lg` | `4px` / `8px` | Small & Medium vs. Large corner radius |
| `--font-size-sm` / `--font-size-md` | `14px` / `16px` | Small vs. Medium/Large label size |

Full token list in [`tokens.css`](./tokens.css).

## Known design inconsistencies (flagged, not silently fixed)

The Figma page contains a couple of one-off frames whose colors don't match their sibling sizes. Rather than bake the inconsistency into the component, this implementation keeps each `variant` visually consistent across sizes and flags the outliers here for design QA:

- **`Buttons-Primary-Large` ("Agree")** uses `Text/Primary` (`#222`) / `Text/T3` instead of the `Button/*` blue scale every other primary size uses. This implementation keeps `variant="primary" size="large"` in blue, matching `Buttons-Primary-Fullwidth`, which *does* use the blue scale at the same size.
- **`Buttons-Secondary/Small` ("Join")** uses the light-blue `Button/100` / `Button/600` scale instead of the neutral `BG/2` scale used by `Buttons-Secondary/Medium` and `Buttons-Secondary-Large`. This implementation keeps `variant="secondary"` neutral at every size.

If either divergence is intentional, it likely deserves its own variant name (e.g. `dark`) rather than being reached via a `size` change on `primary`/`secondary` — worth confirming with design before extending the enum.
