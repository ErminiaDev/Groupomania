<template>
    <div class="">
        <div class="collapse" id="collapseComments">
            <div class="card-footer text-muted">
                <blockquote class="blockquote">
                    <p class="text-left">{{comment.text}}</p>
                    <footer class="blockquote-footer text-right"><i>by {{comment.User.first_name}}</i></footer>
                </blockquote>
                <div class="text-right py-3">
                    <button type="button" class="btn btn-danger btn-sm">Supprimer le commentaire</button>
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