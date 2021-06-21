<template>
    <div class="container">
        <h1 class="py-5">Utilisateurs</h1>
        <User/>
    </div>
</template>

<script>
    import User from "../components/User.vue"

    export default {
        components: {
            User,
        }
    }
</script>