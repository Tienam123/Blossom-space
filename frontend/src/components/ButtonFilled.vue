<script setup>

</script>

<template>
  <button class="btn flex items-center justify-center gap-1">
      <slot></slot>
    <v-icon name="md-arrowforwardios" scale="0.6"/>  </button>
</template>

<style scoped>
.btn {
  @apply px-6 py-4 rounded-3xl font-semibold;
  border: 2px solid #f49a8f;
  background: #f49a8f;
  transition: all 0.5s;
  &:hover {
    background: transparent;
    color: #f49a8f;
  }
}
</style>