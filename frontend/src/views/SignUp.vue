<template>
<div id="content">
    <div class="container">
        <h1 class="py-5"> S'inscrire</h1>
        <div class="row pb-5">
            <div class="col-md-5 mx-auto">
                <div class="bg-success card border-secondary text-light my-3 p-4">
                  <Form @submit="handleSignUp" :validation-schema="schema">
                      <div v-if="!successful">

                        <div class="form-group pb-4 lead">
                          <label for="nom">Nom</label>
                          <Field name="last_name" type="text" class="form-control" />
                          <ErrorMessage name="last_name" class="error-feedback" />
                        </div>

                        <div class="form-group pb-4 lead">
                          <label for="nom">Prénom</label>
                          <Field name="first_name" type="text" class="form-control" />
                          <ErrorMessage name="first_name" class="error-feedback" />
                        </div>

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

                        <div class="form-group form-check pb-4">
                          <input type="checkbox" class="form-check-input" id="conditions-d-utilisation" required>
                          <label class="form-check-label" for="conditions-d-utilisation">J'ai pris connaissance des conditions d'utilisation du réseau social</label>
                        </div>

                         <div class="form-group">
                          <button type="submit" class="btn btn-light" :disabled="loading">
                            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                            <span>S'inscrire</span>
                          </button>
                        </div>
                      </div>                  
                    </Form>
                  <div
                    v-if="message"
                    class="alert"
                    :class="successful ? 'alert-success' : 'alert-danger'"
                  >
                    {{ message }}
                    <div class="py-3 row">
                      <a href="/connexion" class="mx-auto btn btn-light" :enabled="loading">
                        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                        <span>Se connecter</span>
                      </a>
                    </div>
                  </div>
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
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    data() {
      const schema = yup.object().shape({
        first_name: yup
          .string()
          .required("Username is required!")
          .min(3, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
        last_name: yup
          .string()
          .required("Username is required!")
          .min(3, "Must be at least 3 characters!")
          .max(20, "Must be maximum 20 characters!"),
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
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },
    mounted() {
      if (this.loggedIn) {
        this.$router.push('/profile');
      }
    },
    methods: {
      clicked(){
        console.log('clicked');
      },
        handleSignUp(values) {
          console.log('handling signup', values)
          this.message = "";
          this.successful = false;
          this.loading = true;

          this.$store.dispatch("auth/register", values).then(
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
        },
        
    }
}

</script>

<style scoped>
  #content {
    color: white;
    height: 100%;
    background:
    linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.45)
    ),
    url('../assets/images/interface.jpg')
    ;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>