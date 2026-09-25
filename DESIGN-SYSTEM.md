# Design system

A design system for a chat and messaging app (conversations, groups, pinned messages, join requests). It is built from the Figma file "Style library — Components". Use this document as the single source of truth when designing screens. Every component and value below exists in the coded system, so designs that follow it can be built exactly.

**How to use this document**
- Build screens only from the components in [Components](#components) and the tokens in [Foundations](#foundations). Don't invent new colors, font sizes, radii or shadows.
- Refer to colors by token name (e.g. `--color-button-800`). Every token has a Light and a Dark value, so designs work in both themes automatically.
- When a component's states or sizes are listed, use exactly those. If a need isn't covered, compose existing components rather than inventing new ones, and say so.
- [Appendix: tokens.css](#appendix-tokenscss) contains the tokens as ready-to-use CSS custom properties.

## Principles

- **Calm and functional.** Mostly neutral surfaces (`--color-bg-1`, `--color-bg-2`) with one blue accent (`--color-button-800`) reserved for the primary action, selection and focus. Red (`--color-negative-*`) is only for destructive actions and errors.
- **One primary action per area.** Everything else is secondary, ghost, link or an icon button.
- **Tokens only.** No raw hex colors, no off-scale spacing, no custom shadows.
- **Weight comes from the font face.** Zoho Puvi is used as separate faces (Regular, Medium, Semibold, Bold). Pick the face; never apply a numeric font weight.
- **Light and dark are equal citizens.** Every screen must work in both. Tokens switch automatically; don't hard-code a color that only works in one theme.
- **Accessible by default.** Visible focus on everything interactive, real controls (buttons, checkboxes, switches, dialogs), text labels for icon-only buttons.

## Theming

- There are two themes, **Light** and **Dark**, taken from the Figma `Colors` collection modes.
- By default the UI follows the operating-system setting. A theme can be forced for the whole app or for one area (e.g. a light preview inside a dark screen).
- Every color token has a Light and a Dark value. A few Figma colors aren't tokens ("unbound in Figma"); each component lists those literal values for both themes.
- Things that look different in dark mode by design:
  - Filled buttons get **dark labels** (`--color-bg-1` becomes `#2B2B2B`) on a lighter blue or red.
  - Tooltip and snackbar stay dark in both themes.
  - Some Figma colors have no dark value and stay the same (see each component's Notes).

## Foundations

### Color

**Main roles** (use these first):

| Role | Token |
|---|---|
| Page / card / dialog surface | `--color-bg-1` |
| Secondary surface, secondary button, sunken areas | `--color-bg-2` |
| Subtle surface | `--color-bg-3` |
| Hover fill for rows and transparent buttons | `--color-bg-hover` |
| Dividers, borders, disabled track | `--color-bg-border` |
| Primary text | `--color-text-primary` |
| Secondary text, default icon color | `--color-text-secondary` |
| Tertiary text, placeholders, meta | `--color-text-t1`, `--color-text-t2` |
| Strong secondary text (secondary button label) | `--color-text-t3` |
| Accent: primary action, selection, links | `--color-button-800` |
| Accent hover / pressed / focus ring | `--color-button-1000` |
| Accent tint (pressed/selected background) | `--color-button-100` |
| Destructive | `--color-negative-800` (hover `--color-negative-1000`, tints `--color-negative-100` / `-200`) |
| Success | `--color-success-*` |
| Warning / info | `--color-alert-info-*` |
| Disabled controls | `--color-disabled` |
| Text on always-dark surfaces (e.g. badges on color) | `--color-label` (white in both themes) |

**Theme palettes** (`--color-theme-{yellow|orange|green|blue|teal|violet|rose}-{1000|400|200|100|reply-tag}`) appear to be for user-chosen chat or conversation colors (inferred from the names; Figma has no usage notes): 1000 is the strong color, 400/200/100 are tints, reply-tag is the quoted-reply background.

**All color tokens:**

**Other**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-fav-border` | ~FavBorder | `#DAA400` | `#DAA400` |
| `--color-chip-icon` | Chip-icon | `#627282` | `#666666` |
| `--color-draft-badge` | Draft-badge | `#F63B00` | `#F06C66` |
| `--color-disabled` | Disabled | `#C4C4C4` | `#464646` |
| `--color-label` | Label | `#FFFFFF` | `#FFFFFF` |
| `--color-surface-e5-a50` | Surface #E5-a50 | `#E5E5E580` | `#E5E5E580` |

**BG**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-bg-1` | BG/1 | `#FFFFFF` | `#2B2B2B` |
| `--color-bg-2` | BG/2 | `#F6F6F6` | `#1D1D1D` |
| `--color-bg-3` | BG/3 | `#FAFAFA` | `#202020` |
| `--color-bg-dev-portal` | BG/Dev portal | `#F9FAFB` | `#181A1B` |
| `--color-bg-hover` | BG/Hover | `#F1F4F7` | `#3D3D3D` |
| `--color-bg-border` | BG/Border | `#E6E6E6` | `#3D3D3D` |

**Text**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-text-primary` | Text/Primary | `#222222` | `#E3E3E3` |
| `--color-text-secondary` | Text/Secondary | `#666666` | `#B3B3B3` |
| `--color-text-t1` | Text/T1 | `#888888` | `#848484` |
| `--color-text-t2` | Text/T2 | `#ABABAB` | `#727272` |
| `--color-text-t3` | Text/T3 | `#4D4D4D` | `#B3B3B3` |

**Button**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-button-1000` | Button/1000 | `#0076CE` | `#479EDF` |
| `--color-button-800` | Button/800 | `#0087ED` | `#4DADF5` |
| `--color-button-100` | Button/100 | `#E5F3FD` | `#273742` |
| `--color-button-600` | Button/600 | `#66B7F4` | `#3B75A0` |

**Success**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-success-1000` | Success/1000 | `#27BB6B` | `#43D988` |
| `--color-success-800` | Success/800 | `#009C48` | `#74BE96` |
| `--color-success-2000` | Success/2000 | `#2C9460` | `#74BE96` |
| `--color-success-100` | Success/100 | `#E9F8F0` | `#274535` |

**Alert-info**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-alert-info-1000` | Alert-info/1000 | `#F3BE00` | `#DAB121` |
| `--color-alert-info-color` | Alert-info/Color | `#C49400` | `#CBB368` |
| `--color-alert-info-100` | Alert-info/100 | `#FEF9E5` | `#453D20` |

**Negative**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-negative-800` | Negative/800 | `#EB5757` | `#FF7D7D` |
| `--color-negative-1000` | Negative/1000 | `#DD5151` | `#ED6A6A` |
| `--color-negative-100` | Negative/100 | `#FDEEEE` | `#483131` |
| `--color-negative-200` | Negative/200 | `#FFE5E5` | `#603737` |

**Surface**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-surface-s1` | Surface/S1 | `#FFFFFF` | `#202020` |
| `--color-surface-s2` | Surface/S2 | `#F6F6F6` | `#1D1D1D` |

**Theme/yellow**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-theme-yellow-1000` | Theme/yellow/1000 | `#F3CD00` | `#E4C100` |
| `--color-theme-yellow-400` | Theme/yellow/400 | `#FDEFB8` | `#564B0D` |
| `--color-theme-yellow-200` | Theme/yellow/200 | `#FDF5CC` | `#3B340E` |
| `--color-theme-yellow-100` | Theme/yellow/100 | `#FEF9E0` | `#38331C` |
| `--color-theme-yellow-reply-tag` | Theme/yellow/reply-tag | `#F4E5A9` | `#4F450D` |

**Theme/orange**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-theme-orange-1000` | Theme/orange/1000 | `#FF6600` | `#DB5800` |
| `--color-theme-orange-400` | Theme/orange/400 | `#FFD2AD` | `#53290D` |
| `--color-theme-orange-200` | Theme/orange/200 | `#FFE9D6` | `#391F0E` |
| `--color-theme-orange-100` | Theme/orange/100 | `#FFF2E6` | `#36271C` |
| `--color-theme-orange-reply-tag` | Theme/orange/reply-tag | `#F4C8A5` | `#4A240B` |

**Theme/green**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-theme-green-1000` | Theme/green/1000 | `#2C9460` | `#008F48` |
| `--color-theme-green-400` | Theme/green/400 | `#A0E1C0` | `#0D3B24` |
| `--color-theme-green-200` | Theme/green/200 | `#D5EADF` | `#0E2A1C` |
| `--color-theme-green-100` | Theme/green/100 | `#E6F2EC` | `#1C2D25` |
| `--color-theme-green-reply-tag` | Theme/green/Reply-tag | `#98D7B7` | `#0B3520` |

**Theme/blue**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-theme-blue-1000` | Theme/blue/1000 | `#008FCC` | `#006B99` |
| `--color-theme-blue-400` | Theme/blue/400 | `#B5E9FF` | `#0B394D` |
| `--color-theme-blue-200` | Theme/blue/200 | `#CCE9F5` | `#0E232C` |
| `--color-theme-blue-100` | Theme/blue/100 | `#E0F2F9` | `#1C292F` |
| `--color-theme-blue-reply-tag` | Theme/blue/Reply-tag | `#ACDFF4` | `#093142` |

**Theme/teal**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-theme-teal-1000` | Theme/teal/1000 | `#006A80` | `#006A80` |
| `--color-theme-teal-400` | Theme/teal/400 | `#ACE4EF` | `#0D2F36` |
| `--color-theme-teal-200` | Theme/teal/200 | `#CCE2E7` | `#0E2327` |
| `--color-theme-teal-100` | Theme/teal/100 | `#E0EEF1` | `#1C292C` |
| `--color-theme-teal-reply-tag` | Theme/teal/Reply-tag | `#A3DAE5` | `#0A272D` |

**Theme/violet**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-theme-violet-1000` | Theme/violet/1000 | `#4759B3` | `#5266CC` |
| `--color-theme-violet-400` | Theme/violet/400 | `#BEC9FF` | `#272E4E` |
| `--color-theme-violet-200` | Theme/violet/200 | `#DADEF0` | `#1E2236` |
| `--color-theme-violet-100` | Theme/violet/100 | `#E9EBF6` | `#262835` |
| `--color-theme-violet-reply-tag` | Theme/violet/Reply-tag | `#B5C0F4` | `#1F2540` |

**Theme/rose**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-theme-rose-1000` | Theme/rose/1000 | `#F460AA` | `#D15091` |
| `--color-theme-rose-400` | Theme/rose/400 | `#FEBFDE` | `#50273B` |
| `--color-theme-rose-200` | Theme/rose/200 | `#FDDFEE` | `#371E2B` |
| `--color-theme-rose-100` | Theme/rose/100 | `#FEECF5` | `#35262E` |
| `--color-theme-rose-reply-tag` | Theme/rose/Reply-tag | `#F3B6D4` | `#442232` |

**Dev portal**

| Token | Figma | Light | Dark |
|---|---|---|---|
| `--color-dev-portal-color` | Dev portal/Color | `#FFFFFF` | `#FFFFFF` |
| `--color-dev-portal-code-syntax1` | Dev portal/Code syntax1 | `#2200CE` | `#AC9BFF` |
| `--color-dev-portal-code-syntax2` | Dev portal/Code syntax2 | `#CE5200` | `#F39E66` |
| `--color-dev-portal-graph-scale` | Dev portal/Graph scale | `#1D1D1D` | `#F2F2F2` |
| `--color-dev-portal-graph-plot-1` | Dev portal/Graph plot 1 | `#FF651E` | `#C75B2A` |
| `--color-dev-portal-stats-text` | Dev portal/Stats text | `#3B3B3B` | `#E0E0E0` |
| `--color-dev-portal-graph-plot-2` | Dev portal/Graph plot 2 | `#6186FF` | `#4E6DD4` |

### Typography

Font: **Zoho Puvi**, used as separate faces. The weight always comes from the face, never from a numeric weight. Fallback: the system UI font. Styles and values are from Figma; the "Suggested use" column is guidance, not a Figma rule.

| Style | Face | Size / line height | Letter spacing | Token | Suggested use |
|---|---|---|---|---|---|
| H1 20 B | Bold | 20 / 32 | 0 | `--font-h1` | Dialog and page titles |
| H2 SB | Semibold | 18 / 26 | 0 | `--font-h2` | Section titles |
| H3 SB | Semibold | 14 / 20 | 0 | `--font-h3` | Small headings, list group titles |
| H4 SB | Semibold | 16 / 24 | 0 | `--font-h4` | Card titles |
| H5 20 SB | Semibold | 20 / 32 | −0.25px | `--font-h5` + `--ls-h5` | Large titles |
| H6 20M | Medium | 20 / 32 | +0.2px | `--font-h6` + `--ls-h6` | Notice titles |
| Body 1 R | Regular | 16 / 22 | 0 | `--font-body-1` | Main reading text, messages |
| Body 2 M | Medium | 16 / 24 | 0 | `--font-body-2` | Emphasized body, names |
| Body 3 R | Regular | 14 / 20 | 0 | `--font-body-3` | Default UI text, menu items, labels |
| Sub text M | Medium | 14 / 20 | 0 | `--font-sub-text` | Secondary labels with emphasis |
| Caption 13px Reg | Regular | 13 / 18 | 0 | `--font-caption` | Timestamps, captions, hints |
| Badge-text 12px | Regular | 12 / auto | 0 | `--font-badge` | Badges and counts |
| Last message | Regular | 14 / 16 | 0 | `--font-last-message` | Conversation-list preview line |
| BTN Small | Medium* | 14 / 16 | +0.1px | `--font-size-sm` / `--line-height-sm` / `--letter-spacing-sm` | Small buttons, links |
| BTN Medium / Large | Medium* | 16 / 20 | +0.25px | `--font-size-md` / `--line-height-md` / `--letter-spacing-md` | Medium and large buttons |

\* Figma sets button text in Semibold; the system deliberately uses the **Medium** face for buttons.

Face tokens: `--font-family-regular`, `--font-family-medium`, `--font-family-semibold`, `--font-family-bold`.

### Spacing

A 2–24px scale from the Figma `Space` collection. Use only these values for padding and gaps (a few component-specific sizes such as 28, 36, 40 or 44px exist only where noted in a component).

| Token | Value | Figma |
|---|---|---|
| `--space-none` | 0 | None |
| `--space-xs` | 2px | XS |
| `--space-s` | 4px | S |
| `--space-m` | 6px | M |
| `--space-l` | 8px | L |
| `--space-btn` | 10px | BTN |
| `--space-xl` | 12px | XL |
| `--space-2xl` | 16px | 2XL |
| `--space-3xl` | 20px | 3XL |
| `--space-4xl` | 24px | 4XL |

### Shape

| Token | Value | Use for |
|---|---|---|
| `--radius-sm` | 4px | Small and medium buttons, inputs, small surfaces |
| `--radius-lg` | 8px | Large buttons, dialogs, cards |
| `--radius-pill` | 28px | Toggle, pills (renders fully rounded) |
| — | 50% | Icon buttons and avatars are always circles |

### Control heights

| Token | Value | Use for |
|---|---|---|
| `--control-height-sm` | 24px | Small buttons |
| `--control-height-md` | 36px | Medium buttons |
| `--control-height-lg` | 44px | Large and full-width buttons |

### Elevation

There is one elevation style: **Drop down menu**, `--shadow-dropdown-menu` = `0 0 12px rgba(0,0,0,0.25)`. Use it for menus, popovers and dialogs. Everything else is flat and separated by surface color or `--color-bg-border` lines. (A few components have their own small shadows, listed in their specs.)

### Iconography

- Single-color line and fill icons from the Figma icon library, used at **16, 20, 24 or 32px**. Icons take the color of the surrounding text (default `--color-text-secondary`; `--color-text-primary` on hover; `--color-button-800` when active).
- Available icons: add-fill, add-plus-10, archive, arrow-right-line, back, bell-notification-sl, call, checkbox-check, checkbox-semi, chevron-down, chevron-up, close, close-line2, close-small, copy, delete, disclosure-down-fill, edit-pen, emoji-smiley, equalizer, exclamation-error-line, exclamation-warning-line, filter-settings-line, forward, forward-share, go-back, image-gallery-line, info-line, like-line, location, media-play-fill, more-meatballs, pause-fill, pin-2, pin-2-line, platform-android, platform-ios, search, sort-ascending, story-line, tick, tick-circle-fill, tick-mark, time-clock, unread, video-line, warning-fill.
- Icon-only controls always need a text label for screen readers (e.g. "Close", "More options").

### Focus, motion and states

- **Focus ring:** 2px solid `--color-button-1000`, offset 2px, shown on keyboard focus for every interactive element.
- **Motion:** short color/background transitions (120–150ms ease), a 14px slide for the toggle knob, a spinning loader. All motion is reduced or removed when the user prefers reduced motion.
- **Disabled:** usually the whole component at 50% opacity (exceptions are listed per component).
- **Pressed / activated:** usually an accent tint background with a 1px inside ring in the accent color.

## Components

Every component below is built and documented. States map to real interaction (hover, pressed, focus, disabled); "forced" preview states exist only for documentation.

### Actions

#### Button
A labelled control that triggers an action (Reply, Save, Delete, View all). Six variants set emphasis, three sizes fit the layout. Use one Primary per area; for icon-only actions use Icon button; for navigation use the Link variant.

**Anatomy**:
- Container: horizontal auto-layout, content centered, fixed height per size (identical in every state), min width per size, 1px inside stroke used only in the Activated state (Link: 1px outside stroke).
- Label: single line, never wraps.
- Leading icon (optional): 20px (16px on Small), 8px gap (`--space-l`) to the label; takes the label color. A trailing icon slot exists but is hidden by default.
- Loader (Loading state only): circular line spinner that takes the label color; replaces label and icon.
- Full-width option: container stretches to 100% of its parent (any variant, typically Large).

**Sizes**:

| Size | Height | Padding (horizontal) | Radius | Icon size | Loader size | Text style | Min width |
|---|---|---|---|---|---|---|---|
| Small | 24px (`--control-height-sm`) | 12px (`--space-xl`) | 4px (`--radius-sm`) | 16px | 20px | BTN Small — Zoho Puvi Medium 14/16, +0.1px (`--font-size-sm`/`--line-height-sm`/`--letter-spacing-sm`) | 50px |
| Medium (default) | 36px (`--control-height-md`) | 12px (`--space-xl`) | 4px (`--radius-sm`) | 20px | 24px | BTN Medium — Zoho Puvi Medium 16/20, +0.25px (`--font-size-md`/`--line-height-md`/`--letter-spacing-md`) | 90px |
| Large | 44px (`--control-height-lg`) | 20px (`--space-3xl`) | 8px (`--radius-lg`) | 20px | 24px | Large — same values as BTN Medium | 100px |
| Link, Small (link default) | 20px | 2px (`--space-xs`) | 2px | — (4px gap `--space-s` if used) | 20px | BTN Small | none |
| Link, Medium/Large | 24px | 2px (`--space-xs`) | 2px | — | 20px | BTN Medium | none |

No vertical padding: height is fixed and content is vertically centered. Text uses the Medium face (weight comes from the font family; Figma's styles use Semibold — project decision to use Medium).

**Variants and states**:
Stroke = 1px inside stroke (does not change size). Disabled opacity is layer opacity on the whole button.

Primary — main call to action.

| State | Background | Content (label/icon/loader) | Border | Other |
|---|---|---|---|---|
| Default | `--color-button-800` | `--color-bg-1` | none | — |
| Hover | `--color-button-1000` | `--color-bg-1` | none | — |
| Activated | `--color-button-100` | `--color-button-1000` (Large: `--color-button-800`) | `--color-button-1000` | — |
| Loading | `--color-button-1000` | loader `--color-bg-1` | none | — |
| Disabled | `--color-button-800` | `--color-bg-1` | none | opacity 0.5 |

Secondary — neutral companion (Cancel, Edit). Neutral at every size.

| State | Background | Content | Border | Other |
|---|---|---|---|---|
| Default | `--color-bg-2` | `--color-text-t3` | none | — |
| Hover | `--color-bg-hover` | `--color-text-t3` | none | — |
| Activated (Small, Medium) | `--color-bg-2` | `--color-text-t3` | `--color-text-t2` | — |
| Activated (Large) | `--color-bg-2` | `--color-text-primary` | `--color-text-primary` | — |
| Loading | `--color-bg-2` | loader `--color-text-secondary` | none | — |
| Disabled | `--color-bg-2` | `--color-disabled` | none | opacity 1 (label greys instead of fading) |

Ghost — low emphasis, no fill until hover (toolbars, inline actions). With-icon row applies when a leading icon is present.

| State | Background | Content | Border | Other |
|---|---|---|---|---|
| Default | transparent | `--color-button-800` | none | — |
| Hover | `--color-bg-hover` | `--color-button-800` | none | — |
| Activated | `--color-bg-hover` | `--color-button-800` (with icon: `--color-button-1000`) | `--color-button-800` (with icon: `--color-button-1000`) | — |
| Loading | transparent (with icon: `--color-bg-2`) | loader `--color-button-800` (with icon: `--color-button-1000`) | none | — |
| Disabled | transparent | `--color-button-800` | none | opacity 0.5 |

Negative — destructive, high emphasis (Delete in a confirmation dialog).

| State | Background | Content | Border | Other |
|---|---|---|---|---|
| Default | `--color-negative-800` | `--color-bg-1` | none | — |
| Hover | `--color-negative-1000` | `--color-bg-1` | none | — |
| Activated | `--color-negative-100` | `--color-negative-800` | `--color-negative-800` | — |
| Loading | `--color-negative-1000` | loader `--color-bg-1` | none | — |
| Disabled | `--color-negative-800` | `--color-bg-1` | none | opacity 0.5 |

Negative secondary — destructive, low emphasis, tinted (Remove in a list). Small differs where noted.

| State | Background | Content | Border | Other |
|---|---|---|---|---|
| Default | `--color-negative-100` | `--color-negative-800` | none | — |
| Hover | `--color-negative-200` | `--color-negative-800` (Small: `--color-negative-1000`) | none | — |
| Activated | `--color-negative-100` | `--color-negative-800` (Small: `--color-negative-1000`) | `--color-negative-800` | — |
| Loading | `--color-negative-200` (Small: `--color-bg-1`) | loader `--color-negative-800` (Small: `--color-negative-1000`) | none | — |
| Disabled | `--color-negative-100` (Small: `--color-bg-1`) | `--color-negative-800` | none | opacity 0.5 |

Link — text-only action (View all). No fill in any state.

| State | Background | Content | Border | Other |
|---|---|---|---|---|
| Default | transparent | `--color-button-800` | none | — |
| Hover | transparent | `--color-button-1000`, underlined | none | Small link switches to BTN Medium and grows to 24px tall (56×20 → 65×24) |
| Activated | transparent | `--color-button-1000` | 1px OUTSIDE stroke `--color-button-1000`, radius 2px | opacity 0.5 |
| Loading | transparent | 20px loader `--color-button-1000` | none | min width 56px (Medium 65px), radius 4px |
| Disabled | transparent | `--color-button-800` | none | opacity 0.2 |

Dark mode: `--color-bg-1` is dark, so Primary and Negative show a dark label/loader on a lighter blue/red fill (intended per Figma; passes contrast).

**Behavior**:
- Hover and Activated never apply to Disabled or Loading buttons.
- Activated = pressed (momentary) or persistently selected toggle; shows the stroke-outlined look above.
- Loading: label and leading icon are hidden, only the loader shows, centered; height unchanged. Width collapses toward the size's min width (the label no longer takes space), so reserve width if a layout shift matters. Loading takes precedence over Disabled (no fade). Cursor: progress.
- Loader rotates 360° every 800ms, linear, infinite; with reduced motion it slows to 2400ms (not stopped, it is the only progress cue).
- Disabled: not-allowed cursor, no interaction; fade per variant table (Secondary greys label instead).
- Transitions: background, content color and stroke, 120ms ease; off under reduced motion.
- Focus (keyboard only): 2px `--color-button-1000` outline, offset 2px, following the button radius. Not in Figma; always show it.
- Label never wraps; keep labels short.

**Usage**:
- Do: one Primary per area; pair it with Secondary (Cancel) or Ghost.
- Do: use Negative only for committed destructive actions (confirmation dialogs); Negative secondary for lighter destructive actions in lists.
- Do: use Large (usually full width) for sheets, onboarding and dialog footers; Medium for general UI; Small for dense rows and inline cards.
- Do: use Link for navigation or tertiary text actions (View all).
- Don't: place two Primary buttons side by side, or mix sizes within one button group.
- Don't: add icons to every button; the leading icon pattern is for Ghost (e.g. Forward).
- Don't: recolor with raw hex; use the variant or tokens.

**Accessibility**:
- Actions are buttons; navigation uses the Link variant as a real link.
- While loading, the label stays available to screen readers (visually hidden) and the button reports busy.
- Toggle buttons announce pressed/not pressed; ordinary buttons are not toggles.
- Disabled buttons are unfocusable; if users need to know why, keep it focusable and explain.
- Icons are decorative; the visible label names the button.
- Light-mode contrast is weak: white on `--color-button-800` ~3.7:1, on `--color-negative-800` ~3.5:1, Negative secondary ~3.1:1, Ghost/Link label ~3.7:1 (hover `--color-button-1000` ~4.7:1). Dark mode passes (~5–6:1). Secondary disabled label ~1.6:1.

**Notes**:
- Figma Buttons-Primary-Large ("Agree") uses Text colors; spec keeps Large Primary blue (matches Primary-Fullwidth).
- Figma Buttons-Secondary/Small uses the light-blue Button/100 scale; spec keeps Secondary neutral at all sizes.
- Figma "Primary-Negative-small" is actually Negative secondary styling; there is no filled Negative small in Figma (Small/Large Ghost and Negative are spec-only).
- Figma Buttons-Secondary-Large 2145:2678 is really 36px (a copy of Medium).
- Figma has no keyboard focus state; its "Focus/Focused" frames are the Activated look.
- Radii and min widths are unbound values in Figma.

#### Icon button
An icon-only circular button for compact or frequent actions (react, forward, call, delete, close). Use when the icon is universally understood and space is tight; use a labelled Button when the action needs words.

**Anatomy**:
- Container: square box, circular (Micro: 4px rounded square); icon centered; 1px inside stroke only in the Active state.
- Icon: single-color glyph that takes the content color.
- Count badge (optional, Large Transparent): pill, min 16×16px, height 16px, 2px vertical padding, radius 17.6px (pill), fill `--color-draft-badge`, number in `--color-label` (white in both modes), Zoho Puvi Semibold 9.6px/1 (no text style), 1px outside stroke `--color-bg-1`; positioned 2px from top, flush right of the 40px button (Figma x 24, y 2).
- Dot badge (optional): 6×6px circle, `--color-draft-badge`, no stroke, 6px from top and 4px from right (Figma x 30, y 6).
- Add glyph (optional, replaces icon): 20px circle `--color-theme-yellow-1000` with a 10px plus in `--color-text-primary`; colors do not change with state. Used on a Large Transparent button.
- Cluster: horizontal row of Large Transparent buttons, 4px gap (`--space-s`), centered (3 buttons = 128×40px).

**Sizes**:

| Size | Box | Radius | Icon size |
|---|---|---|---|
| Large (default) | 40×40px | circle | 24px (add glyph 20px) |
| Small | 32×32px | circle | 20px |
| XSmall | 24×24px | circle | 18px |
| Micro (own style, fixed size) | 20×20px | 4px (`--radius-sm`) | 20px |

**Variants and states**:
Active = 1px inside stroke, no fill, icon takes the stroke color. Disabled = Default look at 50% layer opacity unless noted (hover/press never change a disabled button).

| Variant (sizes) | State | Background | Icon | Border | Other |
|---|---|---|---|---|---|
| Hard fill (Small 32px; XSmall 24px) | Default | `--color-button-800` | Small: `--color-label` (white both modes); XSmall: `--color-bg-1` (dark in dark mode) | none | — |
| | Hover | `--color-button-1000` | same as Default | none | — |
| | Active | transparent | `--color-button-800` | `--color-button-800` | — |
| | Disabled | `--color-button-800` | same as Default | none | opacity 0.5 |
| Transparent (Large, Small) | Default | transparent | `--color-text-secondary` | none | — |
| | Hover | `--color-bg-hover` | `--color-text-primary` | none | — |
| | Active | transparent | `--color-button-800` | `--color-button-800` | — |
| | Disabled | transparent | `--color-text-secondary` | none | opacity 0.5 |
| Soft fill, blue (Large) | Default | `--color-button-100` | `--color-text-primary` | none | — |
| | Hover | `--color-bg-hover` | `--color-text-primary` | none | — |
| | Active | transparent | `--color-button-800` | `--color-button-800` | — |
| | Disabled | `--color-button-100` | `--color-text-secondary` | none | opacity 0.5 |
| Soft fill, neutral (Large; for grey surfaces) | Default | `--color-bg-1` | `--color-text-primary` | none | — |
| | Hover | `--color-bg-hover` | `--color-text-primary` | none | — |
| | Active | transparent | `--color-button-800` | `--color-button-800` | — |
| | Disabled | `--color-bg-1` | `--color-text-secondary` | none | opacity 0.5 |
| Secondary (Large) | Default | `--color-bg-2` | `--color-text-secondary` | none | — |
| | Hover | `--color-bg-1` | `--color-text-secondary` | none | — |
| | Active | transparent | `--color-button-800` | `--color-button-800` | — |
| | Disabled | `--color-bg-2` | `--color-text-secondary` | none | opacity 1 (identical to Default) |
| Negative (Small) | Default | transparent | `--color-negative-800` | none | — |
| | Hover | `--color-negative-100` | `--color-negative-800` | none | — |
| | Active | transparent | `--color-negative-800` | `--color-negative-800` | — |
| | Disabled | transparent | `--color-negative-800` | none | opacity 0.5 |
| Micro (20px overlay on images) | Default | black 40% (#000000 @ 0.4, both modes; not a token) | `--color-bg-1` | none | — |
| | Hover | black 60% (#000000 @ 0.6) | `--color-bg-1` | none | — |
| | Active | black 60% | `--color-bg-1` | `--color-text-t2` | — |
| | Disabled | black 40% | `--color-bg-1` | none | opacity 0.5 |

Size/variant pairings found in Figma: Hard fill Small and XSmall; Transparent Large (with badge/dot/add-glyph options) and Small; Soft fill (blue/neutral) Large; Secondary Large; Negative Small; Micro. Other combinations use the same colors at the shared sizes.

Named icons used (assets/icons/): `call` (Hard fill Small), `add-fill` (Hard fill XSmall), `emoji-smiley` (Transparent Large, badge examples), `forward` (Transparent Small), `tick` (Soft fill), `close-line2` (Secondary; cluster close), `add-plus-10` (10px plus inside the add glyph), `delete` (Negative), `close` (Micro), `sort-ascending`, `more-meatballs` (cluster).

**Behavior**:
- Size never changes between states (stroke is inside).
- Active = momentary press or persistent toggle-on state.
- Transitions: background, icon color and stroke, 120ms ease; off under reduced motion.
- Disabled: not-allowed cursor; always shows the Default look (faded) even when hovered/pressed.
- Badge and dot sit on top of the button and ignore pointer input; they don't change with state.
- Focus (keyboard only): 2px `--color-button-1000` outline, offset 2px, circular. Not in Figma; always show it.

**Usage**:
- Do: use Transparent as the default in toolbars, headers and message hover rows; Hard fill for one primary icon action per area (e.g. call).
- Do: use Soft fill neutral on grey surfaces, blue Soft fill for a highlighted/toggle action (e.g. mark as done).
- Do: use Negative only for destructive actions and confirm them.
- Do: use Micro only over images/thumbnails (e.g. remove attachment), ideally light imagery.
- Do: keep all buttons in a cluster the same size and variant (Large Transparent).
- Don't: use ambiguous icons without a tooltip or label.
- Don't: pack XSmall/Micro buttons tightly; leave space around them.
- Don't: recolor icons with raw hex.

**Accessibility**:
- Every icon button needs an accessible name describing the action ("Delete message", not "Trash"); icons are decorative.
- Only toggles announce pressed/not pressed.
- Badges are hidden from assistive tech; include the count in the name ("Reactions, 2 new").
- Clusters are announced as a named group (e.g. "Panel actions").
- Target size: Micro (20px) is below the 24px WCAG 2.2 minimum, XSmall is at it.
- Micro is very faint in dark mode (dark `--color-bg-1` icon on a black scrim).
- Secondary disabled is visually identical to Default; prefer hiding the action.

**Notes**:
- Two different Figma sets are both named Icon-Large-Secondary: a grey-fill button (3016:6371) and a transparent button with the yellow add glyph (3628:2793).
- Icon-Large-Secondary 3016:6371 Disabled frame is identical to Default (kept as designed).
- Hard fill Small uses an unbound white icon, XSmall binds its icon to BG/1, so they differ in dark mode.
- Figma radii vary (27–100px) but all render as circles; box sizes and Micro scrim are unbound values.
- Active is named Activated / Focus / States6 in some sets; Figma has no keyboard focus state.

### Selection

#### Toggle
A small pill switch that turns one setting on or off and applies right away, for example "Email notifications". If the choice only applies after the user presses Save, or the user is choosing between two different options (List / Grid), use a checkbox or a segmented control.

**Anatomy**:
- Track: fully rounded pill
- Knob: circle inside the track, 1px inset from the track edge
- Label (optional): text to the right of the track. Figma has no label; the spec below is the one used in product.

**Sizes**:

| Part | Value |
|---|---|
| Track | 32 × 18px, radius `--radius-pill` (28px, which renders fully rounded) |
| Knob | 16 × 16px circle, radius `--radius-pill`, top 1px, left 1px |
| Knob position | Off: x = 1px. On: x = 15px (slides 14px) |
| Border | none, in every state |
| Label | Body 3 — Zoho Puvi Regular 14/20 (`--font-body-3`), `--color-text-primary`, vertically centred |
| Track to label gap | 8px (`--space-l`) |

**Variants and states**:

| State | Fill (track) | Border/ring | Mark/knob | Other (opacity…) |
|---|---|---|---|---|
| Off | `--color-disabled` | none | `--color-bg-1`, left | 100%. Pointer cursor |
| On | `--color-button-800` | none | `--color-bg-1`, right | 100% |
| Off disabled | `--color-bg-border` | none | `--color-bg-1`, left | No opacity change; the track color alone signals disabled. Label `--color-text-t2`. Not-allowed cursor |
| On disabled | `--color-button-100` | none | `--color-bg-1`, right | Same as Off disabled |
| Focus (keyboard) | as current state | 2px `--color-button-1000` outline, offset 2px, follows the pill shape | as current state | Code only; Figma has no focus state |

**Behavior**:
- Click or Space on the track or the label flips Off and On. The change applies immediately, with no Save step.
- The knob slides 14px and the track color cross-fades, both over 150ms ease. With reduced motion turned on, both change instantly.
- Disabled toggles ignore input and keep their current position.
- The focus ring shows only for keyboard focus (focus-visible): 2px `--color-button-1000` outline with a 2px offset.

**Usage**:
- Do: use it for settings that take effect right away.
- Do: put a label next to it that says what "on" means, and keep the label the same in both states ("Email notifications", not "On" / "Off").
- Don't: use it in a form that has a Save button. Use a checkbox.
- Don't: use it to pick between two different options such as "List" / "Grid". Use a segmented control.
- Don't: resize it or recolor it with raw hex values.

**Accessibility**:
- It is exposed as a switch that reads "on" or "off". Space toggles it.
- Always give it a name: a visible label, or an accessible label when there is no visible text.
- The Off track has low contrast against the page: about 1.7:1 on white in Light and 1.5:1 in Dark, below the 3:1 minimum for controls. In Dark the knob is also about 1.5:1 against the Off track. Always pair it with a visible label.
- On passes contrast in both themes.

**Notes**:
- The pill radius (28px) is hardcoded in Figma, not a variable.
- Figma has a second Toggle set (3315:2551) with the same variants, sizes and colors. Its only difference is that the On disabled track (#E5F3FD) is not bound to Button/100.
- Toggle shows disabled with color changes. Checkbox, radio and check circle show disabled with 50% opacity instead.

#### Checkbox
A square box that turns one option on or off, or lets the user pick several options from a list. It has a Semi (indeterminate) state for "select all" when only some children are selected. The choice usually applies when a form is submitted. For a setting that applies immediately, use a toggle. For exactly one choice from a group, use radios.

**Anatomy**:
- Frame: 24 × 24px invisible hit area
- Box: 18 × 18px, centred (inset 3px)
- Mark: a check or a dash, drawn inside the box
- Label (optional): text to the right. Figma has no label.

**Sizes**:

| Part | Value |
|---|---|
| Frame (hit area) | 24 × 24px |
| Box | 18 × 18px, inset 3px on every side, radius 2px |
| Box border (Uncheck) | 1.5px, drawn inside the 18px box |
| Check mark | about 11 × 8px (10.5 × 8 in Figma), top-left at (7.25, 8.25) in the frame |
| Dash (Semi) | 10 × 1.5px bar, top-left at (7, 11.23) in the frame |
| Label | Body 3 — Zoho Puvi Regular 14/20 (`--font-body-3`), `--color-text-primary`, vertically centred |
| Frame to label gap | 4px (`--space-s`) |

**Variants and states**:

| State | Fill | Border/ring | Mark/knob | Other (opacity…) |
|---|---|---|---|---|
| Uncheck | transparent | 1.5px `--color-text-t2` | none | 100% |
| Checked | `--color-button-800` | same color as the fill (`--color-button-800`) | check, `--color-bg-1` | 100% |
| Semi (indeterminate) | `--color-button-800` | `--color-button-800` | dash, `--color-bg-1` | 100%. Semi wins over Checked |
| Disabled | as Uncheck | as Uncheck | none | Whole control at 50% opacity. Label `--color-text-t2`. Not-allowed cursor |
| Check disabled | as Checked | as Checked | check, `--color-bg-1` | Whole control at 50% opacity. Label `--color-text-t2` |
| Focus (keyboard) | as current state | 2px `--color-button-1000` outline, offset 2px outside the 18px box, with rounded corners that follow the box | as current state | Code only |

**Behavior**:
- Click or Space on the box or its label toggles Uncheck and Checked.
- Semi can only be set by the app, for example on a "select all" box when some children are selected. Clicking a Semi box usually makes it Checked (select all).
- The box fill and border fade over 120ms ease. The mark appears and disappears instantly. With reduced motion turned on, the fade is removed.
- Disabled checkboxes ignore input.
- Focus ring: 2px `--color-button-1000` outline, offset 2px from the box, shown only for keyboard focus.

**Usage**:
- Do: use it for independent options and for choosing several items from a list.
- Do: use Semi on a parent "select all" box when only some children are selected.
- Do: make the whole label clickable.
- Don't: use it for a setting that applies immediately. Use a toggle.
- Don't: use it for mutually exclusive choices. Use radios.
- Don't: shrink the 24px hit area to the 18px box.

**Accessibility**:
- It reads as a checkbox that is "checked", "not checked" or "mixed" (Semi). Space toggles it.
- Give every checkbox a name: a visible label, or an accessible label.
- The Uncheck ring (`--color-text-t2`) is about 2.1:1 on white in Light and 2.9:1 on BG/1 in Dark, below the 3:1 minimum.
- Disabled is shown only by 50% opacity, so pair it with context or a label.

**Notes**:
- The 2px box radius is hardcoded in Figma, not a variable.
- The Figma check vector is 10.5 × 8. The product asset is 11 × 8.
- Label gap is 4px for checkbox but 8px for toggle and radio.
- Figma has no focus state and no label. Both were added in code.

#### Radio
A circle for choosing exactly one option from a group of two or more, where all options stay visible. For a single on/off choice, use a checkbox or a toggle. For 2 to 4 short options in a compact switcher, use a segmented control.

**Anatomy**:
- Frame: 20 × 20px
- Ring (Active): 16px circle with a 1.5px stroke, centred (inset 2px)
- Selected disc: 20px filled circle with a 10px centre dot
- Label (optional): text to the right. Figma has no label.

**Sizes**:

| Part | Value |
|---|---|
| Frame | 20 × 20px |
| Active ring | 16px outer diameter, inset 2px, 1.5px stroke drawn inside |
| Selected disc | 20px outer diameter (fills the whole frame) |
| Selected centre dot | 10px diameter, created by a 5px-wide colored band around it |
| Label | Body 3 — Zoho Puvi Regular 14/20 (`--font-body-3`), `--color-text-primary`, vertically centred |
| Frame to label gap | 8px (`--space-l`) |
| Stack of options | vertical list, one option per row |

**Variants and states**:

| State | Fill | Border/ring | Mark/knob | Other (opacity…) |
|---|---|---|---|---|
| Active (unselected) | transparent | 16px ring, 1.5px `--color-text-t2` | none | 100% |
| Selected | 20px disc `--color-button-800` (5px band) | none | 10px dot `--color-bg-1` | 100% |
| Disabled | as Active | as Active | none | Whole control at 50% opacity. Label `--color-text-t2`. Not-allowed cursor |
| Selected disabled | as Selected | as Selected | as Selected | 50% opacity. Code only, no Figma frame |
| Focus (keyboard) | as current state | 2px `--color-button-1000` circular outline, offset 2px from the 20px frame (inner diameter 24px) | as current state | Code only |

**Behavior**:
- Clicking an option or its label selects it and clears the rest of the group. A selected radio cannot be cleared by clicking it again.
- The whole group is one tab stop. Arrow keys move the selection within the group.
- On select, the ring grows from 16px to 20px, thickens from 1.5px to a 5px band and changes color, all over 120ms ease, which leaves the 10px dot. With reduced motion turned on, it changes instantly.
- Disabled options ignore input and are skipped by arrow keys.

**Usage**:
- Do: use it for 2 or more mutually exclusive options where all of them should stay visible.
- Do: select a sensible default option.
- Do: give the group a heading or label.
- Don't: use a single radio on its own. Use a checkbox.
- Don't: use it for multi-select.
- Don't: use it for long lists. Use a dropdown.

**Accessibility**:
- Every radio in a group shares the same group name, so the group is one tab stop with arrow-key navigation.
- Label the group (a radiogroup with a label, or a fieldset with a legend) and label each option.
- The Active ring has the same low contrast as the checkbox ring: about 2.1:1 in Light and 2.9:1 in Dark.

**Notes**:
- The Selected disc (20px) is 4px larger than the Active ring (16px). This is how Figma draws it, and it is kept on purpose.
- Figma has no "Selected disabled" frame.
- Figma has no focus state and no label.

#### Check circle
A round checkbox for multi-selecting items in a list, such as messages or contacts in a selection mode. It works like a checkbox and only the shape differs. It usually has no visible label. Use a square checkbox for form options.

**Anatomy**:
- Frame: 24 × 24px hit area
- Disc: 18px circle, centred (inset 3px)
- Check: cut out of the disc so the surface behind shows through (default and selected)
- Dash: a solid bar on top of the disc (semi select)
- Outline variant: a plain 18px ring instead of the grey disc when unselected

**Sizes**:

| Part | Value |
|---|---|
| Frame | 24 × 24px |
| Disc | 18px diameter, inset 3px |
| Check cut-out | about 11 × 8px (10.5 × 8 in Figma), top-left at (7, 8) in the frame |
| Dash | 10 × 1.5px bar, top-left at (7.04, 10.79) in the frame |
| Outline variant ring | 18px outer diameter, 1.5px stroke drawn inside |
| Label | none (list rows supply the context) |

**Variants and states**:

| State | Fill | Border/ring | Mark/knob | Other (opacity…) |
|---|---|---|---|---|
| default | disc `--color-text-t2` | none | check cut out, background shows through | 100% |
| selected | disc `--color-button-800` | none | check cut out, background shows through | 100% |
| semi select | solid disc `--color-button-800` (no cut-out) | none | dash, `--color-bg-1` | 100% |
| disabled | as default | none | as default | Whole control at 50% opacity. Not-allowed cursor |
| Outline variant (unselected) | transparent | 18px ring, 1.5px `--color-text-t2` | none | 100%. When selected or semi, it looks the same as the standard variant |
| Focus (keyboard) | as current state | 2px `--color-button-1000` circular ring, inner edge 2px outside the disc (26px outer diameter) | as current state | Code only |

**Behavior**:
- Click or Space toggles default and selected. Semi select is set only by the app.
- The disc color fades over 120ms ease. With reduced motion turned on, the fade is removed.
- Disabled check circles ignore input.

**Usage**:
- Do: use it at the start or end of list rows in a multi-select mode.
- Do: place it on a plain `--color-bg-1` or `--color-bg-2` surface, because the tick shows whatever is behind it.
- Do: use the outline variant when a solid grey disc on every row would be too heavy.
- Don't: use it for single choice.
- Don't: place it on images or busy backgrounds.
- Don't: mix it with square checkboxes in the same list.

**Accessibility**:
- It reads as a checkbox with checked, not checked and mixed states.
- It has no visible text, so always give it an accessible label that names the item ("Select message from Priya", not "Select").
- The tick's contrast depends on the surface behind the control.

**Notes**:
- The Figma set ("multiselect") is a hidden layer, and its variant names are generic ("Property 1", "Variant5" for the outline variant).
- None of its fills are bound to variables in Figma. The hex values match the Light values of `--color-text-t2`, `--color-button-800` and `--color-bg-1`, so those tokens are used, which also gives it a Dark mode.
- The dash position (7.04, 10.79) differs slightly from the checkbox dash (7, 11.23).

#### Segmented control
A pill track holding 2 to 4 segments, where exactly one segment is selected and raised on a white pill. Use it to switch a view or filter within a screen (for example Android / iOS). Don't use it for an on/off setting (use a toggle) or for long option lists (use a dropdown or radios).

**Anatomy**:
- Track: fully rounded pill with 2px padding
- Segment: fully rounded pill, 36px tall
- Selected pill: the selected segment's background
- Icon circle (Icon and Icon & text layouts): 32px circle holding a 24px glyph
- Label (Icon & text and Text layouts)

**Sizes**:

| Part | Value |
|---|---|
| Control height | 40px (36px segment + 2px track padding top and bottom) |
| Track | padding 2px (`--space-xs`), radius 100px (fully rounded), no border, no gap between segments |
| Segment | height 36px, radius 100px |
| Segment padding, Icon only | 2px on all sides, so the segment is 36 × 36px |
| Segment padding, Icon & text | 2px top, right 20px (`--space-3xl`), 2px bottom, 2px left |
| Segment padding, Text only | 2px top and bottom, 20px (`--space-3xl`) left and right |
| Icon circle | 32 × 32px, radius 1000px (circle), 24px glyph centred |
| Icon to label gap | 10px (`--space-btn`) |
| Label | H3 — Zoho Puvi Semibold 14/20 (`--font-h3`), single line, never wraps |

**Variants and states**:
Three layouts: Icon only, Icon & text, Text only. The track color depends on the layout:

| Layout | Track fill |
|---|---|
| Icon only, Icon & text | `--color-surface-e5-a50` (#E5E5E5 at 50% alpha, same in Light and Dark) |
| Text only | `--color-bg-2` |

| State | Fill (segment) | Border/ring | Mark/knob (label · icon) | Other (opacity…) |
|---|---|---|---|---|
| Unselected | transparent (track shows) | none | label `--color-text-primary` · glyph `--color-text-secondary` | Pointer cursor |
| Selected | `--color-bg-1` pill | none | label `--color-text-primary` · glyph `--color-text-secondary`. In Icon & text only, the icon circle is filled `--color-bg-2` | — |
| Hover (any enabled segment) | `--color-bg-hover` (replaces the white pill when selected) | none | unchanged | — |
| Disabled, with a selection | selected pill stays `--color-bg-1`; others transparent | none | label `--color-disabled` · glyph `--color-text-t2` | No opacity change. Not-allowed cursor. No hover |
| Disabled, nothing selected | no pill at all | none | label `--color-disabled` · glyph `--color-text-t2` | — |
| Focus (keyboard) | as current state | 2px `--color-button-1000` outline on the segment, offset 0, follows the pill | unchanged | Code only |

**Behavior**:
- Clicking a segment selects it and deselects the others. Exactly one segment is selected at a time, and a selected segment cannot be cleared by clicking it again.
- The whole control is one tab stop. Arrow keys move the selection.
- The segment background fades over 120ms ease. The pill does not slide between segments. With reduced motion turned on, it changes instantly.
- Hover shows `--color-bg-hover` on any enabled segment, including the selected one.
- Segments are only as wide as their content, so they are not equal widths.

**Usage**:
- Do: use 2 to 4 short options that switch a view in place.
- Do: always have one segment selected (except in the "disabled, nothing selected" state).
- Do: use Text only on busy or grey surfaces, and icon layouts where the glyphs are clear.
- Don't: use it as an on/off switch or inside a Save-type form in place of radios.
- Don't: use long or multi-line labels.
- Don't: mix layouts within one control.

**Accessibility**:
- It is a radio group with a group label. Each segment is a radio, and arrow keys move the selection.
- Icon-only segments need an accessible label on each segment ("Android", "iOS"). Glyphs are decorative.
- The disabled label (`--color-disabled`, #C4C4C4 on white) is well below 4.5:1. This is allowed for disabled controls.
- In Dark, the `--color-surface-e5-a50` track keeps its Light value, so it shows as a light grey band around the dark selected pill.

**Notes**:
- The Figma set is named "Text & Icon" and its 12 variants (3 layouts × 4 states) have frame names ("Frame 11712796xx"), not state names.
- Radii of 100px (track, segment) and 1000px (icon circle) are hardcoded in Figma.
- Text only uses BG/2 for the track, but the icon layouts use Surface #E5-a50.
- `--color-surface-e5-a50` has no Dark value.
- Figma shows hover only on the selected segment. In product, hover applies to every enabled segment.
- The focus ring offset is 0 here but 2px on toggle, checkbox and radio.

### Dropdowns & menus

#### Dropdown
A compact, borderless, pill-shaped text trigger (for example "Sort by contact") that opens a floating menu directly below it. Use it for sort and filter choices, action lists, and searchable pickers. It is not a form select field.

**Anatomy**:
- Container: a pill that hugs its content, with no fill or stroke at rest
- Label: a single line that never wraps
- Chevron: 10 × 6 px, to the right of the label. It points down when closed and up when open
- Menu: a separate panel (see Menu) anchored under the trigger's bottom-left edge. Right-aligned anchoring is available for triggers near the right edge

**Sizes**:

| Property | Value |
|---|---|
| Height | 28px (6 + 16 + 6), width hugs content |
| Padding | 6px vertical (`--space-m`), 8px horizontal (`--space-l`) |
| Gap, label to chevron | 6px (`--space-m`) |
| Radius | 39px, fully rounded (literal, not a token) |
| Label text | Zoho Puvi Semibold 14/16. Not bound to a text style. Uses the family `--font-family-semibold` |
| Chevron | 10 × 6px, filled with a single color |
| Stroke (Open only) | 1px inside stroke, so the height stays 28px |
| Trigger-to-menu gap | 4px (`--space-s`). Figma doesn't specify this gap |
| Transition | background, color and stroke, 120ms ease. None with reduced motion |

**Variants and states**:

| State | Background | Text/icon | Border | Other |
|---|---|---|---|---|
| Default | transparent | Label `--color-text-t3`. Chevron `--color-text-t1` | none | Chevron points down |
| Hover | `--color-bg-hover` | Label `--color-text-primary`. Chevron `--color-text-t1` | none | Chevron points down |
| Open | `--color-bg-hover` | Label `--color-text-primary`. Chevron `--color-text-t1` | 1px inside `--color-text-t2` | Chevron points up |
| Disabled | transparent | Same as Default | none | Whole trigger at 50% opacity. Not-allowed cursor |
| Focus (keyboard) | as current state | as current state | as current state | 2px `--color-button-1000` outline, offset 2px outward |

**Behavior**:
- Click toggles the menu. Enter, Space or ↓ opens it and focuses the checked row, or the first row if none is checked. ↑ opens it and focuses the last row.
- Escape closes the menu and returns focus to the trigger. Tab or a click outside closes it without moving focus back.
- Choosing a row closes the menu. In a single-choice menu the trigger label can show the choice (for example "Sort by name").
- For the search picker, opening clears the search and moves focus into the search field. The currently selected option is highlighted first.
- Focus ring: 2px `--color-button-1000` outline, offset 2px. Figma has no focus state, so this comes from code only.

**Usage**:
- Do use short labels that describe the current value or the action, such as "Sort by contact" or "Actions".
- Do place it inline in toolbars and list headers where a full select field would be too heavy.
- Don't add a fill, stroke or shadow at rest. The trigger is intentionally bare until hover or open.
- Don't let the label wrap or truncate to a second line.

**Accessibility**:
- It's a native button that announces it has a popup: a menu, or a listbox for the search picker. It exposes its expanded state and which menu it controls.
- The chevron is decorative and hidden from assistive technology.
- Disabled triggers use 50% opacity, which WCAG exempts from contrast requirements.

**Notes**:
- Figma names the variants as frames (Frame 28090 / 57503 / 57504 / 57505) instead of state names.
- The 39px radius is hardcoded in Figma, not a token.
- The label font is not bound to a Figma text style. There is no "Semibold 14/16" style.
- Disabled is simply the Default frame at 50% opacity.
- The 4px trigger-to-menu gap and the focus ring are code-only decisions.

#### Menu
A floating panel of rows that opens from a Dropdown or works as a standalone context menu. It comes in three variants. Small is for filters and single choice. Medium is for action lists such as message actions. Small-search selection is a searchable picker for long lists such as time zones.

**Anatomy**:
- Panel: a `--color-bg-1` surface with the "Drop down menu" shadow
- Search header (search variant only): a bordered field with a 24px search glyph on the left and a text input
- Rows: a vertical stack of Menu items that fill the panel width, with no dividers
- Empty state (search variant only): "No results" text when the filter matches nothing

**Sizes**:

| Property | Small | Medium | Small-search selection |
|---|---|---|---|
| Width | 160px fixed | 180px fixed | Hugs content, at least 280px. 379px in Figma |
| Minimum width (any panel) | 160px | 160px | 280px |
| Panel padding | 4px top and bottom, 0 sides (`--space-s`) | same | same |
| Radius | 4px (`--radius-sm`) | 4px (`--radius-sm`) | 12px (literal, not a token) |
| Row size | Small (40px) | Medium (48px) | Small (40px) with 8px row radius (`--radius-lg`) |
| Shadow | "Drop down menu" (`--shadow-dropdown-menu`) = 0 0 12px rgba(0,0,0,0.25), the same in Light and Dark | same | same |
| Trigger-to-menu gap | 4px (`--space-s`) | same | same |

Search header (search variant):

| Property | Value |
|---|---|
| Header padding | 4px vertical (`--space-s`), 8px horizontal (`--space-l`) |
| Field height | 40px (8 + 24 + 8) |
| Field padding | 8px on all sides (`--space-l`) |
| Field gap, icon to input | 12px (`--space-xl`) |
| Field radius | 8px (`--radius-lg`) |
| Search glyph | 24px |
| Input text | Body 1: Zoho Puvi Regular 16/22 (`--font-body-1`) |
| Option list | Scrolls vertically when a maximum height is set. No maximum by default |
| Empty-state text | Body 3: Zoho Puvi Regular 14/20 (`--font-body-3`), `--color-text-t1`, padding 10px vertical (`--space-btn`) and 12px horizontal (`--space-xl`) |

**Variants and states**:

| State | Background | Text/icon | Border | Other |
|---|---|---|---|---|
| Panel (all variants) | `--color-bg-1` | `--color-text-primary` | none | `--shadow-dropdown-menu` |
| Search field, default | `--color-bg-1` | Input `--color-text-primary`. Placeholder `--color-text-t1`. Glyph #000000 in Light, `--color-text-primary` in Dark | 1px inside `--color-bg-border` | Radius 8px |
| Search field, focused | `--color-bg-1` | same | 1px inside `--color-button-800` | Stroke change animates over 120ms |
| Empty result | — | "No results" in `--color-text-t1` | — | Body 3 |

**Behavior**:
- The menu opens below the trigger, left-aligned by default or right-aligned when needed. It is hidden when closed.
- Action and single-choice menus: focus moves between rows. ↑ and ↓ wrap around. Home and End jump to the first and last row. Typing a letter jumps to the next row whose label starts with that letter. Enter or Space activates the row and closes the menu.
- Search selection: focus stays in the search field. Typing filters the rows (case-insensitive substring match) and resets the highlight to the first match. ↑ and ↓ move the highlight and wrap around, scrolling it into view. Moving the pointer over a row highlights it. Enter or a click picks the highlighted option and closes the menu. The chosen option shows the check mark.
- Escape closes the menu and returns focus to the trigger. Tab or a click outside closes it without moving focus back.
- Disabled rows are skipped by arrow keys and can't be activated.

**Usage**:
- Do use Small for short filter or choice lists (for example Recent, Unread, Muted, Archived with count badges).
- Do use Medium for action lists with leading icons (Forward, Copy, Edit, Mark as read, Pin message, Delete). Put the destructive action last.
- Do use Small-search selection when a list is long enough that scanning is slow, such as time zones.
- Don't mix Small and Medium rows in one panel.
- Don't add dividers, headers or extra side padding. Rows run edge to edge inside the 4px vertical padding.
- Don't change the shadow per theme. It uses the same effect in Light and Dark.

**Accessibility**:
- Action menus are a menu of menu items. Single-choice menus use radio menu items whose checked state draws the check mark.
- The search picker is a combobox input that controls a listbox of options. The active option is tracked by active-descendant, so focus never leaves the input.
- Give each panel an accessible name, either from its trigger or a label such as "Message actions".
- The search field needs a label such as "Search timezone", because the placeholder alone isn't enough.
- Transitions are turned off when the user prefers reduced motion.

**Notes**:
- The Small-search selection radius (12px) is hardcoded in Figma and differs from the 4px on Small and Medium.
- The search glyph is a raw #000000 in Figma and not bound to a variable. Dark mode uses `--color-text-primary` so the glyph stays visible.
- The search variant's width is 379px in Figma with hug sizing. Code uses a 280px minimum.
- Figma's Small-search frame is the only place that shows the row hover fill and the 8px row radius.

#### Menu item
A single row inside a Menu, made of an optional leading icon, a label, and an optional trailing badge or check mark. It comes in Small (40px) and Medium (48px) sizes. Rows match their menu (Small menu → Small rows, Medium menu → Medium rows).

**Anatomy**:
- Row container: full menu width, fixed height, square corners (8px radius in the search menu)
- Leading icon (optional): a single-color glyph that takes the text color
- Label: fills the remaining width on a single line and ends with an ellipsis when it overflows
- Trailing badge (optional): a count pill, Default (yellow) or Muted (grey)
- Trailing check mark (optional): a 24px tick shown only on the selected row

**Sizes**:

| Property | Small | Medium |
|---|---|---|
| Height | 40px | 48px |
| Row padding | 0 vertical, 12px horizontal (`--space-xl`) | 0 vertical, 12px horizontal (`--space-xl`) |
| Leading icon | 18px | 20px |
| Icon-to-label gap | 4px (`--space-s`) | 4px (`--space-s`) |
| Label side padding | 4px each side (`--space-s`) | 8px each side (`--space-l`) |
| Label-to-trailing gap | 8px (`--space-l`) | 12px (`--space-xl`) |
| Label text | Body 3: Zoho Puvi Regular 14/20 (`--font-body-3`) | Body 1: Zoho Puvi Regular 16/22 (`--font-body-1`) |
| Check mark | 24 × 24px tick | 24 × 24px tick |
| Badge | 20px tall, at least 20px wide, padding 1px vertical and 4px horizontal (`--space-s`), radius 22px (literal), Badge-text: Zoho Puvi Regular 12/normal (`--font-badge`), content centered | same (not used on Medium in Figma) |
| Radius | 0. 8px (`--radius-lg`) inside the search menu | 0 |
| Transition | background 120ms ease. None with reduced motion | same |

The visible gap between icon and label text is the 4px icon margin plus the label padding: 8px for Small, 12px for Medium.

**Variants and states**:

| State | Background | Text/icon | Border | Other |
|---|---|---|---|---|
| Default | transparent (shows `--color-bg-1` panel) | `--color-text-primary` | none | — |
| Hover | `--color-bg-hover` | `--color-text-primary` | none | 8px radius in the search menu |
| Keyboard focus / active (highlighted) | `--color-bg-hover` | `--color-text-primary` | none | 2px `--color-button-1000` outline, inset 2px (offset −2px) |
| Selected (checked) | as Default or Hover | `--color-text-primary`. Tick `--color-success-800` | none | 24px tick at the trailing edge |
| Negative (destructive, for example Delete) | as Default or Hover | Label and icon `--color-negative-800` | none | — |
| Disabled (code only) | transparent, with no hover fill | `--color-disabled` | none | Not-allowed cursor. Still focusable but can't be activated |
| Badge, Default | `--color-theme-yellow-1000` | Number `--color-text-primary` | none | Pill |
| Badge, Muted | `--color-bg-border` | Number `--color-text-primary` | none | Pill |

**Behavior**:
- Hover and keyboard focus show the same `--color-bg-hover` fill. Keyboard focus also shows the inset focus ring (2px `--color-button-1000`, offset 2px inward on rows).
- Selection check mark: in a single-choice menu or search picker, exactly one row shows the green tick. Picking another row moves the tick and closes the menu.
- Activating a row with Enter, Space or a click runs the action or picks the value, then the menu closes.
- Disabled rows are skipped by arrow-key navigation and ignore clicks.
- Long labels truncate with an ellipsis on one line. Rows never wrap.

**Usage**:
- Do use leading icons consistently. Either every row in a menu has one, or none do.
- Do use the Negative style only for destructive actions, and place them last.
- Do use the yellow badge for counts that need attention (Unread) and the Muted badge for passive counts (Muted, Archived).
- Don't show a badge and a check mark on the same row. Figma has no such variant.
- Don't use the check mark in action menus. It means "current selection" only.

**Accessibility**:
- Icons are decorative. The badge number is read as part of the row name ("Unread 2"). Add hidden text such as "2 unread" if that's ambiguous.
- The selected state is exposed as checked (menus) or selected (listbox), and that state drives the tick, so the visual and the semantics always match.
- The disabled text color (#C4C4C4 on white) is below 4.5:1, which WCAG allows for disabled controls.
- The Negative color alone doesn't signal danger. Use a clear label such as "Delete".

**Notes**:
- Figma sets Small rows at a fixed 163px and one Medium row at hug width (170px), while menus are 160px and 180px. In code, rows fill the menu width.
- Figma has no disabled row. It was added in code using `--color-disabled`.
- Figma has no focus state. The inset ring is code only.
- The Small set has 5 variants (Icon × Badge × Check-mark) and Medium has 3 (Icon × Check-mark), so Medium has no badge variant.
- The badge radius (22px) is hardcoded in Figma, not a token.
- In Figma the hover fill appears only in the Small-search selection frame. It isn't a separate item variant.

### Feedback & labels

Small labels and short-lived messages. Every color below is a theme token (Light/Dark) unless it is marked **unbound**. Unbound values are literal and were never bound to variables in Figma. All text styles use Zoho Puvi. The weight always comes from the named face (Regular, Medium, Semibold, Bold) and never from a numeric font-weight.

#### Badge
A small count or status dot attached to a nav item, icon or chip, e.g. unread messages or an unsent draft. Don't use it for text labels (use a Tag) or for anything the user can click (use a Chip).

**Anatomy**
- Pill container (single-digit counts render as a circle)
- Number (not present in the Dot variant)
- Optional 1px outside ring (Rail and Dot only). It sits outside the box, so the size doesn't change.

**Sizes**

| Variant | Size | Padding (V / H) | Radius | Text style |
|---|---|---|---|---|
| Default | height 20, min-width 20; grows with the count | 1 / 4 (`--space-s`) | 22px (hardcoded, fully rounded) | Badge-text: Zoho Puvi Regular 12/normal (`--font-badge`) |
| Muted | same as Default | 1 / 4 | 22px | Badge-text (`--font-badge`) |
| Transparent | same box as Default, no fill | 1 / 4 | none visible | Badge-text (`--font-badge`) |
| Rail badge | height 16, min-width 16 | 2 (`--space-xs`) / 4 (`--space-s`) | 17.6px (hardcoded) | Zoho Puvi Semibold 9.6/12 (no Figma text style) |
| No number (Dot) | 8 × 8 | 0 | circle | none |

Rail badge placement example: pinned to the top-right corner of a nav-rail icon, offset about 4px up and 8px right. Counts above 99 show as "99+".

**Variants and states**

| Variant | Background | Text/icon | Border | Other |
|---|---|---|---|---|
| Default | `--color-theme-yellow-1000` | `--color-text-primary` | none | Primary count |
| Muted | `--color-bg-border` | `--color-text-primary` | none | Neutral count, e.g. inside a chip |
| Transparent | transparent | `--color-text-t3` | none | Number only |
| Rail badge | `--color-draft-badge` | `--color-bg-1` | 1px outside ring `--color-bg-1` | Red count on nav-rail icons |
| No number (Dot) | `--color-draft-badge` | none | 1px outside ring `--color-bg-1` | Status dot, e.g. unsent draft |

The ring takes the page color, so the badge looks cut out of the icon it overlaps. Badges have no states.

**Behavior**: Static and not focusable. When the count changes, the number simply updates and the pill widens to fit it.

**Usage**
- Do: use Muted for counts inside chips and on dark surfaces.
- Do: keep Rail badge counts short (1–2 digits, or 99+) and always next to an icon.
- Don't: put words in a badge or make it clickable.
- Don't: use the Default (yellow) badge on dark-mode surfaces until its contrast is fixed.

**Accessibility**
- A bare number needs context. Add hidden text ("3 unread") and hide the visible digit from screen readers, or put the context in visible text nearby.
- The dot has no text, so give it an image role with a label ("Unsent draft"), or hide it if the state is announced elsewhere.
- Announce live count changes from a separate polite status region. The badge itself should not be a live region.

**Notes**
- Default badge: Text/Primary on Theme/yellow/1000 is about 10:1 in light but only about 1.4:1 in dark (#E3E3E3 on #E4C100). Kept as designed and flagged for the design team.
- Rail badge text is about 3.8:1 in light (white on #F63B00) and 4.8:1 in dark, at only 9.6px.
- Rail badge 9.6px Semibold has no Figma text style. The 22px and 17.6px radii are hardcoded, not tokens.

#### Tag
A static, non-interactive label for metadata such as a media type ("Video") or a schedule note ("Daily 11:00 - 11:30 pm, Never ends"). Don't use it for anything clickable, selectable or removable. Use a Chip for those.

**Anatomy**
- Rounded rectangle container
- Optional leading icon (neutral tag only)
- Label text

**Sizes**

| Variant | Min-height | Padding | Gap | Radius | Icon | Text style |
|---|---|---|---|---|---|---|
| Neutral | 24 | 2 top/bottom (`--space-xs`), 8 left/right (`--space-l`). With a leading icon the start padding drops to 6 (`--space-m`). | 6 (`--space-m`) | 4 (`--radius-sm`) | 20px | Sub text M: Zoho Puvi Medium 14/20 (`--font-sub-text`) |
| Highlight | 24 | 2 / 8 | 4 (`--space-s`) | 4 (`--radius-sm`) | none | Body 3 R: Zoho Puvi Regular 14/20 (`--font-body-3`) |

Single line, no wrapping. Max width is 100% of the container.

**Variants and states**

| Variant | Background | Text/icon | Border | Other |
|---|---|---|---|---|
| Neutral | `--color-bg-2` | text `--color-text-secondary`, icon `--color-chip-icon` | none | Figma name "Frame 28075" |
| Highlight | **unbound**: Light #FEF5D4, Dark falls back to `--color-theme-yellow-100` | `--color-text-secondary` | none | Yellow note. Figma name "Frame 28074" |

No hover, pressed or disabled states.

**Behavior**: None. Tags aren't focusable and don't react to the pointer.

**Usage**
- Do: keep the text short and self-explanatory. The icon is decorative.
- Do: use Highlight for recurring or schedule information attached to an item.
- Don't: attach click handlers or give a tag hover styling. Use a Chip or a link instead.

**Accessibility**
- The tag is read as plain text in context. The icon is hidden from screen readers, so the text must carry the meaning.

**Notes**
- The highlight fill #FEF5D4 is unbound and has no dark value in Figma. Dark mode uses Theme/yellow/100 (#38331C) as a fallback.
- Figma variants are unnamed frames ("Frame 28075" / "Frame 28074").

#### Chip
A pill-shaped, compact control for filters, selections and small menus, e.g. "Casual Dining", "Sort ▾", "Open now ×", or a music-track picker with artwork. Use it for toggles and quick choices in a row. Don't use it for static labels (Tag) or primary actions (Button).

**Single chip model.** Figma lists 26 variants, but they are one component. The **type comes from the content**:
- Leading slot (pick one or none): an 18px icon, a 20px checkmark, or 28px round media artwork. Artwork turns the chip into the 36px media chip.
- Label text is always present.
- Trailing slot (pick one or none): a 16px caret (menu), a 16px remove ×, or a Muted count badge.

The **look comes from the state**: Default, Hover, Activated (selected), Open (menu expanded, called "Playing" in Figma), Disabled, plus a playback overlay on media artwork. Padding follows the content: 12px on an edge that ends in text, 6px on an edge that ends in an icon, check, caret, × or badge, and 4px next to media artwork.

**Anatomy**
- Pill container with a 1px inside stroke. The stroke is drawn inside, so the height never changes.
- Leading slot (optional): icon / checkmark / media artwork
- Label
- Trailing slot (optional): caret / remove × / Muted badge

**Sizes**

| Configuration | Height | Padding start / end | Gap | Leading | Trailing |
|---|---|---|---|---|---|
| Text only | 32 | 12 / 12 (`--space-xl`) | 4 (`--space-s`) | none | none |
| Text + trailing (badge, caret or ×) | 32 | 12 / 6 (`--space-m`) | 4 | none | 20px Muted badge, 16px caret or 16px × |
| Icon + text | 32 | 6 / 12 | 4 | 18px icon | none |
| Icon + text + × (selected) | 32 | 6 / 6 | 4 | 18px icon | 16px × |
| Icon + text + caret | 32 | 6 / 6 | 4 | 18px icon | 16px caret |
| Checkmark + text | 32 | 6 / 12 | 4 | 20px tick | none |
| Media (artwork) | 36 | 4 / 12. Stays 12 even with the caret. | 4 | 28px circular artwork | 16px caret |

- Radius: fully rounded (`--radius-pill`, 28px) at all sizes.
- Text: Sub text M, Zoho Puvi Medium 14/20 (`--font-sub-text`), single line.
- The remove × is a 16×16 circular hit target with a 16px glyph.
- The media playback glyph is 18px, centered in the 28px artwork (5px inset). The equalizer bars are about 10.5 × 12.6.

**Variants and states**

| State | Background | Text/icon | Border (1px inside) | Other |
|---|---|---|---|---|
| Default | `--color-bg-2` | label `--color-text-t3`, leading icon `--color-text-secondary`, caret `--color-chip-icon` | none | Unselected tick `--color-text-t1` (outline tick) |
| Hover (unselected, not open, not disabled) | `--color-bg-hover` | as Default | none | Selected, open and disabled chips don't change on hover |
| Activated / selected | `--color-bg-1` | label and icon `--color-text-primary` | `--color-text-t2` | Tick becomes a filled tick-circle `--color-button-800`. A menu chip with a chosen value, or a removable chip, shows × (`--color-text-secondary`; `--color-text-primary` on hover) instead of the caret |
| Open (menu expanded; Figma "Playing") | `--color-bg-1` | label and icon `--color-text-primary` | `--color-button-800` | Caret rotates 180° to point up |
| Disabled | `--color-bg-1` | label `--color-text-t1`, caret `--color-disabled` | `--color-bg-border` | Not-allowed cursor. Media artwork at 50% opacity |
| Media chip, Default | `--color-bg-1` | label `--color-text-primary` | none | Artwork placeholder fill `--color-bg-2` |
| Media, Playing (not hovered) | as its chip state | as its chip state | as its chip state | Artwork hidden. Equalizer bars `--color-button-1000` on a clear background |
| Media, Playing + hover (Figma "Play-hover") | `--color-bg-hover` | as Default | none | `--color-button-100` circle over the artwork with a pause glyph `--color-text-primary` |
| Media, Paused + hover (Figma "Pause-Hover") | `--color-bg-hover` | as Default | none | `--color-button-100` circle with a play glyph `--color-text-primary` |
| Count badge | as its chip state | as its chip state | as its chip state | Muted badge (`--color-bg-border` fill, `--color-text-primary` number) |

**Behavior**
- Filter chip: a toggle. Clicking switches between Default and Activated.
- Menu chip (caret): clicking opens a menu. While it is open the chip shows the Open state, with a blue border and the caret flipped up. It returns to Default, or to Activated if a value was chosen, when the menu closes.
- Removable chip: selected look plus a trailing ×. The × is a separate focusable button. Clicking it removes the chip and moves focus to the neighboring chip. The chip body itself is not a button.
- Media chip: a menu chip with artwork. Playback shows on the artwork only: equalizer bars while playing, pause glyph on hover while playing, play glyph on hover while paused.
- Transitions: background, border and text 120ms ease. Caret rotation 150ms ease. Both are turned off under reduced motion.
- Focus ring: 2px `--color-button-1000` outline, offset 2px. The × uses the same ring with a 1px offset.

**Usage**
- Do: group filter chips in a horizontal row with a group label ("Filters").
- Do: use the checkmark type when it must be obvious that several chips can be selected.
- Do: put a Muted badge at the end to show how many sub-selections a chip holds.
- Don't: combine more than one leading and one trailing element.
- Don't: use the yellow Default badge inside a chip.
- Don't: rely on the media playback overlay as the only play/pause control.

**Accessibility**
- Filter chips are announced as toggle buttons (pressed / not pressed). Menu chips announce that they have a popup and whether it is expanded. The Open look is tied directly to the expanded state.
- The remove × needs its own name, e.g. "Remove Open now".
- The media playback overlay is visual only. Give playback a separate keyboard control, e.g. inside the menu.
- Default label contrast (Text/T3 on BG/2) is about 7.8:1 in light and 8:1 in dark. The disabled label is below 4.5:1, which WCAG allows for disabled controls.

**Notes**
- Figma calls the menu-open state "Playing", the same name as media playback.
- Figma radii are inconsistent (120 / 400 / 28px). All of them render fully rounded.
- Figma has no focus state. The focus ring was added in code.
- Disabled is only drawn for the media chip in Figma. It is applied to every chip type.
- The media chip keeps 12px end padding next to the caret, which breaks the 6px-next-to-icon rule.

#### Tooltip
A small dark label that appears next to a control on hover and on keyboard focus. Use it to name or explain an icon action ("Forward to a chat"). The list form shows a title plus rows, e.g. who reacted with an emoji. Don't put links or buttons in it, and don't use it as the only label of a control.

**Anatomy**
- Dark rounded surface
- Triangle arrow, centered horizontally and touching the surface edge, pointing at the trigger
- Content: one text line, or (List) a title line followed by muted rows

**Sizes**

| Part | Value |
|---|---|
| Surface padding | 6 on all sides (`--space-m`) |
| Radius | 4 (`--radius-sm`) |
| Width | fits the content, max 240. Long words wrap anywhere. |
| Text | Sub text M: Zoho Puvi Medium 14/20 (`--font-sub-text`), for both the title and the rows |
| Arrow | 12 × 6 triangle (Figma 11.92 × 5.59), centered |
| Offset | 4px between the trigger edge and the arrow tip |
| Shadow | none |

**Variants and states**

| Variant | Background | Text/icon | Border | Other |
|---|---|---|---|---|
| Single line (List=False) | **unbound** #222222 (same in Light and Dark) | **unbound** #E3E3E3 | none | Arrow uses the surface color |
| List (List=True) | #222222 | title #E3E3E3, rows **unbound** #B3B3B3 | none | Title first, then one row per line |
| Arrow up (ArrowUp=True, default) | same | same | none | Sits below the trigger, arrow pointing up |
| Arrow down (ArrowUp=False) | same | same | none | Sits above the trigger, arrow pointing down |

**Behavior**
- Shows on pointer hover and on keyboard focus of the trigger. Fades in and out over 120ms (no fade under reduced motion).
- The pointer can move onto the tooltip without it closing.
- Escape hides it until the pointer leaves or focus moves away.
- Horizontally centered on the trigger. Placed below by default (arrow up) or above (arrow down).
- The trigger keeps its own focus ring: 2px `--color-button-1000` outline, offset 2px. The tooltip itself never takes focus.

**Usage**
- Do: keep the text to a short phrase. Use List for small sets of names.
- Do: place it above the trigger when there's no room below.
- Don't: include interactive content or essential information that exists nowhere else.

**Accessibility**
- The trigger is described by the tooltip, so screen readers read it after the trigger's name. Icon-only buttons still need their own accessible label.
- Shows on focus, can be hovered, and can be dismissed with Escape (WCAG 1.4.13).
- Text contrast is about 12.4:1. List rows are about 7.6:1.

**Notes**
- Colors are unbound in Figma and there is no dark variant. The surface stays #222222 in both themes.
- In dark mode the surface is only about 1.1:1 against the BG/1 page (#2B2B2B), so its edge is hard to see. The text stays readable.
- The Figma arrow has fractional dimensions (11.92 × 5.59). It is rounded to 12 × 6.

#### Snackbar
A short dark message bar about a background task or a completed bulk action. It can carry one action such as Undo. Use it for transient confirmations. Don't use it for errors that need attention (use an error Alert) or for messages with more than one action.

**Anatomy**
- Dark rounded surface with background blur
- Leading element (one of): a 22px icon, or a 22px count bubble
- Message, which fills the remaining width
- Optional trailing action: small primary button

**Sizes**

| Part | Value |
|---|---|
| Surface | width 376 (fixed; shrinks to 100% on narrow screens), min-height 48, padding 12 (`--space-xl`), gap 10 (`--space-btn`), radius 8 (`--radius-lg`) |
| Shadow | **unbound**: 0 2px 4px black at 4% |
| Background blur | Figma 19, which is about 9.5px CSS blur |
| Icon | 22px |
| Count bubble | height 22, min-width 22, padding 0 4, fully rounded. Zoho Puvi Semibold 14/16 (no Figma text style) |
| Message | H3 SB: Zoho Puvi Semibold 14/20 (`--font-h3`) |
| Action | small primary button: 24 high, min-width 50, 14/16 label |

**Variants and states**

| Variant | Background | Text/icon | Border | Other |
|---|---|---|---|---|
| Icon + message (Button=False) | **unbound** #273742 (same in Light and Dark) | `--color-label` (white, constant) | none | e.g. "Posting to Stories…" |
| Count + message + action (Button=True) | #273742 | `--color-label` | none | Count bubble **unbound** white at 10%. Action button fill `--color-button-800`, label `--color-bg-1` (hover fill `--color-button-1000`) |

**Behavior**
- Appears at a fixed spot, typically at the bottom of the view. Stays until dismissed unless an auto-dismiss timeout is set. The default is no auto-dismiss.
- With an action, allow at least 5–10 seconds before auto-dismiss, and pause the timer while the snackbar is hovered or focused. Clicking the action (e.g. Undo) runs it and closes the snackbar.
- The count bubble and the icon are mutually exclusive.
- The action button uses the focus ring: 2px `--color-button-1000` outline, offset 2px.

**Usage**
- Do: write one short line and use the count for bulk actions ("5 messages marked as read").
- Do: offer one action at most, as a verb ("Undo").
- Don't: stack several snackbars or use them for critical errors.

**Accessibility**
- Announced politely as a status message. Use an interrupting alert only for errors.
- Keep the announcement region in the page and change its text, rather than inserting a new region.
- The count bubble is hidden from screen readers, so repeat the number in the message.
- Make sure the action can also be done some other way, because the snackbar may disappear.

**Notes**
- The surface #273742 is unbound. It matches Button/100 Dark but stays dark in light mode too.
- In dark mode the surface is close to the page color. The white text is still about 12.3:1.
- The count bubble text (Semibold 14/16) and the shadow have no Figma style or token.

#### Alert
An inline notification: a tinted strip with a 4px colored accent bar on the left, a tone icon, a message, and optionally a second line, a countdown and a ghost action. Use it for the result of a user action (copied, upload failed, limit reached) or as a flat informational banner inside a dialog. Don't use it for passive background progress (use a Snackbar).

**Anatomy**
- Tinted container with a 4px inside accent bar on the left edge (no bar in the banner layout)
- 24px tone icon: thumbs-up (Success), warning triangle (Error), exclamation circle (Limit hit / Modal)
- Body: message line and an optional subtext line
- Optional countdown after the message (e.g. "00:40")
- Optional inline link (banner layout, e.g. "Learn more")
- Optional trailing ghost action button (e.g. "Undo", "Try now")

**Sizes**

| Layout | Padding | Radius | Min-height | Gap | Accent | Shadow / blur |
|---|---|---|---|---|---|---|
| Standard (Success, Error, Limit hit) | 12 (`--space-xl`) | 4 (`--radius-sm`) | 48 | 10 (`--space-btn`) | 4px left inside stroke that follows the radius | **unbound** 0 2px 4px black at 4%. Background blur 19 (about 9.5px CSS) |
| With action (CTA, countdown variant) | 8 top/bottom (`--space-l`), 12 left/right | 4 | 48 (52 with a 36px button) | 10 | 4px left | same |
| Banner (Modal) | 10 top/bottom (`--space-btn`), 12 left/right | 0 | 48 | 10 | none | none, no blur |

- Icon: 24px.
- Message: Sub text M, Zoho Puvi Medium 14/20 (`--font-sub-text`).
- Subtext: Body 3 R, Zoho Puvi Regular 14/20 (`--font-body-3`).
- Countdown: Body 3 R (`--font-body-3`) with tabular (fixed-width) digits and 2px horizontal padding.
- Link: Zoho Puvi Bold 14/18 (no Figma text style), no underline until hover.
- Action: ghost medium button, 36 high, label in `--color-button-800`, hover fill `--color-bg-hover`.
- Width: fills its container, up to 100%.

**Variants and states**

| Variant | Background | Text/icon | Border | Other |
|---|---|---|---|---|
| Success (default) | `--color-button-100` | message `--color-text-primary`, icon `--color-button-800` | 4px left accent `--color-button-800` | Thumbs-up icon |
| Error | `--color-negative-100` | message `--color-text-primary`, icon `--color-negative-800` | 4px left accent `--color-negative-800` | Warning-triangle icon |
| Limit hit (warning) | `--color-alert-info-100` | message `--color-text-primary`, icon `--color-alert-info-color` | 4px left accent `--color-alert-info-color` | Exclamation-circle icon |
| Modal (warning banner) | `--color-alert-info-100` | message `--color-text-primary`, icon `--color-alert-info-color`, link `--color-button-800` | none | Radius 0, no shadow or blur. Full-width strip inside a dialog |
| CTA (subtext + action) | tone fill (Success in Figma) | title `--color-text-primary`, subtext `--color-text-t3` | tone accent | Ghost action button on the right |
| Countdown (Figma "Variant6") | `--color-negative-100` (Error) | message `--color-text-primary`, countdown `--color-text-secondary` | `--color-negative-800` accent | "…reconnect in 00:40" plus a "Try now" ghost action |

**Behavior**
- Standard alerts appear inline near the thing they relate to. Transient ones can be removed by the app after a short time.
- Countdown: the app updates the timer text every second. Digits have a fixed width so the text doesn't shift. The action (e.g. "Try now") lets the user retry before the timer runs out.
- Action: the ghost button runs its action (Undo, Try now). Only one action per alert.
- The banner is static content inside a dialog. Its link opens help.
- Focus ring on the action and the link: 2px `--color-button-1000` outline, offset 2px (the link also gets a 2px corner radius).

**Usage**
- Do: match the tone to the outcome: Success (blue), Error (red), Limit hit (yellow).
- Do: say what happened in the text. Keep the subtext to one short line.
- Do: use the banner layout only inside dialogs or panels.
- Don't: rely on color alone. Each tone has its own icon.
- Don't: add more than one action, or put a countdown on a non-error alert.

**Accessibility**
- Error alerts interrupt screen readers (alert role). Success and Limit hit are announced politely (status role). The banner has no live role.
- Don't announce every countdown tick. Keep the timer out of the live region, or describe the wait in words.
- Icons are decorative. The text carries the meaning.

**Notes**
- The Success icon (Button/800 on Button/100) is about 3.3:1 in light mode, just above the 3:1 minimum for graphics.
- The Limit hit icon (Alert-info/Color on Alert-info/100) is about 2.6:1 in light mode, below 3:1.
- The banner "Learn more" link (Button/800 on Alert-info/100) is about 3.5:1 in light mode, below 4.5:1 for 14px text. All three pass in dark mode.
- The Figma set is unnamed ("Component 6"), and one variant is just called "Variant6".
- The Success tone uses the blue Button scale, not the Success/green tokens.
- The link style (Bold 14/18) and the 4% shadow have no Figma style or token.

### Dialogs

Two dialog types: the **Modal** (a 450px surface for a focused multi-field task) and the **Confirmation dialog** (one yes/no question, 540px). Both sit centered on a dimmed backdrop above the app. Both follow the theme: every color below is a Light/Dark token.

Shared by all dialogs:
- **Backdrop (scrim)**: black at 40% opacity, `rgb(0 0 0 / 0.4)`, the same in Light and Dark. Figma has no scrim color, so this value is a local one.
- **Viewport limits**: the dialog is never wider than viewport width minus 32px, and never taller than viewport height minus 32px. It is centered on both axes.
- **Open motion**: 160ms ease-out. The dialog fades in from opacity 0 while it moves up 8px and scales from 0.98 to 1. The backdrop fades in over the same 160ms. There is no motion when reduced motion is requested.
- **Focus ring (code only, not in Figma)**: 2px solid `--color-button-1000` outline, 2px offset. It shows on every focusable control inside a dialog.

Shared buttons used here (full specs are in the Buttons section):
- **Medium secondary button**: 36px tall, 4px radius, 12px side padding, 90px minimum width, `--color-bg-2` fill, `--color-text-t3` label.
- **Medium primary button**: same geometry as medium secondary, `--color-button-800` fill, `--color-bg-1` label.
- **Medium negative button**: same geometry, `--color-negative-800` fill, `--color-bg-1` label.
- **Medium negative-secondary button**: same geometry, `--color-negative-100` fill, `--color-negative-800` label.
- **Large buttons**: 44px tall, 8px radius, 20px side padding, 100px minimum width.
- **Button labels**: BTN Medium, Zoho Puvi Medium 16/20 with 0.25px tracking.
- **Medium link button**: 24px tall, 2px side padding, 2px radius, no fill, `--color-button-800` label in BTN Medium.
- **40px transparent icon button**: 40px circle holding a 24px icon.
  - Default: no fill, `--color-text-secondary` icon.
  - Hover: `--color-bg-hover` fill, `--color-text-primary` icon.
  - Active: no fill, `--color-button-800` icon and a 1px `--color-button-800` inner ring.
  - Disabled: 50% opacity.

#### Modal
A 450px dialog built from a header, a scrolling body and a footer with a button row. Use it for focused tasks with several inputs, such as creating a group or editing settings. For a single yes/no question, use the Confirmation dialog instead.

**Anatomy** (top to bottom):
- **Surface**: a vertical stack. Header, body and footer are 16px apart.
- **Header**, one of two layouts:
  - **Without back**: the title sits left-aligned. An action cluster sits on the right.
  - **With back**: a back button on the left (40px transparent icon button with a back-arrow icon). The title fills the middle, centered and truncated. The action cluster sits on the right.
  - **Title**: H1 20 B, Zoho Puvi Bold 20/32 (`--font-h1`). Long titles wrap; they can break anywhere.
  - **Action cluster**: one or more 40px transparent icon buttons, 4px apart, such as sort, more (meatballs) and close.
- **Body**: free content, such as fields, lists and text. Children stack 16px apart. The body is the only part that scrolls. Default text is Body 3 R, Zoho Puvi Regular 14/20 (`--font-body-3`).
- **Footer**: holds one button row, which fills the footer width.
- **Button row**, one of five layouts:
  - **2 buttons**: medium secondary (Cancel) + medium negative or medium primary (the confirm action). Right-aligned, 24px apart.
  - **3 buttons**: medium secondary (Cancel) + medium negative-secondary (for example "Delete all") + medium negative (Delete). Right-aligned, 24px apart.
  - **Aux + buttons**: a left-aligned link area with one or more medium link buttons (for example "Learn more"). The link area has 2px padding and its links are 10px apart. It fills the free space; the medium Cancel and the confirm button sit on the right, 24px after the link area.
  - **Large**: large secondary (Cancel) + large primary (for example "Use here"). Centered, 24px apart.
  - **Large-fill**: large secondary + large primary, 10px apart. The two buttons split the full width equally (for example "Cancel" + "Sign Up with Arattai").

**Sizes**:

| Part | Value |
|---|---|
| Surface width | 450px, capped at viewport width minus 32px |
| Surface max height | viewport height minus 32px. Only the body scrolls. |
| Surface radius | 8px (`--radius-lg`) |
| Surface shadow | `--shadow-dropdown-menu`: 0 0 12px rgba(0,0,0,0.25) |
| Gap between header, body and footer | 16px (`--space-2xl`) |
| Header height | 60px: 10px padding + 40px icon button + 10px padding |
| Header padding, without back | 10px top, 8px right, 10px bottom, 20px left |
| Header padding, with back | 10px on top and bottom, 8px on left and right |
| Header gap between items | 8px |
| Action cluster gap | 4px |
| Header icon buttons | 40px circles holding 24px icons |
| Title | H1 20 B, Zoho Puvi Bold 20/32 (`--font-h1`) |
| Body padding | 0 top, 20px left and right, 40px bottom |
| Body gap between children | 16px |
| Body text | Body 3 R, Zoho Puvi Regular 14/20 (`--font-body-3`) |
| Footer padding | 16px top, 20px left and right, 24px bottom |
| Footer alignment | content is right-aligned; items are 16px apart |
| Button row minimum height | 36px |
| Button row gap, 2 / 3 / Aux / Large | 24px |
| Button row gap, Large-fill | 10px |
| Aux link area | 2px padding, links 10px apart |
| Backdrop | `rgb(0 0 0 / 0.4)` |

**Variants and states**:

| Variant/State | Background | Text/icon | Border | Other |
|---|---|---|---|---|
| Surface, header, footer | `--color-bg-1` | Title and body text in `--color-text-primary` | none | `--shadow-dropdown-menu` |
| Header, without back | `--color-bg-1` | Title left-aligned | none | Left padding 20px |
| Header, with back | `--color-bg-1` | Back arrow in `--color-text-primary`. Title centered. | none | Left padding 8px |
| Header action icon, default | transparent | `--color-text-secondary` | none | 40px circle |
| Header icon, hover (back arrow too) | `--color-bg-hover` | `--color-text-primary` | none | none |
| Header icon, active/pressed | transparent | `--color-button-800` | 1px `--color-button-800` inner ring | none |
| Header icon, disabled | transparent | `--color-text-secondary` | none | 50% opacity |
| Button row | none (inherits the surface) | Colors come from the buttons | none | No colors of its own |

**Behavior**:
- Opens as a true modal: the page behind it becomes inert and focus is trapped inside the dialog.
- Escape closes it. Clicking the backdrop (outside the surface box) closes it. The close icon button closes it.
- Initial focus goes to the first focusable control. On close, focus returns to the control that opened the dialog.
- Only the body scrolls. The header and footer stay fixed.
- The back button (with-back header) goes to the previous step. It does not close the dialog.
- The footer buttons close the dialog and report which action was picked (for example "back" or "next").

**Usage**:
- Do: use Modal for multi-field tasks, such as Create group or Settings.
- Do: keep one primary action on the right of the footer, with Cancel or Back to its left.
- Do: use the with-back header for step 2 and later in a multi-step flow.
- Don't: stack a dialog on top of another dialog.
- Don't: put more than three buttons in a button row.
- Don't: use the Large or Large-fill rows in a Modal. Those are for app-level notices (Confirmation dialog, outside the chat window).

**Accessibility**:
- The dialog is named by its title.
- Every header icon button needs an accessible name, such as "Close", "Back" or "More". The icons themselves are decorative.
- Focus ring: 2px `--color-button-1000`, 2px offset. It is not in Figma.
- Contrast of `--color-text-secondary` on `--color-bg-1` is 5.7:1 (Light) and 6.8:1 (Dark).
- No motion when reduced motion is requested.

**Notes**:
- The surface radius (8px) and body bottom padding (40px) are hardcoded in Figma, not bound to tokens.
- The shadow has the same values as the "Drop down menu" effect, but it is not linked to that effect in Figma.
- Figma has no scrim/backdrop color. The 40% black is a code choice.
- Surface radius, shadow and body padding come from the Create group frame, not from a standalone Modal component.
- In the header, the back arrow is `--color-text-primary`, while the other action icons are `--color-text-secondary`.

#### Confirmation dialog
A compact dialog that asks one question before an action, especially one that can't be undone. It comes in two placements:
- **Inside chat window**: compact and left-aligned, with a 4px radius and medium buttons.
- **Outside chat window**: app-level messages such as "You have been logged out". Centered text, 16px radius, a soft shadow and large buttons.

**Anatomy** (top to bottom):
- **Text stack** (16px gap):
  - **Heading**: one of two forms.
    - Title only.
    - Destructive (with icon): a 38px filled warning-triangle icon, then the title, 20px apart and vertically centered.
  - **Description** (optional, "subtext").
  - **Acknowledgement row** (destructive variant only): a checkbox, then a label, 8px apart. The whole row is clickable.
    - **Checkbox**: the shared 24px checkbox (18px box, 2px radius), drawn here with a thinner 1px `--color-text-t1` ring.
- **Button row**, one of these (see Modal > Button row):
  - Inside, no subtext: 2 buttons, medium secondary "Cancel" + medium negative "Delete".
  - Inside, with subtext: 2 buttons, medium secondary "Cancel" + medium primary (for example "Sign in").
  - Inside, destructive with icon: Aux + buttons. A medium link "Learn more" on the left, then medium secondary "Cancel" + medium negative "Delete" on the right.
  - Outside, no subtext: Large, centered. Large secondary "Cancel" + large primary (for example "Use here").
  - Outside, with subtext: one centered large primary button (for example "Log in").

**Sizes**:

| Part | Inside chat window | Outside chat window |
|---|---|---|
| Width | 540px, capped at viewport width minus 32px | 540px, capped at viewport width minus 32px |
| Radius | 4px (`--radius-sm`) | 16px (local value) |
| Shadow | `--shadow-dropdown-menu`: 0 0 12px rgba(0,0,0,0.25) | 0 4px 12px rgba(0,0,0,0.10) (local value, same in Light and Dark) |
| Padding | 36px top, 36px sides, 24px bottom | 36px top, 36px sides, 28px bottom |
| Gap, text stack to buttons | 44px without a description; 36px with one | 28px, with or without a description |
| Text alignment | Left | Centered |
| Title | H1 20 B, Zoho Puvi Bold 20/32 (`--font-h1`) | H6 20M, Zoho Puvi Medium 20/32 (`--font-h6`), +0.2px tracking (1%, `--ls-h6`) |
| Description | Body 2 M, Zoho Puvi Medium 16/24 (`--font-body-2`) | Body 1 R, Zoho Puvi Regular 16/22 (`--font-body-1`) |
| Gap, title to description | 16px | 16px |
| Warning icon | 38px, with a 20px gap to the title | not used |
| Acknowledgement row | 8px gap. Label in Sub text M, Zoho Puvi Medium 14/20 (`--font-sub-text`) | not used |
| Checkbox | 24px frame, 18px box inset 3px, 2px radius, 1px ring | not used |
| Buttons | Medium, 36px | Large, 44px |
| Backdrop | `rgb(0 0 0 / 0.4)` | `rgb(0 0 0 / 0.4)` |

With 36px side padding, the outside dialog's content column is 468px wide. That is the width of the Notice message block (see App patterns).

**Variants and states**:

| Variant/State | Background | Text/icon | Border | Other |
|---|---|---|---|---|
| Inside, no subtext | `--color-bg-1` | Title in `--color-text-primary` | none | 44px gap to buttons. Row: Cancel + negative Delete |
| Inside, with subtext | `--color-bg-1` | Title and description in `--color-text-primary` | none | 36px gap. Row: Cancel + primary |
| Inside, destructive with icon + acknowledgement | `--color-bg-1` | Warning icon and title in `--color-negative-800`. Description in `--color-text-primary`. Acknowledgement label in `--color-text-secondary`. | Checkbox ring 1px `--color-text-t1` | 36px gap. Row: Aux ("Learn more") + Cancel + negative Delete |
| Outside, no subtext | `--color-bg-1` | Title in `--color-text-primary`, centered | none | Local soft shadow, 16px radius. Row: Large, Cancel + primary |
| Outside, with subtext | `--color-bg-1` | Title in `--color-text-primary`. Description in `--color-text-secondary`. Both centered. | none | One large primary button, centered |
| Checkbox, unchecked | transparent | none | 1px `--color-text-t1` | none |
| Checkbox, checked | `--color-button-800` box | `--color-bg-1` check mark | `--color-button-800` | Code only. Figma doesn't draw the checked state in this set. |
| Confirm button, not yet acknowledged | the confirm button's own fill (negative) | `--color-bg-1` | none | Disabled: 50% opacity |

**Behavior**:
- Opens as a true modal (inert page, focus trap). Escape closes it; so do Cancel and a backdrop click. All three count as "cancel". Focus returns to the control that opened it.
- **Destructive dialogs**: initial focus goes to Cancel, so pressing Enter right away never deletes.
- **Acknowledgement**: when the checkbox row is shown, the confirm button (Delete) stays disabled at 50% opacity until the box is ticked. Unticking disables it again. Each time the dialog opens, the checkbox starts unticked.
- The description keeps its line breaks. Text wraps; nothing truncates.

**Usage**:
- Do: write the title as the question or the outcome ("Delete channel", "Delete this message?"), not "Warning".
- Do: label buttons with the action ("Delete", "Use here", "Sign in", "Log in").
- Do: use negative buttons, the warning icon and the acknowledgement checkbox for actions that can't be undone.
- Do: use Outside chat window for app- or session-level messages, such as logged out or active in another window.
- Don't: use a confirmation for actions that are easy to undo. Show an undo snackbar instead.
- Don't: put more than three buttons in the row.
- Don't: stack dialogs.

**Accessibility**:
- Destructive confirmations are announced as alert dialogs. They are named by the title and described by the description.
- Initial focus goes to Cancel.
- The warning icon is decorative. The title and its color carry the meaning.
- The acknowledgement is a real checkbox with its label; clicking the label toggles it.
- Contrast: the danger title (`--color-negative-800` on white) is 3.5:1. It passes only as large text (20px bold).
- Contrast: the checkbox ring (`--color-text-t1`) is 3.5:1 in Light and 3.8:1 in Dark. Both are above the 3:1 minimum for controls.
- Focus ring: 2px `--color-button-1000`, 2px offset, on the buttons and the checkbox.

**Notes**:
- Radius differs across dialogs: Inside 4px, Modal 8px, Outside 16px. The 4px and 16px radii are hardcoded in Figma, not bound to tokens.
- These values are hardcoded in Figma, not bound to tokens: the 36px padding, the 44/36/28px gaps and the outside shadow (0 4 12 at 10%).
- The Inside title uses the H1 20 B values (20/32 Bold), but it isn't linked to the text style. The same goes for the Outside title and H6 20M.
- Figma shows Delete enabled even when the acknowledgement is unticked. Gating it is a code decision.
- The acknowledgement checkbox (1px `--color-text-t1` ring) differs from the shared checkbox (1.5px `--color-text-t2` ring).
- In Dark mode, Figma draws the Outside large primary ("Use here", "Log in") dark. Code keeps it blue (`--color-button-800`).
- In Dark mode, the labels of filled buttons use `--color-bg-1`, so they turn dark on the lighter blue or red. Confirm with design that this is intended.
- The placeholder copy has a typo: "Are sure you want to delete this channel…".

### App patterns

Product-specific pieces of the Arattai chat app. They are built from the shared tokens, buttons and icon buttons.

#### Notice message
The centered title-plus-text block of a full-window notice. It is the content of an Outside-chat-window Confirmation dialog, for messages such as "You have been logged out" or "Arattai is active in another window…". There are two variants: with sub text, and title only.

**Anatomy** (top to bottom):
- **Title**: one or more centered lines.
- **Sub text** (optional): centered paragraph(s). Blank lines between sentences are kept.

**Sizes**:

| Part | Value |
|---|---|
| Width | fills its container, up to 468px |
| Gap, title to sub text | 16px (`--space-2xl`) |
| Title | H6 20M, Zoho Puvi Medium 20/32 (`--font-h6`), +0.2px tracking (`--ls-h6`) |
| Sub text | Body 1 R, Zoho Puvi Regular 16/22 (`--font-body-1`) |
| Alignment | centered |

**Variants and states**:

| Variant/State | Background | Text/icon | Border | Other |
|---|---|---|---|---|
| With sub | none (inherits the dialog's `--color-bg-1`) | Title in `--color-text-primary`. Sub text in `--color-text-secondary`. | none | 16px gap |
| No sub (title only) | none | Title in `--color-text-primary` | none | Same title style; only the height changes |

**Behavior**:
- Static text. Nothing truncates; long titles wrap and stay centered.
- Line breaks in the sub text are kept. This is how the blank line between two sentences is made.

**Usage**:
- Do: use it inside an Outside-chat-window dialog, above centered large buttons.
- Do: use the title-only variant when the title already says everything, for example "Arattai is active in another window. Using it here will close the session in the other window."
- Don't: use it inside the chat window. Use the Inside confirmation's left-aligned title and description there.

**Accessibility**:
- The title is a heading. In a dialog, it names the dialog and the sub text describes it.
- Contrast passes AA in both themes: `--color-text-secondary` on white is 5.7:1, and on `#2B2B2B` it is 7:1.

**Notes**:
- The Figma component is unnamed ("Component 7"). "Notice message" is a descriptive name.
- The 468px width is hardcoded in Figma, not bound to a token.
- The title has exactly the H6 20M values, but it isn't linked to that text style in Figma.

#### Create group dialog
The first step of creating a group. The user picks a group photo, names the group, adds a description and opens group settings. It is a fixed-height Modal: a header without back, then a body, then a footer with two buttons.

**Anatomy** (top to bottom):
- **Header**: the Modal header without back.
  - Title "Create group": H1 20 B.
  - Close: 40px transparent icon button.
- **Body** (scrolls, 16px gap):
  - **Photo picker**: stacked and centered.
    - A 128px circular photo button. It shows `--color-bg-2` when empty; a chosen image covers the circle.
    - 8px below, a hint row: a 20px info icon, then "Set Group Icon (optional)", 4px apart.
  - **Group name field**: an outlined text field, 44px tall.
    - The label "Group name" sits on the top border, followed by a red asterisk.
    - Trailing: an emoji button (40px transparent icon button with a smiley icon).
  - **Description field**: an outlined text area, 112px tall. The label "Description" sits on the top border. Text starts top-left.
  - **Group settings row**: a full-width button.
    - Left: a 24px settings/filter icon, then "Group settings", 12px apart.
    - Right: a 20px right chevron.
- **Footer**: pinned to the bottom. It holds a medium secondary "Back" and a medium primary "Next", right-aligned.

**Sizes**:

| Part | Value |
|---|---|
| Dialog | 450 × 748px, fixed. Capped at the viewport minus 32px in each direction. |
| Dialog radius | 8px (`--radius-lg`) |
| Dialog shadow | `--shadow-dropdown-menu`: 0 0 12px rgba(0,0,0,0.25) |
| Backdrop | `rgb(0 0 0 / 0.4)` |
| Header | 60px tall. Padding 10px top, 8px right, 10px bottom, 20px left. 40px close button. |
| Body | 16px below the header. Padding 0 top, 20px sides, 40px bottom. 16px gap. Scrolls. |
| Photo picker | 156px tall in total: 128px circle + 8px gap + hint row |
| Hint text | Last message style, Zoho Puvi Regular 14/16 (`--font-last-message`). 20px icon, 4px gap. |
| Field slot | 8px top padding, which leaves room for the floating label |
| Field box | 44px tall, 1px border, 8px radius. Padding 12px left, 2px right. 4px gap to the trailing button. |
| Field inner text area | 6px horizontal padding |
| Field label | Body 3 R, Zoho Puvi Regular 14/20 (`--font-body-3`). Sits on the top border, 11px from the left edge, with 6px side padding. The dialog fill behind it masks the border. |
| Field value | Body 2 M, Zoho Puvi Medium 16/24 (`--font-body-2`). Single line, in a 20px-tall clip. |
| Text area box | 112px tall. Padding 14px top, 12px sides, 8px bottom. Text top-aligned. |
| Settings row | 48px tall, 8px radius. Padding 0 top and bottom, 12px right, 20px left. |
| Settings text | Zoho Puvi Medium 16/20. Figma has no text style for it. |
| Settings icons | 24px leading icon with a 12px gap. 20px chevron. |
| Footer | Padding 16px top, 20px sides, 24px bottom. Right-aligned, 24px between the buttons. |
| Footer buttons | Medium: 36px tall, 4px radius |

**Variants and states**:

| Variant/State | Background | Text/icon | Border | Other |
|---|---|---|---|---|
| Dialog, header, footer | `--color-bg-1` | Title in `--color-text-primary` | none | Close and emoji icons in `--color-text-secondary` |
| Photo, empty | `--color-bg-2` | none | none | 128px circle |
| Photo hint | none | Info icon and text in `--color-text-t1` | none | none |
| Field, default (empty) | `--color-bg-1` | Label in `--color-text-secondary`. Asterisk in `--color-draft-badge`. | 1px `--color-bg-border` | none |
| Field, focused | `--color-bg-1` | Value in `--color-text-primary` | 1px `--color-button-800` | Plus a 2px `--color-button-1000` focus ring, 2px offset (code only) |
| Field, filled ("Composed") | `--color-bg-1` | Value in `--color-text-primary` | 1px `--color-button-800` | none |
| Settings row, default | `--color-bg-2` | Label in `--color-text-primary`. Leading icon in `--color-chip-icon`. Chevron in `--color-text-secondary`. | none | none |
| Settings row, hover (code only) | `--color-bg-hover` | unchanged | none | 120ms transition |
| Icon buttons (close, emoji) | Same as the 40px transparent icon button (see Dialogs) | | | |
| Back button | `--color-bg-2` | `--color-text-t3` | none | Medium secondary |
| Next button | `--color-button-800` | `--color-bg-1` | none | Medium primary |

**Behavior**:
- Opens as a true modal. Escape, the close button or a backdrop click closes it. Focus is trapped inside, and returns to the opener on close.
- The footer is pinned to the bottom of the fixed 748px height. The body scrolls when its content is taller than the space left.
- **Field borders**: `--color-bg-border` while the field is empty and unfocused. `--color-button-800` while focused or filled. The border color changes over 120ms.
- **Group name**: single line. It is required, which the asterisk marks. Overflowing text ends in an ellipsis.
- **Description**: multi-line. The text area doesn't resize; long text scrolls inside the 112px box.
- The labels always sit on the top border. They never move into the field as placeholders.
- Clicking the photo opens a photo picker. Group settings opens the settings step. Back goes back or closes the dialog. Next submits.

**Usage**:
- Do: keep the photo optional, and say so in the hint.
- Do: mark required fields with the `--color-draft-badge` asterisk.
- Don't: add more fields here. Put extra options behind the Group settings row.
- Don't: let the dialog grow taller than 748px. The body scrolls instead.

**Accessibility**:
- The dialog is named by its title.
- Each field's floating label is its accessible name.
- "Group name" is announced as required. The asterisk is decorative.
- The photo button is named "Change group icon" and described by the hint.
- The close and emoji icon buttons have names ("Close", "Insert emoji").
- Group settings is a button named by its visible text.
- The focused and filled borders are both `--color-button-800`, so focus is also shown by a 2px `--color-button-1000` ring on the field box.
- Transitions are off when reduced motion is requested.

**Notes**:
- The Figma frame is unnamed ("Frame 1171279598"). It is a single component with no variants.
- The 450px width and the fixed 748px height are hardcoded in Figma, not bound to tokens.
- The photo radius is 193px in Figma. It renders as a circle.
- The group settings text (Medium 16/20) has no text style in Figma. The 14px top padding of the text area is hardcoded.
- The settings row hover is not in Figma.
- The field "Focus" and "Composed" states are the same color (`--color-button-800`), so focus alone can't be seen from the border.

#### LHS banner
A notice card pinned at the top of the left-hand chat list. It has an icon, a title, supporting text and one link action. There are two variants:
- **Close=True**: dismissible, for example "Message notifications are off".
- **Close=False**: for notices the user has to act on, for example "Update available".

**Anatomy** (left to right, inside the card):
- **Leading icon**: 24px, top-aligned.
  - A bell with a slash for notifications.
  - A refresh / go-back arrow for updates.
- **Content column** (top to bottom):
  - **Title**: for example "Message notifications are off".
  - **Sub text**: for example "Turn on push notifications to receive alerts for new messages."
  - **Action row**: one small link button, for example "Turn on" or "Refresh".
    - Small link button: 20px tall, BTN Small (Zoho Puvi Medium 14/16, +0.1px tracking), `--color-button-800`.
    - On hover it turns `--color-button-1000`, gets an underline and grows to BTN Medium, 24px tall.
- **Close** (Close=True only): 32px transparent icon button with a 20px close icon. It sits in a 16 × 16 slot at the top-right; the button overflows the slot by 8px on each side, so the layout keeps the 16px slot.

**Sizes**:

| Part | Value |
|---|---|
| Outer wrapper | Full list width. 16px left and right padding, 8px bottom padding (a 368px card in a 400px list). |
| Card | 12px padding (`--space-xl`), 8px radius. Items top-aligned. |
| Gap, icon / content / close | 6px (`--space-m`) |
| Leading icon | 24px |
| Content column gap | 4px (`--space-s`) |
| Title | Body 2 M, Zoho Puvi Medium 16/24 (`--font-body-2`) |
| Sub text | Body 3 R, Zoho Puvi Regular 14/20 (`--font-body-3`) |
| Action row gap | 8px |
| Close | 32px circle holding a 20px icon, in a 16px slot (-8px overlap) |

**Variants and states**:

| Variant/State | Background | Text/icon | Border | Other |
|---|---|---|---|---|
| Card (both variants) | `--color-bg-hover` | Icon and title in `--color-text-primary`. Sub text in local Light `#747474`, Dark `#FFFFFF`. | none | 8px radius |
| Close=True | `--color-bg-hover` | Bell-slash icon | none | Close button shown |
| Close=False | `--color-bg-hover` | Update/refresh icon | none | No close button |
| Link action, default | transparent | `--color-button-800` | none | BTN Small, 20px tall |
| Link action, hover | transparent | `--color-button-1000`, underlined | none | Grows to BTN Medium, 24px tall |
| Link action, pressed | transparent | `--color-button-1000` | 1px `--color-button-1000` outside ring | 50% opacity |
| Close, default | transparent | `--color-text-secondary` | none | none |
| Close, hover | `--color-bg-hover` | `--color-text-primary` | none | none |
| Close, active | transparent | `--color-button-800` | 1px `--color-button-800` inner ring | none |
| Close, disabled | transparent | `--color-text-secondary` | none | 50% opacity |

**Behavior**:
- Always visible at the top of the chat list until it is acted on or dismissed.
- Close removes the banner. Focus then moves to the next element in the list.
- Close=False banners can't be dismissed. They go away once the action is done, for example after a refresh.
- The title and sub text wrap. Nothing truncates.

**Usage**:
- Do: use Close=True for optional nudges, such as notifications being off.
- Do: use Close=False for required actions, such as an app update.
- Do: give the action a label that makes sense on its own, such as "Turn on" or "Refresh".
- Don't: show more than one link action.
- Don't: stack several banners.

**Accessibility**:
- The banner is a region named by its title.
- The action is a real button.
- The close button is named "Dismiss". The icons are decorative.
- Focus ring: 2px `--color-button-1000`, 2px offset.
- Contrast: the Light sub text (`#747474` on `#F1F4F7`) is about 4.3:1, just below the 4.5:1 AA minimum for 14px text. The Dark sub text (`#FFFFFF` on `#3D3D3D`) is high.

**Notes**:
- The sub text is bound to "Font/Tertiary", a remote library variable that is not in the token set. That's why it uses the local values `#747474` / `#FFFFFF`.
- The card radius (8px) is hardcoded in Figma, not bound to a token.
- The close button's hover fill (`--color-bg-hover`) is the same as the card fill, so on hover only the icon color visibly changes.
- The Light sub-text contrast (about 4.3:1) fails AA for 14px text.

#### Chat action bar
A full-width strip under the chat window header, with a 1px bottom border. It has two variants:
- **Pinned message**: shows the pinned message and jumps to it when clicked.
- **Join requests**: shows pending group join requests, with a View button and a dismiss icon.

**Anatomy** (left to right):
- **Pinned message**:
  - A 24px pin icon.
  - **Message row**: a single button that takes the rest of the width. It holds:
    - The sender name, for example "Abishek:". It never wraps.
    - An optional 16px media icon, for example a photo/gallery icon.
    - The message text, on one line with an ellipsis.
- **Join requests**:
  - **Main group**, which fills the width:
    - **Summary**: three overlapping 32px round avatars, then a label, for example "3 new join requests".
    - **View button**: a small secondary button with overrides (see the table).
  - **Close**: on the far right, a plain 24px close icon that acts as a button.

**Sizes**:

| Part | Pinned message | Join requests |
|---|---|---|
| Height | 44px | 48px |
| Padding | 6px top and bottom, 12px sides | 8px top and bottom, 12px sides |
| Gap | 12px, pin to message | 8px, summary to View. Summary to close: space-between. |
| Bottom border | 1px, inside the height (doesn't add to it) | 1px, inside the height |
| Leading | 24px pin icon | Three 32px avatars, each overlapping the previous by 5.33px |
| Inner gap | 4px, sender / media icon / text | 8px, avatars to label. 12px right padding after the label. |
| Text | Sub text M, Zoho Puvi Medium 14/20 (`--font-sub-text`) | Label: H3 SB, Zoho Puvi Semibold 14/20 (`--font-h3`) |
| Media icon | 16px | none |
| View button | none | 28px tall, 4px radius, 12px side padding, 50px minimum width. Label Zoho Puvi Medium 14/20, 0 tracking. |
| Close | none | 24px box holding a 24px icon, 4px radius |
| Message row radius (focus shape) | 4px | none |

**Variants and states**:

| Variant/State | Background | Text/icon | Border | Other |
|---|---|---|---|---|
| Bar (both variants) | `--color-bg-1` | `--color-text-primary` | 1px bottom `--color-bg-border` | none |
| Pin icon | none | `--color-text-t1` | none | none |
| Sender, media icon, message | none | `--color-text-primary` | none | Message ends in an ellipsis |
| Avatars | Image | none | 1px ring in `--color-bg-1` on the 2nd and 3rd avatars | Overlap -5.33px |
| Join label | none | `--color-text-primary` | none | Ellipsis when it overflows |
| View, default | `--color-button-100` | `--color-text-primary` | none | 28px tall |
| View, hover | `--color-button-600` | `--color-text-primary` | none | none |
| View, pressed | `--color-button-100` | `--color-text-primary` | 1px `--color-button-800` inner ring | none |
| View, disabled | `--color-button-100` | `--color-disabled` | none | none |
| Close, default | none | `--color-text-secondary` | none | none |
| Close, hover (code only) | none | `--color-text-primary` | none | 120ms color transition |

**Behavior**:
- **Pinned message**: clicking anywhere on the message row scrolls to the pinned message. Long messages truncate to one line with an ellipsis, and the sender name is never truncated.
- **Join requests**: View opens the join-request list. Close dismisses the bar. The label truncates with an ellipsis before the View button gets squeezed.
- The bar has a fixed height: 44px (pinned) or 48px (join requests).

**Usage**:
- Do: put it directly under the chat window header, full width.
- Do: show a media icon before the text when the pinned message is a photo or other media.
- Don't: show both variants at once. Don't add more than one action button.
- Don't: show more than three avatars. The label carries the count.

**Accessibility**:
- Each strip is a named region ("Pinned message", "Join requests").
- The pinned row is one button. Its media icon is announced as "Photo", so the row reads "Abishek: Photo This is the spot…".
- Avatars are decorative; the label states the count.
- The close button is named "Dismiss". At 24px it is below the 44px touch-target guideline, so add padding on touch layouts.
- Focus ring: 2px `--color-button-1000`, 2px offset, on all buttons.

**Notes**:
- The Figma variant for join requests is named "Video", a leftover name. It has nothing to do with video.
- The bar fill (`#FFFFFF`) and stroke (`#E6E6E6`) are hardcoded in Figma. They match `--color-bg-1` and `--color-bg-border`, which are used for Dark mode.
- The join label fill is a hardcoded `#222222` in Figma, which matches `--color-text-primary`.
- The avatar rings in Figma are white, 1.33px on the 2nd avatar and 2px on the 3rd. They are unified here to a 1px ring in `--color-bg-1`.
- View is a small secondary button with overrides: `--color-button-100` fill, `--color-text-primary` label, H3 SB text, 28px height. Its label uses the Medium face, following the project-wide rule for button labels, not Semibold.
- Close is a plain icon in Figma, hardcoded `#666666` (= `--color-text-secondary`). It is made a button in code, and its hover state is code only.

## Appendix: tokens.css

The full token set as CSS custom properties. Colors use `light-dark(<Light>, <Dark>)` and switch with `color-scheme`; set `data-theme="light"` or `"dark"` on any element to force a theme.

```css
/**
 * Design tokens extracted from Figma
 * Source: Style library — Components (fPrKkOBCh1zkIKQqgRSQrF)
 * Token names mirror the Figma variable names 1:1 so this file can be regenerated
 * by re-running `get_variable_defs` against the same file.
 *
 * Theming
 * -------
 * Colors come from the Figma "Colors" collection, which has Light and Dark
 * modes. Each token is written as light-dark(<Light>, <Dark>) and resolves
 * against the `color-scheme` of the element that uses it:
 *
 *   - default            follows the OS setting (prefers-color-scheme)
 *   - data-theme="light" forces light on that element and its subtree
 *   - data-theme="dark"  forces dark on that element and its subtree
 *
 * data-theme works on any element, not just <html>, so light and dark
 * previews can sit side by side on one page.
 */
:root {
  color-scheme: light dark;
}

[data-theme="light"] {
  color-scheme: light;
}

[data-theme="dark"] {
  color-scheme: dark;
}

:root {
  /* ---- Color / Other ---- */
  --color-fav-border: #daa400; /* ~FavBorder */
  --color-chip-icon: light-dark(#627282, #666666); /* Chip-icon */
  --color-draft-badge: light-dark(#f63b00, #f06c66); /* Draft-badge */
  --color-disabled: light-dark(#c4c4c4, #464646); /* Disabled */
  --color-label: #ffffff; /* Label */
  --color-surface-e5-a50: #e5e5e580; /* Surface #E5-a50 */

  /* ---- Color / BG ---- */
  --color-bg-1: light-dark(#ffffff, #2b2b2b); /* BG/1 */
  --color-bg-2: light-dark(#f6f6f6, #1d1d1d); /* BG/2 */
  --color-bg-3: light-dark(#fafafa, #202020); /* BG/3 */
  --color-bg-dev-portal: light-dark(#f9fafb, #181a1b); /* BG/Dev portal */
  --color-bg-hover: light-dark(#f1f4f7, #3d3d3d); /* BG/Hover */
  --color-bg-border: light-dark(#e6e6e6, #3d3d3d); /* BG/Border */

  /* ---- Color / Text ---- */
  --color-text-primary: light-dark(#222222, #e3e3e3); /* Text/Primary */
  --color-text-secondary: light-dark(#666666, #b3b3b3); /* Text/Secondary */
  --color-text-t1: light-dark(#888888, #848484); /* Text/T1 */
  --color-text-t2: light-dark(#ababab, #727272); /* Text/T2 */
  --color-text-t3: light-dark(#4d4d4d, #b3b3b3); /* Text/T3 */

  /* ---- Color / Button ---- */
  --color-button-1000: light-dark(#0076ce, #479edf); /* Button/1000 */
  --color-button-800: light-dark(#0087ed, #4dadf5); /* Button/800 */
  --color-button-100: light-dark(#e5f3fd, #273742); /* Button/100 */
  --color-button-600: light-dark(#66b7f4, #3b75a0); /* Button/600 */

  /* ---- Color / Success ---- */
  --color-success-1000: light-dark(#27bb6b, #43d988); /* Success/1000 */
  --color-success-800: light-dark(#009c48, #74be96); /* Success/800 */
  --color-success-2000: light-dark(#2c9460, #74be96); /* Success/2000 */
  --color-success-100: light-dark(#e9f8f0, #274535); /* Success/100 */

  /* ---- Color / Alert-info ---- */
  --color-alert-info-1000: light-dark(#f3be00, #dab121); /* Alert-info/1000 */
  --color-alert-info-color: light-dark(#c49400, #cbb368); /* Alert-info/Color */
  --color-alert-info-100: light-dark(#fef9e5, #453d20); /* Alert-info/100 */

  /* ---- Color / Negative ---- */
  --color-negative-800: light-dark(#eb5757, #ff7d7d); /* Negative/800 */
  --color-negative-1000: light-dark(#dd5151, #ed6a6a); /* Negative/1000 */
  --color-negative-100: light-dark(#fdeeee, #483131); /* Negative/100 */
  --color-negative-200: light-dark(#ffe5e5, #603737); /* Negative/200 */

  /* ---- Color / Surface ---- */
  --color-surface-s1: light-dark(#ffffff, #202020); /* Surface/S1 */
  --color-surface-s2: light-dark(#f6f6f6, #1d1d1d); /* Surface/S2 */

  /* ---- Color / Theme/yellow ---- */
  --color-theme-yellow-1000: light-dark(#f3cd00, #e4c100); /* Theme/yellow/1000 */
  --color-theme-yellow-400: light-dark(#fdefb8, #564b0d); /* Theme/yellow/400 */
  --color-theme-yellow-200: light-dark(#fdf5cc, #3b340e); /* Theme/yellow/200 */
  --color-theme-yellow-100: light-dark(#fef9e0, #38331c); /* Theme/yellow/100 */
  --color-theme-yellow-reply-tag: light-dark(#f4e5a9, #4f450d); /* Theme/yellow/reply-tag */

  /* ---- Color / Theme/orange ---- */
  --color-theme-orange-1000: light-dark(#ff6600, #db5800); /* Theme/orange/1000 */
  --color-theme-orange-400: light-dark(#ffd2ad, #53290d); /* Theme/orange/400 */
  --color-theme-orange-200: light-dark(#ffe9d6, #391f0e); /* Theme/orange/200 */
  --color-theme-orange-100: light-dark(#fff2e6, #36271c); /* Theme/orange/100 */
  --color-theme-orange-reply-tag: light-dark(#f4c8a5, #4a240b); /* Theme/orange/reply-tag */

  /* ---- Color / Theme/green ---- */
  --color-theme-green-1000: light-dark(#2c9460, #008f48); /* Theme/green/1000 */
  --color-theme-green-400: light-dark(#a0e1c0, #0d3b24); /* Theme/green/400 */
  --color-theme-green-200: light-dark(#d5eadf, #0e2a1c); /* Theme/green/200 */
  --color-theme-green-100: light-dark(#e6f2ec, #1c2d25); /* Theme/green/100 */
  --color-theme-green-reply-tag: light-dark(#98d7b7, #0b3520); /* Theme/green/Reply-tag */

  /* ---- Color / Theme/blue ---- */
  --color-theme-blue-1000: light-dark(#008fcc, #006b99); /* Theme/blue/1000 */
  --color-theme-blue-400: light-dark(#b5e9ff, #0b394d); /* Theme/blue/400 */
  --color-theme-blue-200: light-dark(#cce9f5, #0e232c); /* Theme/blue/200 */
  --color-theme-blue-100: light-dark(#e0f2f9, #1c292f); /* Theme/blue/100 */
  --color-theme-blue-reply-tag: light-dark(#acdff4, #093142); /* Theme/blue/Reply-tag */

  /* ---- Color / Theme/teal ---- */
  --color-theme-teal-1000: #006a80; /* Theme/teal/1000 */
  --color-theme-teal-400: light-dark(#ace4ef, #0d2f36); /* Theme/teal/400 */
  --color-theme-teal-200: light-dark(#cce2e7, #0e2327); /* Theme/teal/200 */
  --color-theme-teal-100: light-dark(#e0eef1, #1c292c); /* Theme/teal/100 */
  --color-theme-teal-reply-tag: light-dark(#a3dae5, #0a272d); /* Theme/teal/Reply-tag */

  /* ---- Color / Theme/violet ---- */
  --color-theme-violet-1000: light-dark(#4759b3, #5266cc); /* Theme/violet/1000 */
  --color-theme-violet-400: light-dark(#bec9ff, #272e4e); /* Theme/violet/400 */
  --color-theme-violet-200: light-dark(#dadef0, #1e2236); /* Theme/violet/200 */
  --color-theme-violet-100: light-dark(#e9ebf6, #262835); /* Theme/violet/100 */
  --color-theme-violet-reply-tag: light-dark(#b5c0f4, #1f2540); /* Theme/violet/Reply-tag */

  /* ---- Color / Theme/rose ---- */
  --color-theme-rose-1000: light-dark(#f460aa, #d15091); /* Theme/rose/1000 */
  --color-theme-rose-400: light-dark(#febfde, #50273b); /* Theme/rose/400 */
  --color-theme-rose-200: light-dark(#fddfee, #371e2b); /* Theme/rose/200 */
  --color-theme-rose-100: light-dark(#feecf5, #35262e); /* Theme/rose/100 */
  --color-theme-rose-reply-tag: light-dark(#f3b6d4, #442232); /* Theme/rose/Reply-tag */

  /* ---- Color / Dev portal ---- */
  --color-dev-portal-color: #ffffff; /* Dev portal/Color */
  --color-dev-portal-code-syntax1: light-dark(#2200ce, #ac9bff); /* Dev portal/Code syntax1 */
  --color-dev-portal-code-syntax2: light-dark(#ce5200, #f39e66); /* Dev portal/Code syntax2 */
  --color-dev-portal-graph-scale: light-dark(#1d1d1d, #f2f2f2); /* Dev portal/Graph scale */
  --color-dev-portal-graph-plot-1: light-dark(#ff651e, #c75b2a); /* Dev portal/Graph plot 1 */
  --color-dev-portal-stats-text: light-dark(#3b3b3b, #e0e0e0); /* Dev portal/Stats text */
  --color-dev-portal-graph-plot-2: light-dark(#6186ff, #4e6dd4); /* Dev portal/Graph plot 2 */

  /* ---- Spacing ---- */
  --space-none: 0;   /* None */
  --space-xs: 2px;   /* XS */
  --space-s: 4px;    /* S */
  --space-m: 6px;    /* M */
  --space-l: 8px;    /* L */
  --space-btn: 10px; /* BTN */
  --space-xl: 12px;  /* XL */
  --space-2xl: 16px; /* 2XL */
  --space-3xl: 20px; /* 3XL */
  --space-4xl: 24px; /* 4XL */
  /* The Figma Space collection also has a "Mode 2" (compact) scale; it is
     not used by any component yet, so it isn't mirrored here. */

  /* ---- Radius ---- */
  --radius-sm: 4px;
  --radius-lg: 8px;
  --radius-pill: 28px; /* Toggle track and knob */

  /* ---- Effects ---- */
  --shadow-dropdown-menu: 0 0 12px rgba(0, 0, 0, 0.25); /* Drop down menu */

  /* ---- Typography ---- */
  --font-family-base: "Zoho Puvi", -apple-system, BlinkMacSystemFont, sans-serif;
  /* Weight-specific faces: the weight comes from the font file itself, so
     never combine these with font-weight. */
  --font-family-regular: "Zoho Puvi Regular", "ZohoPuvi-Regular", "Zoho Puvi", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-family-medium: "Zoho Puvi Medium", "ZohoPuvi-Medium", "Zoho Puvi Med", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-family-semibold: "Zoho Puvi Semibold", "ZohoPuvi-Semibold", "Zoho Puvi SemBd", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-family-bold: "Zoho Puvi Bold", "ZohoPuvi-Bold", -apple-system, BlinkMacSystemFont, sans-serif;

  /* Figma text styles, as `font` shorthands: font: var(--font-body-3);
     Letter spacing isn't part of `font`, so styles that have it get a
     separate --ls-* token. */
  --font-h1: 20px/32px var(--font-family-bold);            /* H1 20 B */
  --font-h2: 18px/26px var(--font-family-semibold);        /* H2 SB */
  --font-h3: 14px/20px var(--font-family-semibold);        /* H3 SB */
  --font-h4: 16px/24px var(--font-family-semibold);        /* H4 SB */
  --font-h5: 20px/32px var(--font-family-semibold);        /* H5 20 SB */
  --ls-h5: -0.25px;
  --font-h6: 20px/32px var(--font-family-medium);          /* H6 20M */
  --ls-h6: 0.2px;                                          /* 1% of 20px */
  --font-body-1: 16px/22px var(--font-family-regular);     /* Body 1 R */
  --font-body-2: 16px/24px var(--font-family-medium);      /* Body 2 M */
  --font-body-3: 14px/20px var(--font-family-regular);     /* Body 3 R */
  --font-sub-text: 14px/20px var(--font-family-medium);    /* Sub text M */
  --font-caption: 13px/18px var(--font-family-regular);    /* Caption- 13px Reg */
  --font-badge: 12px/normal var(--font-family-regular);    /* Badge-text 12px */
  --font-last-message: 14px/16px var(--font-family-regular); /* Last message */

  /* BTN Small */
  --font-size-sm: 14px;
  --line-height-sm: 16px;
  --letter-spacing-sm: 0.1px;

  /* BTN Medium / Large */
  --font-size-md: 16px;
  --line-height-md: 20px;
  --letter-spacing-md: 0.25px;

  /* ---- Fixed control heights (padding + line-height collapsed to a token) ----
     Figma varies vertical padding per state (e.g. Medium: 8px default vs 6px
     loading) so the spinner and label always render at the same 36px height.
     We bake that resolved height in directly instead of juggling per-state
     padding, so height stays constant across all states by construction. */
  --control-height-sm: 24px;
  --control-height-md: 36px;
  --control-height-lg: 44px;
}
```
