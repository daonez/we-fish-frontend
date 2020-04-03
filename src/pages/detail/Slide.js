/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { FaStar } from 'react-icons/fa'
import slideTemp1 from '../../images/slide_img1.jpg'

class Slide extends Component {
  render() {
    return (
      <>
        <div className="detail-product__sub-slider__img">
          <img src={this.props.image} alt={this.props.title} />
        </div>
        {/* 이미자 */}
        <em className="detail-product__sub-slider__title">
          {this.props.title}
        </em>
        {/* 제목 */}
        <strong className="detail-product__sub-slider__price">
          <span>{Number(this.props.price).toLocaleString('kr')}</span>원
        </strong>
        {/* 가격 */}
        <span className="detail-product__sub-slider__review-num">
          <i className="star-on">
            <FaStar size="18" />
          </i>
          0
        </span>
        {/* 평점 */}
        <span className="detail-product__sub-slider__review-count">
          &middot; 후기 0
        </span>
        {/* 후기 */}
      </>
    )
  }
}

export default Slide
