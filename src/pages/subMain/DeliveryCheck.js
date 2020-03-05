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
  handleAddress = data => {
    const fullAddress = data.address

    console.log(fullAddress)
  }

  render() {
    return (
      <>
        <Layout>
          <div className="delivery-image">
            <img src={deliveryInfo} alt="우리집도 오늘배송 가능한가요?" />
          </div>
          <div className="delivery-search">
            <input placeholder="배송 가능 지역인지 검색해보세요." type="text" />
            <button type="button">
              <FaSearch size="30" />
            </button>
          </div>
          <DaumPostCode onComplete={this.handleAddress} autoClose="true" />
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
