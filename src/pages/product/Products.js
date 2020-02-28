import React from "react";

class Products extends React.Component {
  render() {
    return (
      <section className="product">
        <div>
          <img src="https://via.placeholder.com/227" alt="" />
        </div>
        <div>
          <span>[제주]</span>
          <span>자연산 딱새우회 20미/30미</span>
          <p>22,900원</p>
        </div>
        <div>
          <span>🌟 4.6</span>
          <span>후기 2441</span>
        </div>
      </section>
    );
  }
}

export default Products;
