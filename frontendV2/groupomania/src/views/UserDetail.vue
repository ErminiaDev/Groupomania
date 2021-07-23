<template>
  <div class="container pb-5">
    <div v-if=loggedIn>
      <header class="jumbotron">
        <h3>
          Détail utilisateur: <strong>{{user.first_name}} {{user.last_name}}</strong> 
        </h3>
      </header>
      <p>
        <strong>Identifiant unique:</strong>
        {{user.uuid}}
      </p>
      <p>
        <strong>Email:</strong>
        {{user.email}}
      </p>
      <strong>Droits:</strong>
      {{displayRole}}
    </div>
    <div class="row py-4">
        <div class="col-6 text-right">
            <a href="#" @click="deleteUser" class="btn btn-secondary">
              Supprimer
              <i class="mr-1 fas fa-times text-right"></i>
            </a>
        </div>
        <div class="col-6 text-left">
            <a href="#" @click="modifyUser" class="btn btn-warning">
              Modifier
              <i class="ml-1 fas fa-edit text-left"></i>
            </a>
        </div>
    </div>
    <!-- <div v-else>
      <p> Veuillez vous connecter pour avoir accès à cette page! </p>
    </div> -->
  </div>
</template>

<script>
export default {
      name: 'Profile',
  computed: {
        //gets the info of clicked user in User.vue
        user(){
            console.log(localStorage.getItem('userData'))
            const userString = localStorage.getItem('userData')
            // console.log(JSON.parse(userString))
            const user = JSON.parse(userString)
            return user
        },
        displayRole() {
          if (this.user.is_admin === 0) {
            return 'Utilisateur';
          } else {
            return 'Administrateur';
          }
        },
        loggedIn() {
          return this.$store.state.auth.status.loggedIn;
        },
        
  },
  mounted() {
        //if no user logged in, directs to login page
        if (!this.loggedIn) {
          this.$router.push('/connexion');
    }
  }
};
</script>