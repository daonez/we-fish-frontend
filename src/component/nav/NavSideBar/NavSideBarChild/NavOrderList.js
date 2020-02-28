import React, { Component } from "react";
import { FaAngleLeft } from "react-icons/fa";
import "./NavOrderList.scss";

class NavOrderList extends Component {
  render() {
    return (
      <div className="OrderList">
        <div className="userOrder">
          <div className="FaAngleLeftParent">
            <FaAngleLeft size="24" className="FaAngle" />
          </div>
          <div className="slist">
            <span className="users">김현준</span>님의 주문내역
          </div>
        </div>
        <div className="information">
          <div className="date">일자</div>
          <div className="product">상품 정보</div>
          <div className="review">리뷰</div>
        </div>
      </div>
    );
  }
}

export default NavOrderList;
