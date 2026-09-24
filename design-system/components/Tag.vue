<!--
  Tag — styles live in ../tag.css (and ../icon.css for the icon); load them
  once, globally, after tokens.css. This component only maps props to classes.
  Figma: Tags 3319:2359
-->
<template>
  <span class="tag" :class="{ 'tag--highlight': variant === 'highlight' }">
    <span
      v-if="icon"
      class="icon tag__icon"
      :style="{ '--icon': `url(${icon})` }"
      aria-hidden="true"
    ></span>
    <slot />
  </span>
</template>

<script setup>
defineProps({
  /** neutral (Figma "Frame 28075") · highlight (Figma "Frame 28074") */
  variant: {
    type: String,
    default: "neutral",
    validator: (v) => ["neutral", "highlight"].includes(v),
  },
  /** URL of a single-color SVG icon, e.g. "assets/icons/video-line.svg" */
  icon: { type: String, default: undefined },
});
</script>
