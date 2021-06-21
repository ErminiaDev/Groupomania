<template>
    <div class="container">
        <h1 class="py-5">Ajouter une publication</h1>
        <div class="row pb-5">
            <div class="col-9 mx-auto">
                <div class="card p-5">
                    <form>
                        <div class="row text-left form-group pb-4 lead">
                            <label class="col-sm-3" for="titre">Titre</label>
                            <div class="col-9">
                                <input type="text" class="form-control" id="titre">
                            </div>
                        </div>
                        <div class="row text-left form-group pb-4 lead">
                            <label class="col-sm-3" for="inlineFormCustomSelect">Catégorie</label>
                            <div class="col-3">
                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option selected>Choisir</option>
                                    <option value="1">Vie au travail</option>
                                    <option value="1">Lecture</option>
                                    <option value="2">Bien-être</option>
                                    <option value="3">After-work</option>
                                    <option value="3">Activités sportives</option>
                                  </select>
                            </div>
                        </div>
                        <div class="row text-left form-group pb-4 lead">
                            <label class="col-sm-3" for="texte">Publication</label>
                            <div class="col-9">
                                <textarea class="form-control" id="texte" rows="5" ></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-dark">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>