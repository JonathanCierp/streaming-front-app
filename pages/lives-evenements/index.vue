<template>
  <main class="lives-evenements">
    <div class="lives-evenements__cards">
      <custom-card class="lives-evenements__cards__card">
        <h2>Direct</h2>
        <div class="lives-evenements__cards__card__separator"></div>
        <custom-tabs v-model="tab1">
          <custom-tab title="Chaînes suivies <sup>(6)</sup>" />
          <custom-tab title="Recommandés <sup>(6)</sup>" />
        </custom-tabs>
        <custom-tab-items v-model="tab1">
          <custom-tab-item>
            <direct-category-items>
              <direct-category-item />
              <direct-category-item />
              <direct-category-item />
              <direct-category-item />
              <direct-category-item />
              <direct-category-item />
            </direct-category-items>
          </custom-tab-item>
          <custom-tab-item>
            <direct-category-items>
              <direct-category-item />
              <direct-category-item />
              <direct-category-item />
              <direct-category-item />
              <direct-category-item />
              <direct-category-item />
            </direct-category-items>
          </custom-tab-item>
        </custom-tab-items>
      </custom-card>
      <custom-card class="lives-evenements__cards__card">
        <h2>A venir</h2>
        <div class="lives-evenements__cards__card__separator"></div>
        <custom-tabs v-model="tab2">
          <custom-tab title="Chaînes suivies <sup>(6)</sup>" />
          <custom-tab title="Recommandés <sup>(6)</sup>" />
        </custom-tabs>
        <custom-tab-items v-model="tab2">
          <custom-tab-item>
            <soon-category-items>
              <soon-category-item />
              <soon-category-item />
              <soon-category-item />
              <soon-category-item />
              <soon-category-item />
              <soon-category-item />
            </soon-category-items>
          </custom-tab-item>
          <custom-tab-item>
            <soon-category-items>
              <soon-category-item />
              <soon-category-item />
              <soon-category-item />
              <soon-category-item />
              <soon-category-item />
              <soon-category-item />
            </soon-category-items>
          </custom-tab-item>
        </custom-tab-items>
      </custom-card>
    </div>
    <thread title="Vidéos les plus vues" style="margin-top: 4rem;" :cards="cards" />
    <thread title="Vidéos récentes" style="margin-top: 4rem;" :cards="cards" />
  </main>
</template>

<script>
  export default {
    name: "lives-evenements-home",
    data() {
      return {
        tab1: 0,
        tab2: 0,
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
  .lives-evenements {
    @apply p-8;

    & .lives-evenements__cards {
      @apply flex justify-between;

      & .lives-evenements__cards__card {
        @apply w-1/2 overflow-y-scroll;
        max-height: 600px;

        &:first-child {
          @apply mr-12;
        }

        & h2 {
          @apply pl-6 py-6 text-2xl font-medium;
        }

        & .lives-evenements__cards__card__separator {
          @apply w-full;

          height: 2px;
        }
      }
    }
  }

  .lives-evenements .lives-evenements__cards .lives-evenements__cards__card__separator {
    @apply bg-background-primary-light;
  }
</style>
