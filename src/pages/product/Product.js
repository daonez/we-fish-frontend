import React from 'react'
import './product.scss'
import Layout from 'component/Layout'
import axios from 'axios'
import Selector from './Selector_button'

class Products extends React.Component {
  constructor() {
    super()
    this.state = {
      title: [],
      product: [],
    }
  }

  componentDidMount() {
    // this.fetchProduct()
    this.FetchProduct()
  }

  FetchProduct() {
    // const queryId = this.props.location.search.split('=')[1]
    //* requests
    const requestOne = axios.get('http://localhost:3000/data/categorylist.json')
    const requestTwo = axios.get('http://localhost:3000/data/4.json')
    // const requestTwo = axios.get(`http://localhost:3000/data/${queryId}`)

    //* control all promise
    axios.all([requestOne, requestTwo]).then(([responseOne, responseTwo]) => {
      console.log(responseOne, responseTwo)
      this.setState({
        title: responseOne.data.category_list,
        product: responseTwo.data.data,
      })
    })
    console.log(this.title, this.product)
  }

  // Fetch 함수로 data.json
  // fetchProduct() {
  //   fetch('http://localhost:3000/data/4.json')
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({ data: res.data, title: res.category_list })
  //     })
  // }

  render() {
    const { title, product } = this.state
    console.log(title, product)
    return (
      <Layout>
        <div className="content-wrapper">
          <section className="product-main-container">
            <div className="productList-section">
              <div className="productList__nav">
                <h1>자연산회</h1>
                <Selector />
              </div>
              <ul className="productList">
                {product.map(item => (
                  <li className="product-item">
                    <div className="productCard">
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
