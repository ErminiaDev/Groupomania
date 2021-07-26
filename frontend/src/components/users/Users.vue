<template>
    <div class="container">
        <div :key="user.uuid" v-for="user in users">
            <User 
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
}
</script>