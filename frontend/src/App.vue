<template>
  <div id="app">
    <Header />
    <router-view id="content"/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
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


label {
    font-weight: 400;
}

#content {
  padding-bottom: 250px;
}

button:focus, 
a:focus,
input:focus {
border: 2px solid red;
}
</style>

