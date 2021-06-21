<template>
    <div class="row pb-5">
        <div class="col-12">
            <div class="card">
              <div class="card-header">
                <div class="row">
                  <div class="col-sm-6 text-left "><i>Post date</i></div>
                  <div class="col-sm-6 text-right">Post category</div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Post title</h5>
                <p class="card-text">Post description</p>
                <a href="#" class="btn btn-outline-info">
                    <i class="mr-2 far fa-heart"></i>
                    <span>Like</span>
                </a>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Post',
    }
</script>

<style scoped>
  h5 {
    font-weight: 600;
    font-size: 1.5em;
  }
</style>

