<!--
  Snackbar — styles live in ../snackbar.css (plus ../icon.css and
  ../button.css); load them once, globally, after tokens.css.
  This component only maps props to the .snackbar class API.
  Figma: Snackbar 3167:2198 (Button × Counter)
-->
<template>
  <div class="snackbar" :role="urgent ? 'alert' : 'status'">
    <span v-if="count !== undefined" class="snackbar__count" aria-hidden="true">{{ count }}</span>
    <span
      v-else-if="icon"
      class="icon snackbar__icon"
      :style="{ '--icon': `url(${icon})` }"
      aria-hidden="true"
    ></span>
    <p class="snackbar__message"><slot /></p>
    <button
      v-if="actionLabel"
      class="btn btn--primary btn--small snackbar__action"
      type="button"
      @click="emit('action')"
    >
      {{ actionLabel }}
    </button>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from "vue";

const props = defineProps({
  /** Leading single-color icon URL, e.g. "assets/icons/story-line.svg" */
  icon: { type: String, default: undefined },
  /** Leading counter bubble (replaces the icon). Visual only — say the number in the message. */
  count: { type: [Number, String], default: undefined },
  /** Text of the action button (Button=True), e.g. "Undo" */
  actionLabel: { type: String, default: undefined },
  /** Use role="alert" (interrupts) instead of role="status" — for errors only */
  urgent: { type: Boolean, default: false },
  /** Auto-dismiss after this many ms (0 = stay). Keep it long enough to reach the action. */
  timeout: { type: Number, default: 0 },
});

const emit = defineEmits(["action", "close"]);

let timer;
onMounted(() => {
  if (props.timeout > 0) timer = setTimeout(() => emit("close"), props.timeout);
});
onBeforeUnmount(() => clearTimeout(timer));
</script>
