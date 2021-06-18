<template>
    <footer class="bg-dark text-light p-5">
      <FooterLogo/>
      <div class="row pt-4">
        <FooterAddress/>
        <div class="col-3"></div>
        <FooterLegal/>
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