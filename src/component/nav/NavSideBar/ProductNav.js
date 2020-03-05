/* eslint-disable react/prefer-stateless-function */
import './NavSideBar.scss'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductNav extends Component {
  render() {
    return (
      <div>
        <div className="category-header">
          <p>카테고리</p>
        </div>
        <div className="categories">
          <ul>
            <li className="category">
              <Link to={{ pathname: '/product?category=1&query=-updated_at' }}>
                <span href="/">
                  <div>후기많은상품</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link to={{ pathname: '/product?category=3&query=-updated_at' }}>
                <span href="/">
                  <div>오늘 저녁배송</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link
                to={{
                  pathname: '/product',
                  search: '?category=5&query=-updated_at',
                }}
              >
                <span href="/">
                  <div>성게알</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link
                to={{
                  pathname: '/product',
                  search: '?category=7&query=-updated_at',
                }}
              >
                <span href="/">
                  <div>새우 · 게 · 랍스터</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link
                to={{
                  pathname: '/product',
                  search: '?category=9&query=-updated_at',
                }}
              >
                <span href="/">
                  <div>초밥 · 국물 · 매운탕</div>
                  <div>></div>
                </span>
              </Link>
            </li>

            <li className="category">
              <Link
                to={{
                  pathname: '/product',
                  search: '?category=11&query=-updated_at',
                }}
              >
                <span href="/">
                  <div>수산가공품</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link
                to={{
                  pathname: '/product',
                  search: '?category=13&query=-updated_at',
                }}
              >
                <span href="/">
                  <div>김 · 미역 · 해조류</div>
                  <div>></div>
                </span>
              </Link>
            </li>
          </ul>
          <ul className="rightUl">
            <li className="category">
              <Link
                to={{
                  pathname: '/product',
                  search: '?category=2&query=-updated_at',
                }}
              >
                <span href="/">
                  <div>이번주 신상품</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link
                to={{
                  pathname: '/product',
                  search: '?category=4&query=-updated_at',
                }}
              >
                <span href="/">
                  <div>자연산 회</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link
                to={{
                  pathname: '/product',
                  search: '?category=6&query=-updated_at',
                }}
              >
                <span href="/">
                  <div>수산시장 회</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link
                to={{
                  pathname: '/product',
                  search: '?category=8&query=-updated_at',
                }}
              >
                <span href="/">
                  <div>오징어· 조개·해산물</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link
                to={{
                  pathname: '/product',
                  search: '?category=10&query=-updated_at',
                }}
              >
                <span href="/">
                  <div>소스·곁들임</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link
                to={{
                  pathname: '/product',
                  search: '?category=12&query=-updated_at',
                }}
              >
                <span href="/">
                  <div>건어물</div>
                  <div>></div>
                </span>
              </Link>
            </li>
            <li className="category">
              <Link
                to={{
                  pathname: '/product',
                  search: '?category=14&query=-updated_at',
                }}
              >
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
