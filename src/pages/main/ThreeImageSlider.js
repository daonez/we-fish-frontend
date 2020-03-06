/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import axios from 'axios'
import queryString from 'query-string'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: true,
}
export default class ThreeImageSlider extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.fetchProduct()
  }

  fetchProduct() {
    const min = 3
    const max = 14
    const randomNumber = Math.floor(Math.random() * (max - min) + min)

    const values = queryString.stringify({
      category: randomNumber,
    })
    console.log(values)

    // const values = this.props.match.params.category

    //* requests
    fetch(`http://52.78.241.65:8000/product?${values}&query=-price`)
      .then(request => request.json())
      .then(response => {
        this.setState({
          data: response.data,
        })
        console.log(this.state.data)
      })

    console.log(this.state.data)
  }

  render() {
    const { data } = this.state
    console.log(data)
    return (
      <div>
        <Slider {...settings}>
          {data.map(item => (
            <li className="product-item">
              <Link to={`/product/detail/${item.id}`}>
                <div className="product-items_Card">
                  <div className="parent">
                    <img src={item.image} alt="" />
                  </div>
                </div>
                <div className="productCardContent">
                  <h1>{item.name}</h1>
                  <p>
                    <span>{Number(item.price).toLocaleString('kr')}</span>원
                  </p>
                  <p>
                    <span>{item.rating}</span>
                    <span className="review">· 후기</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </Slider>
      </div>
    )
  }
}
