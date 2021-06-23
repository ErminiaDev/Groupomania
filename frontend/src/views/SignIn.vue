<template>
    <div class="container">
        <h1 class="py-5">Connexion</h1>
        <div class="row pb-5">
            <div class="col-5 mx-auto">
                <div class="card bg-primary border-secondary text-light  my-3 p-4">
                    <form>
                      <div class="form-group pb-4 lead">
                        <label for="email">Adresse email</label>
                        <input type="email" class="form-control" id="email">
                      </div>
                      <div class="form-group pb-4 lead">
                        <label for="mot-de-passe">Mot de passe</label>
                        <input type="password" class="form-control" id="mot-de-passe" aria-describedby="passwordHelp">
                        <small id="passwordHelp" class="form-text">Nous ne partagerons jamais votre mot de passe.</small>
                      </div>
                      <div class="form-group form-check pb-4">
                        <input type="checkbox" class="form-check-input" id="deconnexion">
                        <label class="form-check-label" for="deconnexion">Me déconnecter</label>
                      </div>
                      <button type="submit" class="btn btn-dark">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

