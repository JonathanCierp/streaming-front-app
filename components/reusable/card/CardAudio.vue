<template>
  <div class="card-audio">
    <div class="card-audio__card">
      <audio ref="audio" src="@/assets/media/test.mp3" @ended="endAudio" @timeupdate="durationChangeAudio"></audio>
      <img class="card-audio__card__image" src="https://picsum.photos/190/150">
      <div class="card-audio__card__controls">
        <div v-if="!isNowPlaying" class="card-audio__card__controls__play" @click="playAudio">
          <icon-circle-play />
        </div>
        <div v-else class="card-audio__card__controls__pause" @click="pauseAudio">
          <icon-circle-pause />
        </div>
      </div>
      <div v-if="isPlayed" class="card-audio__card__time">
        <div class="card-audio__card__time__overlay" :style="[overlayWidthStyle]"></div>
        <div class="card-audio__card__time__underlay"></div>
      </div>
    </div>
    <div class="card-audio__title">
      <icon-audio />
      <h2>{{ card.title }}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "card-audio",
    props: {
      card: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        isPlayed: false,
        isNowPlaying: false,
        overlayWidth: {
          width: 0
        }
      }
    },
    methods: {
      durationChangeAudio() {
        this.overlayWidthStyle = (this.$refs.audio.currentTime / this.$refs.audio.duration) * 100
      },
      endAudio() {
        this.isPlayed = false
        this.isNowPlaying = false
        this.overlayWidthStyle = 0
      },
      playAudio() {
        this.isPlayed = true
        this.isNowPlaying = true
        this.$refs.audio.play()
      },
      pauseAudio() {
        this.isNowPlaying = false
        this.$refs.audio.pause()
      }
    },
    computed: {
      overlayWidthStyle: {
        get() {
          return this.overlayWidth
        },
        set(width) {
          this.overlayWidth = {
            width: width + "%"
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card-audio {
    width: 300px;
    min-width: 300px;

    & .card-audio__card {
      @apply flex relative select-none;
      height: 150px;

      & .card-audio__card__image {
        width: 190px;
        height: 150px;
      }

      & .card-audio__card__controls {
        @apply flex items-center justify-center select-none;
        width: 110px;
        height: 150px;

        & svg {
          @apply h-12 w-12 cursor-pointer;
        }
      }

      & .card-audio__card__time {
        @apply absolute w-full bottom-0 left-0;

        & .card-audio__card__time__overlay, & .card-audio__card__time__underlay {
          @apply absolute bottom-0 left-0 h-1;
        }

        & .card-audio__card__time__overlay {
          @apply bg-red-primary;
        }

        & .card-audio__card__time__underlay {
          @apply w-full;

          background-color: rgba(242, 83, 83, .15);
        }
      }
    }

    & .card-audio__title {
      @apply flex mt-3 font-medium;

      & svg {
        @apply flex mr-2;
      }
    }
  }

  .dark1-mode .card-audio {
    & .card-audio__card {
      @apply bg-background-primary-dark1;
    }

    & .card-audio__title {
      @apply text-grey-dark1;
    }
  }

  .dark2-mode .card-audio {
    & .card-audio__card {
      @apply bg-background-primary-dark2;
    }

    & .card-audio__title {
      @apply text-grey-dark2;
    }
  }

  .dark3-mode .card-audio {
    & .card-audio__card {
      @apply bg-background-primary-dark3;
    }

    & .card-audio__title {
      @apply text-grey-dark3;
    }
  }
</style>
