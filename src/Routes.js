/* eslint-disable react/prefer-stateless-function */
// 이거는 Routes.js
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import MainPage from './pages/main/Main'
import Product from './pages/product/Product'
import Detail from './pages/detail/Detail'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/main" component={MainPage} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
