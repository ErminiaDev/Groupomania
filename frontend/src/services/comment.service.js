//data service
import authHeader from './auth-header';

class CommentService {

  async addComment(newComment) { 
    //console.log(authHeader());
    //console.log(JSON.stringify(newComment));
  const res = await fetch(`http://localhost:3000/api/publications/commentaires`, {
      method: 'POST',
      headers: {
        ...authHeader(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newComment),
    })
    //console.log('has attempted to fetch')
    const data = await res.json();
    //console.log('jsoned');
    return { ...data.dataValues, User: data.User };
  }

  async destroyComment(uuid) {
    //console.log(uuid, 'destroyComment')
    if (confirm(`Etes vous sûr de vouloir supprimer ce commentaire?`)) {
      await fetch(`http://localhost:3000/api/publications/commentaires/${uuid}`, {
        method: 'DELETE',
        headers: authHeader()
      })
    }
  }

}

export default new CommentService();
