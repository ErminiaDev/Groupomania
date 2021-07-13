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
  const res = await fetch('http://localhost:3000/api/publications', {
      method: 'POST',
      headers: {
        'Authorization' : authHeader(),
        'Content-type' : 'application/json'
        },
      body: JSON.stringify(newPost),
    })
    /* console.log('has attempted to fetch') */
    const data = await res.json();
    /* console.log('jsoned'); */
    this.posts = [...this.posts, data]
  }

  async destroyPost(uuid) {
    console.log(uuid)
    if (confirm(`Etes vous sûr de vouloir supprimer ce post?`)) {
      await fetch(`http://localhost:3000/api/publications/${uuid}`, {
        method: 'DELETE',
        headers: authHeader()
      })
    }
  }

}

export default new PostService();
