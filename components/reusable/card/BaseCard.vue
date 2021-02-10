<template>
  <custom-card class="base-card">
    <component :is="cardComponent" :card="card" />
  </custom-card>
</template>

<script>
  import CardAudio from "@/components/reusable/card/CardAudio"
  import CardImage from "@/components/reusable/card/CardImage"
  import CardText from "@/components/reusable/card/CardText"
  import CardVideo from "@/components/reusable/card/CardVideo"
  import CardCategory from "@/components/page/categories/CardCategory"
  import CardChallenge from "@/components/page/challenge/CardChallenge"

  export default {
    name: "base-card",
    components: {
      CardAudio,
      CardImage,
      CardText,
      CardVideo,
      CardCategory,
      CardChallenge
    },
    props: {
      card: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    },
    computed: {
      cardComponent() {
        return `Card${this.ucFirst(this.card.type)}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .base-card {
    @apply mr-6;
    background-color: transparent !important;
  }
</style>
