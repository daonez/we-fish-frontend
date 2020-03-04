/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'
import Temp from '../../images/img1.jpg'

class ContReview extends Component {
  render() {
    return (
      <div className="detail-product__cont__review">
        <ol>
          <li>
            <em className="detail-product__cont__review__title">
              [거제] 해금강 보리숭어
            </em>
            <b className="detail-product__cont__review__user">
              박** / 2020-02-25
            </b>
            <span className="detail-product__cont__review__star">
              <i className="star-on">
                <FaStar size="21" />
              </i>
              <i className="star-on">
                <FaStar size="21" />
              </i>
              <i className="star-on">
                <FaStar size="21" />
              </i>
              <i className="star">
                <FaRegStar size="21" />
              </i>
              <i className="star">
                <FaRegStar size="21" />
              </i>
            </span>

            <p className="detail-product__cont__review__cont">
              보리숭어 존맛탱구리..! 오독오독 씹히는 맛과 감칠맛 도랏...!
            </p>
            <div className="detail-product__cont__review__img">
              <img src={Temp} alt="리뷰 이미지" />
            </div>
          </li>
        </ol>
        <div className="detail-product__cont__review__page-list">
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">4</button>
          <button type="button">5</button>
        </div>
      </div>
    )
  }
}

export default ContReview
