import React, { Component } from 'react';
import './NavFooter.scss';
import NavReview from '../nav/NavSideBar/NavSideBarChild/NavReview';
import { withRouter } from 'react-router-dom';

class NavFooter extends Component {
    render() {
        return (
            <div className="NavFooter">
                <div className="NavFooter1">
                    <div className="footerRule">
                        <span>이용약관</span><span>개인정보처리방침</span><span>배송안내</span><span>공지사항</span><span>인재채용</span>
                    </div>
                    <div className="footerHelp">
                        <div className="footerHelp1">무엇을 도와드릴까요?</div>
                        <div className="footerHelp2">1661-1319</div>
                    </div>
                    <div className="footerKakao">
                        <button style={{cursor:'pointer'}}>
                         <div className="footerKakao1"></div><div className="footerKakao2">카카오톡이 훨씬 빨라요</div>
                        </button>
                    </div>
                    <div className="footerCustomerService">
                        <span>오늘회 고객센터</span><span>|</span><span>월~토(10:00~ 20:00)</span>
                    </div>
                    <div className="footerCompanyInformation">
                        <div>주식회사 오늘식탄 | 대표이사: 김재현</div>
                        <div>개인정보보호책임자:김도영</div>
                        <div>사업자등록번호:705-81-00628<a href="/">사업자정보확인</a></div>
                        <div>통신판매업:2019-서울강남-05347호</div>
                        <div>주소:서울특별시 강남구 선릉로428, 위워크 선릉3호점12층(대치동)</div>
                        <div>문의:<a href="/">contact@onul-hoi.com</a></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(NavFooter)
