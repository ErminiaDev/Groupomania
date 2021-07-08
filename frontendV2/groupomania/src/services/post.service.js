//data service
import authHeader from './auth-header';

//posts

class PostService {

  getAllPosts() {
      console.log('getting all posts')
      const requestOptions = {
          method: 'GET',
          headers: authHeader()
      };

      return fetch(`http://localhost:3000/api/publications`, requestOptions);
  }

}

export default new PostService();
