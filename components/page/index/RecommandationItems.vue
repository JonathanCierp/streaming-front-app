<template>
  <div class="recommandation-items">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "recommandation-items"
  }
</script>

<style lang="scss" scoped>
  .recommandation-items {
    @apply px-8 pt-8;

    max-height: 500px;
  }
</style>
