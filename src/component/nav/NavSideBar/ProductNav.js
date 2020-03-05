/* eslint-disable react/prefer-stateless-function */
import './NavSideBar.scss'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class ProductNav extends Component {
  render() {
    return (
      <div>
        <div className="category-header">
          <p>카테고리</p>
        </div>
        <div className="categories">
          <ul>
            <li className="category">
              <Link to="/product/1">
                <span href="/">
                  <div>후기많은상품</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link to="/product/3">
                <span href="/">
                  <div>오늘 저녁배송</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link to="/product/5">
                <span>
                  <div>성게알</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link to="/product/7">
                <span href="/">
                  <div>새우 · 게 · 랍스터</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link to="/product/9">
                <span href="/">
                  <div>초밥 · 국물 · 매운탕</div>
                  <div>></div>
                </span>
              </Link>
            </li>

            <li className="category">
              <Link to="/product/11">
                <span href="/">
                  <div>수산가공품</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link to="/product/13">
                <span href="/">
                  <div>김 · 미역 · 해조류</div>
                  <div>></div>
                </span>
              </Link>
            </li>
          </ul>
          <ul className="rightUl">
            <li className="category">
              <Link to="/product/2">
                <span href="/">
                  <div>이번주 신상품</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link to="/product/4">
                <span href="/">
                  <div>자연산 회</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link to="/product/6">
                <span href="/">
                  <div>수산시장 회</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link to="/product/8">
                <span href="/">
                  <div>오징어· 조개·해산물</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link to="/product/10">
                <span href="/">
                  <div>소스·곁들임</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link to="/product/12">
                <span href="/">
                  <div>건어물</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link to="/product/14">
                <span href="/">
                  <div>제철회</div>
                  <div>></div>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default withRouter(ProductNav)
