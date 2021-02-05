<template>
  <div class="card-category">
    <div class="card-image__title">
      <h2>{{ card.title }}</h2>
    </div>
    <div class="card-image__image" :style="[backgroundImage]"></div>
  </div>
</template>

<script>
  export default {
    name: "card-category",
    props: {
      card: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      backgroundImage() {
        return {
          background: "url('https://picsum.photos/300') no-repeat"
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card-category {
    @apply rounded-lg;

    width: 200px;
    min-width: 200px;

    & .card-image__title {
      @apply py-6 text-center font-medium text-lg;
    }

    & .card-image__image {
      @apply rounded-b-lg;

      height: 300px;
    }
  }

  .dark1-mode .card-category {
    @apply bg-background-primary-dark1;

    & .card-image__title {
      @apply text-grey-dark1;
    }
  }

  .dark2-mode .card-category {
    @apply bg-background-primary-dark2;

    & .card-image__title {
      @apply text-grey-dark2;
    }
  }

  .dark3-mode .card-category {
    @apply bg-background-primary-dark3;

    & .card-image__title {
      @apply text-grey-dark3;
    }
  }
</style>
