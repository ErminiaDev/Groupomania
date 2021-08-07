<template>
    <div class="container">
        <h1 class="py-5">Utilisateurs</h1>
        <Users 
          :users="users"
        />
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
      console.log()
    } catch (error) {
      error.toString()
    }
  } 
}
</script>
