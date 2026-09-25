<!--
  DropdownMenu — the floating panel.
  Figma: "Dropdown menu" 3167:2272 (Small · Medium · Small-search selection)

  Styles live in menu.css (and icon.css); this SFC has no <style> block.
  Load tokens.css, icon.css and menu.css globally in your app.

  size="small" | "medium"  → role="menu" with menuitem rows
                             (menuitemradio rows when `selectable`)
  size="search"            → search field (role="combobox") + role="listbox"
                             of options, using aria-activedescendant

  Keyboard: ↑/↓ move, Home/End jump, letters jump to the next matching row,
  Enter/Space activate, Escape and Tab emit "close".
-->
<template>
  <div
    v-if="size === 'search'"
    ref="root"
    class="menu menu--search"
    @keydown="onSearchKeydown"
  >
    <div class="menu__search">
      <div class="menu__search-field">
        <span class="icon icon--24" :style="{ '--icon': `url(${searchIcon})` }" aria-hidden="true"></span>
        <input
          ref="search"
          v-model="query"
          class="menu__search-input"
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded="true"
          :aria-controls="listId"
          :aria-activedescendant="activeIndex >= 0 ? optionId(activeIndex) : undefined"
          :aria-label="label || searchPlaceholder"
          :placeholder="searchPlaceholder"
          autocomplete="off"
        />
      </div>
    </div>
    <div :id="listId" class="menu__list" role="listbox" :aria-label="label">
      <MenuItem
        v-for="(item, i) in filtered"
        :id="optionId(i)"
        :key="item.value"
        role="option"
        :label="item.label"
        :icon="item.icon"
        :badge="item.badge"
        :badge-muted="item.badgeMuted"
        :negative="item.negative"
        :disabled="item.disabled"
        :checked="item.value === modelValue"
        :active="i === activeIndex"
        @mousemove="activeIndex = i"
        @select="choose(item)"
      />
      <div v-if="!filtered.length" class="menu__empty" role="presentation">No results</div>
    </div>
  </div>

  <div
    v-else
    ref="root"
    class="menu"
    :class="`menu--${size}`"
    role="menu"
    :aria-label="label"
    @keydown="onMenuKeydown"
  >
    <MenuItem
      v-for="item in items"
      :key="item.value"
      :role="selectable ? 'menuitemradio' : 'menuitem'"
      :label="item.label"
      :icon="item.icon"
      :badge="item.badge"
      :badge-muted="item.badgeMuted"
      :negative="item.negative"
      :disabled="item.disabled"
      :checked="selectable && item.value === modelValue"
      @select="choose(item)"
    />
  </div>
</template>

<script setup>
import { computed, nextTick, ref, watch } from "vue";
import MenuItem from "./MenuItem.vue";

let uid = 0;

const props = defineProps({
  /** [{ value, label, icon?, badge?, badgeMuted?, negative?, disabled? }] */
  items: { type: Array, required: true },
  /** "small" · "medium" · "search" (Small-search selection) */
  size: { type: String, default: "small" },
  /** Selected value — shows the check-mark on that row. */
  modelValue: { type: [String, Number], default: undefined },
  /** Render rows as menuitemradio (single choice) instead of menuitem. */
  selectable: { type: Boolean, default: false },
  /** Accessible name of the menu / listbox. */
  label: { type: String, default: undefined },
  searchPlaceholder: { type: String, default: "Search" },
  /** Icon URL for the search field. */
  searchIcon: { type: String, default: "assets/icons/search.svg" },
});

const emit = defineEmits(["select", "update:modelValue", "close"]);

const root = ref(null);
const search = ref(null);
const query = ref("");
const activeIndex = ref(-1);
const listId = `ds-menu-list-${++uid}`;
const optionId = (i) => `${listId}-opt-${i}`;

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  return q ? props.items.filter((it) => it.label.toLowerCase().includes(q)) : props.items;
});

watch(filtered, (list) => {
  activeIndex.value = list.length ? 0 : -1;
});

function choose(item) {
  if (item.disabled) return;
  emit("update:modelValue", item.value);
  emit("select", item);
}

/* ---- role="menu": roving focus over the buttons ---- */
function rows() {
  return [...(root.value?.querySelectorAll(".menu-item") ?? [])];
}
function enabledRows() {
  return rows().filter((el) => el.getAttribute("aria-disabled") !== "true");
}
function focusAt(list, index) {
  if (!list.length) return;
  list[(index + list.length) % list.length].focus();
}

function onMenuKeydown(event) {
  const list = enabledRows();
  const current = list.indexOf(document.activeElement);
  switch (event.key) {
    case "ArrowDown": event.preventDefault(); focusAt(list, current + 1); break;
    case "ArrowUp":   event.preventDefault(); focusAt(list, current < 0 ? -1 : current - 1); break;
    case "Home":      event.preventDefault(); focusAt(list, 0); break;
    case "End":       event.preventDefault(); focusAt(list, -1); break;
    case "Escape":    event.preventDefault(); emit("close", { restoreFocus: true }); break;
    case "Tab":       emit("close", { restoreFocus: false }); break;
    default:
      if (event.key.length === 1 && /\S/.test(event.key)) {
        const key = event.key.toLowerCase();
        const start = current + 1;
        const order = [...list.slice(start), ...list.slice(0, start)];
        const hit = order.find((el) => el.textContent.trim().toLowerCase().startsWith(key));
        if (hit) hit.focus();
      }
  }
}

/* ---- size="search": focus stays in the input, aria-activedescendant moves ---- */
function onSearchKeydown(event) {
  const n = filtered.value.length;
  switch (event.key) {
    case "ArrowDown": event.preventDefault(); if (n) activeIndex.value = (activeIndex.value + 1) % n; break;
    case "ArrowUp":   event.preventDefault(); if (n) activeIndex.value = (activeIndex.value - 1 + n) % n; break;
    case "Enter":
      event.preventDefault();
      if (activeIndex.value >= 0) choose(filtered.value[activeIndex.value]);
      break;
    case "Escape": event.preventDefault(); emit("close", { restoreFocus: true }); break;
    case "Tab":    emit("close", { restoreFocus: false }); break;
    default: return;
  }
  nextTick(() => {
    root.value?.querySelector(".menu-item.is-active")?.scrollIntoView({ block: "nearest" });
  });
}

/** Move focus into the menu (called by Dropdown when it opens). */
function focusFirst() {
  if (props.size === "search") {
    const sel = filtered.value.findIndex((it) => it.value === props.modelValue);
    activeIndex.value = sel >= 0 ? sel : filtered.value.length ? 0 : -1;
    search.value?.focus();
    return;
  }
  const list = enabledRows();
  const checked = list.find((el) => el.getAttribute("aria-checked") === "true");
  (checked || list[0])?.focus();
}
function focusLast() {
  if (props.size === "search") return focusFirst();
  focusAt(enabledRows(), -1);
}

defineExpose({ focusFirst, focusLast });
</script>
