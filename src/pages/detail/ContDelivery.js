/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import DinnerDelivery from './DinnerDelivery'

class ContDelivery extends Component {
  render() {
    return (
      <div className="detail-product__cont__delivery">
        <DinnerDelivery />
        <div className="detail-product__cont__delivery__title">
          <h3>교환/반품 안내</h3>
          <p>주문전 꼭! 확인해주세요</p>
        </div>
        <dl className="detail-product__cont__delivery__q">
          <dt>주문 취소 문의</dt>
          <dd>
            주문 취소는 배송 전일 6시 이전까지 고객센터 통하여 요청해주시면
            취소가능하나 배송 전일 6시 이후에는 취소 어려운 점 참고바랍니다.
          </dd>
        </dl>
        <dl className="detail-product__cont__delivery__complete">
          <dt>배송 완료 후</dt>
          <dd>
            <em>단순변심으로 인한 반품/환불/교환</em>
            <p>
              재판매가 불가능한 제품의 특성 상, 단순 변심으로 인한 반품 및
              교환은 어렵습니다.
            </p>
            <em>상품에 문제가 있는 경우의 반품/환불/교환</em>
            <p>
              오늘회에서는 언제나 신선하고 좋은 상품을 제공하기 위해 노력하고
              있으나, 간혹 상품의 문제가 있는 경우 정도에 따라
              부분환불/환불/재배송 처리해드립니다.
            </p>
            <p>
              상품의 상태를 정확히 확인할 수 있도록 문제가 있는 상품의 사진을
              찍어 게시판에 업로드 부탁드립니다.
            </p>
            <p>
              수령일로부터 2일 이내에 연락을 주셔야 확인이 가능하며 명확한
              판단이 어려운 사유로 인한 요청은 처리가 어려울 수 있습니다. (맛,
              재료, 크기 등 개인적인 기호 및 판단에 따른 반품 및 교환 요청 등)
            </p>
          </dd>
        </dl>
        <div className="detail-product__cont__delivery__title">
          <h3>고객센터 안내</h3>
        </div>
        <dl className="detail-product__cont__delivery__center">
          <dt>오늘회 내선전화:</dt>
          <dd>
            <a
              className="detail-product__cont__delivery__center__tel"
              href="tel:1661-1319"
            >
              1661-1319
            </a>
            <p>월 ~ 토 (10:00 ~ 20:00)</p>
            <a
              className="detail-product__cont__delivery__center__katalk"
              href="#"
            >
              오늘회 카카오톡 플러스친구
            </a>
            <br />
            <a
              className="detail-product__cont__delivery__center__one-to-one"
              href="#"
            >
              1:1 문의 게시판
            </a>
          </dd>
        </dl>
      </div>
    )
  }
}

export default ContDelivery
