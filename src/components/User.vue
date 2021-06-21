<template>
<div class="row pb-5">
    <div id="user-card" class="pb-5 col-lg-4 col-sm-6 col-12">
        <div class="card">
          <div class="card-body">
            <img class="card-img-top" src="" alt="Card image cap">
            <h5 class="card-title pt-3">User</h5>
            <h6 class="card-subtitle my-3 text-muted">User id</h6>
            <p class="card-text my-2">email</p>
            <p class="card-text my-2">Liked posts</p>
            <p class="card-text my-2">Shared posts</p>
          </div>
        </div>
    </div>
</div>
    
</template>

<script>
    export default {
        name: 'User'
    }
</script>

<style>
    #user-card {
        margin: 0 auto
    }
</style>