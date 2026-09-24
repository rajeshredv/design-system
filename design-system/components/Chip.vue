<!--
  Chip — styles live in ../chip.css (plus ../icon.css and ../badge.css); load
  them once, globally, after tokens.css. This component only maps props to the
  .chip class API. Figma: Chips 3290:2336 (26 variants).

  Three behaviours, picked from the props:
    - filter chip   (v-model:selected)  <button aria-pressed>
    - menu chip     (caret)             <button aria-haspopup aria-expanded>
    - removable     (removable)         <span> + inner remove <button>
-->
<template>
  <component
    :is="removable ? 'span' : 'button'"
    class="chip"
    :class="{
      'chip--media': !!media,
      'is-selected': removable || (caret && selected),
    }"
    :type="removable ? undefined : 'button'"
    :disabled="!removable && disabled ? true : undefined"
    :aria-disabled="removable && disabled ? 'true' : undefined"
    :aria-pressed="isToggle ? String(!!selected) : undefined"
    :aria-haspopup="caret ? haspopup : undefined"
    :aria-expanded="caret ? String(!!expanded) : undefined"
    :data-playback="media ? playback : undefined"
    @click="onClick"
  >
    <span v-if="media" class="chip__media" aria-hidden="true"><img :src="media" alt="" /></span>
    <span v-else-if="checkmark" class="icon chip__check" aria-hidden="true"></span>
    <span
      v-else-if="icon"
      class="icon chip__icon"
      :style="{ '--icon': `url(${icon})` }"
      aria-hidden="true"
    ></span>

    <slot />

    <span v-if="badge !== undefined" class="badge badge--muted">{{ badge }}</span>
    <span v-if="caret" class="icon chip__caret" aria-hidden="true"></span>
    <button
      v-if="removable"
      class="chip__remove"
      type="button"
      :aria-label="removeLabel"
      :disabled="disabled"
      @click.stop="emit('remove')"
    ></button>
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Activated state. Use v-model:selected for a filter chip. */
  selected: { type: Boolean, default: undefined },
  /** Leading icon URL (Type=With icon / Dropdown-Icon), e.g. "assets/icons/location.svg" */
  icon: { type: String, default: undefined },
  /** Leading tick that fills in when selected (Type=Checkmark) */
  checkmark: { type: Boolean, default: false },
  /** Artwork URL — renders the 36px media chip (Type=Dropdown with artwork) */
  media: { type: String, default: undefined },
  /** Media playback overlay: "playing" (equalizer; pause on hover) or "paused" (play on hover) */
  playback: {
    type: String,
    default: undefined,
    validator: (v) => ["playing", "paused"].includes(v),
  },
  /** Trailing disclosure caret (Collapse=True / Type=Dropdown). Makes it a menu button. */
  caret: { type: Boolean, default: false },
  /** With caret: whether the menu is open (Figma State=Playing) */
  expanded: { type: Boolean, default: false },
  /** With caret: value for aria-haspopup */
  haspopup: { type: String, default: "menu" },
  /** Trailing remove button (Collapse=True, Activated) */
  removable: { type: Boolean, default: false },
  /** Accessible name of the remove button, e.g. "Remove Casual Dining" */
  removeLabel: { type: String, default: "Remove" },
  /** Trailing muted count badge (Badge=True) */
  badge: { type: [Number, String], default: undefined },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(["update:selected", "remove", "click"]);

const isToggle = computed(() => !props.caret && !props.removable && props.selected !== undefined);

function onClick(event) {
  if (props.disabled) return;
  if (isToggle.value) emit("update:selected", !props.selected);
  emit("click", event);
}
</script>
