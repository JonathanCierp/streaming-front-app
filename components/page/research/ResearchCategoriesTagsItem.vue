<template>
  <div class="research-categories-tags-item" @click="onclickItem" :class="[selectedClass]">
    <custom-tag class="research-categories-tags-item__tag" color="secondary">
      {{ item.label }}
    </custom-tag>
  </div>
</template>

<script>
  export default {
    name: "research-categories-tags-item",
    props: {
      item: {
        type: Object,
        default: () => {}
      },
      selected: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        selectItem: this.selected
      }
    },
    methods: {
      onclickItem() {
        if(this.selectItem) {
          this.selectItem = false
          this.$emit("unselect", this.item)
        }else {
          this.selectItem = true
          this.$emit("select", this.item)
        }
      }
    },
    computed: {
      selectedClass() {
        return this.selectItem ? "research-categories-tags-item--selected" : ""
      }
    }
  }
</script>

<style lang="scss" scoped>
  .research-categories-tags-item {
    @apply flex flex-col items-center py-2 px-4 cursor-pointer rounded-lg mr-4;
  }

  .dark1-mode .research-categories-tags-item {
    &.research-categories-tags-item--selected, &:hover {
      @apply bg-background-secondary-hover-dark1;
    }
  }

  .dark2-mode .research-categories-tags-item {
    &.research-categories-tags-item--selected, &:hover {
      @apply bg-background-secondary-hover-dark2;
    }
  }

  .dark3-mode .research-categories-tags-item {
    &.research-categories-tags-item--selected, &:hover {
      @apply bg-background-secondary-hover-dark3;
    }
  }
</style>
