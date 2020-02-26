import React from "react";
import "../../styles/main.scss";
import Slider from "react-slick";
import firstTimeBanner from "./mainImage/first-time-wefish.jpeg";
import todayOrderBanner from "./mainImage/today-can-order-fish.jpg";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct() {
    fetch("http://localhost:3000/data/data.json")
      .then(request => request.json())
      .then(request => {
        console.log(request);
        this.setState({ data: request.data });
      });
  }

  render() {
    const { data } = this.state;
    console.log(this.state);
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: true
    };

    return (
      <div className="total">
        <section>
          <div>
            <div>
              <header>
                <a href="https://www.onul-hoi.com/m/new_store_packages?tag=%EC%A0%9C%EC%B2%A0%ED%9A%8C" />
                <h3>제철지도</h3>
                <div>
                  <strong>지금 어떤 수산물이</strong>
                  <p>가장 맛있을까요?</p>
                  <p>2월 오늘회에서만 만나볼 수 있는 메뉴</p>
                </div>
              </header>
            </div>
          </div>
        </section>
        <div className="ProductSlider">
          <Slider {...settings}>
            {data.map(item => (
              <li className="product-item">
                <div className="product-items_Card">
                  <div className="parent">
                    <img src={item.image} alt="" />
                  </div>
                </div>
                <div className="productCardContent">
                  <h1>{item.name}</h1>
                  <p>
                    <span>{item.price}</span>원
                  </p>
                  <p>
                    <span>{item.rating}</span>
                    <span className="review">· 후기</span>
                  </p>
                </div>
              </li>
            ))}
          </Slider>
        </div>
        <div>
          <div>
            <h2>오늘회 베스트</h2>
            <span>지난주 오늘회에서 가장 잘 팔린메뉴 ></span>
          </div>
          <div>
            <Slider {...settings}>
              {data.map(item => (
                <li className="product-item">
                  <div className="product-items_Card">
                    <div className="parent">
                      <img src={item.image} alt="" />
                    </div>
                  </div>
                  <div className="productCardContent">
                    <h1>{item.name}</h1>
                    <p>
                      <span>{item.price}</span>원
                    </p>
                    <p>
                      <span>{item.rating}</span>
                      <span className="review">· 후기</span>
                    </p>
                  </div>
                </li>
              ))}
            </Slider>
          </div>
        </div>
        <div className="review-title">
          <h4>후기로 검증된 추천 상차림</h4>
          <h1>오늘회 고객님은 이렇게 드셨어요.</h1>
        </div>
        <div className="review-buttons">
          <Slider {...settings}>
            <div className="review-best">
              <div>
                <button>
                  <p>두명이서 먹기 적당</p>
                </button>
              </div>
              <div>
                <button>
                  <p>여기가 제주도</p>
                </button>
              </div>
              <button>
                <p>오늘회 첫주문</p>
              </button>
              <button>
                <p>게딱지만 냠냠</p>
              </button>
              <button>
                <p>현포차 오픈</p>
              </button>
              <button>
                <p>도넛초밥</p>
              </button>
              <button>
                <p>이번겨울 마지막방어</p>
              </button>
              <button>
                <p>새우파티입니다</p>
              </button>
            </div>
          </Slider>
          <div className="products-wrapper">
            <Slider>
              {data.map(item => (
                <div>
                  <img src={item.image} alt="" />
                  <input type="checkbox" name="fish" value="생연어" />
                  <label for="fish">[오늘회] 생연어</label>
                  <input type="checkbox" />
                  <input type="checkbox" />
                  <input type="checkbox" />
                  <input type="checkbox" />
                  <button>나도 이렇게 장바구니 담아보기</button>
                </div>
              ))}
            </Slider>
            <p>오늘회 후기 보러가기 ></p>
          </div>
          <div>
            <img src={firstTimeBanner} alt="" />
            <img src={todayOrderBanner} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
