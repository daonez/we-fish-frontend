/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

class Notice extends Component {
  render() {
    return (
      <div className="detail-product__notice">
        <ul>
          <li>
            <em>상품단위</em>
            <p>{this.props.unit}</p>
          </li>
          <li>
            <em>상품구성</em>
            <p>{this.props.package}</p>
          </li>
          <li>
            <em>원산지</em>
            <p>{this.props.origin}</p>
          </li>
          <li>
            <em>배송구분</em>
            <p>{this.props.delivery}</p>
          </li>
        </ul>
        <p className="detail-product__notice__recomm">{this.props.caution}</p>
      </div>
    )
  }
}

export default Notice
