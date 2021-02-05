<template>
  <div class="base-card-group">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "base-card-group"
  }
</script>

<style lang="scss" scoped>
  .base-card-group {
    @apply flex overflow-hidden;
  }
</style>
