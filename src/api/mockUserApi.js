import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (user) => {
  return replaceAll(user.firstName, ' ', '-');
};

//This would be performed on the server in a real app. Just stubbing in.
class UserApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static saveUser(user) {
    user = Object.assign({}, user); // to avoid manipulating object passed in.

    //Just simulating creation here.
    //The server would generate ids for new users in a real app.
    // Cloning so copy returned is passed by value rather than by reference.
    user.id = generateId(user);

    return new Promise((resolve, reject) => {
      setTimeout(() => {

      //Just simulating creation here.
      //Cloning so copy returned is passed by value rather than by reference.
      users.push(user);

      resolve(user);
      }, delay);
    });
  }
}

export default UserApi;
