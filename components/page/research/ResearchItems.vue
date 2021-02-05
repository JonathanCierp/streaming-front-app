<template>
  <div class="research-items">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "research-items"
  }
</script>

<style lang="scss" scoped>
  .research-items {
    @apply mx-auto flex flex-col items-center my-8;
    width: 800px;
  }
</style>
