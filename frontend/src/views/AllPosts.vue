<template>
    <div class="container">
        <h1 class="py-5">Publications</h1>
        <Posts 
          @delete-post="deletePost"
          :posts="posts"
        />
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
      // delete a post
      async deletePost(id) {
        if (confirm(`Etes vous sûr de vouloir supprimer ce post?`)) {
          const res = await fetch(`http://localhost:3000/api/publications/${id}`, {
            method: 'DELETE',
          })

          res.status === 200
            ? (this.posts = this.posts.filter((post) => post.id !== id))
            : alert('Error deleting task')
        }
      },
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