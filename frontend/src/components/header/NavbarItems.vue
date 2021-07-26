<template>
    <ul class="navbar-nav mr-auto">
      <li v-if="userRole" class="nav-item">
        <router-link class="nav-link" to="/utilisateurs">{{ navlink1 }}</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/publications">{{ navlink2 }}</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="`/profile`">{{ navlink3 }}</router-link>
      </li>
    </ul>
</template>

<script>
    export default {
        name: 'NavbarItems',
        props: {
          navlink1: String,
          navlink2: String,
          navlink3: String
        },
        computed: {
          //getting the data from User.vue
          currentUser() {
            return this.$store.state.auth.user;
          },
          userRole () {
            if (this.currentUser === null) {
              return false
            } else if (this.currentUser.role === 1){
              return true
            } else {
              return false
            }
          }
        }
    }
</script>