<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavbarBrand/>
        <NavbarToggler/>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <NavbarItems
                dd_title="Publications"
                dd_item1="Toutes les publications"
                dd_item2="Publications partagées"
                dd_item3="Publications aimées"
                navlink1="Mon profil"
                navlink2="Profil utilisateur"
                navlink3="Utilisateurs"
            />
            <NavbarButtons
                btn_name1="S'inscrire"
                btn_name2="Se connecter"
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