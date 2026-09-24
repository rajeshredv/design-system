<!--
  Checkbox — styles live in ../checkbox.css (load it once, globally, after
  tokens.css). This component has no style block; it only maps props to the
  native checkbox that the .checkbox class styles.

  Figma: Check-box 2050:3150 (Uncheck · Checked · Semi · Disabled · Check disabled)
-->
<template>
  <label v-if="$slots.default" class="checkbox-field">
    <input
      type="checkbox"
      class="checkbox"
      :name="name"
      :value="value"
      :checked="modelValue"
      :indeterminate="indeterminate"
      :disabled="disabled"
      :aria-checked="indeterminate ? 'mixed' : undefined"
      @change="onChange"
    />
    <span class="checkbox-field__label"><slot /></span>
  </label>
  <input
    v-else
    type="checkbox"
    class="checkbox"
    :name="name"
    :value="value"
    :checked="modelValue"
    :indeterminate="indeterminate"
    :disabled="disabled"
    :aria-label="label"
    :aria-checked="indeterminate ? 'mixed' : undefined"
    @change="onChange"
  />
</template>

<script setup>
defineProps({
  /** Checked / Uncheck. Use with v-model. */
  modelValue: { type: Boolean, default: false },
  /** Renders the Semi frame (aria-checked="mixed"). Use with v-model:indeterminate. */
  indeterminate: { type: Boolean, default: false },
  /** Renders the Disabled / Check disabled frames. */
  disabled: { type: Boolean, default: false },
  /** Accessible name when no visible label is passed in the default slot. */
  label: { type: String, default: undefined },
  /** Native form name / value. */
  name: { type: String, default: undefined },
  value: { type: String, default: undefined },
});

const emit = defineEmits(["update:modelValue", "update:indeterminate"]);

function onChange(event) {
  // A user click always resolves the mixed state, like the native control.
  emit("update:indeterminate", false);
  emit("update:modelValue", event.target.checked);
}
</script>
