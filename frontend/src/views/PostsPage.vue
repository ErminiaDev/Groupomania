<template>
<div id="content">
    <div class="container">
        <h1 class="py-5">Publications</h1>
        <AddPost @add-post="newPost"/>
        <AddComment @add-comment="newComment"/>
        <Posts 
          @delete-post="deletePost"
          @delete-comment="deleteComment"
          @toggle-comments="toggleComments"
          :posts="posts"
        />
    </div>
</div>
</template>

<script>
import Posts from "../components/posts/Posts.vue"
import AddPost from '../components/posts/AddPost'
import AddComment from '../components/comments/AddComment'
import postService from '../services/post.service';
import commentService from '../services/comment.service';

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
      }
    },
    methods: {
      //ajouter un post
      async newPost(newPost) {
        try { 
          //console.log(newPost)
          const post = await postService.addPost(newPost)
          console.log(post, 'post')
          this.posts = [post, ...this.posts]
          //display a message saying post is published
        } catch (error) {
          console.log(error)
        }
      },
      // delete a post
      async deletePost(uuid) {
        try {
          postService.destroyPost(uuid)
          this.posts = this.posts.filter((post) => post.uuid !== uuid)
        } catch (error) {
          console.log(error)
        }
      },
      async newComment(newComment) {
        try { 
          console.log(newComment)
          const comment = await commentService.addComment(newComment)
          console.log(comment, 'comment from service');
          console.log(this.posts, 'posts')
          this.posts = this.posts.map(p => {
            if (p.id === comment.PostId) {
              return { ...p, Comments: [comment, ...p.Comments] }
            }
            return p;
          })
        } catch (error) {
          console.log(error)
        }
      },
      // delete a post
      async deleteComment(uuid) {
        console.log(uuid, 'launched')
        try {
          console.log(uuid, 'tried')
          commentService.destroyComment(uuid)
          this.posts = this.posts.map(p => {
            if (p.Comments.find(c => c.uuid === uuid)) {
              return { ...p, Comments: p.Comments.filter(c => c.uuid !== uuid) }
            }
            return p;
          })
        } catch (error) {
          error.toString()
        }
      },
      toggleComments(uuid) {
        console.log(uuid, 'uuid on toggle comments')
        console.log(this.posts, 'before')
        this.posts = this.posts.map(p => {
          //console.log(p.uuid, p.uuid === uuid)
          if (p.uuid === uuid) {
            return { ...p, show_comments: !p.show_comments }
          }
          return p;
        })
        //console.log(this.posts, 'after')
      }
    },
    async created() {
      try {
        this.posts = (await postService.getAllPosts()).map(p => ({ ...p, show_comments: false }))
        //console.log(this.posts, 'jj')
      } catch (error) {
        error.toString()
      }
    }, 
}
</script>
<style scoped>
  #content {
    height: 100%;
    background:
    linear-gradient(
      rgba(255, 255, 255, 0.45), 
      rgba(255, 255, 255, 0.45)
    ),
    url('../assets/images/fond.jpg')
    ;
    background-position: top;
    background-repeat: repeat;
    background-size: contain;
  }
</style>