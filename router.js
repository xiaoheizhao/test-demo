import React from 'react';
import { Router, Route } from 'dva/router';
// import Register from './routes/user/register/index';
import Login from './routes/user/login/index';
import Register from './routes/user/register/index';
import Search from './routes/Search/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      {/*<Route path="/register" component={Register} />*/}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/search" component={Search} />
    </Router>
  );
}

export default RouterConfig;
