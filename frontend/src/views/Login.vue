<template>
    <div class="container">
        <h1 class="py-5"> Se Connecter</h1>
        <div class="row pb-5">
            <div class="col-5 mx-auto">
                <div class=" bg-primary card border-secondary text-light  my-3 p-4">
                  <Form v-slot="{values}" @submit="handleLogin" :validation-schema="schema">

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

                         <div class="form-group">
                          <button type="submit" class="btn btn-light" :disabled="loading">
                            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                            <span>Se connecter</span>
                          </button>
                        </div>

                        <pre>{{ values }}</pre>
                        <div class="form-group">
                          <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
                        </div>
                    </Form>
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
        email: yup.string().required("Email is required!"),
        password: yup.string().required("Password is required!"),
      });

      return {
        loading: false,
        message: "",
        schema,
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
    },
    created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
      }
    },
    methods: {
      handleLogin(values) {
        this.loading = true;
        console.log('handling login')
        this.$store.dispatch("auth/login", values).then(
          () => {
            this.$router.push("/profile");
          },
          (error) => {
            this.loading = false;
            this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
          }
        );
      },
    }
}

</script>
