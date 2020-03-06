/* eslint-disable react/prefer-stateless-function */
// 이거는 Routes.js

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from 'pages/main/Main'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Product from './pages/product/Product'
import Detail from './pages/detail/Detail'
import NavCart from './component/navAdd/NavCart'
import NavSideBarLogin from './component/nav/NavSideBar/NavSideBarLogin'
import Cart from './pages/Cart'
import NavMyPage from './component/nav/NavSideBar/NavSideBarChild/NavMyPage'
import AskReview from './pages/AskReview'
import NavAskWrite from './component/nav/NavSideBar/NavSideBarChild/NavAskWrite'
import Write from './pages/Write'
import SearchResult from './pages/SearchResult'
import LayoutPrac from './pages/LayoutPrac'
import AskReviewDetail from './pages/AskReviewDetail'
import DeliveryCheck from './pages/subMain/DeliveryCheck'
import MostReviewPage from './pages/subMain/MostReviewPage'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/products" component={Product} />
          <Route exact path="/product/:category" component={Product} />
          <Route exact path="/product/detail/:id" component={Detail} />
          <Route exact path="/delivery" component={DeliveryCheck} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/delete" component={NavSideBarLogin} />
          <Route exact path="/LayoutPrac" component={LayoutPrac} />
          <Route exact path="/navlogin" component={NavSideBarLogin} />
          <Route exact path="/mypage" component={NavMyPage} />
          <Route exact path="/ask" component={AskReview} />
          <Route exact path="/askchild" component={Write} />
          <Route exact path="/searchresult" component={SearchResult} />
          <Route exact path="/askdetail" component={AskReviewDetail} />
          <Route exact path="/mostreviewpage" component={MostReviewPage} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
