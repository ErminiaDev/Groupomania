//data service
import axios from 'axios';
import authHeader from './auth-header';

//users

const API_URL = 'http://localhost:3000/api/utilisateurs/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'auth', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'authAdmin', { headers: authHeader() });
  }
  
}

export default new UserService();
