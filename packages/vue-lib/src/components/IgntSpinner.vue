<template>
  <svg
    class="animate-spin"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="`width: 1em; height: 1em`"
  >
    <path
      d="M30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30"
      stroke="black"
      :stroke-width="getStrokeWidth"
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  size: {
    type: Number,
    default: 32,
  },
});

const getStrokeWidth = computed(() => (props.size > 32 ? 3 : 4));
</script>

<style>
.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
