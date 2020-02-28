import React, { Component } from 'react'
import logo from '../../../../img/logotext.png'
import './NavMyPage.scss'

class NavMyPage extends Component {
    state={
        id:"",
        name:"",
        mobile:"",
        postcode:"",
        address:"",
        adressdetail:"",
        password:"",
        profiles:[]
    }

    handleInput = e =>  {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // goToSave= ()=> {
    //     const list = {
    //         profile:{ 
    //             address: this.state.address,
    //             detailed_address: this.state.detailed_address,
    //             id: this.state.id,
    //             mobile: this.state.mobile,
    //             name: this.state.name,
    //             postcode: this.state.postcode}

    //     }

    //     return list
    // }

    goToSave = () => {
        fetch('http://10.58.6.8:8000/user/profile', {
            method: 'POST',
            headers: {
                'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.SAa5RFLev-OZMBqY2mDjAeftZE0kH4FJUSOwCS4HsGA'
            },
            body: JSON.stringify({
                // address: '서울강남구테헤란로427',
                // mobile:'01012345678',
                // name: 'wecode',
                // postcode: '123456'
                address: this.state.address,
                mobile: this.state.mobile,
                name: this.state.name,
                postcode: this.state.postcode

            })
          })
          .then(response => { 
             console.log(response)
          })
          .then(response => 
            console.log(response)
            // if (response.token) {
            //   localStorage.setItem('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.SAa5RFLev-OZMBqY2mDjAeftZE0kH4FJUSOwCS4HsGA', response.token);
            // }
          )
    }

    render() {
        console.log(this.state)
        const list = this.state.profiles.push
        return (
            <div className="MyPage">
                <div className="logo">
                        <img src={logo}></img>
                </div>
                <div className="listParent">
                    <div className="list1">
                        <div className="select1">아이디</div>
                        <div>
                            <input className="input1" placeholder="akiakmapro@gmail.com"
                            type="text"
                            onChange={this.handleInput}
                            value={this.state.id}
                            name="id" >
                            </input>
                        </div>
                    </div>
                    <div className="list2">
                        <div className="select2">이름</div>
                        <div>
                            <input className="input2" placeholder="이름"
                            type="text"
                            onChange={this.handleInput}
                            value={this.state.name}
                            name="name">
                            </input>
                        </div>
                    </div>
                    <div className="list3">
                        <div className="select3">휴대전화</div>
                        <div>
                            <input className="input3" placeholder="휴대전화번호"
                            type="text"
                            onChange={this.handleInput}
                            value={this.state.mobile}
                            name="mobile"></input>
                        </div>
                    </div>
                    <div className="list4">
                        <div>
                            <input className="zipcode" placeholder="우편번호"
                            type="text"
                            onChange={this.handleInput}
                            value={this.state.postcode}
                            name="postcode"></input>
                        </div>
                        <div>
                            <input className="addressfind" placeholder="주소찾기"
                            type="text"
                            onChange={this.handleInput}
                            value={this.state.address}
                            name="address"></input>
                        </div>
                    </div>
                    <div className="list5">
                        <input className="address" placeholder="상세주소"
                        type="text"
                        onChange={this.handleInput}
                        value={this.state.adetailed_address}
                        name="detailed_address"></input>
                    </div>

                    <div className="list6">
                        <div className="select4">비밀번호</div>
                        <div>
                            <input className="password" placeholder="    (6자리 이상)"
                            type="password" 
                            onChange={this.handleInput}
                            value={this.state.password}
                            name="password"></input>
                        </div>
                    </div>
                </div>
                <div className="Logout">
                    <div>로그아웃</div><div className="bar">|</div><div onClick={this.goToSave}>저장</div>
                    
                </div>

            </div>
        )
    }
}

export default NavMyPage
