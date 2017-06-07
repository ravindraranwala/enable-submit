import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './store/configureStore';
import App from './components/app';
import UsersNew from './components/users_new';
import UserPage from './containers/user_page';
import reducers from './reducers';
import {fetchUsers} from './actions';

const store = configureStore();
// store.dispatch(fetchUsers());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
     <div>
       <Switch>
           <Route path="/users/new" component={UsersNew} />
           <Route path="/" component={UserPage} />
       </Switch>
     </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
