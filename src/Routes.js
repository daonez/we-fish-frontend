// 이거는 Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import Product from "./page/product/Products";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>

          {/* <Route exact path="/" component={Home} /> */}
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
