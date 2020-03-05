/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
    // const queryId = this.props.location.search.split('=')[1]
    // const queryId = this.props.location.search.split('=')[1]
    // const min = 0
    // const max = 14
    // const randomNumber = Math.floor(Math.random() * (max - min) + min)

    // const values = this.props.match.params.category

    //* requests
    const requestOne = axios.get(
      // 'http://52.78.241.65:8000/product/category_list',
      `http://localhost:3000/data/categorylist.json`,
    )
    // const requestTwo = axios.get('http://52.79.185.94/product?category=4&');
    const requestTwo = axios.get(
      // `http://52.79.185.94:8000/product?category=4&query=updated_at`
      'http://52.79.185.94:8000/product?category=${values}&query=-updated_at',
      // `http://52.78.241.65:8000/product?category=${values}&query=-updated_at`,
    )
    //* control all promise
    Promise.all([requestOne, requestTwo]).then(([responseOne, responseTwo]) => {
      this.setState({
        title: responseOne.data.category_list,
        data: responseTwo.data.data,
      })
      console.log(this.state.title, this.state.product)
    })

    console.log(this.state.title, this.state.id)
  }

  render() {
    const { data } = this.state
    console.log(this.state)
    return (
      <Link
        to={{
          pathname: '/product/detail/:id',
          state: {
            data,
          },
        }}
      >
        <div>
          <Slider {...settings}>
            {data.map(item => (
              <li className="product-item">
                <div className="product-items_Card">
                  <div className="parent">
                    <img src={item.image} alt="" key={data.index} />
                  </div>
                </div>
                <div className="productCardContent">
                  <h1>{item.name}</h1>
                  <p>
                    <span>{item.price}</span>원
                  </p>
                  <p>
                    <span>{item.rating}</span>
                    <span className="review">· 후기</span>
                  </p>
                </div>
              </li>
            ))}
          </Slider>
        </div>
      </Link>
    )
  }
}
