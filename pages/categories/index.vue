<template>
  <main class="categories">
    <thread :cards="$store.getters['category/cardsCategories']" />
    <thread :cards="cards" style="margin-top: 4rem;" title="Vidéos les plus vues" />
    <thread :cards="cards" style="margin-top: 4rem;" title="Vidéos récentes" />
  </main>
</template>

<script>
  export default {
    name: "categories-home",
    async asyncData({ store }) {
      await store.dispatch("category/getCategories")
    },
    data() {
      return {
        cards: [
          {
            title: "Titre de la vidéo",
            type: "video"
          },
          {
            title: "Titre de la vidéo",
            type: "video"
          },
          {
            title: "Titre de la vidéo",
            type: "video"
          },
          {
            title: "Titre de la vidéo",
            type: "video"
          },
          {
            title: "Titre de la vidéo",
            type: "video"
          },
          {
            title: "Titre de la vidéo",
            type: "video"
          },
          {
            title: "Titre de la vidéo",
            type: "video"
          },
          {
            title: "Titre de la vidéo",
            type: "video"
          },
          {
            title: "Titre de la vidéo",
            type: "video"
          },
          {
            title: "Titre de la vidéo",
            type: "video"
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .categories {
    @apply p-8;
  }
</style>
