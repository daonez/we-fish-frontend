import React from "react";
//import PropTypes from "prop-types";
import productstyle from "../../styles/product.scss";

const products = [
  {
    id: 1,
    name: "[거제]해금강 보리숭어",
    image: `https://cdn.onul-hoi.com/uploads/store_package/image/580/344607_200224011649.jpg?w=525&q`,
    price: "25,900"
  },
  {
    id: 2,
    name: "[거제] 자연산 문치가자미회",
    image: `https://cdn.onul-hoi.com/uploads/store_package/image/579/7951d3_200224011614.jpg?w=525&q=80`,
    price: "34,900"
  }
];

class Products extends React.Component {
  render() {
    return (
      <section className="product-main">
        <div>
          {products.map(item => (
            <div>
              <img src={item.image} alt="" />
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Products;
