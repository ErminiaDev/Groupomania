<template>
    <div class="container">
        <h1 class="py-5">Utilisateurs</h1>
        <Users 
          @delete-user="deleteUser"
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
 /*  mounted() {
    userService.getAllUsers().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }, */
  methods: {
    // delete a user
    async deleteUser(id) {
      if (confirm(`Etes vous sûr de vouloir supprimer cet utilisateur?`)) {
        const res = await fetch(`http://localhost:3000/api/utilisateurs/${id}`, {
          method: 'DELETE',
        })

        res.status === 200
          ? (this.users = this.users.filter((user) => user.id !== id))
          : alert('Error deleting user')
      }
    },
     /* //fetch all users from the API
    async fetchUsers() {
      const res = await fetch('http://localhost:3000/api/utilisateurs')
      const data = await res.json()
      return data
    }, */
    /* //fetch one user from API
    async fetchUser(id) {
      console.log('sending fetch');
      const res = await fetch(`http://localhost:3000/api/utilisateurs/${id}`, {
        method: 'GET',
      })
      
      const data = await res.json()

      return data
    } */
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
