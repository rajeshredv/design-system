<!--
  ConfirmDialog: Confirmation dialog (3139:2366) with a Button flex (3139:2395) row
  No styles here: load tokens.css, icon.css, button.css and modal.css
  globally. Built on a native <dialog> opened with showModal().

  Figma variants → props
    Place=Inside chat window   place="inside"  (default)
    Place=Outside chat window  place="outside" (centered text, 44px buttons)
    Subtext=True               description="…"
    Icon=True                  icon (warning glyph, title in Negative/800)

  <ConfirmDialog
    v-model:open="ask"
    title="Delete channel"
    description="The messages will be lost forever…"
    icon
    tone="danger"
    acknowledge="I am aware that the action cannot be reverted & I agree to proceed"
    confirm-label="Delete"
    @confirm="remove"
  />
-->
<template>
  <dialog
    ref="dialog"
    class="confirm"
    :class="{ 'confirm--outside': place === 'outside' }"
    :role="tone === 'danger' ? 'alertdialog' : undefined"
    :aria-labelledby="`${uid}-title`"
    :aria-describedby="description || $slots.default ? `${uid}-desc` : undefined"
    @close="onClose"
    @cancel="onCancel"
  >
    <div class="confirm__text">
      <div v-if="icon" class="confirm__heading">
        <span class="icon confirm__icon" style="--icon: url(assets/icons/warning-fill.svg)" aria-hidden="true"></span>
        <h2 :id="`${uid}-title`" class="confirm__title">{{ title }}</h2>
      </div>
      <h2 v-else :id="`${uid}-title`" class="confirm__title">{{ title }}</h2>

      <p v-if="description || $slots.default" :id="`${uid}-desc`" class="confirm__description">
        <slot>{{ description }}</slot>
      </p>

      <label v-if="acknowledge" class="confirm__ack">
        <input v-model="acknowledged" type="checkbox" class="checkbox" />
        {{ acknowledge }}
      </label>
    </div>

    <div class="button-flex" :class="{ 'button-flex--large': place === 'outside' }">
      <!-- Property 1=Aux: link actions on the left -->
      <div v-if="$slots.aux" class="button-flex__aux"><slot name="aux" /></div>

      <slot name="actions">
        <button
          v-if="cancelLabel"
          type="button"
          class="btn btn--secondary"
          :class="sizeClass"
          autofocus
          @click="finish('cancel')"
        >{{ cancelLabel }}</button>
        <button
          type="button"
          class="btn"
          :class="[confirmClass, sizeClass]"
          :disabled="!!acknowledge && !acknowledged"
          @click="finish('confirm')"
        >{{ confirmLabel }}</button>
      </slot>
    </div>
  </dialog>
</template>

<script setup>
import { computed, ref, watch, onMounted, useId } from "vue";

const props = defineProps({
  /** Open state. Use with v-model:open. */
  open: { type: Boolean, default: false },
  title: { type: String, required: true },
  /** Subtext=True */
  description: { type: String, default: "" },
  /** "inside" (Place=Inside chat window) or "outside" (Place=Outside chat window) */
  place: { type: String, default: "inside", validator: (v) => ["inside", "outside"].includes(v) },
  /** Icon=True: warning glyph and a Negative/800 title */
  icon: { type: Boolean, default: false },
  /** "danger" uses the negative button and role="alertdialog" */
  tone: { type: String, default: "default", validator: (v) => ["default", "danger"].includes(v) },
  /** Checkbox label; the confirm button stays disabled until it is ticked. */
  acknowledge: { type: String, default: "" },
  confirmLabel: { type: String, default: "OK" },
  /** Pass an empty string to hide the cancel button (e.g. "Log in" only). */
  cancelLabel: { type: String, default: "Cancel" },
});

const emit = defineEmits(["update:open", "confirm", "cancel"]);

const uid = `confirm-${useId()}`;
const dialog = ref(null);
const acknowledged = ref(false);
let result = "cancel";

const sizeClass = computed(() => (props.place === "outside" ? "btn--large" : "btn--medium"));
const confirmClass = computed(() => (props.tone === "danger" ? "btn--negative" : "btn--primary"));

function sync(open) {
  const el = dialog.value;
  if (!el) return;
  if (open && !el.open) {
    acknowledged.value = false;
    result = "cancel";
    el.showModal();
  } else if (!open && el.open) el.close();
}

function finish(value) {
  result = value;
  dialog.value?.close();
}

function onCancel() {
  result = "cancel"; // Escape
}

function onClose() {
  emit("update:open", false);
  emit(result === "confirm" ? "confirm" : "cancel");
}

watch(() => props.open, sync);
onMounted(() => sync(props.open));

defineExpose({ confirm: () => finish("confirm"), cancel: () => finish("cancel") });
</script>
