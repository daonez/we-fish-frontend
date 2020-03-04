/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import planImg1 from '../../images/plan-check_img1.jpg'

class Together extends Component {
  render() {
    return (
      <div className="detail-product__together">
        <h3>이렇게 묶어서 주문해보세요.</h3>
        <div className="detail-product__together__title">
          <span>새우파티입니다.</span>
        </div>
        <ul>
          <li>
            <input
              className="checkbox-v1"
              id="checkbox1"
              name="checkbox"
              type="checkbox"
            />
            <label className="checkbox-v1-label" For="checkbox1">
              <i className="checkbox-v1-label__icon" />
              <div className="checkbox-v1-label__plan-img">
                <img src={planImg1} alt="기회전 이미지1" />
              </div>
              <em className="checkbox-v1-label__title">
                [오늘회] 블랙타이거 새우살
              </em>
              <p className="checkbox-v1-label__price">
                <span>9,900</span>원
              </p>
            </label>
          </li>
        </ul>
        <div className="detail-product__together__total">
          <em className="detail-product__together__total__title">
            총 상품금액
          </em>
          <strong className="detail-product__together__total__price">
            <span>59,600</span>원
          </strong>
          <button
            className="detail-product__together__total__button"
            type="button"
          >
            한번에 담기
          </button>
        </div>
      </div>
    )
  }
}

export default Together
