<template>
  <div class="my-channel-items">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "my-channel-items"
  }
</script>

<style lang="scss" scoped>
  .my-channel-items {
    @apply px-8 pt-8;

    max-height: 500px;
  }
</style>
