<template>
  <div class="chaine-details">
    <div class="chaine-details__chaine">
      <div class="chaine-details__chaine__categories">
        <section class="chaine-details__chaine__categories__section">
          <h2>Catégories de la chaîne</h2>
          <div>
            <custom-tag>Vidéo</custom-tag>
            <custom-tag>Image</custom-tag>
            <custom-tag>Cuisine</custom-tag>
            <custom-tag>Gaming</custom-tag>
            <custom-tag>Fille</custom-tag>
          </div>
        </section>
        <section class="chaine-details__chaine__categories__section">
          <h2>Tags de la chaîne</h2>
          <div>
            <custom-tag>Vidéo</custom-tag>
            <custom-tag>Image</custom-tag>
            <custom-tag>Cuisine</custom-tag>
            <custom-tag>Gaming</custom-tag>
            <custom-tag>Fille</custom-tag>
          </div>
        </section>
      </div>
      <div class="chaine-details__chaine__soon">

      </div>
    </div>
    <thread class="chaine-details__thread" title="Nouveautés" :cards="cards" style="margin-top: 1rem;" />
    <thread class="chaine-details__thread" title="Top de la chaîne" style="margin-top: 4rem;" :cards="cards" />
  </div>
</template>

<script>
  export default {
    name: "chaine-details",
    data() {
      return {
        cards: [
          {
            title: "Titre de l'audio",
            type: "audio"
          },
          {
            title: "Titre de l'image",
            type: "image"
          },
          {
            title: "Titre du texte",
            type: "text"
          },
          {
            title: "Titre de la vidéo",
            type: "video"
          },
          {
            title: "Titre de l'audio",
            type: "audio"
          },
          {
            title: "Titre de l'image",
            type: "image"
          },
          {
            title: "Titre du texte",
            type: "text"
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
  .chaine-details {
    & .chaine-details__chaine {
      @apply flex mt-10;

      & .chaine-details__chaine__categories {
        @apply w-1/5 mr-4 p-4;
        height: 250px;

        & .chaine-details__chaine__categories__section {
          height: 50%;

          & h2 {
            @apply text-lg font-medium mb-2;
          }
        }
      }

      & .chaine-details__chaine__soon {
        @apply w-4/5;
        height: 250px;
      }
    }
  }

  .dark1-mode .chaine-details {
    & .chaine-details__chaine {
      & .chaine-details__chaine__categories, & .chaine-details__chaine__soon {
        @apply bg-background-secondary-hover-dark1;
      }
    }
  }

</style>
