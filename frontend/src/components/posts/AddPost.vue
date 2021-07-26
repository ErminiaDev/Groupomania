<template>
    <div class="container">
        <div class="row pb-5">
            <div class="col-9 mx-auto">
                <div class="text-left">
                    <!-- IMPORTANTdo the toggle i icon the vuejs way -->
                    <button class="btn btn-success my-5 text-left pt-2 pb-1" data-toggle="collapse" href="#collapseAddPost" aria-expanded="false" aria-controls="collapseAddPost">
                        <h2>
                            Ajouter une publication<i class="pl-2 fas fa-caret-down"></i>
                        </h2>
                    </button>
                </div>
                <div class="collapse" id="collapseAddPost">
                    <div class="card">
                        <form class="m-5" @submit="onSubmit">
                            <div class="row text-left form-group pb-4 lead">
                                <label class="col-sm-3" for="titre">Titre</label>
                                <div class="col-9">
                                    <input type="text" v-model="title" class="form-control" id="titre" required>
                                </div>
                            </div>
                            <div class="row text-left form-group pb-4 lead">
                                <label class="col-sm-3" for="inlineFormCustomSelect">Catégorie</label>
                                <div class="col-3">
                                    <select class="custom-select mr-sm-2" v-model="category" id="inlineFormCustomSelect" required>
                                        <option selected>Choisir</option>
                                        <option value="Vie au travail">Vie au travail</option>
                                        <option value="Lecture">Lecture</option>
                                        <option value="Bien-être">Bien-être</option>
                                        <option value="After-work">After-work</option>
                                        <option value="Activités sportives">Activités sportives</option>
                                      </select>
                                </div>
                            </div>
                            <div class="row text-left form-group pb-4 lead">
                                <label class="col-sm-3" for="texte">Publication</label>
                                <div class="col-9">
                                    <textarea class="form-control" v-model="text" id="texte" rows="5" required></textarea>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-dark">Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AddPost',
    data() {
        return {
            title: '',
            category: '',
            text: ''
        }
    },
    methods: {
        onSubmit(e) {
          e.preventDefault()

          console.log('collecting post')

          const newPost = {
            title: this.title,
            category: this.category,
            text: this.text,
          }

          console.log(newPost)

          this.$emit('add-post', newPost)

          this.title = ''
          this.category = ''
          this.text = ''
        },
    }
}

</script>

<style scoped>
    h2 {
        font-weight: 300;
        font-size: 20px;
    }
</style>