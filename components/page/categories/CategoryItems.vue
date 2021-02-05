<template>
  <div class="category-items">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "category-items"
  }
</script>

<style lang="scss" scoped>
  .category-items {
    @apply flex overflow-hidden;
  }
</style>
