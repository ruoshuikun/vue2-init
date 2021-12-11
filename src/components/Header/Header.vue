<template>
  <header> Header </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss" scoped>
  header {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $red;
    color: $white;
  }
</style>
