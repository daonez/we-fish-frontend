/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
/* import { TiArrowSortedDown } from 'react-icons/ti' */

class ProductCart extends Component {
  cartFetch = () => {
    fetch('http://52.78.241.65:8000/order/cart', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.SAa5RFLev-OZMBqY2mDjAeftZE0kH4FJUSOwCS4HsGA',
      },
      body: JSON.stringify({
        cart: [{ product_id: Number(this.props.no), quantity: 1 }],
      }),
    })
      .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => {
        alert('아이디 비밀번호를 다시 입력해주세요.')
        console.error('Error:', error)
      })
  }

  addCart = () => {
    this.cartFetch()
  }

  render() {
    return (
      <div className="detail-product__cart">
        {/* <div className="detail-product__cart__select-products">
          <em className="detail-product__cart__title">상품선택</em>
          <div className="detail-product__cart__select-box">
            <select
              className="detail-product__cart__select"
              name="option"
              id=""
            >
              <option value=""> 제주 자연산~~</option>
            </select>
            <i className="detail-product__cart__arrow">
              <TiArrowSortedDown size="20" />
            </i>
          </div>
    </div> */}
        <button
          onClick={this.addCart}
          type="submit"
          className="detail-product__cart__button"
        >
          장바구니에 담기
        </button>
      </div>
    )
  }
}

export default ProductCart
