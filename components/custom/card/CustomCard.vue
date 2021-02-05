<template>
  <article class="custom-card">
    <slot></slot>
  </article>
</template>

<script>
  export default {
    name: "custom-card"
  }
</script>

<style lang="scss" scoped>
  // Light mode
  .custom-card {

  }

  .dark1-mode .custom-card {
    @apply bg-background-primary-dark1;

  }

  .dark2-mode .custom-card {
    @apply bg-background-primary-dark2;

  }

  .dark3-mode .custom-card {
    @apply bg-background-primary-dark3;

  }
</style>
