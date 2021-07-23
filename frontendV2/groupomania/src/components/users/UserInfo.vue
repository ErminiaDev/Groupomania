<template>
  <div v-if="loggedIn" class="container pb-5">
      <!-- if we are on user's profile -->
    <div v-if="isUserDetail">
      <p>
        <strong>Identifiant unique:</strong>
        {{user.uuid}}
      </p>
      <p>
        <strong>Email:</strong>
        {{user.email}}
      </p>
      <strong>Droits:</strong>
      {{displayRole}}
    </div>
    <!-- if we are editing a user -->
    <Form v-if="isEditUser" @submit="editUser">
        <div class="form-group row pb-4 lead ">
          <div class="col-8 mx-auto">
            <div class="row">
              <label class="col-sm-3 text-right" for="email">Adresse email</label>
              <Field name="email" type="text" class="form-control col-sm-9" />
              <ErrorMessage name="email" class="error-feedback" />
            </div>
          </div>
        </div>         

        <div class="form-group pb-4 row lead">
          <div class="col-8 mx-auto">
            <div class="row">
              <label class="col-sm-3 text-right" for="mot-de-passe">Mot de passe</label>
              <div class="col-sm-9 px-0">
                <Field name="password" type="password" class="form-control" aria-describedby="passwordHelp"/>
                <ErrorMessage name="password" class="error-feedback" />
                <small id="passwordHelp" class="form-text text-left">Nous ne partagerons jamais votre mot de passe.</small>
              </div>
            </div>
          </div>
        </div>

        <!--only admins can edit role -->        
        <div v-if="userRole" class="form-group pb-4 lead">
          <div class="col-8 mx-auto">
            <div class="row">
               <label class="col-sm-3 text-right" for="role">Role</label>
              <Field name="is_admin" type="number" class="form-control col-sm-9" aria-describedby="passwordHelp"/>
              <ErrorMessage name="is_admin" class="error-feedback" />
            </div>
          </div>
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
        <div v-if="isUserDetail" class="col-6 text-left">
            <a :href="`/modifier-utilisateur/${this.user.uuid}`" class="btn btn-warning">
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
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: 'UserInfo',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required!")
      .email("Email is invalid!")
      .max(50, "Must be maximum 50 characters!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(6, "Must be at least 6 characters!")
      .max(40, "Must be maximum 40 characters!"),
  });
  return {
      successful: false,
      loading: false,
      message: '',
      schema,
    };
  },
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
          if (this.user.is_admin === 0) {
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
        isUserDetail() {
           return this.$route.name === 'UserDetail'
        }
  },
};
</script>