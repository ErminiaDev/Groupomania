<template>
<div class="row pb-5">
    <div id="user-card" class="pb-5 col-lg-4 col-sm-6 col-12">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title pt-3">{{ user.first_name }} {{ user.last_name }}</h2>
            <p class="card-text my-2">{{ user.email }}</p>
            <div class="row py-3">
              <div class="col-12 text-center">
                <!-- button will lead to the specific users page -->
                <a class="btn btn-outline-success" :href="`/utilisateurs/${this.user.uuid}`" @click="sendUserData" > Voir le profil</a>
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
    methods: {
      //sending the data to UserDetail.vue
      sendUserData(){
        const userData = localStorage.setItem('userData', JSON.stringify(this.user))
        return userData
      }
    }
}
</script>

<style>
    #user-card {
        margin: 0 auto
    }

    #user-card h2{
      font-size: 1.4em;
    }

  #user-card h3{
    font-size: 1.2em;
  }
</style>