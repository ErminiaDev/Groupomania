<template>
    <div class="container">
        <h1 class="py-5">Publications</h1>
        <Posts :posts="posts"/>
    </div>
</template>

<script>
import Posts from "../components/posts/Posts.vue"

export default {
    components: {
        Posts
    },
    data() {
      return {
        posts: [],
      }
    },
    methods: {
        currentDate() {
          let today = new Date();
          let date = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear() + ' à ' + today.getHours() + ':' + today.getMinutes();
          return date;
        }
      },
    created() {
      this.posts =[
        {
          id: 1,
          userId: 346585,
          date: this.currentDate(),
          category: 'random',
          title: 'Hello',
          text: 'Lorem ipsum dolor sit amet',
          liked: 18
        },
        {
          id: 2,
          userId: 434235,
          date: this.currentDate(),
          category: 'peanuts',
          title: 'Bye',
          text: 'Lorem ipsum dolor sit amet',
          liked: 6
        },
        {
          id: 2,
          userId: 434235,
          date: this.currentDate(),
          category: 'lifestyle',
          title: 'See you',
          text: 'Lorem ipsum dolor sit amet',
          liked: 3
        },
      ]
    }
}
</script>