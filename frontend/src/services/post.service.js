//data service
import authHeader from './auth-header';

class PostService {

  async getAllPosts() {
      //console.log('getting all posts')
      const res = await fetch(`http://localhost:3000/api/publications`, {
        method: 'GET',
        headers: authHeader()
      })
      const posts = await res.json()
      //console.log(posts, 'all posts')
      return posts       
  }

  async addPost(newPost) { 
    console.log(authHeader());
    console.log(JSON.stringify(newPost));
  const res = await fetch('http://localhost:3000/api/publications', {
      method: 'POST',
      headers: {
        ...authHeader(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost),
    })
    const data = await res.json();
    console.log(data.User, data.Comments)
    return { User: data.User, Comments: data.Comments, ...data.dataValues }
  }

  async destroyPost(uuid) {
    //console.log(uuid)
    if (confirm(`Etes vous sûr de vouloir supprimer ce post?`)) {
      await fetch(`http://localhost:3000/api/publications/${uuid}`, {
        method: 'DELETE',
        headers: authHeader()
      })
    }
  }

}

export default new PostService();
