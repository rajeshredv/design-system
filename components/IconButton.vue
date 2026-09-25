<!--
  IconButton — styles live in ../icon-button.css and ../icon.css (load them
  once, globally, after tokens.css). This component has no styles of its own;
  it only maps props to the .icon-btn class API.

  <IconButton label="Add reaction" icon="/assets/icons/emoji-smiley.svg" />
  <IconButton label="Delete" icon="/assets/icons/delete.svg" variant="negative" size="small" />
  <IconButton label="Mentions" icon="/assets/icons/emoji-smiley.svg" :badge="2" />
  <IconButton label="Add"><span class="icon-btn__add">…</span></IconButton>   (custom content)
-->
<template>
  <button
    type="button"
    class="icon-btn"
    :class="[
      `icon-btn--${variant}`,
      variant === 'micro' ? null : `icon-btn--${size}`,
      { 'icon-btn--pressed': pressed },
    ]"
    :aria-label="accessibleName"
    :aria-pressed="pressed === undefined ? undefined : String(pressed)"
    :disabled="disabled"
  >
    <slot>
      <span v-if="icon" class="icon" :style="{ '--icon': `url(${icon})` }" aria-hidden="true"></span>
    </slot>
    <span
      v-if="badge !== undefined && badge !== false"
      class="icon-btn__badge"
      :class="{ 'icon-btn__badge--dot': badge === true }"
      aria-hidden="true"
    >{{ badge === true ? "" : badge }}</span>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Accessible name. Required: the button has no visible text. */
  label: { type: String, required: true },
  /** URL of a single-color SVG from assets/icons/. Rendered with the .icon mask so it takes the button's color. */
  icon: { type: String, default: undefined },
  /**
   * Visual style, one per Figma component set:
   * hard-fill (Icon-Primary-Hard-fill / Icon-Small-Hard-fill), soft-fill (Soft-fill Blue=True),
   * soft-fill-neutral (Soft-fill Blue=False), transparent, secondary, negative, micro.
   */
  variant: {
    type: String,
    default: "transparent",
    validator: (v) =>
      ["hard-fill", "soft-fill", "soft-fill-neutral", "transparent", "secondary", "negative", "micro"].includes(v),
  },
  /** large 40px / small 32px / xsmall 24px. Ignored for variant="micro" (always 20px). */
  size: {
    type: String,
    default: "large",
    validator: (v) => ["large", "small", "xsmall"].includes(v),
  },
  /**
   * Toggle buttons only: true renders the Active frame and sets aria-pressed="true";
   * false sets aria-pressed="false". Leave undefined for ordinary action buttons
   * (press feedback comes from :active).
   */
  pressed: { type: Boolean, default: undefined },
  /** Native disabled state — renders the Disabled frame. */
  disabled: { type: Boolean, default: false },
  /**
   * Badge on the top-right corner (Icon-Large-Transparent BadgeCount / No number).
   * A number or string shows a count, `true` shows the 6px dot.
   */
  badge: { type: [Number, String, Boolean], default: undefined },
  /** Spoken text for the badge, appended to the label, e.g. "2 unread" or "new". Defaults to the count. */
  badgeLabel: { type: String, default: undefined },
});

const accessibleName = computed(() => {
  const { label, badge, badgeLabel } = props;
  if (badge === undefined || badge === false) return label;
  const extra = badgeLabel ?? (badge === true ? "" : String(badge));
  return extra ? `${label}, ${extra}` : label;
});
</script>
