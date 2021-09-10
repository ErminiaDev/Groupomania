<template>
<div id="content">
    <div class="container">
        <h1 class="py-5">Utilisateurs</h1>
        <Users 
          :users="users"
        />
    </div>
</div>
</template>

<script>
import Users from "../components/users/Users.vue"
import userService from '../services/user.service';


export default {
    name:'UsersPage',
    components: {
        Users,
    },
  data() {
    return {
      users: [],
    }
  },
  async created() {
    try {
      this.users = await userService.getAllUsers() 
    } catch (error) {
      error.toString()
    }
  } 
}
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
    background-repeat: repeat-y;
    background-size: cover;
  }
</style>
