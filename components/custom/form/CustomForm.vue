<template>
  <form @submit="onSubmit">
    <slot />
  </form>
</template>

<script>
  export default {
    name: "custom-form",
    methods: {
      onSubmit(e) {
        this.$emit("submit", e)
      },
      validate() {
        let isValid = true

        for(let children of this.$children) {
          if(!children.validate()) {
            isValid = false
          }
        }

        return isValid
      }
    }
  }
</script>

<style scoped>

</style>
