/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import Slider from 'react-slick'

export default class ButtonSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2.5,
      slidesToScroll: 2,
      arrows: false,
    }
    return (
      <div className="main-content-button-slider">
        <Slider {...settings}>
          <div className="main-content-recommend-buttons">
            <button>오늘도 해산물 푸짐하게!</button>
          </div>
          <div className="main-content-recommend-buttons">
            <button>두명이서 먹기 적당</button>
          </div>
          <div className="main-content-recommend-buttons">
            <button>여기가 제주도</button>
          </div>
          <div className="main-content-recommend-buttons">
            <button>오늘회 첫주문</button>
          </div>
          <div className="main-content-recommend-buttons">
            <button>게딱지만 냠냠</button>
          </div>
          <div className="main-content-recommend-buttons">
            <button>현포차 오픈</button>
          </div>
          <div className="main-content-recommend-buttons">
            <button>도넛초밥</button>
          </div>
          <div className="main-content-recommend-buttons">
            <button>이번겨울 마지막방어</button>
          </div>
          <div className="main-content-recommend-buttons">
            <button>새우파티입니다</button>
          </div>
        </Slider>
      </div>
    )
  }
}
