<!--
  Toggle — styles live in toggle.css, which consumers load globally
  (together with tokens.css). This component has no styles of its own.
-->
<template>
  <label class="toggle-field" :class="{ 'is-disabled': disabled }">
    <input
      type="checkbox"
      role="switch"
      class="toggle"
      :checked="modelValue"
      :disabled="disabled"
      :aria-label="$slots.default ? undefined : label"
      @change="emit('update:modelValue', $event.target.checked)"
    />
    <span v-if="$slots.default" class="toggle-field__label"><slot /></span>
  </label>
</template>

<script setup>
defineProps({
  /** On / Off. Use with v-model. */
  modelValue: { type: Boolean, default: false },
  /** Renders the Off disabled / On disabled frames. */
  disabled: { type: Boolean, default: false },
  /** Accessible name when no visible label is passed in the default slot. */
  label: { type: String, default: undefined },
});

const emit = defineEmits(["update:modelValue"]);
</script>
