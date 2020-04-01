/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { FaStar } from 'react-icons/fa'

class Info extends Component {
  render() {
    return (
      <div className="detail-product__info">
        <p className="detail-product__info__strapline">{this.props.tagline}</p>
        <h2 className="detail-product__info__title">{this.props.name}</h2>
        <div className="detail-product__info__box">
          <strong className="detail-product__info__num">
            {Number(this.props.price).toLocaleString('kr')}
            <span>원</span>
          </strong>
          <span className="detail-product__info__star">
            <i className="star-on">
              <FaStar size="21" />
            </i>
            0
          </span>
          <button type="button" className="detail-product__info__review-num">
            &middot; 후기 0
          </button>
        </div>
      </div>
    )
  }
}

export default Info
