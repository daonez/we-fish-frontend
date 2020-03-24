/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

class ContQna extends Component {
  render() {
    return (
      <div className="detail-product__cont__qna">
        <p>상품에 대해서 무엇이 궁금하신가요?</p>
        <p>
          오늘회 카카오톡 플러스친구가
          <span>가장 빠르게 응대해드려요! :D</span>
        </p>
        <a
          className="detail-product__cont__qna__katalk"
          href="https://pf.kakao.com/_ALxcnd/chat"
          target="__blank"
        >
          상품문의하기
        </a>
      </div>
    )
  }
}

export default ContQna
