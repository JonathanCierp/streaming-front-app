<template>
  <div class="thread">
    <section class="thread__section">
      <h2>{{ title }}</h2>
      <div>
        <div v-if="translate < minX" class="thread__section__left" @click="onTranslateLeft">
          <icon-chevron-left />
        </div>
          <base-card-group ref="sectionGroup" class="thread__section__group" :style="[minXStyle, maxXStyle]">
            <div ref="cardGroup" class="thread__section__group__group" :style="[translateStyle]">
              <base-card v-for="(card, i) in cards" :key="i" :card="card" />
            </div>
          </base-card-group>
        <div v-if="translate > -maxX" class="thread__section__right" @click="onTranslateRight">
          <icon-chevron-right />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "thread",
    props: {
      title: {
        type: String,
        default: null
      },
      cards: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        translate: 0,
        maxWidth: 0
      }
    },
    mounted() {
      this.maxWidth = (this.$refs.cardGroup.offsetWidth - this.$refs.sectionGroup.$el.offsetWidth) + 50
    },
    methods: {
      onTranslateLeft() {
        this.translateStyle = this.$refs.cardGroup.offsetWidth / this.cards.length
      },
      onTranslateRight() {
        this.translateStyle = -this.$refs.cardGroup.offsetWidth / this.cards.length
      }
    },
    computed: {
      translateStyle: {
        get() {
          return {
            transform: `translateX(${this.translate}px)`
          }
        },
        set(v) {
          this.translate += v
        }
      },
      minX() {
        return 0
      },
      maxX() {
        return this.maxWidth
      },
      minXStyle() {
        return this.translate < this.minX ? {
          "margin-left": "6rem"
        } : {}
      },
      maxXStyle() {
        return this.translate > -this.maxX ? {
          "margin-right": "6rem"
        } : {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .thread {
    & .thread__section h2 {
      @apply text-2xl font-semibold mb-8;
    }

    & .thread__section > div {
      @apply relative;
    }

    & .thread__section .thread__section__group {
      @apply transition-all duration-300;

      .thread__section__group__group {
        @apply flex transition-transform duration-300;
      }
    }

    & .thread__section__left, & .thread__section__right {
      @apply absolute z-10 cursor-pointer;
      top: 50%;
      transform: translate(0, -70%);

      & svg {
        height: 5rem;
        width: 5rem;
      }
    }

    & .thread__section__left {
      @apply left-0;
    }

    & .thread__section__right {
      @apply right-0;
    }
  }
</style>
