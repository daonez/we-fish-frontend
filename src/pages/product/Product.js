import React from "react";
// import data from "./data";
import "../../styles/product.scss";
import Selector from "./Selector_button";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }
  //Fetch 함수로 data.json
  fetchProduct() {
    fetch("http://localhost:3000/data/data.json")
      .then(request => request.json())
      .then(request => {
        console.log("여기가 request다: ", request);
        this.setState({ data: request.data });
      });
  }
  render() {
    const { data } = this.state;
    console.log(this.state);
    return (
      <div className="content-wrapper">
        <section className="product-main-container">
          <div className="productList-section">
            <div className="productList__nav">
              <h1>자연산 회</h1>
              <Selector />
            </div>
            <ul className="productList">
              {data.map(item => (
                <li className="product-item">
                  <div className="productCard">
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
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Products;
