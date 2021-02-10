<template>
  <section class="research-categories-categories-item" @click="onclickItem" :class="[selectedClass]">
<!--    <component :is="item.icon" />-->
    <h2>{{ item.name }}</h2>
  </section>
</template>

<script>
  import IconAudio from "@/components/icons/medias/IconAudio"
  import IconImage from "@/components/icons/medias/IconImage"
  import IconText from "@/components/icons/medias/IconText"
  import IconVideo from "@/components/icons/medias/IconVideo"

  export default {
    name: "research-categories-categories-item",
    components: {
      IconAudio,
      IconImage,
      IconText,
      IconVideo
    },
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
        return this.selectItem ? "research-categories-categories-item--selected" : ""
      }
    }
  }
</script>

<style lang="scss" scoped>
  .research-categories-categories-item {
    @apply flex flex-col items-center justify-center w-32 h-32 cursor-pointer rounded-lg mr-4;


    & svg {
      @apply w-10 h-10;
    }

    & h2 {
      @apply text-center text-lg mt-2;
    }
  }

  .dark1-mode .research-categories-categories-item {
    &.research-categories-categories-item--selected, &:hover {
      @apply bg-background-secondary-hover-dark1;
    }
  }

  .dark2-mode .research-categories-categories-item {
    &.research-categories-categories-item--selected, &:hover {
      @apply bg-background-secondary-hover-dark2;
    }
  }

  .dark3-mode .research-categories-categories-item {
    &.research-categories-categories-item--selected, &:hover {
      @apply bg-background-secondary-hover-dark3;
    }
  }
</style>
