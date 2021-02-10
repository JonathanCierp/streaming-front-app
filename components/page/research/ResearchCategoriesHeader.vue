<template>
  <div class="research-categories-header">
    <h2>{{ label }}</h2>
    <custom-form-input v-if="search" :input="input" no-gutters @input="onSearch"></custom-form-input>
  </div>
</template>

<script>
  export default {
    name: "research-categories-header",
    props: {
      label: {
        type: String,
        default: "Recherche"
      },
      search: {
        type: Boolean,
        default: false
      },
      input: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      onSearch() {
        this.$emit("search", this.input.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .research-categories-header {
    @apply flex items-center mb-4;

    & :last-child {
      @apply ml-4;
    }

    & h2 {
      @apply text-xl font-medium;
    }
  }
</style>
