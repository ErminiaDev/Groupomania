<template>
  <div class="container pb-5">
    <header class="jumbotron">
      <h3>
        Détail utilisateur: <strong>{{user.first_name}} {{user.last_name}}</strong> 
      </h3>
    </header>
    <UserInfo/>
  </div>
</template>

<script>
import UserInfo from "../components/users/UserInfo.vue"

export default {
  name: 'UserDetail',
  components: {
    UserInfo
  },
  computed: {
        //gets the info of clicked user in User.vue
        user(){
            // console.log(localStorage.getItem('userData'))
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
  },
  
};
</script>