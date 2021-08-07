<template>
    <div class="container">
        <div :key="post.uuid" v-for="post in posts">
            <Post 
                @delete-post="$emit('delete-post', post.uuid)"
                @delete-comment="$emit('delete-comment', this.comments.uuid)"
                @toggle-comments="$emit('toggle-comments', post.uuid)"
                :post="post"
            />
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
    },
}
</script>