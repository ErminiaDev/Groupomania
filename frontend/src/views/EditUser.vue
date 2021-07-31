<template>
  <div class="container pb-5">
    <header class="jumbotron">
      <h3>
        Modifier l'utilisateur: <strong>{{user.first_name}} {{user.last_name}}</strong> 
      </h3>
    </header>
    <UserInfo @modify-user="modifyUser"/>
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
    async modifyUser(modifyUser) {
      try { 
        console.log(modifyUser, 'eee')
        const user = await userService.updateUser(modifyUser)
        this.users = [user, ...this.users]
        this.$router.push('/profile');
        // this.$router.go();
        //display a message saying post is published
      } catch (error) {
        error.toString()
      }
    },
  }
};
</script>