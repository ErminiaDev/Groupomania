<template>
<div id="content">
  <div class="container py-5">
    <header class="pb-5">
      <h1>Accueil</h1>
    </header>
    <div class="py-5">
      <p>Bienvenue sur le réseau social de l'entreprise Groupomania!</p>
      <p>Tous les salariés de l'entreprise peuvent s'inscrire et partager du contenu sous forme de publications.</p>
    </div>
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
#content {
  color: white;
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.45), 
    rgba(0, 0, 0, 0.45)
  ),
  url('../assets/images/accueil.jpg')
  ;
  background-position: 10%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>