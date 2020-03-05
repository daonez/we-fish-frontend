/* eslint-disable react/prefer-stateless-function */
// 이거는 Routes.js
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Main from 'pages/main/Main'
import Detail from 'pages/detail/Detail'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Product from './pages/product/Product'
import NavCart from './component/navAdd/NavCart'
import NavSideBarLogin from './component/nav/NavSideBar/NavSideBarLogin'
import NavMyPage from './component/nav/NavSideBar/NavSideBarChild/NavMyPage'
import AskReview from './pages/AskReview'
import NavAskWrite from './component/nav/NavSideBar/NavSideBarChild/NavAskWrite'
import Write from './pages/Write'
import SearchResult from './pages/SearchResult'
import Cart from './pages/Cart'
import LayoutPrac from './pages/LayoutPrac'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/detail/" component={Detail} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/delete" component={NavSideBarLogin} />
          <Route exact path="/LayoutPrac" component={LayoutPrac} />
          <Route exact path="/navlogin" component={NavSideBarLogin} />
          <Route exact path="/mypage" component={NavMyPage} />
          <Route exact path="/ask" component={AskReview} />
          <Route exact path="/askchild" component={Write} />
          <Route exact path="/searchresult" component={SearchResult} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
