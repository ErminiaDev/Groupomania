//data service
// import axios from 'axios';
import authHeader from './auth-header';

//users

const currentUserToken = authHeader()["x-access-token"]


const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append('x-access-token', currentUserToken);

class UserService {

 async getAllUsers() {
        console.log('getting all users')
        const res = await fetch(`http://localhost:3000/api/utilisateurs`, {
            method: 'GET',
            headers: authHeader()
          })
          const users = await res.json()
          return users 
    }

 async updateUser(modifiedUser) { 
     console.log(authHeader());
     console.log(JSON.stringify(modifiedUser));
   const res = await fetch(`http://localhost:3000/api/utilisateurs/${modifiedUser.uuid}}`, {
       method: 'PUT',
       headers: myHeaders,
       body: JSON.stringify(modifiedUser),
     })
     console.log('has attempted to fetch')
     const data = await res.json();
     console.log('jsoned');
     return data;
     //this.users = [...this.users, data]
   }
  
}

export default new UserService();

/* function logOut() {
  this.$store.dispatch('auth/logout');
  this.$router.push('/login');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logOut();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
} */



