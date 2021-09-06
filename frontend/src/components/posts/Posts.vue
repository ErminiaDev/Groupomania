<template>
    <div class="container">
        <div :key="post.uuid" v-for="post in posts">
            <Post 
                v-bind="$attrs"
                :post="post"
            />
        </div>
    </div>
</template>
/* v-bind is for passing all attributes from postspage.vue to posts.vue directly
 */
<script>
import Post from './Post.vue'
export default {
    name: 'Posts',
    props: {
        posts: Array
    },
    components: {
        Post
    },
}
</script>