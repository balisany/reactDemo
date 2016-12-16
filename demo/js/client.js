import React from 'react';
import ReactDom from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import Layout from './Layout';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Header from './components/Header';


const app = document.getElementById('app');

ReactDom.render(
  <Router history={hashHistory}>
          <Route path="/" component={Layout}>
                    <IndexRoute component={Posts}> </IndexRoute>
                    <Route path="users(/:user)" name="users" component={Users} ></Route>
                    <Route path="posts" name="posts" component={Posts} ></Route>
          </Route>
  </Router>
  , app);
