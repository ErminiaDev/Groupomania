<template>
    <div class="container">
        <h1 class="py-5">Publications</h1>
        <AddPost @add-post="addPost"/>
        <Posts 
          @delete-post="deletePost"
          :posts="posts"
        />
    </div>
</template>

<script>
import Posts from "../components/posts/Posts.vue"
import AddPost from '../components/posts/AddPost'
import postService from '../services/post.service';

/* import PostService from '../services/post.service';
 */

export default {
    name:'AllPosts',
    components: {
        Posts,
        AddPost
    },
    data() {
      return {
        posts: [],
      }
    },
    /* mounted() {
      postService.getAllPosts().then(
        (response) => {
          this.posts = response;
          console.log(posts)
          this.posts = response.data;
        },
        (error) => {
          console.log('error');
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    }, */
    methods: {
      //ajouter un post
      async addPost(post) {
      console.log('fetching')
        const res = await fetch('http://localhost:3000/api/publications', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(post),
        })
        console.log('has attempted to fetch')
        const data = await res.json();
        console.log('jsoned');
        this.posts = [...this.posts, data]
      },
      // delete a post
      async deletePost(id) {
        if (confirm(`Etes vous sûr de vouloir supprimer ce post?`)) {
          const res = await fetch(`http://localhost:3000/api/publications/${id}`, {
            method: 'DELETE',
          })

          res.status === 200
            ? (this.posts = this.posts.filter((post) => post.id !== id))
            : alert('Error deleting post')
        }
      },
       /* //fetch all posts from the API
      async fetchPosts() {
        const res = await fetch('http://localhost:3000/api/publications')
        const data = await res.json()
        return data
      }, */
    },
    async created() {
      try {
        this.posts = await postService.getAllPosts() 
      } catch (error) {
        error.toString()
      }
    } 
}
</script>