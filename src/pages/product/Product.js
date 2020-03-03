import React from "react"
import "../../styles/product.scss"
import Selector from "./Selector_button"
import Layout from "../../component/Layout"

class Products extends React.Component {
  constructor() {
    super()
    this.state = {
      fish: [],
      urchin: [],
      fishMarket: [],
      shrimpType: [],
      seafoodType: [],
      soupType: [],
      sauce: [],
      prepared: [],
      dried: [],
      seaweed: [],
      seasonal: []
    }
  }

  componentDidMount() {
    this.fetchProduct()
  }

  // Fetch 함수로 data.json
  fetchProduct() {
    fetch("http://localhost:3000/data/category_list.json")
      .then(request => request.json())
      .then(request => {
        this.setState({ fish: request.descending_price[3]["자연산 회"] })
      })
    console.log(this.state.fish)
  }

  render() {
    const { fish } = this.state
    console.log(fish)
    return (
      <Layout>
        <div className="content-wrapper">
          <section className="product-main-container">
            <div className="productList-section">
              <div className="productList__nav">
                <h1>자연산 회</h1>
                <Selector />
              </div>
              <ul className="productList">
                {fish.map(item => (
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
      </Layout>
    )
  }
}

export default Products
