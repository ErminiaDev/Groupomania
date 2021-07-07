<template>
    <footer class="bg-dark text-light p-5">
      <FooterLogo
      />
      <div class="row pt-4">
        <FooterAddress 
          entreprise="Réseau social de l'entreprise CONNECT-E"
          adresse="95 rue de la société"
          commune="67000 STRASBOURG"
        />
        <div class="col-3"></div>
        <FooterLegal
          footerlink1="Mentions legales"
          footerlink2="Politique de confidentialité"
        />
      </div>
    </footer>
</template>

<script>
import FooterLogo from './FooterLogo.vue'
import FooterAddress from './FooterAddress.vue'
import FooterLegal from './FooterLegal.vue'

export default {
    name: 'Footer',
    components: {
        FooterLogo,
        FooterAddress,
        FooterLegal
    }
}
</script>

<style>

</style>