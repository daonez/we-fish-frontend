/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

class Tab extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
    }

    this.handleClick.bind(this)
  }

  handleClick = e => {
    this.setState({
      name: e.target.name,
    })

    this.props.onClick(e.target.name)
  }

  render() {
    return (
      <>
        <div className="detail-product__tab">
          <ul>
            <li>
              <button
                name="detail-product__cont__detail"
                onClick={this.handleClick}
                type="button"
              >
                상세정보
              </button>
            </li>
            <li>
              <button
                name="detail-product__cont__review"
                onClick={this.handleClick}
                type="button"
              >
                후기(0)
              </button>
            </li>
            <li>
              <button
                name="detail-product__cont__qna"
                onClick={this.handleClick}
                type="button"
              >
                문의
              </button>
            </li>
            <li>
              <button
                name="detail-product__cont__delivery"
                onClick={this.handleClick}
                type="button"
              >
                배송/교환
              </button>
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default Tab
