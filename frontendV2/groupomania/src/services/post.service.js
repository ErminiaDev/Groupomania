//data service
import authHeader from './auth-header';

//posts

class PostService {

  /* getAllPosts() {
      console.log('getting all posts')
      const requestOptions = {
          method: 'GET',
          headers: authHeader()
      };

      return fetch(`http://localhost:3000/api/publications`, requestOptions);
  } */

  async getAllPosts() {
      console.log('getting all posts')
      const res = await fetch(`http://localhost:3000/api/publications`, {
        method: 'GET',
        headers: authHeader()
      })
      const posts = await res.json()
      return posts       
      
  }

}

export default new PostService();
