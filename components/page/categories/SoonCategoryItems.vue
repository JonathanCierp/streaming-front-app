<template>
  <div class="soon-category-items">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "soon-category-items"
  }
</script>

<style lang="scss" scoped>
  .soon-category-items {
    @apply flex flex-wrap;
  }
</style>
