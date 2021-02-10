<template>
  <main class="ma-chaine-home">
    <section class="ma-chaine-home__header">
      <img src="https://picsum.photos/200" alt="">
      <div class="ma-chaine-home__header__user">
        <h2>Jonathan CIERP</h2>
        <span>1k Followers</span>
      </div>
      <custom-tabs v-model="tab" class="ma-chaine-home__header__tabs">
        <custom-tab v-for="item of items" :key="item.key" :title="item.label" />
      </custom-tabs>
      <div class="ma-chaine-home__header__actions">
        <button type="button"><icon-heart /> Suivre</button>
        <button type="button">S'abonner :&nbsp;<span>5.99€</span></button>
      </div>
    </section>
    <section class="ma-chaine-home__body">
      <custom-tab-items v-model="tab" style="background-color: transparent;">
        <custom-tab-item v-for="item of items" :key="item.key">
          <component :is="item.component" />
        </custom-tab-item>
      </custom-tab-items>
    </section>
  </main>
</template>

<script>
  import ChaineDetails from "@/components/page/chaine/ChaineDetails"
  import DescriptionDetails from "@/components/page/chaine/DescriptionDetails"
  import VideosDetails from "@/components/page/chaine/VideosDetails"
  import AudiosDetails from "@/components/page/chaine/AudiosDetails"
  import TextesDetails from "@/components/page/chaine/TextesDetails"
  import ImagesDetails from "@/components/page/chaine/ImagesDetails"

  export default {
    name: "ma-chaine-home",
    components: {
      ChaineDetails,
      DescriptionDetails,
      VideosDetails,
      AudiosDetails,
      TextesDetails,
      ImagesDetails
    },
    data() {
      return {
        items: [
          {
            key: "chaine",
            label: "Chaîne",
            component: "chaine-details"
          },
          {
            key: "description",
            label: "Description",
            component: "description-details"
          },
          {
            key: "videos",
            label: "Vidéos",
            component: "videos-details"
          },
          {
            key: "audios",
            label: "Audios",
            component: "audios-details"
          },
          {
            key: "textes",
            label: "Textes",
            component: "textes-details"
          },
          {
            key: "images",
            label: "Images",
            component: "images-details"
          }
        ],
        tab: "chaine"
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ma-chaine-home {
    @apply p-8 pt-40;

    & .ma-chaine-home__header {
      @apply w-full flex relative;

      & img {
        @apply rounded-full absolute;
        margin-left: 150px;
        top: -120px;
        z-index: 10;
      }

      & .ma-chaine-home__header__user {
        @apply absolute;
        top: -90px;
        left: 400px;

        & h2 {
          @apply text-3xl font-medium;
        }

        & span {
          @apply text-lg;
        }
      }

      & .ma-chaine-home__header__tabs {
        max-width: 800px;
        margin-left: 400px;
      }

      & .ma-chaine-home__header__actions {
        display: flex;
        align-items: center;
        justify-items: center;
        margin-left: auto;

        & button {
          @apply mr-4 px-8 py-2 transition-colors duration-200 flex items-center justify-center;

          & svg {
            margin-right: .5rem;
          }

          & span {
            @apply font-medium;
          }
        }
      }
    }
  }

  .dark1-mode .ma-chaine-home {
    & .ma-chaine-home__header {
      @apply bg-background-secondary-hover-dark1;

      & .ma-chaine-home__header__actions button {
        @apply bg-background-primary-dark1;

        &:hover {
          @apply bg-background-secondary-dark1;
        }
      }
    }
  }

  .dark2-mode .ma-chaine-home {
    & .ma-chaine-home__header {
      @apply bg-background-secondary-hover-dark2;

      & .ma-chaine-home__header__actions button {
        @apply bg-background-primary-dark2;

        &:hover {
          @apply bg-background-secondary-dark2;
        }
      }
    }
  }

  .dark3-mode .ma-chaine-home {
    & .ma-chaine-home__header {
      @apply bg-background-secondary-hover-dark3;

      & .ma-chaine-home__header__actions button {
        @apply bg-background-primary-dark3;

        &:hover {
          @apply bg-background-secondary-dark3;
        }
      }
    }
  }
</style>
