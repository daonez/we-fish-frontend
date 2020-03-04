/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tab from './Tab'
import CountDetail from './ContDetail'
import CountReview from './ContReview'
import CountQna from './ContQna'
import CountDelivery from './ContDelivery'

class TapWrap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
    }
  }

  //    detail: this.props.detail,

  pHandleClick = dataFromChild => {
    this.setState({ name: dataFromChild })
  }

  renderSwitch = param => {
    const obj = { __html: this.props.detail }

    switch (param) {
      case 'detail-product__cont__detail':
        return <CountDetail html={obj} />
      case 'detail-product__cont__review':
        return <CountReview />
      case 'detail-product__cont__qna':
        return <CountQna />
      case 'detail-product__cont__delivery':
        return <CountDelivery />
      default:
        return <CountDetail html={obj} />
    }
  }

  render() {
    return (
      <>
        <Tab onClick={this.pHandleClick} />
        <div className="detail-product__cont">
          {this.renderSwitch(this.state.name)}
        </div>
      </>
    )
  }
}

export default TapWrap
