<!--
  IconButtonCluster — styles live in ../icon-button.css (load it once,
  globally, after tokens.css). No styles of its own.

  A row of related icon buttons with a 4px gap (Figma: Icon btn cluster 3103:2067).

  <IconButtonCluster label="Message actions">
    <IconButton label="Sort" icon="/assets/icons/sort-ascending.svg" />
    <IconButton label="More" icon="/assets/icons/more-meatballs.svg" />
    <IconButton label="Close" icon="/assets/icons/close-line2.svg" />
  </IconButtonCluster>
-->
<template>
  <div class="icon-btn-cluster" role="group" :aria-label="label">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  /** Names the group for screen readers, e.g. "Message actions". */
  label: { type: String, required: true },
});
</script>
