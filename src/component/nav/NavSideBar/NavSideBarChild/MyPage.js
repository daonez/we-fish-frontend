import React, { Component } from 'react'
import logo from '../../../../img/logotext.png'
import './MyPage.scss'

class MyPage extends Component {
    render() {
        return (
            <div className="MyPage">
                <div className="logo">
                        <img src={logo}></img>
                </div>
                <div className="listParent">
                    <div className="list1">
                        <div className="select1">아이디</div><div><input className="input1"></input></div>
                    </div>
                    <div className="list2">
                        <div className="select2">이름</div><div><input className="input2"></input></div>
                    </div>
                    <div className="list3">
                        <div className="select3">휴대전화</div><div><input className="input3"></input></div>
                    </div>
                    <div className="list4">
                        <div><input className="zipcode"></input></div><div><input className="adressfind"></input></div>
                    </div>
                    <div className="list5">
                        <input className="adress"></input>
                    </div>
                    <div className="list6">
                        <div className="select4">비밀번호</div><div><input className="password"></input></div>
                    </div>
                </div>
                <div className="Logout">
                    <div>로그아웃</div><div>저장</div>
                </div>

            </div>
        )
    }
}

export default MyPage
