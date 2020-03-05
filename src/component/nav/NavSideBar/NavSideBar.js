import React, { Component } from 'react'
import './NavSideBar.scss'
import { withRouter } from 'react-router-dom'
import ProductNav from 'component/nav/NavSideBar/ProductNav'
import search from '../../../img/search.png'

class NavSideBar extends Component {
  state = {
    search: '',
    search_results: [],
  }

  handleSearch = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log('etargetvalue:', e.target.value)
  }

  saveSearch = e => {
    e.preventDefault()
  }

  saveSearch1 = e => {
    this.state.base.push(this.state.search)
  }

  goToSave = () => {
    const queryId = this.state.search
    this.props.history.push(`/searchresult?keyword=${queryId}`)

    // fetch(`http://10.58.1.185:8000/product/search?keyword=${queryId}`,{
    //           method:'GET',
    //       })
    //       .then(response => { return response.json() })
    //       .then(response => {
    //           this.setState({ search_results: response.search_results})
    //           this.props.history.push(`/searchresult?keyword=${queryId}`)
    //           console.log(response)

    //       })
  }

  render() {
    console.log('state.search:', this.state.search)
    console.log('database:', this.state.search_results)
    return (
      <div className="navSideBar">
        <div className="profileLoggedOut">
          <div className="profileLoggedOut02">
            <p className="loginButton">
              <span href="/">로그인 해주세요</span>
            </p>
            <p className="lineBar">|</p>
            <p className="registerButton">
              <span href="/">회원가입</span>
            </p>
          </div>
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
        {/* <div className="category-header">
          <p>카테고리</p>
        </div>
        <div className="categories">
          <ul>
            <li className="category">
              <span href="/">
                <div>후기많은상품</div>
                <div>></div>
              </span>
            </li>
            <li className="category">
              <span href="/">
                <div>오늘 저녁배송</div>
                <div>></div>
              </span>
            </li>
            <li className="category">
              <span href="/">
                <div>성게알</div>
                <div>></div>
              </span>
            </li>
            <li className="category">
              <span href="/">
                <div>새우 · 게 · 랍스터</div>
                <div>></div>
              </span>
            </li>
            <li className="category">
              <span href="/">
                <div>초밥 · 국물 · 매운탕</div>
                <div>></div>
              </span>
            </li>
            <li className="category">
              <span href="/">
                <div>수산가공품</div>
                <div>></div>
              </span>
            </li>
            <li className="category">
              <span href="/">
                <div>김 · 미역 · 해조류</div>
                <div>></div>
              </span>
            </li>
          </ul>
          <ul className="rightUl">
            <li className="category">
              <span href="/">
                <div>이번주 신상품</div>
                <div>></div>
              </span>
            </li>
            <li className="category">
              <span href="/">
                <div>자연산 회</div>
                <div>></div>
              </span>
            </li>
            <li className="category">
              <span href="/">
                <div>수산시장 회</div>
                <div>></div>
              </span>
            </li>
            <li className="category">
              <span href="/">
                <div>오징어· 조개·해산물</div>
                <div>></div>
              </span>
            </li>
            <li className="category">
              <span href="/">
                <div>소스·곁들임</div>
                <div>></div>
              </span>
            </li>
            <li className="category">
              <span href="/">
                <div>건어물</div>
                <div>></div>
              </span>
            </li>
            <li className="category">
              <span href="/">
                <div>제철회</div>
                <div>></div>
              </span>
            </li>
          </ul>
        </div> */}
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
    )
  }
}

export default withRouter(NavSideBar)
