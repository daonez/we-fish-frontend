import React from "react";
import productData from "./ProductData";
import productStyle from "../../styles/product.scss";
import dropDownArrow from "../../images/down-chevron.png";

class Products extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <section className="product-main-container">
          <div className="productList-section">
            <div className="productList__nav">
              <h1>자연산 회</h1>

              <div>
                <button className="dropDown">
                  신상품순
                  <img src={dropDownArrow} alt="" />
                </button>
              </div>
              {/* <div>
                <button>신상품</button>
                <ul>
                  <li>
                    <button>추천순</button>
                  </li>
                  <li>
                    <button>신상품순</button>
                  </li>
                  <li>
                    <button>인기상품순</button>
                  </li>
                  <li>
                    <button>낮은 가격순</button>
                  </li>
                  <li>
                    <button>높은 가격순</button>
                  </li>
                </ul>
              </div>

              <select>
                <option value="추천순">추천순</option>
                <option value="신상품순">신상품순</option>
                <option value="인기상품순">인기상품순</option>
                <option value="낮은 가격순">낮은 가격순</option>
                <option value="높은 가격순">높은 가격순</option>
              </select> */}
            </div>
            <ul className="productList">
              {productData.map(item => (
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
