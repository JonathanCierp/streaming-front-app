<template>
  <div>
    <core-header />
    <Nuxt />
    <auth-modal />
    <research-modal />
    <research-categories-modal />
    <add-content-modal />
  </div>
</template>

<script>
  export default {
    middleware: "auth"
    /*mounted() {
      this.$colorMode.preference = "dark"
    }*/
  }
</script>
