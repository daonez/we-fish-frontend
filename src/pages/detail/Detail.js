/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import Layout from '../../component/Layout'
import MainSlider from './MainSlider'
import Info from './Info'
import Cart from './Cart'
import Notice from './Notice'
import SubSlider from './SubSlider'
/* import Together from './Together' */
import TabWrap from './TabWrap'

import '../../styles/detail.scss'

class Detail extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
    fetch('http://10.58.1.185:8000/product/detail/4')
      .then(res => res.json())
      .then(res =>
        this.setState(
          {
            tagline: res.product_data[0].tagline,
            name: res.product_data[0].name,
            price: res.product_data[0].price,
            unit: res.product_data[0].unit,
            package: res.product_data[0].package,
            origin: res.product_data[0].origin,
            delivery: res.product_data[0].delivery,
            caution: res.product_data[0].caution,
            image: res.product_data[0].image_url,
            detail: res.product_data[0].description,
          },
          () => {
            /* for (let i = 0; i < 10; i++) {
              const ten =
                res.detail_list[
                  Math.floor(Math.random() * res.product_data.length)
                ]

              this.state.nArr.push(ten)
            }
            this.setState({
              nArr: this.state.nArr,
            }) */
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
          <Info
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
          <Cart />
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
