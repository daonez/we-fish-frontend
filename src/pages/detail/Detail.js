/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import Layout from '../../component/Layout'
import MainSlider from './MainSlider'
import ProductInfo from './ProductInfo'
import ProductCart from './ProductCart'
import Notice from './Notice'
import SubSlider from './SubSlider'
/* import Together from './Together' */
import TabWrap from './TabWrap'

import '../../styles/detail.scss'

class Detail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: 1,
      no: '',
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
    const mockArr1 = 'http://localhost:3000/data/detail_list.json'
    const realArr1 = 'http://10.58.1.185:8000/product/detail/4'

    const mockArr2 = 'http://localhost:3000/data/random_list.json'
    const realArr2 = 'http://10.58.1.185:8000/product?category=4&query=id'

    Promise.all([fetch(mockArr1), fetch(mockArr2)])
      .then(([resDetail, resList]) =>
        Promise.all([resDetail.json(), resList.json()]),
      )
      .then(([dataDetail, dataList]) =>
        this.setState(
          {
            no: dataDetail.product_data[0].no,
            tagline: dataDetail.product_data[0].tagline,
            name: dataDetail.product_data[0].name,
            price: dataDetail.product_data[0].price,
            unit: dataDetail.product_data[0].unit,
            package: dataDetail.product_data[0].package,
            origin: dataDetail.product_data[0].origin,
            delivery: dataDetail.product_data[0].delivery,
            caution: dataDetail.product_data[0].caution,
            image: dataDetail.product_data[0].image_url,
            detail: dataDetail.product_data[0].description,
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
