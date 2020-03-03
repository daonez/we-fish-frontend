/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { FaStar } from 'react-icons/fa'
import slideTemp1 from '../../images/slide_img1.jpg'

class Slide extends Component {
  render() {
    return (
      <>
        <div className="detail-product__sub-slider__slide">
          <div className="detail-product__sub-slider__img">
            <img src={this.props.image} alt="임시 이미지1" />
          </div>
          {/* 이미자 */}
          <em className="detail-product__sub-slider__title">
            {this.props.prdname}
          </em>
          {/* 제목 */}
          <strong className="detail-product__sub-slider__price">
            <span>9,900</span>원
          </strong>
          {/* 가격 */}
          <span className="detail-product__sub-slider__review-num">
            <i className="star-on">
              <FaStar size="18" />
            </i>
            4.7
          </span>
          {/* 평점 */}
          <span className="detail-product__sub-slider__review-count">
            &middot; 후기 40
          </span>
          {/* 후기 */}
        </div>
      </>
    )
  }
}

export default Slide
