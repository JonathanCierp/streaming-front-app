<template>
  <div class="custom-tab" role="tab" tabindex="0">
    <h2 v-html="title" />
  </div>
</template>

<script>
  export default {
    name: "custom-tab",
    props: {
      title: {
        type: String,
        required: true
      },
      value: {
        type: [String, Number],
        default: null
      }
    },
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
  .custom-tab {
    @apply w-full transition-all duration-200 flex items-center justify-center h-full cursor-pointer relative select-none px-3;

    & h2 {
      @apply font-medium text-lg py-4;
    }
  }

  .dark1-mode .custom-tab {
    &:hover {
      @apply bg-background-primary-dark1;
    }

    &.custom-tab--active {
      @apply bg-background-primary-dark1;
    }
  }

  .dark2-mode .custom-tab {
    &:hover {
      @apply bg-background-primary-dark2;
    }

    &.custom-tab--active {
      @apply bg-background-primary-dark2;
    }
  }

  .dark3-mode .custom-tab {
    &:hover {
      @apply bg-background-primary-dark3;
    }

    &.custom-tab--active {
      @apply bg-background-primary-dark3;
    }
  }
</style>
