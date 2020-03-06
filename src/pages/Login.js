import React, { Component } from 'react'
import './login.scss'
import { withRouter } from 'react-router'
import Kakao from 'kakaojs'
import CryptoJS from 'crypto-js'
import Axios from 'axios'
import fish from '../images/animal.svg'
import Layout from '../component/Layout'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      id: '',
      pw: '',
      keepLogin: false,
      kakaotoken: '',
    }
  }

  SetStater = key => {
    return function(e) {
      const fishstate = {}
      this.state[key] = e.target.value
      this.setState(fishstate)
    }.bind(this)
  }

  onBtnClick = () => {
    this.state.isClicked === false
      ? this.setState({ isClicked: true, keepLogin: true })
      : this.setState({ isClicked: false, keepLogin: false })
  }

  toSignUp = () => {
    this.props.history.push('/SignUp')
  }

  fetcherwokeep = () => {
    fetch('http://52.79.185.94:8000/user/sign-in', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.token) {
          sessionStorage.setItem('fishing_temp', response.token)
          alert('Welcome to We-Fish!')
          this.props.history.push('/home')
        }
      })
  }

  fetcherwkeep = () => {
    fetch('http://52.79.185.94:8000/user/sign-in', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.token) {
          localStorage.setItem('fishing_keep', response.token)
          alert('Welcome to We-Fish!')
          this.props.history.push('/home')
        }
      })
  }

  kakaobutton = () => {
    Kakao.Auth.login({
      success: authObj => {
        console.log(authObj)
        this.setState({
          kakaotoken: authObj.access_token,
        })
        fetch('http://52.78.241.65:8000/user/kakao', {
          method: 'POST',
          headers: { Authorization: this.state.kakaotoken },
          body: JSON.stringify({
            email: this.state.id,
            postcode: this.state.postcode,
            address: this.state.address,
            detailed_address: this.state.address_detail,
          }),
        }).then(response => {
          console.log(response)
          if (response.status === 400) {
            alert(
              'WeFish 비회원 입니다! E-mail 과 주소 입력만으로 간단히 가입하세요!',
            )
            this.props.history.push('/signup')
          } else if (response.status === 200) {
            alert('Welcome to WeFish! 회 많이 드세욥!')
            this.props.history.push('/home')
          }
        })
      },
    })
  }

  render() {
    return (
      <Layout>
        <>
          <div className="loginContainer">
            <div className="loginInput">
              <section className="userauthen">
                <form className="formLogin">
                  <input
                    className="loginID"
                    placeholder="이메일"
                    onChange={this.SetStater('id')}
                  />
                  <input
                    className="loginPW"
                    placeholder="비밀번호(8-16자리 영문,숫자 조합)"
                    type="password"
                    onChange={this.SetStater('pw')}
                  />
                  <section className="sectionAuthen">
                    <div className="checkboxwrap">
                      <div className="checkbox">
                        <div>
                          {this.state.isClicked === false ? (
                            <div className="checkbox">
                              <input
                                className="checkboxinput"
                                type="checkbox"
                              />
                              <span
                                className="checkboxbtn"
                                onClick={this.onBtnClick}
                              />
                            </div>
                          ) : (
                            <div className="checkbox">
                              <input
                                className="checkboxinput"
                                type="checkbox"
                              />
                              <img
                                src={fish}
                                className="checkboxbtnact"
                                onClick={this.onBtnClick}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      <label className="labeltext">로그인 상태 유지하기</label>
                    </div>

                    <div className="loginmidwrap">
                      <div className="findid">We Fish</div>
                      <span className="IDPWLine">|</span>
                      <div className="findpw">We Code</div>
                    </div>
                  </section>
                  {this.state.keepLogin === false ? (
                    <button
                      className="btnLogin"
                      type="button"
                      onClick={this.fetcherwokeep}
                    >
                      로그인하기
                    </button>
                  ) : (
                    <button
                      className="btnLogin"
                      type="button"
                      onClick={this.fetcherwkeep}
                    >
                      로그인하기
                    </button>
                  )}
                  <a className="kakaologinbtn" onClick={this.kakaobutton}>
                    <img alt="temp" className="imgfish" src={fish} />
                    카카오톡으로 로그인하기
                  </a>
                </form>
                <p className="signuplink">
                  오늘회가 처음이신가요?
                  <a className="signupclick" onClick={this.toSignUp}>
                    회원가입하기
                  </a>
                </p>
              </section>
            </div>
          </div>
        </>
      </Layout>
    )
  }
}

export default withRouter(Login)
