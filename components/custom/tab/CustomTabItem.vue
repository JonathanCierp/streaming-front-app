<template>
  <div class="custom-tab-item" role="tab">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "custom-tab-item",
    data() {
      return {
        index: null
      }
    },
    methods: {
      setIndex(index = null) {
        this.index = index
      },
      getIndex() {
        return this.value || this.index
      }
    }
  }
</script>

<style lang="scss" scoped>
  .custom-tab-item {
    @apply hidden overflow-y-auto;

    &.custom-tab-item--active {
      @apply block;
    }
  }
</style>
