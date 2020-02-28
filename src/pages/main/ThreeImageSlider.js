import React, { Component } from "react";
import Slider from "react-slick";

export default class ThreeImageSlider extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct() {
    fetch("http://localhost:3000/data/data.json")
      .then(request => request.json())
      .then(request => {
        console.log(request);
        this.setState({ data: request.data });
      });
  }

  render() {
    const { data } = this.state;
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: true
    };
    return (
      <div>
        <Slider {...settings}>
          {data.map(item => (
            <li className="product-item">
              <div className="product-items_Card">
                <div className="parent">
                  <img src={item.image} alt="" />
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
    );
  }
}