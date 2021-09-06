<template>
<div id="content">
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
  </div>
</div>
</template>

<script>
import userService from '../services/user.service';

export default {
      name: 'Profile',
  computed: {
        //gets current user from vuex store and shows information
        currentUser() {
          return this.$store.state.auth.user;
        },
        displayRole() {
          if (this.currentUser.is_admin === 0) {
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
    },
    logOut() {
        //supprimer les données dans le store et le localStorage et redirigé vers la connexion
        console.log('logging out')
      localStorage.removeItem('userData')
      this.$store.dispatch('auth/logout');
      this.$router.push('/connexion');
    },
    async deleteUser() {
      try { 
        console.log(this.currentUser.uuid, 'eee')
        await userService.destroyUser(this.currentUser.uuid)
        this.logOut()
      } catch (error) {
        console.log(error.toString())
      }
    },
  }
};
</script>
<style scoped>
  #content {
    height: 100%;
    background:
    linear-gradient(
      rgba(255, 255, 255, 0.45), 
      rgba(255, 255, 255, 0.45)
    ),
    url('../assets/images/fond.jpg')
    ;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>