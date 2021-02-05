<template>
  <div class="soon-category-item">
    <div class="soon-category-item__container">
      <div class="soon-category-item__container__content">
        <img src="https://picsum.photos/800" alt="">
        <div class="soon-category-item__container__content__meta">
          <div>
            <p>Livre :</p>
            <p>L’indienne chapitre 3</p>
          </div>
          <div>
            <p>Par : Emily</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "soon-category-item"
  }
</script>

<style lang="scss" scoped>
  .soon-category-item {
    @apply w-1/2 p-4;

    & .soon-category-item__container {
      @apply w-full h-full flex flex-col relative;

      & .soon-category-item__container__content {
        @apply flex;

        & img {
          @apply mr-2;
          height: 110px;
          width: 55%;
        }

        & .soon-category-item__container__content__meta {
          @apply flex flex-col;

          & > div {
            & p:nth-child(1) {
              @apply font-medium;
            }

            p:nth-child(2) {
              @apply text-sm;
            }
          }

          & > div:nth-child(2) {
            @apply mt-auto;
          }
        }
      }
    }

  }
</style>
