/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import Layout from '../../component/Layout'
import MainSlider from './MainSlider'
import Info from './Info'
import Notice from './Notice'
import SubSlider from './SubSlider'
import Together from './Together'
import TabWrap from './TabWrap'

import '../../styles/detail.scss'

class Detail extends Component {
  render() {
    return (
      <Layout>
        <>
          {/* etail-product__title */}
          <MainSlider />
          <Info />
          <Notice />
          <Together />
          <SubSlider />
          <TabWrap />
          <SubSlider />
        </>
      </Layout>
    )
  }
}

export default Detail
