/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import DaumPostCode from 'react-daum-postcode'
import { FaSearch } from 'react-icons/fa'
import Layout from '../../component/Layout'
import DinnerDelivery from '../detail/DinnerDelivery'
import deliveryInfo from '../../images/delivery_info.jpg'
import deliveryCont from '../../images/delivery_cont.jpg'
import './deliveryCheck.scss'

class DeliveryCheck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      disabled: false,
      bgc: 'gray',
    }
  }

  handleClick = () => {
    this.setState({
      open: true,
      disabled: true,
      bgc: 'delivery-gray',
    })
  }

  handleAddress = data => {
    const zipCode = Number(String(data.zonecode).slice(0, 2))

    if (zipCode < 16) {
      if (zipCode !== 10 && zipCode !== 12) {
        alert('전 지역 저녘 배송이 가능합니다.')
      }
    } else if (zipCode < 24 && zipCode > 20) {
      alert('일부분 지역 저녘 배송이 가능하니, 아래 표를 확인해주세요.')
    } else {
      alert('저녘 배송이 불가한 지역입니다.')
    }

    this.setState({
      open: false,
      disabled: false,
      bgc: 'white',
    })
  }

  render() {
    return (
      <>
        <Layout>
          <div className="delivery-image">
            <img src={deliveryInfo} alt="우리집도 오늘배송 가능한가요?" />
          </div>
          <div className="delivery-search">
            <input
              className={this.state.bgc}
              onClick={this.handleClick}
              disabled={this.state.disabled}
              placeholder="배송 가능 지역인지 검색해보세요."
              type="text"
            />
            <button type="button">
              <FaSearch size="30" />
            </button>
          </div>
          {this.state.open && (
            <DaumPostCode onComplete={this.handleAddress} autoClose="true" />
          )}
          <div className="delivery-image">
            <img src={deliveryCont} alt="우리집도 오늘배송 가능한가요?" />
          </div>
          <div className="delivery-table">
            <DinnerDelivery />
          </div>
        </Layout>
      </>
    )
  }
}

export default DeliveryCheck
