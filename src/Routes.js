import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './screens/Home/Home';
import Posts from './screens/Posts/Posts';
import Post from './screens/Post/Post';
import NewPost from './screens/NewPost/NewPost';
import PrivateRoute from './PrivateRoute';

const Routes = props => (
  <>
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/post/:id" component={ Post } />
      <Route path="/posts" component={ Posts } />
      <PrivateRoute isLoggedIn={ props.isLoggedIn } path="/new-post" component={ NewPost } />
      <Redirect to="/" />
    </Switch>
  </>
);

export default Routes;
