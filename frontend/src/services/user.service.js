//data service
// import axios from 'axios';
import authHeader from './auth-header';

//users


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



