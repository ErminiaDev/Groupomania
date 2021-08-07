<template>
    <div class="">
        <div>
            <div class="card-footer text-muted">
                <blockquote class="blockquote">
                    <p class="text-left">{{comment.text}}</p>
                    <footer class="blockquote-footer text-right"><i>écrit par {{comment.User.first_name}} {{comment.User.last_name}}</i></footer>
                </blockquote>
                <div class="text-right py-3">
                    <button type="button" @click="$emit('delete-comment', comment.uuid)" class="btn btn-danger btn-sm">Supprimer le commentaire</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Comment',
    props: {
        comment: Object,
    },
    computed: {
        postUUID(){
            console.log(localStorage.getItem('postData'))
            const postString = localStorage.getItem('postData')
            // console.log(JSON.parse(userString))
            const postUUID = JSON.parse(postString)
            return postUUID
        },
    }
    
}
</script>

<style scoped>

blockquote {
    font-size: 17px
}
blockquote footer {
    font-size: 16px;
}

</style>