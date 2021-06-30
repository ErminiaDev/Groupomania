<template>
<div class="row pb-5">
    <div id="user-card" class="pb-5 col-lg-4 col-sm-6 col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title pt-3">{{ user.first_name }} {{ user.last_name }}</h5>
            <h6 v-if="isUserDetail||isAllUsers" class="card-subtitle my-3 text-muted">{{ user.id }}</h6>
            <p class="card-text my-2">{{ user.email }}</p>
            <p class="card-text my-2">{{ user.uuid }}</p>
          </div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'User',
    props: {
        user: Object
    },
    computed: {
        isUserDetail() {
           return this.$route.name === 'UserDetail'
        },
        isAllUsers() {
           return this.$route.name === 'AllUsers'
        }
      }
}
</script>

<style>
    #user-card {
        margin: 0 auto
    }
</style>