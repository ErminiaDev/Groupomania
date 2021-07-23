<template>
  <div class="container pb-5">
    <header class="jumbotron">
      <h3>
        Modifier l'utilisateur: <strong>{{user.first_name}} {{user.last_name}}</strong> 
      </h3>
    </header>
    <UserInfo/>
  </div>
</template>

<script>
import UserInfo from "../components/users/UserInfo.vue"

export default {
  name: 'EditUser',
  components: {
    UserInfo
  },
  computed: {
        //gets current user from vuex store and shows information
        user(){
            console.log(localStorage.getItem('userData'))
            const userString = localStorage.getItem('userData')
            // console.log(JSON.parse(userString))
            const user = JSON.parse(userString)
            return user
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
  }
};
</script>