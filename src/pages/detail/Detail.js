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
      slideArr: [],
    }
  }

  componentDidMount = () => {
    this.fetchFnc()
  }

  fetchFnc = () => {
    fetch('http://localhost:3000/data/detail_list.json')
      .then(res => res.json())
      .then(res =>
        this.setState({
          tagline: res.detail_list[0].tagline,
          name: res.detail_list[0].name,
          price: res.detail_list[0].price,
          unit: res.detail_list[0].unit,
          package: res.detail_list[0].package,
          origin: res.detail_list[0].origin,
          delivery: res.detail_list[0].delivery,
          caution: res.detail_list[0].caution,
          image: res.detail_list[0].image,
          detail: res.detail_list[0].detail,
          slideArr: res.detail_list,
        }),
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
          <SubSlider arr={this.state.slideArr} />
          <TabWrap detail={this.state.detail} />
          {/* <SubSlider /> */}
        </>
      </Layout>
    )
  }
}

export default Detail
