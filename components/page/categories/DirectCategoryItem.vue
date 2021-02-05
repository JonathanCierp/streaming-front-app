<template>
  <div class="direct-category-item">
    <div class="direct-category-item__container">
      <div class="direct-category-item__container__dot"></div>
      <div class="direct-category-item__container__infos">
        <div class="direct-category-item__container__infos__channel">
          Nom de la chaîne
        </div>
        <div class="direct-category-item__container__infos__video">
          Nom de la vidéo
        </div>
      </div>
      <div class="direct-category-item__container__overlay"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "direct-category-item"
  }
</script>

<style lang="scss" scoped>
  .direct-category-item {
    @apply w-1/2 p-4;
    height: 225px;

    & .direct-category-item__container {
      @apply w-full h-full flex flex-col relative;
      background: url("https://picsum.photos/800") no-repeat;

      & .direct-category-item__container__dot {
        @apply h-5 w-5 rounded-full bg-red-primary self-end mt-3 mr-3 z-20;
      }

      & .direct-category-item__container__infos {
        @apply ml-3 mb-2 mt-auto z-20;

        & .direct-category-item__container__infos__channel {
          @apply underline text-lg font-medium;
        }
      }

      & .direct-category-item__container__overlay {
        @apply absolute left-0 top-0 w-full h-full z-10;

        background-color: rgba(0, 0, 0, .7 );
      }
    }
  }
</style>
