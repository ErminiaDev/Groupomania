<template>
    <div class="col-4">
      <p>
        <a href="">{{ footerlink1 }}</a>
      </p>
      <p>
        <a href="">{{ footerlink2 }}</a>
      </p>
    </div>
</template>

<script>
export default {
    name: 'FooterLegal',
    props: {
      footerlink1: String,
      footerlink2: String
    }
}
</script>