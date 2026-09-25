<!--
  Button — styles live in ../button.css (load it once, globally, after tokens.css).
  This component only maps props to the .btn class API.
-->
<template>
  <component
    :is="tag"
    class="btn"
    :class="[
      `btn--${variant}`,
      `btn--${resolvedSize}`,
      { 'btn--full': fullWidth, 'btn--pressed': pressed, 'is-loading': loading },
    ]"
    :type="tag === 'button' ? 'button' : undefined"
    :href="tag === 'a' ? href : undefined"
    :disabled="tag === 'button' ? disabled || loading : undefined"
    :aria-disabled="tag === 'a' && (disabled || loading) ? 'true' : undefined"
    :tabindex="tag === 'a' && (disabled || loading) ? -1 : undefined"
    :aria-pressed="pressed ? 'true' : undefined"
    :aria-busy="loading ? 'true' : undefined"
  >
    <span v-if="loading" class="btn__loader" aria-hidden="true"></span>
    <span v-if="$slots.icon" class="btn__icon" aria-hidden="true"><slot name="icon" /></span>
    <span class="btn__label"><slot /></span>
    <span v-if="$slots['icon-end']" class="btn__icon" aria-hidden="true"><slot name="icon-end" /></span>
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Visual style pulled from the Button component sets in Figma. */
  variant: {
    type: String,
    default: "primary",
    validator: (v) => ["primary", "secondary", "ghost", "negative", "negative-secondary", "link"].includes(v),
  },
  /**
   * Maps to the Small / Medium / Large frames. Defaults to "medium", except for
   * `variant="link"`, which defaults to the small link (Buttons-Primary-Link
   * 2145:2680); pass size="medium" for the medium link (3313:2456).
   */
  size: {
    type: String,
    default: undefined,
    validator: (v) => ["small", "medium", "large"].includes(v),
  },
  /** Stretches to 100% of the container, matching the Fullwidth / Full-Width=True frames. */
  fullWidth: { type: Boolean, default: false },
  /** Native disabled state — renders the Disabled frame. */
  disabled: { type: Boolean, default: false },
  /** Shows the Figma loader and blocks interaction, matching the Loading frame. The label stays readable by screen readers. */
  loading: { type: Boolean, default: false },
  /**
   * Forces the outlined "Activated" / "Focus" frame — for toggle-style buttons
   * that need to stay visually selected (e.g. an active filter). Sets
   * aria-pressed="true". Momentary press feedback already comes from :active.
   */
  pressed: { type: Boolean, default: false },
  /** Render as a link when a destination is provided (used with `variant="link"`). */
  href: { type: String, default: undefined },
});

const tag = computed(() => (props.href ? "a" : "button"));
const resolvedSize = computed(() => props.size ?? (props.variant === "link" ? "small" : "medium"));
</script>
