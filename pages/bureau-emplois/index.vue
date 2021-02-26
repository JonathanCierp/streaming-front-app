<template>
  <div class="bureau-emplois">
    <custom-tabs v-model="tab">
      <custom-tab title="Bureau des emplois" />
      <custom-tab title="Mes challenges" />
      <custom-tab title="Mes contenus" />
      <custom-tab title="Ma bibliothèque" />
      <custom-tab title="Mon staff" />
      <custom-tab title="Mes challenges" />
    </custom-tabs>
    <custom-tab-items v-model="tab">
      <custom-tab-item style="max-width: 900px;">
        <h2 class="bureau-emplois__title">Bureau des emplois</h2>
        <custom-table :headers="headers" :items="items">

        </custom-table>
      </custom-tab-item>
      <custom-tab-item>
        Tab 2
      </custom-tab-item>
      <custom-tab-item>
        Tab 3
      </custom-tab-item>
      <custom-tab-item>
        Tab 4
      </custom-tab-item>
      <custom-tab-item>
        Tab 5
      </custom-tab-item>
      <custom-tab-item>
        Tab 6
      </custom-tab-item>
    </custom-tab-items>
  </div>
</template>

<script>
  export default {
    name: "bureau-emplois-home",
    data() {
      return {
        tab: 0,
        headers: ["Temps disponible", "Chaîne", "Poste", "Salaire souhaité", "Langue", "Bureau"],
        items: [
          ["3h / semaine", "Jonathan CIERP", "Caméraman", "4%", "Français", "Télétravail"],
          ["3h / semaine", "Jonathan CIERP", "Camérn", "4%", "Fais", "Télétravail"],
          ["3h / see", "Jonathan CIERP", "Caméraman", "4%", "Français", "Télil"],
          ["3h / semne", "JonatIERP", "Caméraman", "4%", "Français", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"],
          ["3h / semain", "Jonahan CIERP", "Caméraman", "4%", "Françis", "Télétravail"]
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bureau-emplois {
    @apply p-8;

    & .bureau-emplois__title {
      @apply my-6 text-4xl font-medium;
    }
  }
</style>

<style>
  .bureau-emplois .custom-tab-items {
    background-color: transparent !important;
  }
</style>
