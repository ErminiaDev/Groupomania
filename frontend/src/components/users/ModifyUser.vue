<template>
    <div class="container">
        <h1 class="py-5">Modifier un utilisateur</h1>
        <div class="row pb-5">
            <div class="col-5 mx-auto">
                <div class="card bg-success border-secondary text-light  my-3 p-4">
                  <h2>Identifiant unique: {{ user.uuid }}</h2>
                  <form @submit="onChange">
                      <div class="form-group pb-4 lead">
                        <label for="nom">Nom</label>
                        <input type="text" v-model="last_name" class="form-control" id="nom" placeholder="{{user.last_name}}" required>
                      </div>
                      <div class="form-group pb-4 lead">
                        <label for="nom">Prénom</label>
                        <input type="text" v-model="first_name" class="form-control" id="prénom" placeholder="{{user.first_name}}" required>
                      </div>
                      <div class="form-group pb-4 lead">
                        <label for="email">Adresse email</label>
                        <input type="email" v-model="email" class="form-control" id="email" placeholder="{{user.email}}" required>
                      </div>
                      <div class="form-group pb-4 lead">
                        <label for="mot-de-passe">Mot de passe</label>
                        <input type="password" v-model="password" class="form-control" id="mot-de-passe" aria-describedby="emailHelp" placeholder="{{user.password}}" required>
                        <small id="passwordHelp" class="form-text">Nous ne partagerons jamais votre mot de passe.</small>
                      </div>
                      <button type="submit" class="btn btn-light">Modifier l'utilisateur</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>