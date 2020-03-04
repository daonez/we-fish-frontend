/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react'
import './Main'
import Slider from 'react-slick'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}
export default class GuestOrderSlider extends Component {
  render() {
    return (
      <Slider {...settings}>
        <div>
          <img
            src="https://cdn.onul-hoi.com/uploads/product_group/image/32/ba979c_200302020114.jpg"
            alt=""
          />
          <div className="main-content-selector">
            <li>
              <label>
                <input type="checkbox" checked />
                <span>[오늘회] 참다랑어 대뱃살회</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" checked />
                <span>[제주] 자연산 딱새우회 20</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" checked />
                <span>손질 랍스터 테일(2미)</span>
              </label>
            </li>
            <li>
              <input type="checkbox" checked />
              <span>전체선택</span>
            </li>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.onul-hoi.com/uploads/product_group/image/10/7e7528_200302095852.jpg"
            alt=""
          />
          <li>
            <label>
              <input type="checkbox" checked />
              <span>[일월수산]대활어모듬회</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />
              <span>[오늘회]서더리 매운탕</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />
              <span>경기 추청으로 만든 초밥</span>
            </label>
          </li>
          <li>
            <input type="checkbox" checked />
            <span>전체선택</span>
          </li>
        </div>
        <div>
          <img
            src="https://cdn.onul-hoi.com/uploads/product_group/image/37/323d3f_200302100839.jpg"
            alt=""
          />
          <li>
            <label>
              <input type="checkbox" checked />
              <span>[오늘회]도넛 초밥 6종</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />
              <span>[바다나라]봄 제철 모듬회</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />
              <span>[제주]자연산 딱새우회 20</span>
            </label>
          </li>
          <li>
            <input type="checkbox" checked />
            <span>전체선택</span>
          </li>
        </div>
        <div>
          <img
            src="https://cdn.onul-hoi.com/uploads/product_group/image/28/7d290d_200302094447.jpg"
            alt=""
          />
          <li>
            <label>
              <input type="checkbox" checked />
              <span>[오늘회]도넛 초밥 6종</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />
              <span>[바다나라]봄 제철 모듬회</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />
              <span>[제주]자연산 딱새우회 20</span>
            </label>
          </li>
          <li>
            <input type="checkbox" checked />
            <span>전체선택</span>
          </li>
        </div>
        <div>
          <img
            src="https://cdn.onul-hoi.com/uploads/product_group/image/25/3cb85a_200302093124.jpg"
            alt=""
          />
          <li>
            <label>
              <input type="checkbox" checked />
              <span>[제주]자연산 딱새우회 20</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />
              <span>투뿔 한우 육회</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />
              <span>락교와 초생각 1인용</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" checked />
              <span>맑은된장국 버섯맛</span>
            </label>
          </li>
          <li>
            <input type="checkbox" checked />
            <span>전체선택</span>
          </li>
        </div>
        <div>
          <img
            src="https://cdn.onul-hoi.com/uploads/product_group/image/27/765524_200302093652.jpg"
            alt=""
          />
          <li>
            <label>
              <input type="checkbox" checked />
              <span>[흑산도]붕장어회(아나고)</span>
            </label>
          </li>
          <label>
            <label>
              <input type="checkbox" checked />
              <span>[제주]자연산 딱새우회 20</span>
            </label>
          </label>
          <li>
            <label>
              <input type="checkbox" checked />
              <span>락교와 초생강 1인용</span>
            </label>
          </li>
          <li>
            <input type="checkbox" checked />
            <span>전체선택</span>
          </li>
        </div>
      </Slider>
    )
  }
}
