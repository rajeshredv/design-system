<!--
  LhsBanner — Figma "LHS banner" 3313:2509 (Close: True · False)
  Styles live in lhs-banner.css (+ tokens.css, icon.css, button.css); load
  them globally. This component has no <style> block on purpose.

  <LhsBanner
    icon="assets/icons/bell-notification-sl.svg"
    title="Message notifications are off"
    text="Turn on push notifications to receive alerts for new messages."
    action-label="Turn on"
    closable
    @action="enablePush"
    @close="hide"
  />
-->
<template>
  <section class="lhs-banner" :aria-labelledby="titleId">
    <div class="lhs-banner__info">
      <span
        v-if="icon"
        class="lhs-banner__icon icon"
        :style="{ '--icon': `url(${icon})` }"
        aria-hidden="true"
      ></span>
      <div class="lhs-banner__content">
        <p :id="titleId" class="lhs-banner__title"><slot name="title">{{ title }}</slot></p>
        <p v-if="text || $slots.default" class="lhs-banner__text"><slot>{{ text }}</slot></p>
        <div v-if="actionLabel || $slots.actions" class="lhs-banner__actions">
          <slot name="actions">
            <button type="button" class="btn btn--link" @click="emit('action')">{{ actionLabel }}</button>
          </slot>
        </div>
      </div>
      <button
        v-if="closable"
        type="button"
        class="lhs-banner__close"
        :aria-label="closeLabel"
        @click="emit('close')"
      >
        <span class="icon icon--20" :style="{ '--icon': `url(${closeIcon})` }" aria-hidden="true"></span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { useId } from "vue";

defineProps({
  /** Leading 24px icon (single-color SVG, rendered as a mask). */
  icon: { type: String, default: "" },
  title: { type: String, default: "" },
  text: { type: String, default: "" },
  /** Label of the link button. Omit to hide the action row. */
  actionLabel: { type: String, default: "" },
  /** Close=True: shows the dismiss button. */
  closable: { type: Boolean, default: false },
  closeLabel: { type: String, default: "Dismiss" },
  closeIcon: { type: String, default: "assets/icons/close-line2.svg" },
});

const emit = defineEmits(["action", "close"]);
const titleId = useId();
</script>
