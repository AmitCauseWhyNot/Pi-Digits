import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import Login from "../../pages/Login";
import Pi from "../../pages/Pi";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const MindRouter = () => {
  const { loggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(loggedIn);
  }, [loggedIn]);

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        {loggedIn === "false" ? (
          <PublicRoute exact path="/" component={Login} />
        ) : (
          <PrivateRoute exact path="/home" component={Pi} />
        )}
      </Switch>
    </Router>
  );
};

export default MindRouter;
