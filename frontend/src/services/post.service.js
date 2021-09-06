//data service
import authHeader from './auth-header';

const currentUserToken = authHeader()["x-access-token"]

const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
myHeaders.append('x-access-token', currentUserToken);


class PostService {

  async getAllPosts() {
      console.log('getting all posts')
      const res = await fetch(`http://localhost:3000/api/publications`, {
        method: 'GET',
        headers: authHeader()
      })
      const posts = await res.json()
      console.log(posts, 'all posts')
      return posts       
  }

  async addPost(newPost) { 
    console.log(authHeader());
    console.log(JSON.stringify(newPost));
  const res = await fetch('http://localhost:3000/api/publications', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(newPost),
    })
    console.log('has attempted to fetch')
    const data = await res.json();
    console.log('jsoned');
    console.log(this, 'this')
    return { User: data.User, ...data.dataValues }
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
