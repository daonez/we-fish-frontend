import React, { Component } from 'react'
import './NavSideBarLogin.scss'
import { withRouter } from 'react-router-dom'
import ProductNav from 'component/nav/NavSideBar/ProductNav'
import search from '../../../img/search.png'

export class NavSideBarLogin extends Component {
  render() {
    return (
      <div className="navSideBarLogin">
        <div className="profileLoggedOut">
          <div className="profileLoggedOut02">
            <p className="loginButton">
              <span href="/" className="buttonname">
                김현준<span> 님</span>
              </span>
            </p>
          </div>
        </div>
        <div className="promotion">
          <div className="promoleft">
            <div className="promotion1">할인쿠폰</div>
            <div className="promotion12">
              0<span>장</span>
            </div>
          </div>
          <div>
            <div className="promotionbar" />
          </div>
          <div className="promoright">
            <div className="promotion1">포인트</div>
            <div className="promotion2">
              3,000<span>P</span>
            </div>
          </div>
        </div>
        <div className="search">
          <form action="/">
            <button>
              <i />
            </button>
            <input
              type="text"
              name="name"
              placeholder="'보리숭어'를 검색하세요"
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
          <a href="/">내 정보 관리</a>
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

export default withRouter(NavSideBarLogin)
