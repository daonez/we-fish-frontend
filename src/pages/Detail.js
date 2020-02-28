import React, { Component } from "react"
import { TiArrowSortedDown } from "react-icons/ti"
import { FaStar, FaRegStar } from "react-icons/fa"
import Layout from "../component/Layout"
import Slider from "react-slick"
import Temp from "../images/img1.jpg"
import "../styles/detail.scss"
import slideTemp1 from "../images/slide_img1.jpg"
import slideTemp2 from "../images/slide_img2.jpg"

const sliderSetting= {
  
}

class Detail extends Component {
  render() {
    return (
      <Layout>
        <section className="detail-product">
          <div className="detail-product__main-slider">
            <ul>
              <li>
                <img src={slideTemp1} alt="img1" />
              </li>
              <li>
                <img src={slideTemp2} alt="img2" />
              </li>
            </ul>
          </div>
          {/* etail-product__title */}
          <div className="detail-product__info">
            <p className="detail-product__info__strapline">
              맑은물에서 자란 자연산 보리숭어의 참맛!
            </p>
            <h2 className="detail-product__info__title">
              [거제] 해금강 보리숭어회
            </h2>
            <div className="detail-product__info__box">
              <strong className="detail-product__info__num">
                25,900 <span>원</span>
              </strong>
              <span className="detail-product__info__star">
                <i className="star-on">
                  <FaStar size="21" />
                </i>
                4.7
              </span>
              <button
                type="button"
                className="detail-product__info__review-num"
              >
                &middot; 후기 2458
              </button>
            </div>
          </div>
          {/* etail-product__title */}
          <div className="detail-product__notice">
            <ul>
              <li>
                <em>상품단위</em>
                <p>1팩/400g</p>
              </li>
              <li>
                <em>상품구성</em>
                <p>보리숭어회 + 쌈야채 + 소스4종</p>
              </li>
              <li>
                <em>원산지</em>
                <p>국산</p>
              </li>
              <li>
                <em>배송구분</em>
                <p>저녘배송</p>
              </li>
            </ul>
            <p className="detail-product__notice__recomm">
              주의사항상품의 특성상 받으신 당일내로 드시는 것을 권장합니다.
              한정된 수량만 판매하기에 조기 품절 될 수 있습니다. 임산부의 경우
              날것으로 드시는 것은 권장하지 않습니다.
            </p>
          </div>
          <div className="detail-product__cart">
            <div className="detail-product__cart__select-products">
              <em className="detail-product__cart__title">상품선택</em>
              <div className="detail-product__cart__select-box">
                <select
                  className="detail-product__cart__select"
                  name="option"
                  id=""
                >
                  <option value=""> 제주 자연산~~</option>
                </select>
                <i className="detail-product__cart__arrow">
                  <TiArrowSortedDown size="20" />
                </i>
              </div>
            </div>
            <button type="button" className="detail-product__cart__button">
              장바구니에 담기
            </button>
          </div>
          {/* detail-product__sub */}
          <div className="detail-product__sub-slider">
            <h3>이렇게 묶어서 주문해보세요.</h3>
          </div>
          <div className="detail-product__tab">
            <ul>
              <li>
                <button type="button">상세정보</button>
              </li>
              <li>
                <button type="button">후기(2)</button>
              </li>
              <li>
                <button type="button">문의</button>
              </li>
              <li>
                <button type="button">배송/교환</button>
              </li>
            </ul>
          </div>
          <div className="detail-product__cont">
            <div className="detail-product__cont__detail" />
            <div className="detail-product__cont__review">
              <ol>
                <li>
                  <em className="detail-product__cont__review__title">
                    [거제] 해금강 보리숭어
                  </em>
                  <b className="detail-product__cont__review__user">
                    박** / 2020-02-25
                  </b>
                  <span className="detail-product__cont__review__star">
                    <i className="star-on">
                      <FaStar size="21" />
                    </i>
                    <i className="star-on">
                      <FaStar size="21" />
                    </i>
                    <i className="star-on">
                      <FaStar size="21" />
                    </i>
                    <i className="star">
                      <FaRegStar size="21" />
                    </i>
                    <i className="star">
                      <FaRegStar size="21" />
                    </i>
                  </span>

                  <p className="detail-product__cont__review__cont">
                    보리숭어 존맛탱구리..! 오독오독 씹히는 맛과 감칠맛 도랏...!
                  </p>
                  <div className="detail-product__cont__review__img">
                    <img src={Temp} alt="리뷰 이미지" />
                  </div>
                </li>
              </ol>
              <div className="detail-product__cont__review__page-list">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
              </div>
            </div>
            <div className="detail-product__cont__qna">
              <p>상품에 대해서 무엇이 궁금하신가요?</p>
              <p>
                오늘회 카카오톡 플러스친구가
                <span>가장 빠르게 응대해드려요! :D</span>
              </p>
              <a className="detail-product__cont__qna__katalk" href="#">
                상품문의하기
              </a>
            </div>
            <div className="detail-product__cont__delivery">
              <h3>오늘회 저녁배송 지역안내</h3>
              <table>
                <colgroup>
                  <col width="19%" />
                  <col width="25%" />
                  <col width="25%" />
                  <col width="31%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th rowSpan="9">
                      전지역<span>가능</span>
                    </th>
                    <td colSpan="3">서울시</td>
                  </tr>
                  <tr>
                    <td colSpan="3">과천시</td>
                  </tr>
                  <tr>
                    <td colSpan="3">광명시</td>
                  </tr>
                  <tr>
                    <td colSpan="3">구리시</td>
                  </tr>
                  <tr>
                    <td colSpan="3">군포시</td>
                  </tr>
                  <tr>
                    <td colSpan="3">부천시</td>
                  </tr>
                  <tr>
                    <td colSpan="3">성남시</td>
                  </tr>
                  <tr>
                    <td colSpan="3">안양시</td>
                  </tr>
                  <tr>
                    <td colSpan="3">의왕시</td>
                  </tr>
                  <tr>
                    <th rowSpan="38">
                      일부지역 <span>가능</span>
                    </th>
                    <th rowSpan="8">인천시</th>
                    <td>계양구</td>
                    <td>전지역 가능</td>
                  </tr>
                  <tr>
                    <td>부평구</td>
                    <td>전지역 가능</td>
                  </tr>
                  <tr>
                    <td>미추홀구</td>
                    <td>전지역 가능</td>
                  </tr>
                  <tr>
                    <td>동구</td>
                    <td>전지역 가능</td>
                  </tr>
                  <tr>
                    <td>중구</td>
                    <td>전지역 가능</td>
                  </tr>
                  <tr>
                    <td>서구</td>
                    <td>전지역 가능</td>
                  </tr>
                  <tr>
                    <td>연수구</td>
                    <td>전지역 가능</td>
                  </tr>
                  <tr>
                    <td>남동구</td>
                    <td>전지역 가능</td>
                  </tr>
                  <tr>
                    <th rowSpan="2">용인시</th>
                    <td>수지구</td>
                    <td>전지역 가능</td>
                  </tr>
                  <tr>
                    <td>기흥구</td>
                    <td>전지역 가능</td>
                  </tr>
                  <tr>
                    <th rowSpan="4">수원시</th>
                    <td>영통구</td>
                    <td>전지역 가능</td>
                  </tr>
                  <tr>
                    <td>장안구</td>
                    <td>전지역 가능</td>
                  </tr>
                  <tr>
                    <td>팔달구</td>
                    <td>전지역 가능</td>
                  </tr>
                  <tr>
                    <td>권선구</td>
                    <td>곡반정동, 권선동, 세류동</td>
                  </tr>
                  <tr>
                    <th rowSpan="3">고양시</th>
                    <td>일산서구</td>
                    <td>전지역 가능</td>
                  </tr>
                  <tr>
                    <td>일산동구</td>
                    <td>전지역 가능</td>
                  </tr>
                  <tr>
                    <td>덕양구</td>
                    <td>
                      강매동, 내곡동, 대장동, 덕은동, 도내동, 동산동, 벽제동,
                      삼송동, 성사동, 신원동, 신평동, 용두동, 원당동, 원흥동,
                      주교동, 토당동, 행신동, 행주내동, 행주외동, 향동동,
                      화전동, 화정동, 현천동
                    </td>
                  </tr>
                  <tr>
                    <th rowSpan="9">김포시</th>
                    <td>고촌읍</td>
                    <td>향산리, 풍곡리, 태리, 신곡리, 전호리</td>
                  </tr>
                  <tr>
                    <td>김포본동 (김포1동)</td>
                    <td>북변동, 걸포동 감정동</td>
                  </tr>
                  <tr>
                    <td>장기본동 (김포2동)</td>
                    <td>장기본동, 장기동 감정동</td>
                  </tr>
                  <tr>
                    <td>사우동 </td>
                    <td>사우동</td>
                  </tr>
                  <tr>
                    <td>풍무동</td>
                    <td>풍무동</td>
                  </tr>
                  <tr>
                    <td>장기동 </td>
                    <td>장기동</td>
                  </tr>
                  <tr>
                    <td>구래동 </td>
                    <td>구래동</td>
                  </tr>
                  <tr>
                    <td>마산동 </td>
                    <td>마산동</td>
                  </tr>
                  <tr>
                    <td>운양동</td>
                    <td>운양동</td>
                  </tr>
                  <tr>
                    <th rowSpan="12">하남시</th>
                    <td>위례동 </td>
                    <td>학암동, 감이동</td>
                  </tr>
                  <tr>
                    <td>감북동 </td>
                    <td>감북동, 감일동, 감이동, 광암동</td>
                  </tr>
                  <tr>
                    <td>초이동 </td>
                    <td>초이동, 초일동 광암동</td>
                  </tr>
                  <tr>
                    <td>풍산동 </td>
                    <td>풍산동</td>
                  </tr>
                  <tr>
                    <td>미사1동</td>
                    <td> 미사동, 망월동 </td>
                  </tr>
                  <tr>
                    <td>미사2동 </td>
                    <td>망월동, 선동</td>
                  </tr>
                  <tr>
                    <td>덕풍1동</td>
                    <td>덕풍동</td>
                  </tr>
                  <tr>
                    <td>덕풍2동 </td>
                    <td>덕풍동</td>
                  </tr>
                  <tr>
                    <td>덕풍3동 </td>
                    <td>덕풍동</td>
                  </tr>
                  <tr>
                    <td>신장1동 </td>
                    <td>신장동</td>
                  </tr>
                  <tr>
                    <td>신장2동 </td>
                    <td>창우동</td>
                  </tr>
                  <tr>
                    <td>준궁동 </td>
                    <td>준궁동, 교산동, 상사창동, 하사창동, 항동</td>
                  </tr>
                </tbody>
              </table>
              <div className="detail-product__cont__delivery__title">
                <h3>교환/반품 안내</h3>
                <p>주문전 꼭! 확인해주세요</p>
              </div>
              <dl className="detail-product__cont__delivery__q">
                <dt>주문 취소 문의</dt>
                <dd>
                  주문 취소는 배송 전일 6시 이전까지 고객센터 통하여
                  요청해주시면 취소가능하나 배송 전일 6시 이후에는 취소 어려운
                  점 참고바랍니다.
                </dd>
              </dl>
              <dl className="detail-product__cont__delivery__complete">
                <dt>배송 완료 후</dt>
                <dd>
                  <em>단순변심으로 인한 반품/환불/교환</em>
                  <p>
                    재판매가 불가능한 제품의 특성 상, 단순 변심으로 인한 반품 및
                    교환은 어렵습니다.
                  </p>
                  <em>상품에 문제가 있는 경우의 반품/환불/교환</em>
                  <p>
                    오늘회에서는 언제나 신선하고 좋은 상품을 제공하기 위해
                    노력하고 있으나, 간혹 상품의 문제가 있는 경우 정도에 따라
                    부분환불/환불/재배송 처리해드립니다.
                  </p>
                  <p>
                    상품의 상태를 정확히 확인할 수 있도록 문제가 있는 상품의
                    사진을 찍어 게시판에 업로드 부탁드립니다.
                  </p>
                  <p>
                    수령일로부터 2일 이내에 연락을 주셔야 확인이 가능하며 명확한
                    판단이 어려운 사유로 인한 요청은 처리가 어려울 수 있습니다.
                    (맛, 재료, 크기 등 개인적인 기호 및 판단에 따른 반품 및 교환
                    요청 등)
                  </p>
                </dd>
              </dl>
              <div className="detail-product__cont__delivery__title">
                <h3>고객센터 안내</h3>
              </div>
              <dl className="detail-product__cont__delivery__center">
                <dt>오늘회 내선전화:</dt>
                <dd>
                  <a
                    className="detail-product__cont__delivery__center__tel"
                    href="tel:1661-1319"
                  >
                    1661-1319
                  </a>
                  <p>월 ~ 토 (10:00 ~ 20:00)</p>
                  <a
                    className="detail-product__cont__delivery__center__katalk"
                    href="#"
                  >
                    오늘회 카카오톡 플러스친구
                  </a>
                  <br />
                  <a
                    className="detail-product__cont__delivery__center__one-to-one"
                    href="#"
                  >
                    1:1 문의 게시판
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Detail
