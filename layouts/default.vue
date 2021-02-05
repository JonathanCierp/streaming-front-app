<template>
  <div>
    <core-header />
    <Nuxt />
    <auth-modal />
    <research-modal />
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
