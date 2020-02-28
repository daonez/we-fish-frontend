import React, { Component } from "react";
import logo from "../images/logo_img.png";

class LayoutLeft extends Component {
  render() {
    return (
      <section className="section-left">
        <div className="section-left__wrap">
          <div className="section-left__img">
            <img src={logo} alt="오늘회 로고" />
          </div>

          <dl className="section-left__title">
            <dt>
              오늘회가 추천하는
              <span>2월 제철 해산물</span>
            </dt>
            <dd>
              방어&middot;광어&middot;삼치
              <span>돌낙지 그리고 피조개</span>
            </dd>
          </dl>

          <p className="section-left__cont1">
            지금 주문하세요.
            <span>저녘 7시까지 배송해드려요.</span>
          </p>
          <p className="section-left__cont2">
            서울&middot;인천&middot;경기 일부 <span>7시 배송</span>
          </p>
        </div>
      </section>
    );
  }
}

export default LayoutLeft;
