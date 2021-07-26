<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavbarBrand/>
        <NavbarToggler/>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <NavbarItems
                navlink1=  "Utilisateurs"
                navlink2=  "Publications"
                navlink3=  "Profile"
            />
            <NavbarButtons
                btn_name1="S'inscrire"
                btn_name2="Se connecter"
                btn_name3="Se déconnecter"
            />
        </div>
    </nav>
</template>

<script>
import NavbarBrand from './NavbarBrand.vue'
import NavbarItems from './NavbarItems.vue'
import NavbarToggler from './NavbarToggler.vue'
import NavbarButtons from './NavbarButtons.vue'

export default {
    name: 'Header',
    components: {
        NavbarBrand,
        NavbarItems,
        NavbarToggler,
        NavbarButtons
    }
}
</script>

<style scoped>

</style>