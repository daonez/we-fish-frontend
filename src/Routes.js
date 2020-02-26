// 이거는 Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/product/Product";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Nav from "./page/Nav";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/nav" component={Nav} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/product" component={Product} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
