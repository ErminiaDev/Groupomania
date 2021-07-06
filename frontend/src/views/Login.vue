<template>
    <div>
        <UserForm @add-user="addUser" @user-signin="signInUser"/>
    </div>
</template>

<script>
    import UserForm from '../components/users/UserForm'
    export default {
        components: {
            UserForm
        },
        data() {
            return {
                users: [],
            }
        },
        methods: {            
            //ajouter un user
            async addUser(user) {
            console.log('fetching')
              const res = await fetch('http://localhost:3000/api/utilisateurs/signup', {
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

            //login un user
            async signInUser(user) {
            console.log('fetching')
              const res = await fetch('http://localhost:3000/api/utilisateurs/login', {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json',
                },
                body: JSON.stringify(user),
              })
              console.log(res.body);
              
            },
        }

    }
</script>