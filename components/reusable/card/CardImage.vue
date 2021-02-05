<template>
  <div class="card-image">
    <div class="card-image__card">
      <img class="card-image__image" src="https://picsum.photos/300/150?random=1">
    </div>
    <div class="card-image__title">
      <icon-image />
      <h2>{{ card.title }}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "card-image",
    props: {
      card: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card-image {
    width: 300px;
    min-width: 300px;

    & .card-image__card {
      @apply flex relative select-none;
      height: 150px;
    }

    & .card-image__title {
      @apply flex mt-3 font-medium;

      & svg {
        @apply flex mr-2;
      }
    }
  }

  .dark1-mode .card-image {
    & .card-image__card {
      @apply bg-background-primary-dark1;
    }

    & .card-image__title {
      @apply text-grey-dark1;
    }
  }

  .dark2-mode .card-image {
    & .card-image__card {
      @apply bg-background-primary-dark2;
    }

    & .card-image__title {
      @apply text-grey-dark2;
    }
  }

  .dark3-mode .card-image {
    & .card-image__card {
      @apply bg-background-primary-dark3;
    }

    & .card-image__title {
      @apply text-grey-dark3;
    }
  }
</style>
