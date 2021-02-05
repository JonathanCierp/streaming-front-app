<template>
  <div class="categories">
    <thread :cards="cardsCategories" />
    <thread title="Vidéos les plus vues" style="margin-top: 4rem;" :cards="cards" />
    <thread title="Vidéos récentes" style="margin-top: 4rem;" :cards="cards" />
  </div>
</template>

<script>
  export default {
    name: "categories-home",
    data() {
      return {
        cardsCategories: [
          {
            title: "Vidéo",
            type: "category"
          },
          {
            title: "Film",
            type: "category"
          },
          {
            title: "Musique",
            type: "category"
          },
          {
            title: "Audio",
            type: "category"
          },
          {
            title: "Texte",
            type: "category"
          },
          {
            title: "Livre",
            type: "category"
          },
          {
            title: "Photographie",
            type: "category"
          },
          {
            title: "Catégorie 8",
            type: "category"
          },
          {
            title: "Texte",
            type: "category"
          },
          {
            title: "Livre",
            type: "category"
          },
          {
            title: "Photographie",
            type: "category"
          },
          {
            title: "Catégorie 8",
            type: "category"
          },
          {
            title: "Texte",
            type: "category"
          },
          {
            title: "Livre",
            type: "category"
          },
          {
            title: "Photographie",
            type: "category"
          },
          {
            title: "Catégorie 8",
            type: "category"
          },
          {
            title: "Catégorie 99",
            type: "category"
          },
          {
            title: "Catégorie 100",
            type: "category"
          }
        ],
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
