<template>
  <div class="custom-tab-items" role="tablist">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "custom-tab-items",
    props: {
      tab: {
        type: [Number, String]
      }
    },
    model: {
      prop: "tab",
      event: "change"
    },
    data() {
      return {
        tabItems: []
      }
    },
    created() {
      this.tabItems = this.$children
    },
    mounted() {
      this.tabItems.forEach((tabItem, i) => tabItem.setIndex(i))
      this.tabItems[0].$el.classList.add("custom-tab-item--active")
    },
    watch: {
      tab: async function(newVal) {
        this.tabItems.forEach(tabItem => tabItem.$el.classList.remove("custom-tab-item--active"))
        await this.$nextTick()
        this.tabItems[newVal].$el.classList.add("custom-tab-item--active")
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dark1-mode .custom-tab-items {
    @apply bg-background-primary-dark1;
  }

  .dark2-mode .custom-tab-items {
    @apply bg-background-primary-dark2;
  }

  .dark3-mode .custom-tab-items {
    @apply bg-background-primary-dark3;
  }

</style>
