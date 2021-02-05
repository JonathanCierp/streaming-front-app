<template>
  <main class="home">
    <div class="home__video">
      <section style="width: 75%;border: 2px white solid;margin-right: 1rem;">
        <video controls width="100%" height="100%">
          <source src="/media/cc0-videos/flower.webm"
                  type="video/webm">

          <source src="/media/cc0-videos/flower.mp4"
                  type="video/mp4">

          Sorry, your browser doesn't support embedded videos.
        </video>
      </section>
      <section style="width: 25%;">
        <custom-card>
          <custom-tabs v-model="tab">
            <custom-tab title="Recommandés <sup>(3)</sup>" />
            <custom-tab title="Mes chaînes <sup>(6)</sup>" />
          </custom-tabs>
          <custom-tab-items v-model="tab">
            <custom-tab-item>
              <recommandation-items>
                <recommandation-item />
                <recommandation-item />
                <recommandation-item />
              </recommandation-items>
            </custom-tab-item>
            <custom-tab-item>
              <my-channel-items>
                <my-channel-item />
                <my-channel-item />
                <my-channel-item />
                <my-channel-item />
                <my-channel-item />
                <my-channel-item />
              </my-channel-items>
            </custom-tab-item>
          </custom-tab-items>
        </custom-card>
      </section>
    </div>
    <thread class="home__thread" title="Top de la semaine" :cards="cards" style="margin-top: 1rem;" />
    <thread class="home__thread" title="Les plus vus" style="margin-top: 4rem;" :cards="cards" />
  </main>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        tab: 0,
        cards: [
          {
            title: "Titre de l'audio",
            type: "audio"
          },
          {
            title: "Titre de l'image",
            type: "image"
          },
          {
            title: "Titre du texte",
            type: "text"
          },
          {
            title: "Titre de la vidéo",
            type: "video"
          },
          {
            title: "Titre de l'audio",
            type: "audio"
          },
          {
            title: "Titre de l'image",
            type: "image"
          },
          {
            title: "Titre du texte",
            type: "text"
          },
          {
            title: "Titre de la vidéo",
            type: "video"
          },
          {
            title: "Titre de la vidéo",
            type: "video"
          },
          {
            title: "Titre de la vidéo",
            type: "video"
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    @apply p-8;

    & .home__video {
      @apply flex;
    }
  }
</style>
