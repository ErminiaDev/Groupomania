<template>
    <div class="container">
        <h1 class="py-5">S'inscrire</h1>
        <div class="row pb-5">
            <div class="col-5 mx-auto">
                <div class="card bg-success border-secondary text-light  my-3 p-4">
                  <form @submit="onSubmit">
                      <div class="form-group pb-4 lead">
                        <label for="nom">Nom</label>
                        <input type="text" v-model="last_name" class="form-control" id="nom" required>
                      </div>
                      <div class="form-group pb-4 lead">
                        <label for="nom">Prénom</label>
                        <input type="text" v-model="first_name" class="form-control" id="prénom" required>
                      </div>
                      <div class="form-group pb-4 lead">
                        <label for="email">Adresse email</label>
                        <input type="email" v-model="email" class="form-control" id="email" required>
                      </div>
                      <div class="form-group pb-4 lead">
                        <label for="mot-de-passe">Mot de passe</label>
                        <input type="password" v-model="password" class="form-control" id="mot-de-passe" aria-describedby="emailHelp" required>
                        <small id="passwordHelp" class="form-text">Nous ne partagerons jamais votre mot de passe.</small>
                      </div>
                      <div class="form-group form-check pb-4">
                        <input type="checkbox" class="form-check-input" id="conditions-d-utilisation" required>
                        <label class="form-check-label" for="conditions-d-utilisation">J'ai pris connaissance des conditions d'utilisation du réseau social</label>
                      </div>
                      <button type="submit" class="btn btn-light">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AddUser',
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        onSubmit(e) {
          e.preventDefault()

          console.log('collecting user info')

          const newUser = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password
          }

          console.log(newUser)

          this.$emit('add-user', newUser)

          this.first_name = ''
          this.last_name = ''
          this.email = ''
          this.password = ''
        },
    }
}

</script>