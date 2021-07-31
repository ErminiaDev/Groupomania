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
              <label class="col-sm-4 text-right" for="uuid">Identifiant unique</label>
              <Field name="uuid" type="text" :value="this.user.uuid" class="form-control col-sm-8" readonly/>
              <ErrorMessage name="uuid" class="error-feedback" />
            </div>
          </div>
        </div>  
        <div class="form-group row pb-4 lead ">
          <div class="col-8 mx-auto">
            <div class="row">
              <label class="col-sm-4 text-right" for="email">Adresse email</label>
              <Field name="email" type="text" class="form-control col-sm-8" />
              <ErrorMessage name="email" class="error-feedback" />
            </div>
          </div>
        </div>         

        <div class="form-group pb-4 row lead">
          <div class="col-8 mx-auto">
            <div class="row">
              <label class="col-sm-4 text-right" for="mot-de-passe">Mot de passe</label>
              <div class="col-sm-8 px-0">
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
              <p class="lead">Role</p>
              <div class="form-check">
                <Field name="is_admin" id="user" value="1" type="radio" class="form-check-input"/>
                <label class="form-check-label" for="user">administrateur</label>
                <ErrorMessage name="is_admin" class="error-feedback" />
              </div>
              <div class="form-check">
                <Field name="is_admin" id="admin" value="0" type="radio" class="form-check-input"/>
                <label class="form-check-label" for="admin">utilisateur</label>
                <ErrorMessage name="is_admin" class="error-feedback" />
              </div>
          </div>
        </div>
      <div class="row py-4">
        <!-- if we are on the editing page we can submit new values -->
        <div v-if="isEditUser" class="col-6 text-right">
            <div class="form-group">
              <button type="submit" class="btn btn-success" :disabled="loading">
                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                <span>Valider<i class="ml-3 fas fa-check"></i></span>
              </button>
            </div>
          <div
            v-if="message"
            class="alert"
            :class="successful ? 'alert-success' : 'alert-danger'"
          >
            {{ message }}
            <div class="py-3 row">
              <a href="/profile" class="mx-auto btn btn-light" :enabled="loading">
                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                <span>Mon profil</span>
              </a>
            </div>
          </div>
        </div>
        <div v-if="userRole" class="col-6 text-left">
            <a href="#" @click="deleteUser" class="btn btn-secondary">
              Supprimer
              <i class="ml-2 fas fa-times text-right"></i>
            </a>
        </div>
      </div>
    </Form>
    <!-- if user is admin he can delete -->
    <div class="row pt-3" v-if="isUserDetail">
      
      <!-- if we are on the profile page we can edit the user -->
      <div class="col-6 text-right">
          <a :href="`/modifier-utilisateur/${this.user.uuid}`" class="btn btn-warning">
            Modifier
            <i class="ml-3 fas fa-edit text-left"></i>
          </a>
      </div>
      <div v-if="userRole" class="col-6 text-left">
          <a href="#" @click="deleteUser" class="btn btn-secondary">
            Supprimer
            <i class="ml-2 fas fa-times text-right"></i>
          </a>
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
    is_admin: yup
      .number()
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
            // console.log(localStorage.getItem('userData'))
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
  methods: {
    editUser(values) {
      console.log('modifying user')
      console.log(values)
      const modifyUser = {
        uuid: values.uuid,
        password: values.password,
        email: values.email,
        is_admin: values.is_admin
      }

      console.log(modifyUser)

      this.$emit('modify-user', modifyUser)
    },
    /* editUser(values) {
      console.log('editUser', values)
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/modify", values).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    }, */
  }
};
</script>