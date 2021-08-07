<template>
  <div class="container">
    <header class="jumbotron">
      <h1>Accueil</h1>
    </header>
    <div class="py-5">
      <p>Bienvenue sur le réseau social de l'entreprise Groupomania!</p>
      <p>Tous les salariés de l'entreprise peuvent s'inscrire et partager du contenu sous forme de publications.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      content: ''
    };
  },
};
</script>

<style scoped>
p {
  font-size: 1.5em;
}
</style>