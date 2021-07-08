<template>
    <div class="container">
        <div :key="user.uuid" v-for="user in users">
            <User 
                @delete-user="$emit('delete-user', user.uuid)"
                @modify-user="$emit('modify-user', user.uuid)"
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