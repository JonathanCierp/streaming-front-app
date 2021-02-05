<template>
  <div class="custom-tabs" role="tabpanel">
    <div class="custom-tabs__content" role="tablist" @click="onChangeTabs">
      <slot />
    </div>
    <div ref="slider" class="custom-tabs__slider custom-tabs__slider__bottom"></div>
  </div>
</template>

<script>
  export default {
    name: "custom-tabs",
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
        tabs: []
      }
    },
    created() {
      this.tabs = this.$children
    },
    mounted() {
      this.tabs.forEach((tab, i) => tab.setIndex(i))
      this.tabs[0].$el.classList.add("custom-tab--active")
      this.$refs.slider.style.left = this.tabs[0].$el.offsetLeft + "px"
      this.$refs.slider.style.width = this.tabs[0].$el.offsetWidth + "px"
    },
    methods: {
      async onChangeTabs(e) {
        let element = e.target.closest(".custom-tab")

        this.tabs.forEach(tab => tab.$el.classList.remove("custom-tab--active"))
        this.$refs.slider.style.left = element.offsetLeft + "px"
        this.$refs.slider.style.width = element.offsetWidth + "px"
        element.classList.add("custom-tab--active")

        this.$emit("change", this.tabs.find(tab => tab.$el.classList.contains("custom-tab--active")).getIndex())
      }
    }
  }
</script>

<style lang="scss" scoped>
  .custom-tabs {
    @apply w-full relative;

    & .custom-tabs__content {
      @apply w-full flex items-center;
    }

    & .custom-tabs__slider {
      @apply absolute;
      transition: all .2s;

      &.custom-tabs__slider__bottom {
        @apply bottom-0 h-1;
      }
    }
  }

  .dark1-mode .custom-tabs {
    @apply bg-background-secondary-hover-dark1;

    & .custom-tabs__slider {
      @apply bg-primary-dark1;
    }
  }

  .dark2-mode .custom-tabs {
    @apply bg-background-secondary-hover-dark2;

    & .custom-tabs__slider {
      @apply bg-primary-dark2;
    }
  }

  .dark3-mode .custom-tabs {
    @apply bg-background-secondary-hover-dark3;

    & .custom-tabs__slider {
      @apply bg-primary-dark3;
    }
  }
</style>
