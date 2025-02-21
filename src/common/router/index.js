import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop';
import Login from '../../pages/Login';
import Pi from '../../pages/Pi';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const MindRouter = () => {

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <PublicRoute exact path='/' component={Login} />
        <PrivateRoute exact path='/home' component={Pi} />
      </Switch>
    </Router>
  );
};

export default MindRouter;