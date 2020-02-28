import React, { Component } from "react";
import "./NavSideBarLogin.scss";
import search from "../../../img/search.png";

export class NavSideBar extends Component {
  render() {
    return (
      <div className="NavSideBar">
        <div className="profileLoggedOut">
          <div className="profileLoggedOut02">
            <p className="loginButton">
              <a href="/">김현준</a>
            </p>
            <p className="lineBar"></p>
            <p className="registerButton">
              <a href="/">님</a>
            </p>
          </div>
        </div>
        <div className="pointBar">
          <div className="coupon">
            <p className="coupon1">할인쿠폰</p>
            <p>
              <span class="coupon2">0 </span>
              <span className="coupon3">장</span>
            </p>
          </div>
          <div className="point">
            <p className="point1">포인트</p>
            <p>
              <span class="point2">3,000 </span>
              <span className="point3">p</span>
            </p>
          </div>
        </div>
        <div className="search">
          <form action="/">
            <button>
              <i></i>
            </button>
            <input
              type="text"
              name="name"
              placeholder="'보리숭어'를 검색하세요"
            ></input>
          </form>
        </div>
        <div className="category-header">
          <p>카테고리</p>
        </div>
        <div className="categories">
          <ul>
            <li className="category">
              <a href="/">
                <div>후기많은상품</div>
                <div>></div>
              </a>
            </li>
            <li className="category">
              <a href="/">
                <div>오늘 저녁배송</div>
                <div>></div>
              </a>
            </li>
            <li className="category">
              <a href="/">
                <div>성게알</div>
                <div>></div>
              </a>
            </li>
            <li className="category">
              <a href="/">
                <div>새우 · 게 · 랍스터</div>
                <div>></div>
              </a>
            </li>
            <li className="category">
              <a href="/">
                <div>초밥 · 국물 · 매운탕</div>
                <div>></div>
              </a>
            </li>
            <li className="category">
              <a href="/">
                <div>수산가공품</div>
                <div>></div>
              </a>
            </li>
            <li className="category">
              <a href="/">
                <div>김 · 미역 · 해조류</div>
                <div>></div>
              </a>
            </li>
          </ul>
          <ul className="rightUl">
            <li className="category">
              <a href="/">
                <div>이번주 신상품</div>
                <div>></div>
              </a>
            </li>
            <li className="category">
              <a href="/">
                <div>자연산 회</div>
                <div>></div>
              </a>
            </li>
            <li className="category">
              <a href="/">
                <div>수산시장 회</div>
                <div>></div>
              </a>
            </li>
            <li className="category">
              <a href="/">
                <div>오징어· 조개·해산물</div>
                <div>></div>
              </a>
            </li>
            <li className="category">
              <a href="/">
                <div>소스·곁들임</div>
                <div>></div>
              </a>
            </li>
            <li className="category">
              <a href="/">
                <div>건어물</div>
                <div>></div>
              </a>
            </li>
            <li className="category">
              <a href="/">
                <div>제철회</div>
                <div>></div>
              </a>
            </li>
          </ul>
        </div>
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
            <a href="/"></a>
          </div>
        </div>
      </div>
    );
  }
}

export default NavSideBar;
