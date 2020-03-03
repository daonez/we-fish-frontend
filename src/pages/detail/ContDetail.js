/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

class ContDetail extends Component {
  render() {
    return (
      <div
        dangerouslySetInnerHTML={this.props.html}
        className="detail-product__cont__detail"
      />
    )
  }
}

export default ContDetail
