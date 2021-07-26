<template>
    <div class="col-5">
      <p>{{ entreprise }}</p>
      <address>
        <p>{{ adresse }}</p>
        <p>{{ commune }}</p>
      </address>
    </div>
</template>

<script>
export default {
    name: 'FooterAddress',
    props: {
      entreprise: String,
      adresse: String,
      commune: String
    }
}
</script>