import React from "react"
import "../../styles/main.scss"
// import Slider from "react-slick"
import ThreeImageSlider from "./ThreeImageSlider"
import ButtonSlider from "./ButtonSlider"
import firstTimeBanner from "./mainImage/first-time-wefish.jpeg"
import todayOrderBanner from "./mainImage/today-can-order-fish.jpg"
import plusFriend from "./mainImage/plusfriendKakao.jpeg"
import deliver from "./mainImage/처움추천이벤트-배송지역확인.jpg"
import GuestOrderSlider from "./GuestOrderSlider"

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.fetchProduct()
  }

  fetchProduct() {
    fetch("http://localhost:3000/data/category_list.json")
      .then(request => request.json())
      .then(request => {
        this.setState({ data: request.descending_price })
      })
  }

  render() {
    const { data } = this.state

    return (
      <div className="main-content">
        <section>
          <div>
            <div>
              <header>
                <p className="main-content-p">제철지도</p>
                <a href="https://www.onul-hoi.com/m/new_store_packages?tag=%EC%A0%9C%EC%B2%A0%ED%9A%8C" />
                <div className="main-content_contents">
                  <strong>
                    지금 어떤 수산물이
                    <p>가장 맛있을까요?</p>
                  </strong>
                  <p className="main-content-p text">
                    3월 오늘회에서만 만나볼 수 있는 메뉴
                  </p>
                </div>
              </header>
            </div>
          </div>
        </section>
        <div className="productslider">
          <ThreeImageSlider />
        </div>
        <div className="main-content_second-productslider">
          <div className="main-content_second-productslider_content">
            <h2>오늘회 베스트</h2>
            <span className="main-content-span">
              지난주 오늘회에서 가장 잘 팔린메뉴 >
            </span>
          </div>
          <div>
            <ThreeImageSlider />
          </div>
        </div>
        <div className="main-content-recommend-title">
          <p>후기로 검증된 추천 상차림</p>
          <strong>오늘회 고객님은 이렇게 드셨어요.</strong>
          <ButtonSlider />
          <GuestOrderSlider />
        </div>
        <div className="main-content-recommend-buttons">
          <div className="main-content-review-best" />
          <div className="products-wrapper">
            <p>오늘회 후기 보러가기 ></p>
          </div>
          <div>
            <img src={firstTimeBanner} alt="" />
            <img src={todayOrderBanner} alt="" />
          </div>
          <div className="recomend">
            <h1>알아서 추천드립니다 ></h1>
            <ul className="productList">
              {data.map(item => (
                <li className="recommend-product-item">
                  <div className="productCard">
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
            </ul>
            <div>
              <button>성게알 상품 전체보기 ></button>
            </div>
          </div>
        </div>
        <div>
          <h2>오늘회 기획전 ></h2>
        </div>
        <div>
          <ul>
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
          </ul>
        </div>
        <div>
          <img src={plusFriend} alt="" />
          <img src={deliver} alt="" />
        </div>
        <div>
          <h2>오늘회 신상품 ></h2>
        </div>
        <div>
          {/* <Slider {...settings}>
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
          </Slider> */}
        </div>
      </div>
    )
  }
}
