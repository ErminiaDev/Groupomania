<template>
    <footer id="footer" class="bg-dark text-light p-3">
      <FooterLogo
      />
      <div class="row pt-4">
        <FooterAddress  class="col-12 col-md-5 pb-4"
          entreprise="Réseau social de l'entreprise CONNECT-E"
          adresse="95 rue de la société"
          commune="67000 STRASBOURG"
        />
        <div class="col-md-3 col-1"></div>
        <FooterLegal class="col-12 col-md-4"
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
  html {
      position: relative;
      min-height: 100%;
  }
  body {
      margin: 0;
      /* bottom = footer height */
      padding: 0;
  }
  #footer {
    position:absolute;
    bottom:0;
    left: 0;
    margin-top: 50px;
    width:100%;
    height:220px;   /* Height of the footer */
    overflow:hidden;
  }

  @media (max-width: 380px) {
    #footer {
      height: 340px;
    }
  }
</style>