//to retrieve protected data from the server: the HTTP needs Authorization header

//for nodejs, use of x-access-token
export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

  //checking local storage for user item
  //if there is a logged in user with accesToken(JWT), return HTTP Authorization header; otherwise, empty object
  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}