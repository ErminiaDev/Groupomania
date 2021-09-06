<template>
    <router-link class="navbar-brand mr-3 py-3" to="/">
        <img src="../../assets/logos/icon-left-font-monochrome-white.svg" alt="">
    </router-link>
</template>

<script>
    export default {
        name: 'NavbarBrand'
    }
</script>

<style scoped>
    img {
        height: 50px;
    }

    @media (max-width: 380px) {
        img {
          width: 220px;
        }
      }
</style>