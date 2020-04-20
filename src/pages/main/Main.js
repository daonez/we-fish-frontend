import React from 'react'
import ThreeImageSlider from './ThreeImageSlider'
import ButtonSlider from './ButtonSlider'
import firstTimeBanner from './mainImage/first-time-wefish.jpeg'
import todayOrderBanner from './mainImage/today-can-order-fish.jpg'
import plusFriend from './mainImage/plusfriendKakao.jpeg'
import deliver from './mainImage/처움추천이벤트-배송지역확인.jpg'
import GuestOrderSlider from './GuestOrderSlider'
import Layout from '../../component/Layout'
import './main.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReactSlick from 'react-slick'
import queryString from 'query-string'
import { SERVER_URL, AWS_URL } from 'config';

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      product: [],
    }
  }

  componentDidMount() {
    this.fetchProduct()
  }

  fetchProduct() {
    const min = 3
    const max = 14
    const randomNumber = Math.floor(Math.random() * (max - min) + min)

    //* requests
    fetch(`${AWS_URL}/product?category=${randomNumber}`)
      .then(request => request.json())
      .then(response => {
        this.setState({
          product: response.data,
        });
      });
    }
    
  productMap = (item) => {
    return (
      item &&
      item.map((ele, idx) => (
        <li className="recommend-product-item">
          <Link to={`/product/detail/${ele.id}`}>
            <div className="productCard">
              <div className="parent">
                <img src={ele.image} alt="" />
              </div>
            </div>
            <div className="productCardContent">
              <h1>{ele.name}</h1>
              <p>
                <span>{ele.price}</span>원
              </p>
              <p>
                {/* <span>{ele.rating}</span> */}
                <span className="review">· 후기</span>
              </p>
            </div>
          </Link>
        </li>
      ))
    );
  };


  render() {

    return (
      <div className="main-content">
        <section>
          <div>
            <div>
              <header>
                <div className="main-content-header">
                  <p className="main-content-p">제철지도</p>
                  <a href="https://www.onul-hoi.com/m/new_store_packages?tag=%EC%A0%9C%EC%B2%A0" />
                  <div className="main-content_contents">
                    <strong>지금 어떤 수산물이 가장 맛있을까요?</strong>
                    <p className="main-content-p text">
                      4월 오늘회에서만 만나볼 수 있는 메뉴
                    </p>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </section>
        {/* <div className="productslider">
          <ThreeImageSlider />
        </div> */}
        {/* <div className="main-content_second-productslider">
          <div className="main-content_second-productslider_content">
            <h2>오늘회 베스트</h2>
            <span className="main-content-span">
              지난주 오늘회에서 가장 잘 팔린메뉴 >
            </span>
          </div>
          <div>
            <ThreeImageSlider />
          </div>
        </div> */}
        {/* <div className="main-content-recommend-title">
          <p>후기로 검증된 추천 상차림</p>
          <strong>오늘회 고객님은 이렇게 드셨어요.</strong>
          <div>
            <ButtonSlider />
            <GuestOrderSlider />
          </div>
        </div> */}

        <div className="main-content-recommend-buttons">
          <div className="main-content-review-best" />
          {/* <div className="products-wrapper">
            <p>오늘회 후기 보러가기 ></p>
          </div> */}
          {/* <div>
            <img src={firstTimeBanner} alt="" />
            <img src={todayOrderBanner} alt="" />
          </div> */}
            <div className="recommend">
            {/* <h1>알아서 추천드립니다 ></h1> */}
            <ul className="productList">
              {this.productMap(this.state.product)}
            </ul>
            {/* <div>
              <button>성게알 상품 전체보기 ></button>
            </div> */}
          </div>
        </div>
        {/* <div>
          <h2>오늘회 기획전 ></h2>
        </div> */}
        <div>
          {/* <ul>
            <li>
              <article className="today">
                <div>
                  <img
                    src="https://cdn.onul-hoi.com/uploads/store_banner/image/38/ef05f5_200224013248.jpg?w=525&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <h2>[이게 바로 게맛]</h2>
                  <p>진한 게맛 우러나는 맛간장!</p>
                  <div>2020-02-24~소진시까지</div>
                </div>
              </article>
            </li>
            <li>
              <article className="today">
                <div>
                  <img
                    src="https://cdn.onul-hoi.com/uploads/store_banner/image/38/ef05f5_200224013248.jpg?w=525&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <h2>[이게 바로 게맛]</h2>
                  <p>진한 게맛 우러나는 맛간장!</p>
                  <div>2020-02-24~소진시까지</div>
                </div>
              </article>
            </li>
            <li>
              <article className="today">
                <div>
                  <img
                    src="https://cdn.onul-hoi.com/uploads/store_banner/image/38/ef05f5_200224013248.jpg?w=525&q=80"
                    alt=""
                  />
                </div>
                <div>
                  <h2>[이게 바로 게맛]</h2>
                  <p>진한 게맛 우러나는 맛간장!</p>
                  <div>2020-02-24~소진시까지</div>
                </div>
              </article>
            </li>
          </ul> */}
        </div>
        <div>
          <img src={plusFriend} alt="" />
          <img src={deliver} alt="" />
        </div>
        {/* <div>
          <h2>오늘회 신상품 ></h2>
        </div> */}
        <div>
          <ThreeImageSlider />
        </div>
      </div>
    );
  }
}
