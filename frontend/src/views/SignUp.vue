<template>
    <div>
        <AddUser @add-user="addUser"/>
    </div>
</template>

<script>
    import AddUser from '../components/users/AddUser'
    export default {
        components: {
            AddUser
        },
        data() {
            return {
                users: [],
            }
        },
        methods: {
            //ajouter un post
            async addUser(user) {
            console.log('fetching')
              const res = await fetch('http://localhost:3000/api/utilisateurs', {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json',
                },
                body: JSON.stringify(user),
              })
              console.log('has attempted to fetch')
              const data = await res.json();
              console.log('jsoned');
              this.users = [...this.users, data]
            },
        }

    }
</script>