<template>
  <div class="card-video">
    <div class="card-video__card">
      <img class="card-video__card__image" src="https://picsum.photos/300/150?random=1">
      <div class="card-video__card__play">
        <icon-circle-play />
      </div>
      <div class="card-video__card__overlay"></div>
    </div>
    <div class="card-video__title">
      <icon-video />
      <h2>{{ card.title }}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "card-video",
    props: {
      card: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card-video {
    width: 300px;
    min-width: 300px;

    & .card-video__card {
      @apply flex relative select-none;

      & .card-video__card__image {
        width: 300px;
        height: 150px;
      }

      & .card-video__card__play {
        @apply absolute z-20;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        & svg {
          @apply h-12 w-12;
        }
      }

      & .card-video__card__overlay {
        @apply absolute left-0 top-0 w-full h-full z-10;

        background-color: rgba(0, 0, 0, .7 );
      }
    }

    & .card-video__title {
      @apply flex mt-3 font-medium;

      & svg {
        @apply flex mr-2;
      }
    }
  }

  .dark1-mode .card-video {
    & .card-video__card {
      @apply bg-background-primary-dark1;
    }

    & .card-video__title {
      @apply text-grey-dark1;
    }
  }

  .dark2-mode .card-video {
    & .card-video__card {
      @apply bg-background-primary-dark2;
    }

    & .card-video__title {
      @apply text-grey-dark2;
    }
  }

  .dark3-mode .card-video {
    & .card-video__card {
      @apply bg-background-primary-dark3;
    }

    & .card-video__title {
      @apply text-grey-dark3;
    }
  }
</style>
