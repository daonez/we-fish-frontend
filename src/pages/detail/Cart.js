/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
/* import { TiArrowSortedDown } from 'react-icons/ti' */

class Cart extends Component {
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
        <button type="button" className="detail-product__cart__button">
          장바구니에 담기
        </button>
      </div>
    )
  }
}

export default Cart
