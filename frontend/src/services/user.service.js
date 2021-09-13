//data service
import authHeader from './auth-header';

//users

class UserService {

 async getAllUsers() {
        //console.log('getting all users')
        const res = await fetch(`http://localhost:3000/api/utilisateurs`, {
            method: 'GET',
            headers: authHeader()
          })
          const users = await res.json()
          return users 
    }

async destroyUser(uuid) {
  //console.log('about to delete user')
  if (confirm(`Etes vous sûr de vouloir supprimer cet utilisateur?`)) {
    return fetch(`http://localhost:3000/api/utilisateurs/${uuid}`, {
      method: 'DELETE',
      headers: authHeader(),
    })
  }
}

 async updateUser(modifiedUser) { 
     //console.log(authHeader());
    // console.log(JSON.stringify(modifiedUser));
   const res = await fetch(`http://localhost:3000/api/utilisateurs/${modifiedUser.uuid}}`, {
       method: 'PUT',
      headers: {
        ...authHeader(),
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(modifiedUser),
     })
     //console.log('has attempted to fetch')
     const data = await res.json();
     //console.log('jsoned');
     return data;
   }
}



export default new UserService();

