<template>
  <div class="direct-category-items">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "direct-category-items"
  }
</script>

<style lang="scss" scoped>
  .direct-category-items {
    @apply flex flex-wrap;
  }
</style>
