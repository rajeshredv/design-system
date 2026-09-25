<!--
  Dropdown — trigger button + DropdownMenu.
  Figma: "Dropdown" 3167:2208 (Default · Hover · Open · Disabled) opening a
  "Dropdown menu" 3167:2272.

  Styles live in dropdown.css, menu.css and icon.css; this SFC has no <style>
  block. Load tokens.css, icon.css, dropdown.css and menu.css globally.

  Usage:
    <Dropdown label="Sort by contact" :items="sortItems" v-model="sort" selectable />
    <Dropdown label="Actions" size="medium" :items="actions" @select="run" />
    <Dropdown label="Time zone" size="search" :items="zones" v-model="zone" />
-->
<template>
  <div ref="wrap" class="dropdown-wrap" :class="{ 'dropdown-wrap--end': align === 'end' }">
    <button
      ref="trigger"
      type="button"
      class="dropdown"
      :aria-haspopup="size === 'search' ? 'listbox' : 'menu'"
      :aria-expanded="String(open)"
      :aria-controls="open ? menuId : undefined"
      :disabled="disabled"
      @click="toggle"
      @keydown="onTriggerKeydown"
    >
      <slot>{{ label }}</slot>
      <span class="dropdown__chevron" aria-hidden="true"></span>
    </button>

    <DropdownMenu
      v-if="open"
      :id="menuId"
      ref="menu"
      :items="items"
      :size="size"
      :model-value="modelValue"
      :selectable="selectable"
      :label="menuLabel || label"
      :search-placeholder="searchPlaceholder"
      @select="onSelect"
      @close="close"
    />
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref } from "vue";
import DropdownMenu from "./DropdownMenu.vue";

let uid = 0;

const props = defineProps({
  /** Trigger text (or use the default slot). */
  label: { type: String, default: "" },
  /** [{ value, label, icon?, badge?, badgeMuted?, negative?, disabled? }] */
  items: { type: Array, required: true },
  /** Menu size: "small" · "medium" · "search" */
  size: { type: String, default: "small" },
  /** Selected value (v-model). */
  modelValue: { type: [String, Number], default: undefined },
  /** Single-choice menu: rows become menuitemradio with a check-mark. */
  selectable: { type: Boolean, default: false },
  /** Frame 57505 — the trigger at 50% opacity. */
  disabled: { type: Boolean, default: false },
  /** Align the menu with the trigger's start or end edge. */
  align: { type: String, default: "start" },
  /** Accessible name for the menu (defaults to the trigger label). */
  menuLabel: { type: String, default: undefined },
  searchPlaceholder: { type: String, default: "Search" },
});

const emit = defineEmits(["update:modelValue", "select", "open", "close"]);

const open = ref(false);
const wrap = ref(null);
const trigger = ref(null);
const menu = ref(null);
const menuId = `ds-dropdown-menu-${++uid}`;

async function show(focus = "first") {
  if (props.disabled || open.value) return;
  open.value = true;
  emit("open");
  document.addEventListener("pointerdown", onOutside, true);
  await nextTick();
  if (focus === "last") menu.value?.focusLast();
  else menu.value?.focusFirst();
}

function close({ restoreFocus = true } = {}) {
  if (!open.value) return;
  open.value = false;
  emit("close");
  document.removeEventListener("pointerdown", onOutside, true);
  if (restoreFocus) trigger.value?.focus();
}

function toggle() {
  open.value ? close() : show();
}

function onTriggerKeydown(event) {
  if (event.key === "ArrowDown") { event.preventDefault(); show("first"); }
  else if (event.key === "ArrowUp") { event.preventDefault(); show("last"); }
}

function onOutside(event) {
  if (!wrap.value?.contains(event.target)) close({ restoreFocus: false });
}

function onSelect(item) {
  emit("update:modelValue", item.value);
  emit("select", item);
  close();
}

onBeforeUnmount(() => document.removeEventListener("pointerdown", onOutside, true));
</script>
