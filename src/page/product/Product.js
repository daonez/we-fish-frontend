import React from "react";
import productData from "./ProductData";
import product from "../../styles/product.scss";
import assets from "../../assets/star-solid.svg";

class Products extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <section className="product-main-container">
          <div className="productList-section">
            <div className="producList__nav">
              <h1>자연산 회</h1>
              <select>
                <option value="추천순">추천순</option>
                <option value="신상품순">신상품순</option>
                <option value="인기상품순">인기상품순</option>
                <option value="낮은 가격순">낮은 가격순</option>
                <option value="높은 가격순">높은 가격순</option>
              </select>
            </div>
            <ul className="productList">
              {productData.map(item => (
                <li className="product-item">
                  <div className="productCard">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="productCardContent">
                    <h1>{item.name}</h1>
                    <p>
                      <span>{item.price}</span>원
                    </p>
                    <p>
                      {item.rating}
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
