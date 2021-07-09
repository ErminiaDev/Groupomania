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

  async addPost(newPost) {
  console.log('fetching')
  console.log(JSON.stringify(newPost))
    const res = await fetch('http://localhost:3000/api/publications', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json', 
        'X-Custom-Header' : 'authHeader()'
        },
      body: JSON.stringify(newPost),
    })
    console.log('has attempted to fetch')
    const data = await res.json();
    console.log('jsoned');
    this.posts = [...this.posts, data]
  }

}

export default new PostService();
