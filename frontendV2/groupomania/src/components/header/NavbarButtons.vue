<template>
    <div>
        <router-link class="btn btn-outline-success ml-2" to="/inscription">{{ btn_name1 }}</router-link>
        <router-link class="btn btn-outline-primary ml-2" to="/connexion">{{ btn_name2 }}</router-link>
        <a class="btn btn-outline-secondary ml-2" @click.prevent="logOut" href="#">{{ btn_name3 }}</a>
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
              this.$store.dispatch('auth/logout');
              this.$router.push('/login');
            }
        }
    }
</script>