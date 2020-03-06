import React from 'react'
import './product.scss'
import Layout from 'component/Layout'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Selector from './Selector_button'

class Products extends React.Component {
  constructor() {
    super()
    this.state = {
      title: [],
      product: [],
      id: [],
    }
  }

  componentDidMount() {
    this.fetchProduct()
    // this.FetchProduct()
  }

  fetchProduct() {
    // const queryId = this.props.location.search.split('=')[1]
    // const queryId = this.props.location.search.split('=')[1]
    // const min = 0
    // const max = 14
    // const randomNumber = Math.floor(Math.random() * (max - min) + min)

    const values = this.props.match.params.category

    //* requests
    const requestOne = axios.get(
      'http://52.78.241.65:8000/product/category_list',
    )
    // const requestTwo = axios.get('http://52.79.185.94/product?category=4&');
    const requestTwo = axios.get(
      // `http://52.79.185.94:8000/product?category=4&query=updated_at`,
      `http://52.79.185.94:8000/product?category=${values}&query=-updated_at`,
      // `http://52.78.241.65:8000/product?category=${values}&query=-updated_at`,
    )
    //* control all promise
    Promise.all([requestOne, requestTwo]).then(([responseOne, responseTwo]) => {
      this.setState({
        title: responseOne.data.category_list,
        product: responseTwo.data.data,
      })
      console.log(this.state.title, this.state.product, this.state.id)
    })

    console.log(this.state.title, this.state.id)
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
    console.log('this.props: ', this.props)
    console.log(title, product)
    return (
      <Layout>
        <div className="content-wrapper">
          <section className="product-main-container">
            <div className="productList-section">
              <div className="productList__nav">
                <Selector />
              </div>
              <ul className="productList">
                {product.map(item => (
                  <li className="product-item">
                    <Link to={`/product/detail/${item.id}`}>
                      <div className="productCard">
                        <div className="parent">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                      <div className="productCardContent">
                        <h1 key={item.id}>{item.name}</h1>
                        <p>
                          <span>{Number(item.price).toLocaleString('kr')}</span>
                          원
                        </p>
                        <p>
                          <span>{item.rating}</span>
                          <span className="review">· 후기</span>
                        </p>
                      </div>
                    </Link>
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
