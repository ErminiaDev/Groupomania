<template>
    <div>
        <router-link class="btn btn-outline-success ml-md-2 mx-5 mr-md-0 mb-2 mb-md-0 d-block d-md-inline" to="/inscription">{{ btn_name1 }}</router-link>
        <router-link class="btn btn-outline-primary ml-md-2 mx-5 mr-md-0 mb-2 mb-md-0 d-block d-md-inline" to="/connexion">{{ btn_name2 }}</router-link>
        <a class="btn btn-outline-secondary ml-md-2 mx-5 mr-md-0 mb-2 mb-md-0 d-block d-md-inline" @click.prevent="logOut" href="#">{{ btn_name3 }}</a>
    </div>
</template>

<script>
    export default {
        name: 'NavbarButtons',
        props: {
            btn_name1: String,
            btn_name2: String,
            btn_name3: String
        },
        methods: {
            logOut() {
                //supprimer les données dans le store et le localStorage et redirigé vers la connexion
              localStorage.removeItem('userData')
              this.$store.dispatch('auth/logout');
              this.$router.push('/connexion');
            }
        }
    }
</script>