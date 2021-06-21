<template>
    <div class="container">
        <h1 class="py-5">Publications aimées</h1>
        <Post/>
    </div>
</template>

<script>
    import Post from "../components/posts/Post.vue"

    export default {
        components: {
            Post
        }
    }
</script>