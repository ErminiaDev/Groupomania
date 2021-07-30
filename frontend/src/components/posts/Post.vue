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
                    <h3 class="card-title text-left"> {{ post.title }}</h3>
                    <!-- <p class="lead"> {{ post.uuid }}</p> -->
                  </div>
                </div>                
                <p class="card-text pb-3 text-left"> {{ post.text }} </p>
                <div class="row">
                  <div class="col-6 text-left">
                    <a href="#" @click="$emit('delete-post', post.id)" class="btn btn-secondary">
                    Supprimer
                    <i class="ml-1 fas fa-times text-right"></i>
                    </a>
                  </div>
                  <div class="col-6 text-right">
                    <button type="button" @click="sendPostData" class="mr-2 btn btn-outline-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
                        <i class="far fa-comment-alt"></i> 
                        Commenter
                    </button>
                    <a href="#collapseComments" data-toggle="collapse" class="ml-2 btn btn-outline-success" role="button" aria-expanded="false" aria-controls="collapseComments">
                        <i class="far fa-comments"></i>
                        Voir les commentaires
                    </a>
                  </div>
                </div>
                
                
              </div>
              <Comments :comments="comments"/>
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
        data() {
          return {
            comments: [
              {
                text: 'Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow\'s nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.',
                author: 'Sandra Dee'
              },
              {
                text: 'Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.',
                author: 'Fatboy Slim'
              }
            ],
          }
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
          }
        },
        methods: {
          sendPostData(){
            console.log('comment clicked')
            const postData = localStorage.setItem('postData', JSON.stringify(this.post.uuid))
            return postData
          }
        }
        /* data() {
          return {
              datetime: function () {
              const currentPost = this.post;
              const sqlDate = currentPost.createdAt.split(/[- T : .]/);
              var date = new Date(Date.UTC(sqlDate[0], sqlDate[1]-1, sqlDate[2], sqlDate[3], sqlDate[4]))
              console.log(date);
              return date;
            }
          } 
        }    */
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

