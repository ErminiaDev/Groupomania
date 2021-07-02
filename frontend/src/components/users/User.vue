<template>
<div class="row pb-5">
    <div id="user-card" class="pb-5 col-lg-4 col-sm-6 col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title pt-3">{{ user.first_name }} {{ user.last_name }}</h5>
            <!-- conditionner la vue de l'H6 à l'admin -->
            <h6 class="card-subtitle my-3 text-muted">{{ user.uuid }}</h6>
            <p class="card-text my-2">{{ user.email }}</p>
            <div class="row">
              <div class="col-12 text-center">
                <router-link class="btn btn-outline-success" to="/utilisateurs/" > Voir le profil</router-link>
              </div>
            </div>
            <div class="row py-2">
                <div class="col-6">
                    <a href="#" @click="$emit('delete-user', user.uuid)" class="btn btn-secondary">
                      Supprimer
                      <i class="mr-1 fas fa-times text-right"></i>
                    </a>
                </div>
                <div class="col-6">
                    <a href="#" @click="$emit('modify-user', user.uuid)" class="btn btn-warning">
                      Modifier
                      <i class="ml-1 fas fa-edit text-left"></i>
                    </a>
                </div>
            </div>
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