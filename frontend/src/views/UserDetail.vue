<template>
<div id="content">
  <div class="container pb-5">
    <header class="jumbotron">
      <h3>
        Détail utilisateur: <strong>{{user.first_name}} {{user.last_name}}</strong> 
      </h3>
    </header>
    <UserInfo @delete-user="deleteUser"/>
  </div>
</div>
</template>

<script>
import UserInfo from "../components/users/UserInfo.vue"
import userService from '../services/user.service';


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
        currentUser() {
          return this.$store.state.auth.user;
        },
        
  },
  mounted() {
        //if no user logged in, directs to login page
        if (!this.loggedIn) {
          this.$router.push('/connexion');
    }
  },
  methods: {
    logOut() {
        //supprimer les données dans le store et le localStorage et redirigé vers la connexion
      console.log('loggin out')
      localStorage.removeItem('userData')
      this.$store.dispatch('auth/logout');
      this.$router.push('/connexion');
    },
    async deleteUser(uuid) {
      try { 
        console.log(uuid, 'eeeqkj')
        await userService.destroyUser(uuid)
        console.log('destroyed')
        //this.users = this.users.filter((user) => user.uuid !== uuid)
        if (uuid === this.currentUser.uuid) {
          this.logOut()
        } else {
          console.log('pushing to       profile')
          this.$router.push('/profile');
        }
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