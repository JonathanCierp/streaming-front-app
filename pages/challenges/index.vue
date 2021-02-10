<template>
  <div class="challenges">
    <thread class="challenges__thread" title="Challenge en cours" :cards="cards" style="margin-top: 1rem;" />
    <thread class="challenges__thread" title="Challenge à venir" style="margin-top: 4rem;" :cards="cards" />
  </div>
</template>

<script>
  export default {
    name: "challenge-home",
    data() {
      return {
        cards: [
          {
            image: "https://picsum.photos/200",
            contentType: ["icon-video", "icon-image"],
            restTime:  "2j 3h 21min",
            gains: "20 000 €",
            creatorsPaid: "60",
            seeMore: {

            },
            type: "challenge"
          },
          {
            image: "https://picsum.photos/200",
            contentType: ["icon-video", "icon-image"],
            restTime:  "2j 3h 21min",
            gains: "20 000 €",
            creatorsPaid: "60",
            seeMore: {

            },
            type: "challenge"
          },
          {
            image: "https://picsum.photos/200",
            contentType: ["icon-video", "icon-image"],
            restTime:  "2j 3h 21min",
            gains: "20 000 €",
            creatorsPaid: "60",
            seeMore: {

            },
            type: "challenge"
          },
          {
            image: "https://picsum.photos/200",
            contentType: ["icon-video", "icon-image"],
            restTime:  "2j 3h 21min",
            gains: "20 000 €",
            creatorsPaid: "60",
            seeMore: {

            },
            type: "challenge"
          },
          {
            image: "https://picsum.photos/200",
            contentType: ["icon-video", "icon-image"],
            restTime:  "2j 3h 21min",
            gains: "20 000 €",
            creatorsPaid: "60",
            seeMore: {

            },
            type: "challenge"
          },
          {
            image: "https://picsum.photos/200",
            contentType: ["icon-video", "icon-image"],
            restTime:  "2j 3h 21min",
            gains: "20 000 €",
            creatorsPaid: "60",
            seeMore: {

            },
            type: "challenge"
          },
          {
            image: "https://picsum.photos/200",
            contentType: ["icon-video", "icon-image"],
            restTime:  "2j 3h 21min",
            gains: "20 000 €",
            creatorsPaid: "60",
            seeMore: {

            },
            type: "challenge"
          },
          {
            image: "https://picsum.photos/200",
            contentType: ["icon-video", "icon-image"],
            restTime:  "2j 3h 21min",
            gains: "20 000 €",
            creatorsPaid: "60",
            seeMore: {

            },
            type: "challenge"
          },
          {
            image: "https://picsum.photos/200",
            contentType: ["icon-video", "icon-image"],
            restTime:  "2j 3h 21min",
            gains: "20 000 €",
            creatorsPaid: "60",
            seeMore: {

            },
            type: "challenge"
          },
          {
            image: "https://picsum.photos/200",
            contentType: ["icon-video", "icon-image"],
            restTime:  "2j 3h 21min",
            gains: "20 000 €",
            creatorsPaid: "60",
            seeMore: {

            },
            type: "challenge"
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .challenges {
    @apply p-8;

  }
</style>
