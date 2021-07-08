<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        Profil de <strong>{{currentUser.first_name}} {{currentUser.last_name}}</strong> 
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{currentUser.token.substring(0, 20)}} ... {{currentUser.token.substr(currentUser.token.length - 20)}}
    </p>
    <p>
      <strong>Identifiant unique:</strong>
      {{currentUser.uuid}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Droits:</strong>
    <ul>
      <li >{{displayRole}}</li>
    </ul>
  </div>
</template>

<script>
export default {
      name: 'Profile',
  computed: {
        //gets current user from vuex store and shows information
        currentUser() {
          return this.$store.state.auth.user;
        },
        displayRole() {
          if (this.currentUser.role === 0) {
            return 'Utilisateur';
          } else {
            return 'Administrateur';
          }
        }

  },
  mounted() {
        //if no user logged in, directs to login page
        if (!this.currentUser) {
          this.$router.push('/login');
    }
  }
};
</script>