/* eslint-disable react/prefer-stateless-function */
import './NavSideBar.scss'
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

export default class ProductNav extends Component {
  constructor() {
    super()
    this.state = {
      title: [],
      product: [],
    }
  }

  componentDidMount() {
    // this.fetchProduct()
    this.FetchProduct()
  }

  FetchProduct() {
    // const queryId = this.props.location.search.split('=')[1]
    //* requests
    const requestOne = axios.get('http://localhost:3000/data/categorylist.json')
    const requestTwo = axios.get('http://localhost:3000/data/4.json')
    // const requestTwo = axios.get(`http://localhost:3000/product/${queryId}`)

    //* control all promise
    axios.all([requestOne, requestTwo]).then(([responseOne, responseTwo]) => {
      console.log(responseOne, responseTwo)
      this.setState({
        title: responseOne.data.category_list,
        product: responseTwo.data.data,
      })
    })
    console.log(this.title, this.product)
  }

  render() {
    return (
      // <Link to=`/product?category=${}`}>
      <div>
        <div className="category-header">
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
        </div>
      </div>
      // </Link>
    )
  }
}
