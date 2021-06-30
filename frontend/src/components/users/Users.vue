<template>
    <div class="container">
        <div :key="user.id" v-for="user in users">
            <User 
                @delete-user="$emit('delete-user', user.id)"
                :user="user"
            />
        </div>
    </div>
</template>

<script>
import User from './User.vue'
export default {
    name: 'Users',
    props: {
        users: Array
    },
    components: {
        User
    },
    emits: ['delete-user'],
}
</script>