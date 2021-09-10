<template>
    <div class="row pb-5">
        <div class="col-12">
            <div class="card">
              <div class="card-header">
                <div class="row">
                  <div class="col-sm-6 text-left "><i> {{ postDate }} </i></div>
                  <div class="col-sm-6 text-right"> {{ post.category }} </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-left">
                    <h2 class="card-title text-left"> {{ post.title }}</h2>
                  </div>
                </div>                
                <p class="card-text text-left"> {{ post.text }} </p>
                <blockquote class="blockquote pb-3">
                    <footer class="blockquote-footer text-left"><i>écrit par {{post.User.first_name}} {{post.User.last_name}}</i></footer>
                </blockquote>
                <div class="row">
                  <div class="col-md-6 pb-3 pb-md-0 text-left">
                    <a v-if="userRole" href="#" @click="$emit('delete-post', post.uuid)" class="btn btn-secondary">
                    Supprimer
                    <i class="ml-1 fas fa-times text-right"></i>
                    </a>
                  </div>
                  <div class="col-md-6 text-right">
                    <button type="button" @click="sendPostData" class="mb-3 mb-md-0 mr-md-2 btn btn-outline-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
                        <i class="far fa-comment-alt"></i> 
                        Commenter
                    </button>
                    <a @click="$emit('toggle-comments', post.uuid)" class="ml-md-2 btn btn-outline-success" role="button">
                        <i class="far fa-comments"></i>
                        Voir les commentaires
                    </a>
                  </div>
                </div>
                
                
              </div>
              <Comments 
                :comments="post.Comments"
                v-if="post.show_comments"
                v-bind="$attrs"
              />
              <AddComment/>
            </div>
        </div>
    </div>
</template>

<script>
    import Comments from "../comments/Comments"
    import AddComment from "../comments/AddComment"
    export default {
        name: 'Post',
        components: {
          Comments,
          AddComment
        },
        props: {
          post: Object,
        },
        computed: {
          currentUser() {
            return this.$store.state.auth.user;
          },
          postDate() {
            const currentPost = this.post;
            const d = new Date(currentPost.createdAt);
            const options = {weekday: "long", year: "numeric", month: "long", day: "2-digit", hour:"numeric", minute:"numeric"};
            const date = d.toLocaleDateString("fr-FR", options);
            console.log( date );
            return date;
          },
          currentPostUUID() {
            const currentUUID = this.post.uuid;
            return currentUUID;
          },
          userRole () {
              if (this.currentUser === null) {
                return false
              } else if (this.currentUser.is_admin === 1){
                return true
              } else {
                return false
              }
          },
        },
        methods: {
          sendPostData(){
            console.log('comment clicked')
            const postData = localStorage.setItem('postData', JSON.stringify(this.post.uuid))
            return postData
          }
        }
    }
</script>

<style scoped>
  h3 {
    font-weight: 500;
    font-size: 1.8em;
  }
  p {
    font-weight: 300;
    font-size: 1.2em;
  }
  .fa-heart {
    color: red;
  }

  .fa-retweet {
    color: green
  }
</style>

