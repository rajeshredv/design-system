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

<style scoped>
.toggle-field {
  display: inline-flex;
  align-items: center;
  gap: var(--space-l);
  cursor: pointer;
}

.toggle-field.is-disabled {
  cursor: not-allowed;
}

.toggle-field__label {
  font-family: var(--font-family-base);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  color: var(--color-text-primary);
}

.toggle-field.is-disabled .toggle-field__label {
  color: var(--color-text-disabled);
}

/* ---- Switch (States: Off · On · Off disabled · On disabled) ---- */
.toggle {
  --toggle-track: var(--color-disabled);
  --toggle-knob: var(--color-bg-1);

  appearance: none;
  position: relative;
  flex-shrink: 0;
  width: 32px;
  height: 18px;
  margin: 0;
  border-radius: var(--radius-pill);
  background: var(--toggle-track);
  cursor: inherit;
  transition: background-color 150ms ease;
}

.toggle::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-pill);
  background: var(--toggle-knob);
  transition: transform 150ms ease;
}

.toggle:focus-visible {
  outline: 2px solid var(--color-button-1000);
  outline-offset: 2px;
}

.toggle:checked {
  --toggle-track: var(--color-button-800);
}
.toggle:checked::before {
  transform: translateX(14px);
}

.toggle:disabled {
  --toggle-track: var(--color-bg-border);
}

.toggle:checked:disabled {
  --toggle-track: var(--color-button-100);
}

@media (prefers-reduced-motion: reduce) {
  .toggle,
  .toggle::before {
    transition: none;
  }
}
</style>
