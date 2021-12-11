<template>
  <div>
    <Header />
    <div ref="content" class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from 'comps/Header/Header'
  import Footer from 'comps/Footer/Footer'

  export default {
    name: 'Layout',
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    height: calc(100vh - 120px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
