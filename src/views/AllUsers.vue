<template>
    <div class="container">
        <h1 class="py-5">Utilisateurs</h1>
        <Users :users="users"/>
    </div>
</template>

<script>
import Users from "../components/users/Users.vue"

export default {
    components: {
        Users,
    },
  data() {
    return {
      users: [],
    }
  },
  created() {
    this.users =[
      {
        id: 1,
        name: 'Sarah',
        email: 'sarah@groupomania.com',
        password: 'sdf257@jml'
      },
      {
        id: 2,
        name: 'Louise',
        email: 'louise@groupomania.com',
        password: 'dn%P15ut5'
      },
      {
        id: 3,
        name: 'Arthur',
        email: 'arthur@groupomania.com',
        password: 'a&%lM5O97'
      },
    ]
  }
}
</script>