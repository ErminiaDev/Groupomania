<template>
  <div class="container pb-5">
    <div v-if=loggedIn>
      <header class="jumbotron">
        <h3>
          Profil de <strong>{{currentUser.first_name}} {{currentUser.last_name}}</strong> 
        </h3>
      </header>
      <p>
        <strong>Token:</strong>
        {{currentUser.token.substring(0, 20)}} ... {{currentUser.token.substr(currentUser.token.length - 20)}}
      </p>
      <p>
        <strong>Identifiant unique:</strong>
        {{currentUser.uuid}}
      </p>
      <p>
        <strong>Email:</strong>
        {{currentUser.email}}
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
            <a href="#" @click="modifyCurrentUser" class="btn btn-warning">
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
        //gets current user from vuex store and shows information
        currentUser() {
          return this.$store.state.auth.user;
        },
        displayRole() {
          if (this.currentUser.role === 0) {
            return 'Utilisateur';
          } else {
            return 'Administrateur';
          }
        },
        loggedIn() {
          return this.$store.state.auth.status.loggedIn;
        }

  },
  mounted() {
        //if no user logged in, directs to login page
        if (!this.loggedIn) {
          this.$router.push('/connexion');
    }
  },
  methods: {
    modifyCurrentUser() {
      localStorage.setItem('userData', JSON.stringify(this.currentUser))
      this.$router.push(`/modifier-utilisateur/${this.currentUser.uuid}`);
    }
  }
};
</script>