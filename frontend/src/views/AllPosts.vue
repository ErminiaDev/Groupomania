<template>
    <div class="container">
        <h1 class="py-5">Publications</h1>
        <Posts :posts="posts"/>
    </div>
</template>

<script>
import Posts from "../components/posts/Posts.vue"

export default {
    name:'AllPosts',
    components: {
        Posts
    },
    data() {
      return {
        posts: [],
      }
    },
    methods: {
       //fetch all posts from the API
      async fetchPosts() {
        const res = await fetch('http://localhost:3000/api/publications')
        const data = await res.json()
        return data
      },
    },
    async created() {
      this.posts = await this.fetchPosts()
      
    } 
}
</script>