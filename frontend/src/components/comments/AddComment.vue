<template>
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="commentModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Ajouter un commentaire</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span>&times;</span>
                </button>
              </div>
            <form class="my-2 mx-4" @submit="onSubmit">
                <div class="modal-body">
                    <div class="form-group body">
                        <label for="comment">Ajouter un commentaire</label>
                        <!-- <textarea class="form-control text-muted text-left" name="comment" id="comment" cols="50" rows="6" >
                            Ecrivez votre commentaire
                        </textarea> -->
                        <textarea class="text-muted form-control" id="comment" v-model="text" name="comment" required rows="5" columns="100">Ecrivez votre commentaire...</textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="form-group">
                        <button type="submit" class="btn btn-success">Enregistrer</button>
                    </div>
                </div>                
            </form>            
            </div>
          </div>
        </div>
</template>

<script>
export default {
    name: 'AddComment',
     data() {
        return {
            userId: '',
            postId: '',
            text: ''
        }  
    },
    props: {
        post: Object
    },
    computed: {
        currentUser() {
          return this.$store.state.auth.user;
        },
        postUUID(){
            console.log(localStorage.getItem('postData'))
            const postString = localStorage.getItem('postData')
            // console.log(JSON.parse(userString))
            const postUUID = JSON.parse(postString)
            return postUUID
        },
    },
    methods: {
        onSubmit(e) {
          e.preventDefault()

          console.log('collecting comment')
            // console.log(this.$store.state.auth.user.id)
          const newComment = {
            postId: this.postUUID,
            userId: this.currentUser.uuid,
            text: this.text,
          }

          console.log(newComment)

          this.$emit('add-comment', newComment)

          this.text = ''
        },
    }
}
</script>

<style scoped>
 .body {
     height: 200px;
 }

 input{
     width: 100%;
     height: 80%;
 }
</style>