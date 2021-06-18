<template>
  <div>
    <Header />
    <div class="main">
      <h1 class="pt-5">Groupomania Social Network</h1>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat Alternates', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a, a:hover {
    color: #fff;
}

.main {
  height: 200px
}
</style>
