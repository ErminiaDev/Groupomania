<template>
    <div class="container">
        <h1 class="py-5">Utilisateur: {{ $route.params.userid }}</h1>
        <Profile/>
    </div>
</template>

<script>
    import Profile from "../components/Profile.vue"

    export default {
        components: {
            Profile,
        }
    }
</script>

<style scoped>
    #user-card {
        margin: 0 auto
    }
</style>