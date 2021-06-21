<template>
    <div class="container">
        <h1 class="py-5">Utilisateur: {{ $route.params.userid }}</h1>
        <User/>
    </div>
</template>

<script>
    import User from "../components/users/User.vue"

    export default {
        components: {
            User,
        }
    }
</script>

<style scoped>
    #user-card {
        margin: 0 auto
    }
</style>