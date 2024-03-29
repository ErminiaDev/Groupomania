//to retrieve protected data from the server: the HTTP needs Authorization header

//for nodejs, use of x-access-token
export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));
  // console.log(localStorage)

  //checking local storage for user item
  //if there is a logged in user with accesToken(JWT), return HTTP Authorization header; otherwise, empty object
  if (user && user.token) {
    // for Node.js Express back-end
    // console.log('checking token')
    return { 'x-access-token': user.token };
  } else {
    return {};
  }
}

/*
App.vue -> on created hook request for a user by token, which you store in localstorage
If user exists and on return by token we got the user, then we store our user to vuex
Else, if we got an error in response, we push user to /login page
*/