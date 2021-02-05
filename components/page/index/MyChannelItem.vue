<template>
  <article class="my-channel-item">
    <div class="my-channel-item__user">
      <img src="https://picsum.photos/50?random=2" alt="">
      <h2>Ananas FRUI</h2>
    </div>
    <div class="my-channel-item__videos">
      <img src="https://picsum.photos/180/90?random=2" alt="">
      <img src="https://picsum.photos/180/90?random=2" alt="">
    </div>
  </article>
</template>

<script>
  export default {
    name: "my-channel-item"
  }
</script>

<style lang="scss" scoped>
  .my-channel-item {
    @apply pb-8;

    & .my-channel-item__user {
      @apply flex items-center;

      & img {
        @apply rounded-full;
      }

      & h2 {
        @apply ml-4 text-lg;
      }
    }

    & .my-channel-item__videos {
      @apply flex mt-6 justify-between;
    }
  }
</style>

