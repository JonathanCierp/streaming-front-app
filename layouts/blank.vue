<template>
  <div>
    <select v-model="$colorMode.preference" class="z-50 absolute">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark1">Dark1</option>
      <option value="dark2">Dark2</option>
      <option value="dark3">Dark3</option>
    </select>
    <Nuxt />
  </div>
</template>

<script>
  export default {}
</script>
