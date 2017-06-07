import * as types from '../actions/actionTypes';
import userApi from '../api/mockUserApi';

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function createUserSuccess(user) {
  return {type: types.CREATE_USER_SUCCESS, user};
}

export function saveUser(user, callback) {
  return function(dispatch, getState) {
    return userApi.saveUser(user).then(savedUser => {
      callback();
      dispatch(createUserSuccess(savedUser));
    }).catch(error => {
      throw error;
    });
  };
}

export function fetchUsers() {
    return function(dispatch) {
      return userApi.getAllUsers().then(users => {
        dispatch(loadUsersSuccess(users));
      }).catch(error => {
        throw error;
      });
  };
}
