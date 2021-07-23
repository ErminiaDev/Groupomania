<template>
  <div v-if="loggedIn" class="container pb-5">
      <!-- if we are on user's profile -->
    <div v-if="isUserProfile">
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
      {{displayRole}}
    </div>
    <!-- if we are editing a user -->
    <Form v-if="isEditUser" @submit="editUser">
        <div class="form-group pb-4 lead">
          <label for="email">Adresse email</label>
          <Field name="email" type="text" class="form-control" />
          <ErrorMessage name="email" class="error-feedback" />
        </div>         

        <div class="form-group pb-4 lead">
          <label for="mot-de-passe">Mot de passe</label>
          <Field name="password" type="password" class="form-control" aria-describedby="passwordHelp"/>
          <ErrorMessage name="password" class="error-feedback" />
          <small id="passwordHelp" class="form-text">Nous ne partagerons jamais votre mot de passe.</small>
        </div>

        <!--only admins can edit role -->        
        <div v-if="userRole" class="form-group pb-4 lead">
          <label for="role">Role</label>
          <Field name="is_admin" type="number" class="form-control" aria-describedby="passwordHelp"/>
          <ErrorMessage name="is_admin" class="error-feedback" />
        </div>
    </Form>
    <div class="row py-4">
        <!-- if user is admin he can delete -->
        <div v-if="userRole" class="col-6 text-right">
            <a href="#" @click="deleteUser" class="btn btn-secondary">
              Supprimer
              <i class="mr-1 fas fa-times text-right"></i>
            </a>
        </div>
        <!-- if we are on the profile page we can edit the user -->
        <div v-if="isUserProfile" class="col-6 text-left">
            <a :href="`/modifier-utilisateur/${user.uuid}`" @click="modifyUser" class="btn btn-warning">
              Modifier
              <i class="ml-1 fas fa-edit text-left"></i>
            </a>
        </div>
        <!-- if we are on the editing page we can submit new values -->
        <div v-if="isEditUser" class="col-6 text-left">
            <div class="form-group">
              <button type="submit" class="btn btn-success" :disabled="loading">
                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                <span>Valider</span>
              </button>
            </div>
            <div>
              <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
                {{message}}
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
      name: 'UserInfo',
  computed: {
        //gets current user from vuex store and shows information
        currentUser() {
          return this.$store.state.auth.user;
        },
        user(){
            console.log(localStorage.getItem('userData'))
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
        userRole () {
            if (this.currentUser === null) {
              return false
            } else if (this.currentUser.role === 1){
              return true
            } else {
              return false
            }
        },
        loggedIn() {
          return this.$store.state.auth.status.loggedIn;
        },
        isEditUser() {
           return this.$route.name === 'EditUser'
        },
        isUserProfile() {
           return this.$route.name === 'profile'
        }
  },
};
</script>