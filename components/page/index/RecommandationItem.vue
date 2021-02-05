<template>
  <article class="recommandation-item">
    <div class="recommandation-item__user">
      <img src="https://picsum.photos/50" alt="">
      <h2>Jonathan CIERP</h2>
    </div>
    <div class="recommandation-item__videos">
      <div>
        <img src="https://picsum.photos/180/90" alt="">
        <p class="mt-1 text-sm">Nom de la vidéo</p>
      </div>
      <div>
        <img src="https://picsum.photos/180/90" alt="">
        <p class="mt-1 text-sm">Nom de la vidéo</p>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: "recommandation-item"
  }
</script>

<style lang="scss" scoped>
  img {
    transition: all .3s;
  }

  img:hover {
    transform: scale(2);
  }

  .recommandation-item {
    @apply pb-8;

    & .recommandation-item__user {
      @apply flex items-center;

      & img {
        @apply rounded-full;
      }

      & h2 {
        @apply ml-4 text-lg;
      }
    }

    & .recommandation-item__videos {
      @apply flex mt-6 justify-between;
    }
  }
</style>
