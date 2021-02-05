<template>
  <li :class="[activeClass]" class="core-header-item" @mouseenter="recalcHeaderSlider('enter')"
      @mouseout="recalcHeaderSlider('out')">
    <nuxt-link v-if="item.key !== 'rechercher'" :to="item.to" class="core-header-item__link">
      {{ item.label }}
    </nuxt-link>
    <div v-else class="core-header-item__link" @click="researchModalOpen = true">
      <icon-outline-search class="core-header-item__link__icon" />
      {{ item.label }}
    </div>
    <div v-if="item.slider" ref="headerSlider" class="core-header-item__slider" :style="[activeSliderStyle]"></div>
  </li>
</template>

<script>
  export default {
    name: "core-header-item",
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      recalcHeaderSlider(type) {
        if(this.item.slider && this.$route.path !== this.item.to) {
          if(type === "enter") {
            this.$refs.headerSlider.style.width = "100%"
          } else {
            this.$refs.headerSlider.style.width = "0"
          }
        }
      }
    },
    computed: {
      researchModalOpen: {
        get() {
          return this.$store.state.researchModalIsOpen
        },
        set(v) {
          this.$store.commit("toggleResearchModal", v)
        }
      },
      activeClass() {
        return this.$route.path === this.item.to ? "core-header-item--active" : ""
      },
      activeSliderStyle() {
        return this.$route.path === this.item.to ? {
          width: "100%"
        } : ""
      }
    }
  }
</script>

<style lang="scss" scoped>
  .core-header-item {
    @apply flex items-center h-full relative;

    /* @TODO : Ajouter background light */
    &--active {
      //@apply bg-background-secondary-hover-dark1;
    }

    & .core-header-item__link {
      @apply text-lg px-8 flex items-center h-full transition-colors duration-200 cursor-pointer;

      /* @TODO : Ajouter background light */
      &:hover {
        //@apply bg-background-secondary-hover-dark1;
      }

      & .core-header-item__link__icon {
        @apply mr-4;
      }
    }

    /* @TODO : Ajouter background light */
    & .core-header-item__slider {
      @apply absolute left-0 bottom-0 h-1 w-0 transition-all duration-300;
    }
  }

  .dark1-mode .core-header-item {
    & .core-header-item__link:hover, &--active {
      @apply bg-background-secondary-hover-dark1;
    }

    & .core-header-item__slider {
      @apply bg-primary-dark1;
    }
  }

  .dark2-mode .core-header-item {
    & .core-header-item__link:hover, &--active {
      @apply bg-background-secondary-hover-dark2;
    }

    & .core-header-item__slider {
      @apply bg-primary-dark2;
    }
  }

  .dark3-mode .core-header-item {
    & .core-header-item__link:hover, &--active {
      @apply bg-background-secondary-hover-dark3;
    }

    & .core-header-item__slider {
      @apply bg-primary-dark3;
    }
  }
</style>
