<!--
  NoticeMessage — Figma "Component 7" 3311:2594 (Property 1: With sub · No sub)
  Styles live in notice-message.css; load it (and tokens.css) globally.
  This component has no <style> block on purpose.

  <NoticeMessage title="You have been logged out" :text="subtext" />
  <NoticeMessage title="Arattai is active in another window…" />   (No sub)
  Line breaks ("\n") in `text` are kept.
-->
<template>
  <div class="notice-message">
    <component :is="titleTag" class="notice-message__title">
      <slot name="title">{{ title }}</slot>
    </component>
    <p v-if="text || $slots.default" class="notice-message__text">
      <slot>{{ text }}</slot>
    </p>
  </div>
</template>

<script setup>
defineProps({
  /** Main message. */
  title: { type: String, default: "" },
  /** Supporting copy. Leave empty for the "No sub" variant. */
  text: { type: String, default: "" },
  /** Heading element for the title, so it fits the page outline. */
  titleTag: { type: String, default: "h2" },
});
</script>
