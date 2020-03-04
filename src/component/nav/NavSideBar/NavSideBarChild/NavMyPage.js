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
        profiles:[],
        data:[]
    }

    handleInput = e =>  {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        fetch('http://10.58.5.89:8000/user/profile',{
            method:'GET',
            headers:{
                'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.SAa5RFLev-OZMBqY2mDjAeftZE0kH4FJUSOwCS4HsGA'
            },
        })
        .then(response => { return response.json() })
        .then(response => {
            this.setState({ profiles: response.profiles})
            console.log(response.profiles)
        })
    }

    goToSave = () => {
        fetch('http://10.58.5.89:8000/user/profile', {
            method: 'POST',
            headers: {
                'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.SAa5RFLev-OZMBqY2mDjAeftZE0kH4FJUSOwCS4HsGA'
            },
            body: JSON.stringify({
                address: this.state.address,
                mobile: this.state.mobile,
                name: this.state.name,
                postcode: this.state.postcode

            })
          })
          .then(response => { 
            if (response.status === 400) {
                alert(" no exist id");
            } else if (response.status === 200) {
                return response
            }
          })
          .then(response => 
            console.log(typeof response)
            // if (response.token) {
            //   localStorage.setItem('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.SAa5RFLev-OZMBqY2mDjAeftZE0kH4FJUSOwCS4HsGA', response.token);
            // }
          )
    }

    render() {
        
        const {data}= this.state;
        console.log('data:: ', this.state.data)
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
                            <input className="input1" placeholder={this.state.profiles && this.state.profiles.id}
                            type="text"
                            onChange={this.handleInput}
                            value={this.state.id}
                            name="id" disabled/>
                            
                        </div>
                    </div>
                    <div className="list2">
                        <div className="select2">이름</div>
                        <div>
                            <input className="input2" placeholder={this.state.profiles && this.state.profiles.name}
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
                            <input className="input3" placeholder={this.state.profiles && this.state.profiles.mobile}
                            type="text"
                            onChange={this.handleInput}
                            value={this.state.mobile}
                            name="mobile"></input>
                        </div>
                    </div>
                    <div className="list4">
                        <div>
                            <input className="zipcode" placeholder={this.state.profiles && this.state.profiles.postcode}
                            type="text"
                            onChange={this.handleInput}
                            value={this.state.postcode}
                            name="postcode"></input>
                        </div>
                        <div>
                            <input className="addressfind" placeholder={this.state.profiles && this.state.profiles.address}
                            type="text"
                            onChange={this.handleInput}
                            value={this.state.address}
                            name="address"></input>
                        </div>
                    </div>
                    <div className="list5">
                        <input className="address" placeholder={this.state.profiles && this.state.profiles.detailed_address}
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
