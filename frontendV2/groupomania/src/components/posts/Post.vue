<template>
    <div class="row pb-5">
        <div class="col-12">
            <div class="card">
              <div class="card-header">
                <div class="row">
                  <div class="col-sm-6 text-left "><i> {{ formattedDate }} </i></div>
                  <div class="col-sm-6 text-right"> {{ post.category }} </div>
                </div>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-4"></div>
                  <div class="col-4">
                    <h5 class="card-title"> {{ post.title }}</h5>
                    <p class="lead"> {{ post.uuid }}</p>
                  </div>
                  <div class="col-4"></div>
                </div>                
                <p class="card-text"> {{ post.text }} </p>
                <a href="#" @click="$emit('delete-post', post.id)" class="btn btn-secondary">
                  Supprimer
                  <i class="ml-1 fas fa-times text-right"></i>
                </a>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Post',
        props: {
          post: Object,
        },
        data: function() {
          return {
            formattedDate: ''
          }
        },
        created: function() {
          this.formatDate();
        },
        methods: {
          formatDate: function(){
            const currentPost = this.post;
            const sqlDate = currentPost.createdAt.split(/[- T : .]/);
            const formattedDate = new Date(Date.UTC(sqlDate[0], sqlDate[1]-1, sqlDate[2], sqlDate[3], sqlDate[4]))
            console.log(formattedDate);
            return formattedDate;
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
  h5 {
    font-weight: 600;
    font-size: 1.5em;
  }
  .fa-heart {
    color: red;
  }

  .fa-retweet {
    color: green
  }
</style>

