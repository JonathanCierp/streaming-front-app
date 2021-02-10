<template>
  <section class="research-item">
    <div class="research-item__main">
      <div class="research-item__icon">
        <component :is="iconComponent" />
      </div>
      <div class="research-item__name">
        <h2>
          <span>{{ item.channelName }}</span> - {{ item.contentName }}
        </h2>
      </div>
      <div class="research-item__stars">
        <span>{{ item.rating }}</span>
        <icon-filled-star />
      </div>
    </div>
    <div class="research-item__tags">
      <custom-tag>#Vidéo</custom-tag>
      <custom-tag>Photo</custom-tag>
      <custom-tag>#Cuisine</custom-tag>
      <custom-tag>Musique</custom-tag>
    </div>
  </section>
</template>

<script>
  import IconAudio from "@/components/icons/medias/IconAudio"
  import IconImage from "@/components/icons/medias/IconImage"
  import IconText from "@/components/icons/medias/IconText"
  import IconVideo from "@/components/icons/medias/IconVideo"

  export default {
    name: "research-item",
    components: {
      IconAudio,
      IconImage,
      IconText,
      IconVideo
    },
    props: {
      item: {
        type: Object,
        default: () => {
        }
      }
    },
    computed: {
      iconComponent() {
        return "icon-" + this.item.icon
      }
    }
  }
</script>

<style lang="scss" scoped>
  .research-item {
    @apply flex justify-center flex-col w-full px-4 py-4 mb-4 cursor-pointer;

    & .research-item__main {
      @apply flex items-center;

      & .research-item__icon {
        @apply mr-4;

        & svg {
          @apply w-6 h-6;
        }
      }

      & .research-item__name {
        @apply flex-grow;

        & h2 {
          @apply text-sm;
        }

        & h2 span {
          @apply font-medium;
          font-size: 1rem;
        }
      }

      & .research-item__stars {
        @apply flex items-center justify-center font-medium;

        & svg {
          @apply w-4 h-full ml-2;
        }
      }
    }

    & .research-item__tags {
      @apply mt-3;
    }
  }

  .dark1-mode .research-item {
    @apply bg-background-secondary-dark1;

    &:hover {
      @apply bg-background-secondary-hover-dark1;
    }

    & .research-item__stars {
      @apply text-secondary-dark1;
    }
  }

  .dark2-mode .research-item {
    @apply bg-background-secondary-dark2;

    &:hover {
      @apply bg-background-secondary-hover-dark2;
    }

    & .research-item__stars {
      @apply text-secondary-dark1;
    }
  }

  .dark3-mode .research-item {
    @apply bg-background-secondary-dark3;

    &:hover {
      @apply bg-background-secondary-hover-dark3;
    }

    & .research-item__stars {
      @apply text-secondary-dark1;
    }
  }
</style>
