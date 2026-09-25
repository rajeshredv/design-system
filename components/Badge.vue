<!--
  Badge — styles live in ../badge.css (load it once, globally, after tokens.css).
  This component only maps props to the .badge class API.
  Figma: Badge 3319:2348
-->
<template>
  <span
    class="badge"
    :class="variant !== 'default' ? `badge--${variant}` : null"
    :role="variant === 'dot' ? 'img' : undefined"
    :aria-label="variant === 'dot' ? label : undefined"
    :aria-hidden="variant === 'dot' && !label ? 'true' : undefined"
  >
    <template v-if="variant !== 'dot'">
      <span :aria-hidden="label ? 'true' : undefined">{{ display }}</span>
      <span v-if="label" class="badge__sr">{{ label }}</span>
    </template>
  </span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Figma "Property 1": default · muted · transparent · rail · dot (No number) */
  variant: {
    type: String,
    default: "default",
    validator: (v) => ["default", "muted", "transparent", "rail", "dot"].includes(v),
  },
  /** The number to show. Ignored for the dot. */
  count: { type: [Number, String], default: undefined },
  /** Numbers above this show as "max+" (e.g. 99+). */
  max: { type: Number, default: 99 },
  /**
   * Accessible name, e.g. "3 unread messages". Required for the dot, and
   * recommended whenever the number alone has no visible context.
   */
  label: { type: String, default: undefined },
});

const display = computed(() => {
  const n = Number(props.count);
  return Number.isFinite(n) && n > props.max ? `${props.max}+` : props.count;
});
</script>
