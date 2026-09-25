<!--
  CheckCircle — round multi-select checkbox. Styles live in
  ../check-circle.css (load it once, globally, after tokens.css). This
  component has no style block; it only maps props to the native checkbox
  that the .check-circle class styles.

  Figma: "multiselect" 2050:3106 (default · selected · semi select · disabled · Variant5)
-->
<template>
  <input
    type="checkbox"
    class="check-circle"
    :class="{ 'check-circle--outline': outline }"
    :name="name"
    :value="value"
    :checked="modelValue"
    :indeterminate="indeterminate"
    :disabled="disabled"
    :aria-label="label"
    @change="onChange"
  />
</template>

<script setup>
defineProps({
  /** selected / default. Use with v-model. */
  modelValue: { type: Boolean, default: false },
  /** Renders the "semi select" frame. Use with v-model:indeterminate. */
  indeterminate: { type: Boolean, default: false },
  /** Renders the "disabled" frame. */
  disabled: { type: Boolean, default: false },
  /** Variant5: an empty ring instead of the grey disc while unselected. */
  outline: { type: Boolean, default: false },
  /** Accessible name, e.g. "Select message from Priya". Required: the control has no visible text. */
  label: { type: String, required: true },
  /** Native form name / value. */
  name: { type: String, default: undefined },
  value: { type: String, default: undefined },
});

const emit = defineEmits(["update:modelValue", "update:indeterminate"]);

function onChange(event) {
  emit("update:indeterminate", false);
  emit("update:modelValue", event.target.checked);
}
</script>
