<!--
  SegmentedControl — pick one of 2–4 options.
  Figma: "Text & Icon" 3315:2664 (Icon & text · Icon only · Text only ×
  Default · Hover · Disabled · Disabled with nothing selected)

  Styles live in segmented.css and icon.css; this SFC has no <style> block.
  Load tokens.css, icon.css and segmented.css globally in your app.

  Usage:
    <SegmentedControl v-model="platform" label="Platform" :options="[
      { value: 'android', label: 'Android', icon: 'assets/icons/platform-android.svg' },
      { value: 'ios',     label: 'iOS',     icon: 'assets/icons/platform-ios.svg' },
    ]" />
    Omit `label` on options for Icon only (give each an `ariaLabel`),
    omit `icon` for Text only.
-->
<template>
  <div
    class="segmented"
    :class="{ 'segmented--text': textOnly }"
    role="radiogroup"
    :aria-label="label"
    :aria-disabled="disabled ? 'true' : undefined"
  >
    <label v-for="opt in options" :key="opt.value" class="segmented__option">
      <input
        type="radio"
        class="segmented__input"
        :name="groupName"
        :value="opt.value"
        :checked="opt.value === modelValue"
        :disabled="disabled || opt.disabled"
        :aria-label="opt.label ? undefined : opt.ariaLabel"
        @change="emit('update:modelValue', opt.value)"
      />
      <span v-if="opt.icon" class="segmented__icon">
        <span class="icon" :style="{ '--icon': `url(${opt.icon})` }" aria-hidden="true"></span>
      </span>
      <span v-if="opt.label" class="segmented__label">{{ opt.label }}</span>
    </label>
  </div>
</template>

<script setup>
import { computed } from "vue";

let uid = 0;

const props = defineProps({
  /** [{ value, label?, icon?, ariaLabel?, disabled? }] */
  options: { type: Array, required: true },
  /** Selected value (v-model). Leave undefined for "nothing selected". */
  modelValue: { type: [String, Number], default: undefined },
  /** Accessible name of the group. */
  label: { type: String, default: undefined },
  disabled: { type: Boolean, default: false },
  /** Radio group name (auto-generated if omitted). */
  name: { type: String, default: undefined },
});

const emit = defineEmits(["update:modelValue"]);

const fallbackName = `ds-segmented-${++uid}`;
const groupName = computed(() => props.name || fallbackName);
const textOnly = computed(() => props.options.every((o) => !o.icon));
</script>
