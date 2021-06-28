<template>
    <div>
        <AddPost @add-post="addPost"/>
    </div>
</template>

<script>
    import AddPost from '../components/posts/AddPost'
    export default {
        components: {
            AddPost
        },
        data() {
            return {
                tasks: [],
            }
        },
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
        }

    }
</script>