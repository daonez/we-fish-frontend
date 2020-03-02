/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

class Notice extends Component {
  render() {
    return (
      <div className="detail-product__notice">
        <ul>
          <li>
            <em>상품단위</em>
            <p>1팩/400g</p>
          </li>
          <li>
            <em>상품구성</em>
            <p>보리숭어회 + 쌈야채 + 소스4종</p>
          </li>
          <li>
            <em>원산지</em>
            <p>국산</p>
          </li>
          <li>
            <em>배송구분</em>
            <p>저녘배송</p>
          </li>
        </ul>
        <p className="detail-product__notice__recomm">
          주의사항상품의 특성상 받으신 당일내로 드시는 것을 권장합니다. 한정된
          수량만 판매하기에 조기 품절 될 수 있습니다. 임산부의 경우 날것으로
          드시는 것은 권장하지 않습니다.
        </p>
      </div>
    )
  }
}

export default Notice
