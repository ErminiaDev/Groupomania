<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        Profile de <strong>{{currentUser.firstname}} {{currentUser.lastname}}</strong> 
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.uuid}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="(role,index) in currentUser.is_admin" :key="index">{{role}}</li>
    </ul>
  </div>
</template>

<script>
export default {
      name: 'Profile',
  computed: {
        currentUser() {
          return this.$store.state.auth.user;
    }
  },
  mounted() {
        if (!this.currentUser) {
          this.$router.push('/login');
    }
  }
};
</script>