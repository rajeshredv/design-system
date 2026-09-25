<!--
  MenuItem — one row of a Dropdown menu.
  Figma: "Dropdown items - Small" 3167:2219 · "Dropdown items - Medium" 3167:2251

  Styles live in menu.css (and icon.css); this SFC has no <style> block.
  Load tokens.css, icon.css and menu.css globally in your app.

  Size comes from the parent: inside .menu--medium the row renders as Medium,
  otherwise Small. Pass `medium` to force the Medium row outside a menu.
-->
<template>
  <component
    :is="role === 'option' ? 'div' : 'button'"
    :type="role === 'option' ? undefined : 'button'"
    class="menu-item"
    :class="{ 'menu-item--negative': negative, 'menu-item--medium': medium, 'is-active': active }"
    :role="role"
    :tabindex="role === 'option' ? undefined : -1"
    :aria-checked="role === 'menuitemradio' || role === 'menuitemcheckbox' ? String(!!checked) : undefined"
    :aria-selected="role === 'option' ? String(!!checked) : undefined"
    :aria-disabled="disabled ? 'true' : undefined"
    @click="onClick"
  >
    <span
      v-if="icon"
      class="icon menu-item__icon"
      :style="{ '--icon': `url(${icon})` }"
      aria-hidden="true"
    ></span>
    <span class="menu-item__label"><slot>{{ label }}</slot></span>
    <span
      v-if="badge !== undefined && badge !== null && badge !== ''"
      class="menu-item__badge"
      :class="{ 'menu-item__badge--muted': badgeMuted }"
    >{{ badge }}</span>
    <!-- The check-mark (Check-mark=True) is drawn by menu.css from aria-checked / aria-selected -->
  </component>
</template>

<script setup>
const props = defineProps({
  /** Row text (or use the default slot). */
  label: { type: String, default: "" },
  /** URL of a single-color SVG icon (Icon=True). */
  icon: { type: String, default: undefined },
  /** Count shown at the end of the row (Badge=True). */
  badge: { type: [String, Number], default: undefined },
  /** Grey badge (Badge / Muted) instead of yellow. */
  badgeMuted: { type: Boolean, default: false },
  /** Selected — shows the check-mark (Check-mark=True). */
  checked: { type: Boolean, default: false },
  /** Destructive action: text and icon in Negative/800. */
  negative: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  /** Force the Medium row (48px) outside a .menu--medium panel. */
  medium: { type: Boolean, default: false },
  /** Keyboard-highlighted row (used with aria-activedescendant). */
  active: { type: Boolean, default: false },
  /** menuitem · menuitemradio · menuitemcheckbox · option */
  role: { type: String, default: "menuitem" },
});

const emit = defineEmits(["select"]);

function onClick(event) {
  if (props.disabled) {
    event.preventDefault();
    return;
  }
  emit("select", event);
}
</script>
