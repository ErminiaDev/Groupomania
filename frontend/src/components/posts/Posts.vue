<template>
    <div class="container">
        <div :key="post.id" v-for="post in posts">
            <Post :post="post"/>
        </div>
    </div>
</template>

<script>
import Post from './Post.vue'
export default {
    name: 'Posts',
    props: {
        posts: Array
    },
    components: {
        Post
    }
}
</script>