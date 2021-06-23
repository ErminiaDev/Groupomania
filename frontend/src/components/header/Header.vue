<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavbarBrand/>
        <NavbarToggler/>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <NavbarItems
                dd_title1= "Admin"
                dd1_item1= "Tous les utilisateurs"
                dd1_item2= "Profil utilisateur"
                dd_title2= "Publications"
                dd2_item1= "Ajouter une publication"
                dd2_item2= "Publications partagées"
                dd2_item3= "Publications aimées"
                dd2_item4= "Toutes les publications"
                navlink1=  "Mon profil"
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