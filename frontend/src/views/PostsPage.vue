<template>
    <div class="container">
        <h1 class="py-5">Publications</h1>
        <AddPost @add-post="newPost"/>
        <AddComment @add-comment="newComment"/>
        <Posts 
          @delete-post="deletePost"
          :posts="posts"
        />
    </div>
</template>

<script>
import Posts from "../components/posts/Posts.vue"
import AddPost from '../components/posts/AddPost'
import AddComment from '../components/comments/AddComment'
import postService from '../services/post.service';
import commentService from '../services/comment.service';
/* import authHeader from '../services/auth-header';
 */
/* import PostService from '../services/post.service';
 */

export default {
    name:'PostsPage',
    components: {
        Posts,
        AddPost,
        AddComment
    },
    data() {
      return {
        posts: [],
        comments: [],
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
          const post = await postService.addPost(newPost)
          console.log(post, 'post')
          this.posts = [post, ...this.posts]
          // this.$router.go();
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
      async newComment(newComment) {
        try { 
          console.log(newComment)
          commentService.addComment(newComment)
          // this.$router.go();
          //display a message saying post is published
        } catch (error) {
          error.toString()
        }
      },
      // delete a post
      async deleteComment(uuid) {
        try {
          commentService.destroyComment(uuid)
          this.comments = this.comments.filter((comment) => comment.uuid !== uuid)
        } catch (error) {
          error.toString()
        }
      },
    },
    async created() {
      try {
        this.posts = await postService.getAllPosts()
        console.log(this.posts, 'jj')
      } catch (error) {
        error.toString()
      }
    }, 
}
</script>