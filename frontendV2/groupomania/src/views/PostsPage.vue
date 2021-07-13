<template>
    <div class="container">
        <h1 class="py-5">Publications</h1>
        <AddPost @add-post="newPost"/>
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
/* import authHeader from '../services/auth-header';
 */
/* import PostService from '../services/post.service';
 */

export default {
    name:'PostsPage',
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
      async newPost(newPost) {
        try { 
          console.log(newPost)
          postService.addPost(newPost)
          /* this.$router.go(); */
          //display a message saying post is published
        } catch (error) {
          error.toString()
        }
      },
      // delete a post
      async deletePost(uuid) {
        try {
          postService.destroyPost(uuid)
          this.posts = this.posts.filter((post) => post.uuid !== uuid)
        } catch (error) {
          error.toString()
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