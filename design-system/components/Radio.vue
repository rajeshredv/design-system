<!--
  Radio — styles live in ../radio.css (load it once, globally, after
  tokens.css). This component has no style block; it only maps props to the
  native radio that the .radio class styles.

  Figma: Radio 2050:3169 (Active · Selected · Disabled)

  Group several Radios with the same `name` and v-model; wrap them in an
  element with role="radiogroup" and an aria-label (or a <fieldset>/<legend>).
-->
<template>
  <label v-if="$slots.default" class="radio-field">
    <input
      type="radio"
      class="radio"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      @change="emit('update:modelValue', value)"
    />
    <span class="radio-field__label"><slot /></span>
  </label>
  <input
    v-else
    type="radio"
    class="radio"
    :name="name"
    :value="value"
    :checked="modelValue === value"
    :disabled="disabled"
    :aria-label="label"
    @change="emit('update:modelValue', value)"
  />
</template>

<script setup>
defineProps({
  /** The selected value of the group. Use with v-model. */
  modelValue: { type: [String, Number, Boolean], default: undefined },
  /** This option's value. Selected when it equals modelValue. */
  value: { type: [String, Number, Boolean], required: true },
  /** Group name shared by every Radio in the group (required for arrow keys). */
  name: { type: String, required: true },
  /** Renders the Disabled frame. */
  disabled: { type: Boolean, default: false },
  /** Accessible name when no visible label is passed in the default slot. */
  label: { type: String, default: undefined },
});

const emit = defineEmits(["update:modelValue"]);
</script>
