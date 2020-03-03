/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import Slider from 'react-slick'

class MainSlider extends Component {
  render() {
    const sliderSetting1 = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false,
    }

    return (
      <div className="detail-product__main-slider">
        <div>
          <img src={this.props.image} alt="img1" />
        </div>
      </div>
    )
  }
}

export default MainSlider

/*

import React, { Component } from 'react'
import Slider from 'react-slick'
import slideTemp1 from '../../images/slide_img1.jpg'
import slideTemp2 from '../../images/slide_img2.jpg'

class MainSlider extends Component {
  render() {
    const sliderSetting1 = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false,
    }

    return (
      <div className="detail-product__main-slider">
        <Slider {...sliderSetting1}>
          <div>
            <img src={slideTemp1} alt="img1" />
          </div>
          <div>
            <img src={slideTemp2} alt="img2" />
          </div>
        </Slider>
      </div>
    )
  }
}

export default MainSlider

*/
