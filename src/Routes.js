// 이거는 Routes.js
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/product/Product"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Nav from "./pages/Home"
import MainPage from "./pages/main/Main"

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
          <Route exact path="/main" component={MainPage} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
