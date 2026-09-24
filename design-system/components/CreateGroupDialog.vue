<!--
  CreateGroupDialog — Figma "Frame 1171279598" 3158:2296 (single component)
  Styles live in create-group-dialog.css (+ tokens.css, icon.css,
  button.css); load them globally. This component has no <style> block on
  purpose.

  A native <dialog> opened with showModal() while `open` is true: focus is
  trapped, Escape closes it (emits "close"), the page behind is inert.

  <CreateGroupDialog
    v-model:open="show"
    v-model:name="name"
    v-model:description="about"
    :photo="groupPhotoUrl"
    @change-photo="pickPhoto"
    @settings="openSettings"
    @back="show = false"
    @next="createGroup"
  />
-->
<template>
  <dialog ref="dialogEl" class="create-group" :aria-labelledby="ids.title" @close="onNativeClose">
    <form method="dialog" class="create-group__form" @submit.prevent="emit('next')">
      <div class="create-group__main">
        <header class="create-group__header">
          <h2 :id="ids.title" class="create-group__title">{{ title }}</h2>
          <button type="button" class="create-group__icon-btn" :aria-label="closeLabel" @click="close">
            <span class="icon" style="--icon: url(assets/icons/close-line2.svg)" aria-hidden="true"></span>
          </button>
        </header>

        <div class="create-group__body">
          <div class="create-group__photo-picker">
            <button type="button" class="create-group__photo" :aria-describedby="ids.hint" :aria-label="photoLabel" @click="emit('change-photo')">
              <img v-if="photo" :src="photo" alt="" />
            </button>
            <p :id="ids.hint" class="create-group__photo-hint">
              <span class="icon" style="--icon: url(assets/icons/info-line.svg)" aria-hidden="true"></span>
              {{ photoHint }}
            </p>
          </div>

          <div class="create-group__field">
            <div class="create-group__field-box">
              <label class="create-group__control">
                <span class="create-group__label">
                  {{ nameLabel }} <span class="create-group__required" aria-hidden="true">*</span>
                </span>
                <input
                  class="create-group__input"
                  type="text"
                  placeholder=" "
                  required
                  :maxlength="nameMaxLength"
                  :value="name"
                  @input="emit('update:name', $event.target.value)"
                />
              </label>
              <button type="button" class="create-group__icon-btn" :aria-label="emojiLabel" @click="emit('emoji')">
                <span class="icon" style="--icon: url(assets/icons/emoji-smiley.svg)" aria-hidden="true"></span>
              </button>
            </div>
          </div>

          <div class="create-group__field create-group__field--large">
            <div class="create-group__field-box">
              <label class="create-group__control">
                <span class="create-group__label">{{ descriptionLabel }}</span>
                <textarea
                  class="create-group__input"
                  placeholder=" "
                  :maxlength="descriptionMaxLength"
                  :value="description"
                  @input="emit('update:description', $event.target.value)"
                ></textarea>
              </label>
            </div>
          </div>

          <button type="button" class="create-group__settings" @click="emit('settings')">
            <span class="create-group__settings-label">
              <span class="icon" style="--icon: url(assets/icons/filter-settings-line.svg)" aria-hidden="true"></span>
              {{ settingsLabel }}
            </span>
            <span class="create-group__chevron icon" style="--icon: url(assets/icons/arrow-right-line.svg)" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      <footer class="create-group__footer">
        <button type="button" class="btn btn--secondary btn--medium" @click="emit('back')">{{ backLabel }}</button>
        <button type="submit" class="btn btn--primary btn--medium">{{ nextLabel }}</button>
      </footer>
    </form>
  </dialog>
</template>

<script setup>
import { ref, watch, onMounted, useId } from "vue";

const props = defineProps({
  /** Opens / closes the dialog. Use with v-model:open. */
  open: { type: Boolean, default: false },
  title: { type: String, default: "Create group" },
  /** Group photo URL (product content). */
  photo: { type: String, default: "" },
  photoLabel: { type: String, default: "Change group icon" },
  photoHint: { type: String, default: "Set Group Icon (optional)" },
  name: { type: String, default: "" },
  nameLabel: { type: String, default: "Group name" },
  nameMaxLength: { type: Number, default: undefined },
  description: { type: String, default: "" },
  descriptionLabel: { type: String, default: "Description" },
  descriptionMaxLength: { type: Number, default: undefined },
  settingsLabel: { type: String, default: "Group settings" },
  backLabel: { type: String, default: "Back" },
  nextLabel: { type: String, default: "Next" },
  closeLabel: { type: String, default: "Close" },
  emojiLabel: { type: String, default: "Insert emoji" },
});

const emit = defineEmits([
  "update:open", "update:name", "update:description",
  "close", "back", "next", "change-photo", "emoji", "settings",
]);

const dialogEl = ref(null);
const uid = useId();
const ids = { title: `${uid}-title`, hint: `${uid}-hint` };

function sync(open) {
  const el = dialogEl.value;
  if (!el) return;
  if (open && !el.open) el.showModal();
  if (!open && el.open) el.close();
}

function close() {
  dialogEl.value?.close();
}

// Escape key, close button and method="dialog" all end here
function onNativeClose() {
  emit("update:open", false);
  emit("close");
}

watch(() => props.open, sync);
onMounted(() => sync(props.open));
</script>
