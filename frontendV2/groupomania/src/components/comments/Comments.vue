<template>
    <div class="container">
        <div :key="comment.uuid" v-for="comment in comments">
            <Comment 
                :comment="comment"
            />
        </div>
    </div>
</template>

<script>
import Comment from './Comment'
export default {
    name: 'Comments',
    props: {
        comments: Array
    },
    components: {
        Comment
    },
}
</script>