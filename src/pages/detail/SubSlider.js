/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import Slider from 'react-slick'
import Slide from './Slide'

class SubSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nArr: this.props.arr,
    }
  }

  componentDidMount = () => {
    this.nFor()
  }

  nFor = () => {
    const prdArr = []

    for (let i = 0; i < 10; i++) {
      prdArr.push(
        this.props.arr[Math.floor(Math.random() * this.props.arr.length)],
      )

      console.log(prdArr)
    }

    this.setState({ nArr: prdArr })
  }

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
            {/* slideList */}
            <Slide />
          </Slider>
        </div>
      </div>
    )
  }
}

export default SubSlider
