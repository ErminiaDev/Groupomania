<template>
    <div class="container">
        <h1 class="py-5">Publications</h1>
        <Post/>
    </div>
</template>

<script>
    import Post from "../components/Post.vue"

    export default {
        components: {
            Post
        }
    }
</script>