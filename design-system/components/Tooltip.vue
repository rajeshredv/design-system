<!--
  Tooltip — styles live in ../tooltip.css (load it once, globally, after
  tokens.css). This component only maps props to the .tooltip class API.
  Figma: Tooltip 3319:4126 (List × ArrowUp)

  The trigger goes in the default slot and must bind the id it is given:
    <Tooltip text="Forward">
      <template #default="{ describedby }">
        <button class="…" :aria-describedby="describedby">…</button>
      </template>
    </Tooltip>
  Shows on hover and focus; Escape hides it until the pointer/focus leaves.
-->
<template>
  <span
    class="tooltip-anchor"
    @keydown.esc="dismissed = true"
    @mouseleave="dismissed = false"
    @focusout="dismissed = false"
  >
    <slot :describedby="id" />
    <span
      :id="id"
      class="tooltip"
      :class="{
        'tooltip--arrow-down': placement === 'top',
        'is-open': open,
        'is-dismissed': dismissed,
      }"
      role="tooltip"
    >
      <template v-if="lines && lines.length">
        <span class="tooltip__title">{{ text }}</span>
        <span v-for="(line, i) in lines" :key="i" class="tooltip__line">{{ line }}</span>
      </template>
      <template v-else>
        <slot name="content">{{ text }}</slot>
      </template>
    </span>
  </span>
</template>

<script setup>
import { ref } from "vue";

let uid = 0;

defineProps({
  /** Tooltip text, or the title line when `lines` is set */
  text: { type: String, default: "" },
  /** List=True: secondary rows under the title (e.g. names of people who reacted) */
  lines: { type: Array, default: undefined },
  /** "bottom" = below the trigger, arrow up (ArrowUp=True) · "top" = above, arrow down */
  placement: {
    type: String,
    default: "bottom",
    validator: (v) => ["bottom", "top"].includes(v),
  },
  /** Force it visible (e.g. for onboarding) */
  open: { type: Boolean, default: false },
});

const id = `tooltip-${++uid}`;
const dismissed = ref(false);
</script>
