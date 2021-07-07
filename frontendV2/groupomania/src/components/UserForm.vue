<template>
    <div class="container">
        <h1 class="py-5"> {{ htmlSignUp }}</h1>
        <!-- <h1 class="py-5">Se Connecter</h1> -->
        <div class="row pb-5">
            <div class="col-5 mx-auto">
                <div v-bind:class="[isSignUp ? 'bg-success' : 'bg-primary']" class="card border-secondary text-light  my-3 p-4">
                  <form @submit="onSubmit">

                      <div v-if="!successful">

                        <div v-if="isSignUp" class="form-group pb-4 lead">
                          <label for="nom">Nom</label>
                          <input type="text" v-model="user.last_name" class="form-control" id="nom" name="lastname" required>
                        </div>
                        <div v-if="submitted && errors.has('lastname')" class="alert-danger">
                            {{errors.first('lastname')}}
                        </div>

                        <div v-if="isSignUp" class="form-group pb-4 lead">
                          <label for="nom">Prénom</label>
                          <input type="text" v-model="user.first_name" class="form-control" id="prénom" name="firstname" required>
                        </div>
                        <div v-if="submitted && errors.has('firstname')" class="alert-danger">
                            {{errors.first('firstname')}}
                        </div>

                        <div class="form-group pb-4 lead">
                          <label for="email">Adresse email</label>
                          <input type="email" v-model="user.email" v-validate="required" class="form-control" id="email" name="email" required>
                          <input v-if="isSignUp" type="email" v-model="user.email" v-validate="'required|email|max:50'" class="form-control" id="email" name="email" required>
                        </div>
                        <div v-if="submitted && errors.has('email')" class="alert-danger">
                            {{errors.first('email')}}
                        </div>
                        <div v-else-if="errors.has('email')" class="alert alert-danger" role="alert">
                            Un email est requis!
                        </div>
                        

                        <div class="form-group pb-4 lead">
                          <label for="mot-de-passe">Mot de passe</label>
                          <input type="password" v-model="user.password" v-validate="required" class="form-control" id="mot-de-passe" name="password" aria-describedby="passwordHelp" required>
                          <input v-if="isSignUp" type="password" v-model="user.password" v-validate="'required|min:3|max:20'" class="form-control" id="mot-de-passe" name="password" aria-describedby="passwordHelp" required>
                          <small id="passwordHelp" class="form-text">Nous ne partagerons jamais votre mot de passe.</small>
                        </div>
                        <div v-if="submitted && errors.has('password')" class="alert-danger">
                            {{errors.first('password')}}
                        </div>
                        <div v-else-if="errors.has('password')" class="alert alert-danger" role="alert">
                            Un mot de passe est requis!
                        </div>
                        

                        <div v-if="isSignUp" class="form-group form-check pb-4">
                          <input type="checkbox" class="form-check-input" id="conditions-d-utilisation" required>
                          <label class="form-check-label" for="conditions-d-utilisation">J'ai pris connaissance des conditions d'utilisation du réseau social</label>
                        </div>
                        <div class="form-group">
                          <button type="submit" class="btn btn-light" :disabled="loading">
                              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                              <span>{{ htmlSignUp }}</span>
                            </button>  
                        </div>

                        <div v-if="isSignUp" class="form-group">
                          <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
                        </div>

                        <div v-else>
                          <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
                            {{message}}
                          </div>
                        </div>
                      </div>
                      
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserForm',
    data() {
        return {
          user: {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
          },
          successful: false
        }
    },
    props: {
        message: String,
    },
    computed: {
      isSignUp() {
         return this.$route.name === 'Inscription'
      },
      htmlSignUp() {
        if(this.$route.name === 'Connexion'){
          return 'Se connecter';
        } else {
          return 'S\'inscrire'
        }
      }
    },
    methods: {
        onSubmit(e) {
          e.preventDefault()

          if(this.$route.name === 'Connexion'){

            this.$emit('handleLogin');

          } else {

            this.$emit('handleSignUp');
          }

        },
    }
}

</script>