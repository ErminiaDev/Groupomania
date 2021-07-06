<template>
    <div class="container">
        <h1 class="py-5"> {{ htmlSignUp }}</h1>
        <!-- <h1 class="py-5">Se Connecter</h1> -->
        <div class="row pb-5">
            <div class="col-5 mx-auto">
                <div v-bind:class="[isSignUp ? 'bg-success' : 'bg-primary']" class="card border-secondary text-light  my-3 p-4">
                  <form @submit="onSubmit">
                      <div v-if="isSignUp" class="form-group pb-4 lead">
                        <label for="nom">Nom</label>
                        <input type="text" v-model="form.last_name" class="form-control" id="nom" required>
                      </div>
                      <div v-if="isSignUp" class="form-group pb-4 lead">
                        <label for="nom">Prénom</label>
                        <input type="text" v-model="form.first_name" class="form-control" id="prénom" required>
                      </div>
                      <div class="form-group pb-4 lead">
                        <label for="email">Adresse email</label>
                        <input type="email" v-model="form.email" class="form-control" id="email" required>
                      </div>
                      <div class="form-group pb-4 lead">
                        <label for="mot-de-passe">Mot de passe</label>
                        <input type="password" v-model="form.password" class="form-control" id="mot-de-passe" aria-describedby="emailHelp" required>
                        <small id="passwordHelp" class="form-text">Nous ne partagerons jamais votre mot de passe.</small>
                      </div>
                      <div v-if="isSignUp" class="form-group form-check pb-4">
                        <input type="checkbox" class="form-check-input" id="conditions-d-utilisation" required>
                        <label class="form-check-label" for="conditions-d-utilisation">J'ai pris connaissance des conditions d'utilisation du réseau social</label>
                      </div>
                      <button type="submit" class="btn btn-light">{{ htmlSignUp }}</button>
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
          form: {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
          }
        }
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

          console.log('collecting user info')

          if(this.$route.name === 'Connexion'){

            const User = {
              email: this.form.email,
              password: this.form.password
            }

            console.log(User)

            this.$emit('user-signin', User);

          } else {

            const newUser = {
              first_name: this.form.first_name,
              last_name: this.form.last_name,
              email: this.form.email,
              password: this.form.password
            }

            console.log(newUser)
            this.$emit('add-user', newUser);
          }
          

          this.first_name = ''
          this.last_name = ''
          this.email = ''
          this.password = ''
        },
    }
}

</script>