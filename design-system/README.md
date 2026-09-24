# Design system

Plain-CSS and Vue 3 implementations of every component in the Figma file
[Style library — Components](https://www.figma.com/design/fPrKkOBCh1zkIKQqgRSQrF/Style-library-Components--Copy-?node-id=5408-3176&m=dev)
(section "Section 2" on the Components page). No build step is needed.

Every component works in light and dark mode. See [Light and dark mode](#light-and-dark-mode).

## How it's organized

- [`tokens.css`](./tokens.css): design tokens, named after the Figma variables they mirror.
- One CSS file per component, e.g. [`button.css`](./button.css). **This is the only place component styles live.**
- One Vue SFC per component in [`components/`](./components). The SFCs have no `<style>` blocks; they just add the right classes and ARIA to the markup.
- [`icon.css`](./icon.css): single-color icons from `assets/icons/`, drawn as a `currentColor` mask so they follow the text color and theme.
- Docs pages, one per group (see [Components](#components)). They share [`docs.css`](./docs.css) and [`docs.js`](./docs.js), which render the nav and the dark-mode switch, and show every variant side by side in light and dark.
- [`demo.html`](./demo.html): a build-free gallery of the Vue Button and Toggle, for visual QA. It loads Vue from unpkg and fetches the `.vue` files, so it must be served over HTTP.

## Using it

Load the tokens, the icon utility and the CSS of each component you use, once, globally:

```html
<link rel="stylesheet" href="design-system/tokens.css">
<link rel="stylesheet" href="design-system/icon.css">
<link rel="stylesheet" href="design-system/button.css">
<link rel="stylesheet" href="design-system/checkbox.css">
<!-- …one per component you use -->
```

Then either write the markup yourself:

```html
<button class="btn btn--primary btn--medium" type="button">Reply</button>
<label class="checkbox-field"><input type="checkbox" class="checkbox"> Remember me</label>
```

or use the Vue components:

```vue
<script setup>
import Button from "./design-system/components/Button.vue";
import Checkbox from "./design-system/components/Checkbox.vue";
</script>

<template>
  <Button variant="primary">Reply</Button>
  <Checkbox v-model="remember" label="Remember me" />
</template>
```

Each component's full class API, props and usage are documented at the top of its CSS file and on its docs page.

Icon and image paths in the markup and Vue defaults are relative (`assets/icons/…`), so serve `assets/` next to the page, or pass your own icon URLs as props.

## Components

| Docs page | Figma component sets | CSS | Vue |
|---|---|---|---|
| [`button.html`](./button.html) | All 15 `Buttons-*` sets and `Negative-Secondary` | `button.css` | `Button` |
| [`icon-buttons.html`](./icon-buttons.html) | `Icon-*` hard-fill, soft-fill, transparent, secondary, negative, `Micro`, `Icon btn cluster` | `icon-button.css` | `IconButton`, `IconButtonCluster` |
| [`toggle.html`](./toggle.html) | `Toggle` (2050:3135 and 3315:2551, which are identical) | `toggle.css` | `Toggle` |
| [`selection.html`](./selection.html) | `Check-box`, `Radio`, `multiselect` (a round check circle) | `checkbox.css`, `radio.css`, `check-circle.css` | `Checkbox`, `Radio`, `CheckCircle` |
| [`menus.html`](./menus.html) | `Dropdown`, `Dropdown items - Small / Medium`, `Dropdown menu`, `Text & Icon` (a segmented control) | `dropdown.css`, `menu.css`, `segmented.css` | `Dropdown`, `DropdownMenu`, `MenuItem`, `SegmentedControl` |
| [`feedback.html`](./feedback.html) | `Badge`, `Tags`, `Chips`, `Tooltip`, `Snackbar`, `Component 6` (an inline alert) | `badge.css`, `tag.css`, `chip.css`, `tooltip.css`, `snackbar.css`, `alert.css` | `Badge`, `Tag`, `Chip`, `Tooltip`, `Snackbar`, `Alert` |
| [`dialogs.html`](./dialogs.html) | `Modal- Header`, `Modal- Footer`, `Button flex`, `Confirmation dialog` | `modal.css` | `Modal`, `ConfirmDialog` |
| [`app-patterns.html`](./app-patterns.html) | `LHS banner`, `Chat window action bar`, `Component 7` (notice message), `Frame 1171279598` (create group dialog) | `lhs-banner.css`, `chat-action-bar.css`, `notice-message.css`, `create-group-dialog.css` | `LhsBanner`, `ChatActionBar`, `NoticeMessage`, `CreateGroupDialog` |

Some components build on others, so load their CSS too:

- `modal.css` uses `button.css`, `icon-button.css` and `checkbox.css`.
- `lhs-banner.css` and `create-group-dialog.css` use `button.css` and `icon-button.css`.
- `chat-action-bar.css`, `snackbar.css` and `alert.css` use `button.css`.
- `chip.css` uses `badge.css` for its trailing count.

### Button

| Prop        | Type      | Default     | Notes |
|-------------|-----------|-------------|-------|
| `variant`   | `String`  | `'primary'` | `primary` \| `secondary` \| `ghost` \| `negative` \| `negative-secondary` \| `link` |
| `size`      | `String`  | `'medium'`, or `'small'` for `link` | `small` \| `medium` \| `large`. `link` supports `small` and `medium`. |
| `fullWidth` | `Boolean` | `false`     | Stretches to 100% of the container. |
| `disabled`  | `Boolean` | `false`     | Native disabled state. |
| `loading`   | `Boolean` | `false`     | Shows the Figma loader and blocks interaction. The label stays readable by screen readers. |
| `pressed`   | `Boolean` | `false`     | Forces the outlined "Activated" look and sets `aria-pressed`, for toggle-style buttons. |
| `href`      | `String`  | —           | Renders an `<a>` instead of a `<button>`. |

Slots: default (label), `icon` (leading icon), `icon-end` (trailing icon).

Real interaction states (`:hover`, `:active`, `:focus-visible`, `:disabled`) come from CSS, so no prop is needed for them.

## Light and dark mode

Colors come from the Figma `Colors` collection, which has Light and Dark modes. Each token in `tokens.css` is written as `light-dark(<Light>, <Dark>)`:

- By default, components follow the OS setting (`prefers-color-scheme`).
- `data-theme="dark"` or `data-theme="light"` forces a theme. It works on `<html>` for the whole page, or on any container for one area.

```html
<html data-theme="dark">
<section data-theme="light">…</section>
```

No component needs extra CSS for dark mode, as long as it only uses color tokens. `light-dark()` needs Chrome 123, Safari 17.5 or Firefox 120 or later.

## Tokens

[`tokens.css`](./tokens.css) mirrors the Figma file:

- **Color:** all 77 variables of the `Colors` collection, e.g. `Button/800` → `--color-button-800`, `BG/Border` → `--color-bg-border`, `Theme/blue/100` → `--color-theme-blue-100`.
- **Spacing:** the `Space` collection, `--space-none` … `--space-4xl` (0–24px). Its compact "Mode 2" isn't used yet.
- **Typography:** every text style as a `font` shorthand, e.g. `font: var(--font-body-3)`. Weights come from weight-specific families (`--font-family-regular`, `-medium`, `-semibold`, `-bold`). **Never use `font-weight`.** Buttons use the Medium face by project decision, where Figma uses Semibold.
- **Radius, shadow and control heights:** `--radius-sm/lg/pill`, `--shadow-dropdown-menu`, `--control-height-sm/md/lg`.

A few colors in Figma aren't bound to variables. They're defined as component-local custom properties marked `/* unbound in Figma */` in the component's CSS, not as new tokens.

## Known design inconsistencies (flagged, not silently fixed)

These were found while building the components. Each docs page lists the ones for its components in more detail. Worth reviewing with design:

**Contrast**
- The **Default badge** is about 1.4:1 in dark mode (light text on yellow). The menu badge has the same problem.
- The **Toggle Off track** is about 1.7:1 in light mode and 1.5:1 in dark, below the WCAG 3:1 minimum for controls. In dark mode the knob nearly disappears against it.
- **Unselected checkbox and radio rings** (`Text/T2`) are about 2.1:1 in light mode and 2.9:1 in dark.
- **Micro icon buttons** are nearly invisible in dark mode, because the `BG/1` icon sits on a dark scrim.
- The **tooltip and snackbar** stay dark in both themes, so the tooltip's edge almost vanishes on a dark page.
- The **segmented control track** (`Surface #E5-a50`) has no dark value, so it's a light band in dark mode.

**Buttons**
- **`Buttons-Primary-Large` ("Agree")** uses Text colors instead of the blue scale. Code keeps large primary blue, matching `Buttons-Primary-Fullwidth`. The dialogs' dark "Use here" / "Log in" button relies on the same large primary, so it renders blue where Figma shows it dark.
- **`Buttons-Secondary/Small` ("Join")** uses the blue `Button/100` scale. Code keeps secondary neutral at every size.
- **Secondary disabled** only greys the label, while every other variant fades to 50% opacity.
- **"Primary-Negative-small"** is styled as negative secondary, and there's no filled negative small.
- **`Buttons-Secondary-Large` 2145:2678** is really 36px, a copy of Secondary/Medium.
- **Ghost and negative** have no small or large sets.
- **Dark-mode labels:** in dark mode, `BG/1` turns filled-button labels dark on a lighter blue or red. This passes contrast, but confirm it's intended.

**Duplicates and naming**
- The two **`Icon-Large-Secondary`** sets are different components: a grey fill, and a transparent button with a two-color add glyph.
- The grey **`Icon-Large-Secondary`** Disabled frame looks the same as Default.
- The **`multiselect`** set is hidden in Figma. Its fifth variant is a best-guess empty ring.
- **Selected radio** is 20px but unselected is 16px, so it grows when clicked.
- Several sets have placeholder names ("Component 6", "Component 7", "Frame 1171279598", "Variant5"), and chip state names are mixed up ("Playing" means both "menu open" and "music playing").

**Content:** placeholder copy has typos ("Arcgived", "Are sure you want…", Asia/Kabul labelled GMT −05:00).
