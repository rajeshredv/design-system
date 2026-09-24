<!--
  ChatActionBar — Figma "Chat window action bar" 3315:2471
  Property 1: Plain text message (variant="pinned") · Video (variant="requests")
  Styles live in chat-action-bar.css (+ tokens.css, icon.css, button.css);
  load them globally. This component has no <style> block on purpose.

  <ChatActionBar variant="pinned" sender="Abishek:" media="photo"
                 text="This is the spot we are currently planning, Every day."
                 @open="scrollToPinned" />

  <ChatActionBar variant="requests" :avatars="[{ src: a1 }, { src: a2 }, { src: a3 }]"
                 label="3 new join requests" action-label="View"
                 @action="openRequests" @close="dismiss" />
-->
<template>
  <div
    v-if="variant === 'pinned'"
    class="chat-action-bar chat-action-bar--pinned"
    role="region"
    :aria-label="regionLabel || 'Pinned message'"
  >
    <span class="chat-action-bar__pin icon" :style="{ '--icon': `url(${pinIcon})` }" aria-hidden="true"></span>
    <button type="button" class="chat-action-bar__message" @click="emit('open')">
      <span v-if="sender" class="chat-action-bar__sender">{{ sender }}</span>
      <span
        v-if="media"
        class="chat-action-bar__media icon icon--16"
        :style="{ '--icon': `url(${mediaIcon})` }"
        role="img"
        :aria-label="mediaLabel"
      ></span>
      <span class="chat-action-bar__text"><slot>{{ text }}</slot></span>
    </button>
  </div>

  <div
    v-else
    class="chat-action-bar chat-action-bar--requests"
    role="region"
    :aria-label="regionLabel || 'Join requests'"
  >
    <div class="chat-action-bar__main">
      <div class="chat-action-bar__summary">
        <span v-if="avatars.length" class="chat-action-bar__avatars">
          <img
            v-for="(avatar, i) in avatars"
            :key="avatar.src + i"
            class="chat-action-bar__avatar"
            :src="avatar.src"
            :alt="avatar.alt || ''"
          />
        </span>
        <span class="chat-action-bar__label"><slot>{{ label }}</slot></span>
      </div>
      <button
        v-if="actionLabel"
        type="button"
        class="btn btn--secondary btn--small chat-action-bar__action"
        @click="emit('action')"
      >{{ actionLabel }}</button>
    </div>
    <button type="button" class="chat-action-bar__close" :aria-label="closeLabel" @click="emit('close')">
      <span class="icon" :style="{ '--icon': `url(${closeIcon})` }" aria-hidden="true"></span>
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** "pinned" = Plain text message, "requests" = Video (join requests). */
  variant: { type: String, default: "pinned", validator: (v) => ["pinned", "requests"].includes(v) },
  /** Accessible name of the strip. */
  regionLabel: { type: String, default: "" },

  // ---- pinned
  sender: { type: String, default: "" },
  text: { type: String, default: "" },
  /** Attachment type shown before the text: "photo" or "" for none. */
  media: { type: String, default: "" },
  mediaLabel: { type: String, default: "Photo" },
  pinIcon: { type: String, default: "assets/icons/pin-2-line.svg" },

  // ---- requests
  /** [{ src, alt }] — shown as overlapping 32px circles. */
  avatars: { type: Array, default: () => [] },
  label: { type: String, default: "" },
  actionLabel: { type: String, default: "View" },
  closeLabel: { type: String, default: "Dismiss" },
  closeIcon: { type: String, default: "assets/icons/close.svg" },
});

const emit = defineEmits(["open", "action", "close"]);

const mediaIcon = computed(() =>
  props.media === "photo" ? "assets/icons/image-gallery-line.svg" : ""
);
</script>
