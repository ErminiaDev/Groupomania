//Authentication service

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/utilisateurs/';

//login
  class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        console.log(user)
        console.log(localStorage)
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
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();