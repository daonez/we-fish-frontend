/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { SERVER_URL } from 'config'
import Layout from '../../component/Layout'
import MainSlider from './MainSlider'
import ProductInfo from './ProductInfo'
import ProductCart from './ProductCart'
import Notice from './Notice'
import SubSlider from './SubSlider'
/* import Together from './Together' */
import TabWrap from './TabWrap'
import './detail.scss'

class Detail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: 1,
      id: '',
      tagline: '',
      name: '',
      price: '',
      unit: '',
      package: '',
      origin: '',
      delivery: '',
      caution: '',
      image: '',
      detail: '',
      nArr: [],
    }
  }

  componentDidMount = () => {
    this.fetchFnc()
  }

  fetchFnc = () => {
    const prdId = this.props.match.params.id
    const randomId = Math.floor(Math.random() * 17)

    const mockArr1 = 'http://localhost:3000/data/detail_list.json'
    const realArr1 = `${SERVER_URL}/product/detail/${prdId}`

    const mockArr2 = 'http://localhost:3000/data/random_list.json'
    const realArr2 = `${SERVER_URL}/product?category=${randomId}&query=id`

    Promise.all([fetch(realArr1), fetch(realArr2)])
      .then(([resDetail, resList]) =>
        Promise.all([resDetail.json(), resList.json()]),
      )
      .then(([dataDetail, dataList]) =>
        this.setState(
          {
            id: dataDetail.product.id,
            tagline: dataDetail.product.tagline,
            name: dataDetail.product.name,
            price: dataDetail.product.price,
            unit: dataDetail.product.unit,
            package: dataDetail.product.package,
            origin: dataDetail.product.origin,
            delivery: dataDetail.product.delivery,
            caution: dataDetail.product.caution,
            image: dataDetail.product.image_url,
            detail: dataDetail.product.description,
          },
          () => {
            for (let i = 0; i < 10; i++) {
              const ten =
                dataList.data[Math.floor(Math.random() * dataList.data.length)]

              this.state.nArr.push(ten)
            }
            this.setState({
              nArr: this.state.nArr,
            })
          },
        ),
      )
  }

  render() {
    console.log(this.state)
    return (
      <Layout>
        <>
          {/* etail-product__title */}
          <MainSlider image={this.state.image} />
          <ProductInfo
            tagline={this.state.tagline}
            name={this.state.name}
            price={this.state.price}
          />
          <Notice
            unit={this.state.unit}
            package={this.state.package}
            origin={this.state.origin}
            delivery={this.state.delivery}
            caution={this.state.caution}
          />
          <ProductCart num={this.state.num} no={this.state.no} />
          {/* <Together /> */}
          <SubSlider arr={this.state.nArr} />
          <TabWrap detail={this.state.detail} />
          {/* <SubSlider /> */}
        </>
      </Layout>
    )
  }
}

export default Detail
