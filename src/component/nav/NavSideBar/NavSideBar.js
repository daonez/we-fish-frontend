import React, { Component } from 'react';
import './NavSideBar.scss';
import { withRouter } from 'react-router-dom';
import ProductNav from 'component/nav/NavSideBar/ProductNav';
import { SERVER_URL, AWS_URL } from 'config';
import search from '../../../img/search.png';

class NavSideBar extends Component {
  state = {
    search: '',
    search_results: [],
  };

  handleSearch = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveSearch = e => {
    e.preventDefault();
  };

  saveSearch1 = e => {
    this.state.base.push(this.state.search);
  };

  goToSave = () => {
    const queryId = this.state.search;
    this.props.history.push(`product/searchresult?keyword=${queryId}`);

    fetch(`http://${AWS_URL}/product/search?keyword=${queryId}`, {
      method: 'GET',
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({ search_results: response.search_results });
        this.props.history.push(`/searchresult?keyword=${queryId}`);
        console.log(response);
      });
  };

  toLogin = () => {
    this.props.history.push('/Login');
  };

  toSignUp = () => {
    this.props.history.push('/SignUp');
  };

  render() {
    console.log('state.search:', this.state.search);
    console.log('database:', this.state.search_results);
    return (
      <div className="navSideBar">
        <div className="profileLoggedOut">
          {/* <div className="profileLoggedOut02"> */}
          {/* <div className="loginButton"> */}
          <span className="toLogin" onClick={this.toLogin}>
            로그인 해주세요
          </span>
          <span className="lineBar">|</span>
          <span className="toSignUp" onClick={this.toSignUp}>
            회원가입
          </span>
          {/* </div> */}

          <p className="registerButton" />
          {/* </div> */}
        </div>
        <div className="search">
          <form onSubmit={this.saveSearch}>
            <button onClick={this.goToSave}>
              <i />
            </button>
            <input
              type="text"
              name="search"
              placeholder="'보리숭어'를 검색하세요"
              onChange={this.handleSearch}
            />
          </form>
        </div>
        <ProductNav />
        <div className="otherContents">
          <a href="/">주문내역</a>
          <a href="/">상품후기</a>
          <a href="/">1:1문의</a>
        </div>
        <div className="sideBarFooter">
          <div className="fl">
            <p className="title">오늘 회 고객센터</p>
            <p className="phone">1661-1319</p>
          </div>
          <div className="fr">
            <a href="/" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavSideBar);
