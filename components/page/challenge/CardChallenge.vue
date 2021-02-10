<template>
  <div class="card-challenge">
    <img :src="card.image" alt="">
    <div class="card-challenge__content">
      <h2>Type de contenu :</h2>
      <div class="card-challenge__content-type">
        <component v-for="contentType in card.contentType" :is="contentType" :key="contentType" />
      </div>
      <p>Temps restant : {{ card.restTime }}</p>
      <p>Gains : {{ card.gains }}</p>
      <p>Créateurs rémunérés : {{ card.creatorsPaid }}</p>
    </div>
    <div class="card-challenge__actions">
      <button>Participer</button>
    </div>
  </div>
</template>

<script>
  import IconAudio from "@/components/icons/medias/IconAudio"
  import IconImage from "@/components/icons/medias/IconImage"
  import IconText from "@/components/icons/medias/IconText"
  import IconVideo from "@/components/icons/medias/IconVideo"

  export default {
    name: "card-challenge",
    components: {
      IconAudio,
      IconImage,
      IconText,
      IconVideo
    },
    props: {
      card: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card-challenge {
    @apply rounded-lg;
    width: 220px;

    & img {
      @apply rounded-t-lg;
      height: 150px;
      width: 100%;
    }

    & .card-challenge__content {
      @apply p-4;

      & .card-challenge__content-type {
        @apply flex mb-2;

        & svg {
          @apply mr-4;
        }
      }

      & p {
        @apply text-sm mt-1;
      }
    }

    & .card-challenge__actions {
      @apply px-4 pb-4;

      & button {
        @apply px-4 py-2 w-full text-center transition-colors duration-200;
      }
    }
  }

  .dark1-mode .card-challenge {
    @apply bg-background-primary-dark1;

    & button {
      @apply bg-background-secondary-dark1;

      &:hover {
        @apply bg-background-secondary-hover-dark1;
      }
    }
  }
</style>
