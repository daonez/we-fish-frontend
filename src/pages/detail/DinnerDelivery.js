/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

class DinnerDelivery extends Component {
  render() {
    return (
      <>
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
                강매동, 내곡동, 대장동, 덕은동, 도내동, 동산동, 벽제동, 삼송동,
                성사동, 신원동, 신평동, 용두동, 원당동, 원흥동, 주교동, 토당동,
                행신동, 행주내동, 행주외동, 향동동, 화전동, 화정동, 현천동
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
      </>
    )
  }
}

export default DinnerDelivery
