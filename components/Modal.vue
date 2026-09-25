<!--
  Modal: Modal- Header (3103:2145) + body + Modal- Footer (3159:2198)
  No styles here: load tokens.css, icon.css, button.css and modal.css
  globally. Built on a native <dialog> opened with showModal(), so focus is
  trapped, Escape closes it and the page behind is inert.

  <Modal v-model:open="show" title="Create group">
    …body…
    <template #footer>
      <button class="btn btn--secondary btn--medium" @click="show = false">Back</button>
      <button class="btn btn--primary btn--medium">Next</button>
    </template>
  </Modal>
-->
<template>
  <dialog
    ref="dialog"
    class="modal"
    :style="width ? { '--modal-width': width } : undefined"
    :aria-labelledby="titleId"
    :aria-describedby="describedby"
    @close="onClose"
    @cancel="onCancel"
    @click="onBackdropClick"
  >
    <header class="modal__header" :class="{ 'modal__header--back': back }">
      <button
        v-if="back"
        type="button"
        class="icon-btn icon-btn--transparent icon-btn--large modal__back"
        :aria-label="backLabel"
        @click="emit('back')"
      >
        <span class="icon icon--24" style="--icon: url(assets/icons/back.svg)" aria-hidden="true"></span>
      </button>

      <h2 :id="titleId" class="modal__title">
        <slot name="title">{{ title }}</slot>
      </h2>

      <div class="modal__actions">
        <!-- Extra header actions, e.g. <button class="icon-btn icon-btn--transparent icon-btn--large" aria-label="Sort">…</button> -->
        <slot name="actions" />
        <button
          v-if="closable"
          type="button"
          class="icon-btn icon-btn--transparent icon-btn--large"
          :aria-label="closeLabel"
          @click="close('close')"
        >
          <span class="icon icon--24" style="--icon: url(assets/icons/close-line2.svg)" aria-hidden="true"></span>
        </button>
      </div>
    </header>

    <div class="modal__body">
      <slot />
    </div>

    <footer v-if="$slots.footer" class="modal__footer">
      <div class="button-flex">
        <slot name="footer" />
      </div>
    </footer>
  </dialog>
</template>

<script setup>
import { ref, watch, onMounted, useId } from "vue";

const props = defineProps({
  /** Open state. Use with v-model:open. */
  open: { type: Boolean, default: false },
  /** Heading text (or use the #title slot). Always required for an accessible name. */
  title: { type: String, default: "" },
  /** Back=True header: back button on the left, centered title. Emits "back". */
  back: { type: Boolean, default: false },
  /** Show the close ✕ button. */
  closable: { type: Boolean, default: true },
  /** Close when the backdrop is clicked. Escape always closes. */
  dismissible: { type: Boolean, default: true },
  /** Width of the surface, e.g. "600px". Figma: 450px. */
  width: { type: String, default: undefined },
  /** id of an element in the body that describes the dialog. */
  describedby: { type: String, default: undefined },
  closeLabel: { type: String, default: "Close" },
  backLabel: { type: String, default: "Back" },
});

const emit = defineEmits(["update:open", "close", "back"]);

const dialog = ref(null);
const titleId = `modal-title-${useId()}`;
let reason = "escape";

function sync(open) {
  const el = dialog.value;
  if (!el) return;
  if (open && !el.open) el.showModal();
  else if (!open && el.open) el.close();
}

/** Close the dialog; `why` is passed on the "close" event. */
function close(why = "close") {
  reason = why;
  dialog.value?.close();
}

function onCancel(event) {
  // Escape key
  reason = "escape";
  if (!props.dismissible) event.preventDefault();
}

function onClose() {
  emit("update:open", false);
  emit("close", reason);
  reason = "escape";
}

function onBackdropClick(event) {
  // Clicks on the ::backdrop target the <dialog> element itself; so do clicks
  // in the gaps inside it, so also check the pointer is outside the box.
  const el = dialog.value;
  if (!props.dismissible || event.target !== el) return;
  const r = el.getBoundingClientRect();
  const inside = event.clientX >= r.left && event.clientX <= r.right && event.clientY >= r.top && event.clientY <= r.bottom;
  if (!inside) close("backdrop");
}

watch(() => props.open, sync);
onMounted(() => sync(props.open));

defineExpose({ close });
</script>
