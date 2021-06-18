<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavbarBrand/>
        <NavbarToggler/>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <NavbarItems/>
            <NavbarSearch/>
        </div>
    </nav>
</template>

<script>
import NavbarBrand from './NavbarBrand.vue'
import NavbarItems from './NavbarItems.vue'
import NavbarToggler from './NavbarToggler.vue'
import NavbarSearch from './NavbarSearch.vue'

export default {
    name: 'Header',
    components: {
        NavbarBrand,
        NavbarItems,
        NavbarToggler,
        NavbarSearch
    }
}
</script>

<style scoped>
    nav img {
        height: 60px;
        margin-right: 60px;
    }
</style>