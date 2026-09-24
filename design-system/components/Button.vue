<template>
  <component
    :is="tag"
    class="btn"
    :class="[
      `btn--${variant}`,
      `btn--${size}`,
      { 'btn--full': fullWidth, 'btn--pressed': pressed, 'is-loading': loading },
    ]"
    :type="tag === 'button' ? 'button' : undefined"
    :href="tag === 'a' ? href : undefined"
    :disabled="tag === 'button' ? disabled || loading : undefined"
    :aria-disabled="disabled || loading"
    :aria-pressed="pressed"
    :aria-busy="loading"
  >
    <span v-if="loading" class="btn__spinner" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="34 200" />
      </svg>
    </span>
    <template v-else>
      <span v-if="$slots.icon" class="btn__icon"><slot name="icon" /></span>
      <span class="btn__label"><slot /></span>
    </template>
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Visual style pulled from the Button component set in Figma. */
  variant: {
    type: String,
    default: "primary",
    validator: (v) => ["primary", "secondary", "ghost", "negative", "negative-secondary", "link"].includes(v),
  },
  /** Maps to the Small / Medium / Large frames. Ignored by the `link` variant. */
  size: {
    type: String,
    default: "medium",
    validator: (v) => ["small", "medium", "large"].includes(v),
  },
  /** Stretches to 100% of the container, matching the Fullwidth / Full-Width=True frames. */
  fullWidth: { type: Boolean, default: false },
  /** Native disabled state — renders the 50%-opacity Disabled frame. */
  disabled: { type: Boolean, default: false },
  /** Shows the spinner and suppresses interaction, matching the Loading frame. */
  loading: { type: Boolean, default: false },
  /**
   * Forces the outlined "Activated" / "Focus" frame — for toggle-style buttons
   * that need to stay visually selected (e.g. an active filter). Momentary
   * press feedback already happens for free via the `:active` pseudo-class.
   */
  pressed: { type: Boolean, default: false },
  /** Render as a link when a destination is provided (used with `variant="link"`). */
  href: { type: String, default: undefined },
});

const tag = computed(() => (props.href ? "a" : "button"));
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-l);
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  padding-inline: var(--space-xl);
  font-family: var(--font-family-medium);
  font-size: var(--font-size-md);
  line-height: var(--line-height-md);
  letter-spacing: var(--letter-spacing-md);
  white-space: nowrap;
  cursor: pointer;
  background: none;
  text-decoration: none;
  transition: background-color 120ms ease, border-color 120ms ease, color 120ms ease;
}

.btn:disabled,
.btn[aria-disabled="true"] {
  cursor: not-allowed;
  opacity: 0.5;
}

.btn.is-loading {
  cursor: progress;
}

.btn__spinner svg {
  width: 24px;
  height: 24px;
  animation: btn-spin 0.8s linear infinite;
}

.btn__icon {
  display: inline-flex;
  width: 20px;
  height: 20px;
}

@keyframes btn-spin {
  to {
    transform: rotate(360deg);
  }
}

/* ---- Sizes ---- */
.btn--small {
  height: var(--control-height-sm);
  min-width: 50px;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  letter-spacing: var(--letter-spacing-sm);
}
.btn--small .btn__spinner svg,
.btn--small .btn__icon {
  width: 20px;
  height: 20px;
}

.btn--medium {
  height: var(--control-height-md);
  min-width: 90px;
}

.btn--large {
  height: var(--control-height-lg);
  min-width: 100px;
  border-radius: var(--radius-lg);
  padding-inline: var(--space-3xl);
}

.btn--full {
  width: 100%;
}

/* ---- Primary ---- */
.btn--primary {
  background: var(--color-button-800);
  color: var(--color-bg-1);
}
.btn--primary:hover:not(:disabled):not(.is-loading) {
  background: var(--color-button-1000);
}
.btn--primary:active:not(:disabled),
.btn--primary.btn--pressed {
  background: var(--color-button-100);
  border-color: var(--color-button-1000);
  color: var(--color-button-1000);
}
.btn--primary.is-loading {
  background: var(--color-button-1000);
  color: var(--color-bg-1);
}

/* ---- Secondary ---- */
.btn--secondary {
  background: var(--color-bg-2);
  color: var(--color-text-t3);
}
.btn--secondary:hover:not(:disabled):not(.is-loading) {
  background: var(--color-bg-hover);
}
.btn--secondary:active:not(:disabled),
.btn--secondary.btn--pressed {
  border-color: var(--color-text-primary);
  color: var(--color-text-primary);
}
.btn--secondary.is-loading {
  background: var(--color-bg-2);
  color: var(--color-text-t3);
}
.btn--secondary:disabled,
.btn--secondary[aria-disabled="true"] {
  color: var(--color-text-disabled);
}

/* ---- Ghost ---- */
.btn--ghost {
  background: transparent;
  color: var(--color-button-800);
}
.btn--ghost:hover:not(:disabled):not(.is-loading) {
  background: var(--color-bg-hover);
}
.btn--ghost:active:not(:disabled),
.btn--ghost.btn--pressed {
  background: var(--color-bg-hover);
  border-color: var(--color-button-800);
}
.btn--ghost.is-loading {
  color: var(--color-button-800);
}

/* ---- Negative (destructive primary) ---- */
.btn--negative {
  background: var(--color-negative-800);
  color: var(--color-bg-1);
}
.btn--negative:hover:not(:disabled):not(.is-loading) {
  background: var(--color-negative-1000);
}
.btn--negative:active:not(:disabled),
.btn--negative.btn--pressed {
  background: var(--color-negative-100);
  border-color: var(--color-negative-800);
  color: var(--color-negative-800);
}
.btn--negative.is-loading {
  background: var(--color-negative-1000);
  color: var(--color-bg-1);
}

/* ---- Negative secondary (destructive, low emphasis) ---- */
.btn--negative-secondary {
  background: var(--color-negative-100);
  color: var(--color-negative-800);
}
.btn--negative-secondary:hover:not(:disabled):not(.is-loading) {
  background: var(--color-negative-200);
  color: var(--color-negative-1000);
}
.btn--negative-secondary:active:not(:disabled),
.btn--negative-secondary.btn--pressed {
  border-color: var(--color-negative-800);
  color: var(--color-negative-1000);
}
.btn--negative-secondary.is-loading {
  background: var(--color-negative-200);
  color: var(--color-negative-800);
}

/* ---- Link ---- */
.btn--link {
  display: inline-flex;
  height: auto;
  min-width: 0;
  padding: var(--space-xs) 2px;
  border: none;
  border-radius: 2px;
  gap: var(--space-s);
  background: transparent;
  color: var(--color-button-800);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  letter-spacing: var(--letter-spacing-sm);
}
.btn--link:hover:not(:disabled):not(.is-loading) {
  color: var(--color-button-1000);
  font-size: var(--font-size-md);
  line-height: var(--line-height-md);
  letter-spacing: var(--letter-spacing-md);
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-underline-position: from-font;
}
.btn--link:active:not(:disabled),
.btn--link.btn--pressed {
  color: var(--color-button-1000);
}
.btn--link.is-loading {
  min-width: 56px;
  justify-content: center;
}
</style>
