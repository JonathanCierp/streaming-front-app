<template>
  <base-modal v-model="researchModalOpen" class="research-modal" fullscreen>
    <div class="research-modal__content">
      <research-header :input="input" />
      <research-items>
        <research-item v-for="item of items" :key="item.key" :item="item" />
      </research-items>
    </div>
  </base-modal>
</template>

<script>
  export default {
    name: "research-modal",
    data() {
      return  {
        input: {
          key: "research",
          type: "text",
          placeholder: "Rechercher ...",
          value: null
        },
        items: [
          {
            key: "jonathan-cierp-video-1",
            icon: "video",
            channelName: "Jonathan CIERP",
            contentName: "Vidéo 1",
            rating: "100"
          },
          {
            key: "jonathan-cierp-audio-1",
            icon: "audio",
            channelName: "Jonathan CIERP",
            contentName: "Audio 1",
            rating: "1k"
          },
          {
            key: "jonathan-cierp-texte-1",
            icon: "text",
            channelName: "Jonathan CIERP",
            contentName: "Texte 1",
            rating: "1"
          },
          {
            key: "jonathan-cierp-image-1",
            icon: "image",
            channelName: "Jonathan CIERP",
            contentName: "Image 1",
            rating: "100k"
          }
        ]
      }
    },
    computed: {
      researchModalOpen: {
        get() {
          return this.$store.state.researchModalIsOpen
        },
        set(v) {
          this.$store.commit("toggleResearchModal", v)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .research-modal .research-modal__content {
    @apply m-4;
  }
</style>
