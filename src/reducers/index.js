import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import users from './userReducer';

const rootReducer = combineReducers({
  form: formReducer,
  users
});

export default rootReducer;
