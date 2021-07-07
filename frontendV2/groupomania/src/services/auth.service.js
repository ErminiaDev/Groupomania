//Authentication service

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/utilisateurs/';

//login
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  //logout  
  logout() {
    localStorage.removeItem('user');
  }

  //signup
  register(user) {
    return axios.post(API_URL + 'signup', {
      firstname: user.first_name,
      lastname: user.last_name,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();