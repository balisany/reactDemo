
import React from "react";
import ReactDOM from "react-dom";
////import './module1';
import Layout from './pages/Layout';
//import Featured from './pages/Featured';



const app = document.getElementById('app');

/*
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
//      <IndexRoute component={Featured}></IndexRoute>
    </Route>
  </Router>
  ,app);

*/

ReactDOM.render(<Layout />, app);
