<template>
<div id="content">
  <div class="container pb-5">
    <header class="jumbotron">
      <h3>
        Modifier l'utilisateur: <strong>{{user.first_name}} {{user.last_name}}</strong> 
      </h3>
    </header>
    <UserInfo @modify-user="modifyUser"/>
  </div>
</div>
</template>

<script>
import UserInfo from "../components/users/UserInfo.vue"
import userService from '../services/user.service';


export default {
  name: 'EditUser',
  components: {
    UserInfo
  },
  computed: {
        //gets current user from vuex store and shows information
        user(){
            // console.log(localStorage.getItem('userData'))
            const userString = localStorage.getItem('userData')
            // console.log(JSON.parse(userString))
            const user = JSON.parse(userString)
            return user
        },
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
    async modifyUser(modifyUser) {
      try { 
        const user = await userService.updateUser(modifyUser)
        localStorage.setItem('userData', JSON.stringify({ ...user}));
        this.$router.push('/utilisateurs/:uuid');
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