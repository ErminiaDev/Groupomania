<template>
    <div class="row pb-5">
        <div class="col-12">
            <div class="card">
              <div class="card-header">
                <div class="row">
                  <div class="col-sm-6 text-left "><i> {{ post.date }} </i></div>
                  <div class="col-sm-6 text-right"> {{ post.category }} </div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title"> {{ post.title }} </h5>
                <p class="card-text"> {{ post.text }} </p>
                <a href="#" class="btn btn-outline-info">
                    <span>Aimé  {{ post.liked }}&nbsp;</span>
                    <i class="ml-1 mr-2 far fa-heart"></i>
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
          post: Object
        }
    }
</script>

<style scoped>
  h5 {
    font-weight: 600;
    font-size: 1.5em;
  }
  svg{
    color: red;
  }
</style>

