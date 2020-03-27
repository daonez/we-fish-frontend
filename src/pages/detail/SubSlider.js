/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import Slider from 'react-slick'
import Slide from './Slide'

const sliderSetting2 = {
  infinite: true,
  slidesToShow: 2,
  centerMode: true,
  centerPadding: '10%',
  slidesToScroll: 1,
}

class SubSlider extends Component {
  // //  this.props.arr

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     p: this.props.arr,
  //   }
  // }

  render() {
    return (
      <div className="detail-product__sub-slider">
        <h3>같이 먹으면 좋은 추천상품</h3>
        <div className="detail-product__sub-slider__list">
          <Slider {...sliderSetting2}>
            {this.props.arr.map((item, idx) => {
              return (
                <div key={idx} className="detail-product__sub-slider__slide">
                  <Slider
                  // price={item.price}
                  // image={item.image}
                  // title={item.name}
                  />
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    )
  }
}

export default SubSlider
