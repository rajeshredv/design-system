<!--
  Alert (inline notification) — styles live in ../alert.css (plus ../icon.css
  and ../button.css); load them once, globally, after tokens.css.
  This component only maps props to the .alert class API.
  Figma: "Component 6" 3160:2323 (Property 1 × Subtext × CTA)
-->
<template>
  <div
    class="alert"
    :class="{
      'alert--error': tone === 'error',
      'alert--warning': tone === 'warning',
      'alert--banner': banner,
    }"
    :role="role"
  >
    <span
      class="icon alert__icon"
      :style="{ '--icon': `url(${icon || defaultIcons[tone]})` }"
      aria-hidden="true"
    ></span>
    <div class="alert__body">
      <span class="alert__title"><slot /></span>
      <span v-if="$slots.subtext" class="alert__text"><slot name="subtext" /></span>
    </div>
    <button
      v-if="actionLabel"
      class="btn btn--ghost btn--medium alert__action"
      type="button"
      @click="emit('action')"
    >
      {{ actionLabel }}
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** success (Figma Success, blue) · error (Error) · warning (Limit hit / Modal) */
  tone: {
    type: String,
    default: "success",
    validator: (v) => ["success", "error", "warning"].includes(v),
  },
  /** Flat strip for use inside a dialog (Figma Property 1=Modal) */
  banner: { type: Boolean, default: false },
  /** Override the icon URL */
  icon: { type: String, default: undefined },
  /** Ghost action button text (CTA=True), e.g. "Undo" */
  actionLabel: { type: String, default: undefined },
  /** Live-region role. Defaults to "alert" for errors, "status" otherwise, none for banners. */
  live: { type: String, default: undefined },
});

const emit = defineEmits(["action"]);

// Paths are relative to the page, like every other asset URL in the system.
const defaultIcons = {
  success: "assets/icons/like-line.svg",
  error: "assets/icons/exclamation-warning-line.svg",
  warning: "assets/icons/exclamation-error-line.svg",
};

const role = computed(() => {
  if (props.live !== undefined) return props.live || undefined;
  if (props.banner) return undefined;
  return props.tone === "error" ? "alert" : "status";
});
</script>
