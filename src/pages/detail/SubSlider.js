/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import Slider from 'react-slick'
import { FaStar } from 'react-icons/fa'
import slideTemp1 from '../../images/slide_img1.jpg'
import slideTemp2 from '../../images/slide_img2.jpg'

class SubSlider extends Component {
  render() {
    const sliderSetting2 = {
      infinite: true,
      slidesToShow: 2,
      centerMode: true,
      centerPadding: '10%',
      slidesToScroll: 1,
    }

    return (
      <div className="detail-product__sub-slider">
        <h3>같이 먹으면 좋은 추천상품</h3>
        <div className="detail-product__sub-slider__list">
          <Slider {...sliderSetting2}>
            <div className="detail-product__sub-slider__slide">
              <div className="detail-product__sub-slider__img">
                <img src={slideTemp1} alt="임시 이미지1" />
              </div>
              <em className="detail-product__sub-slider__title">
                썰어먹는 자숙 통문어
              </em>
              <strong className="detail-product__sub-slider__price">
                <span>9,900</span>원
              </strong>
              <span className="detail-product__sub-slider__review-num">
                <i className="star-on">
                  <FaStar size="18" />
                </i>
                4.7
              </span>
              <span className="detail-product__sub-slider__review-count">
                &middot; 후기 40
              </span>
            </div>
            <div className="detail-product__sub-slider__slide">
              <div className="detail-product__sub-slider__img">
                <img src={slideTemp1} alt="임시 이미지1" />
              </div>
              <em className="detail-product__sub-slider__title">
                썰어먹는 자숙 통문어
              </em>
              <strong className="detail-product__sub-slider__price">
                <span>9,900</span>원
              </strong>
              <span className="detail-product__sub-slider__review-num">
                <i className="star-on">
                  <FaStar size="18" />
                </i>
                4.7
              </span>
              <span className="detail-product__sub-slider__review-count">
                &middot; 후기 40
              </span>
            </div>
            <div className="detail-product__sub-slider__slide">
              <div className="detail-product__sub-slider__img">
                <img src={slideTemp1} alt="임시 이미지1" />
              </div>
              <em className="detail-product__sub-slider__title">
                썰어먹는 자숙 통문어
              </em>
              <strong className="detail-product__sub-slider__price">
                <span>9,900</span>원
              </strong>
              <span className="detail-product__sub-slider__review-num">
                <i className="star-on">
                  <FaStar size="18" />
                </i>
                4.7
              </span>
              <span className="detail-product__sub-slider__review-count">
                &middot; 후기 40
              </span>
            </div>
            <div className="detail-product__sub-slider__slide">
              <div className="detail-product__sub-slider__img">
                <img src={slideTemp1} alt="임시 이미지1" />
              </div>
              <em className="detail-product__sub-slider__title">
                썰어먹는 자숙 통문어
              </em>
              <strong className="detail-product__sub-slider__price">
                <span>9,900</span>원
              </strong>
              <span className="detail-product__sub-slider__review-num">
                <i className="star-on">
                  <FaStar size="18" />
                </i>
                4.7
              </span>
              <span className="detail-product__sub-slider__review-count">
                &middot; 후기 40
              </span>
            </div>
            <div className="detail-product__sub-slider__slide">
              <div className="detail-product__sub-slider__img">
                <img src={slideTemp1} alt="임시 이미지1" />
              </div>
              <em className="detail-product__sub-slider__title">
                썰어먹는 자숙 통문어
              </em>
              <strong className="detail-product__sub-slider__price">
                <span>9,900</span>원
              </strong>
              <span className="detail-product__sub-slider__review-num">
                <i className="star-on">
                  <FaStar size="18" />
                </i>
                4.7
              </span>
              <span className="detail-product__sub-slider__review-count">
                &middot; 후기 40
              </span>
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}

export default SubSlider
