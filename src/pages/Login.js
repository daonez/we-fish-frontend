import React, { Component } from 'react'
import './login.scss'
import { withRouter } from 'react-router'
import Kakao from 'kakaojs'
import CryptoJS from 'crypto-js'
import fish from '../images/animal.svg'

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

  toFindId = () => {
    this.props.history.push('/FindId')
  }

  toFindPw = () => {
    this.props.history.push('/FindPw')
  }

  // fetcher = () => {
  //   fetch('http://52.79.185.94:8000/user/sign-in', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: this.state.id,
  //       password: this.state.pw,
  //     }),
  //   }).then(response => {
  //     console.log(response)
  //     if (response.token) {
  //       localStorage.setItem('fishing', response.token)
  //     }
  //     if (response.status === 200) {
  //       localStorage.setItem('fishing', response.token)
  //       this.props.history.push('/home')
  //     }
  //   })
  // }

  fetcher = () => {
    fetch('http://10.58.1.185:8000/user/sign-in', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    }).then(response => {
      if (response.status === 200) {
        console.log(response.status)
        this.props.history.push('/home')
      }
    })
    // .then(response => {
    //   if (response.token) {
    //     localStorage.setItem('fishing', response.token)
    //   }
    // })
  }
  // .then(response => response.json())

  // response.token && response.status === 200
  //   ? localStorage.setItem('fishing', response.token)
  //     this.props.history.push('/home')
  //   : this.props.history.push('/signup')

  // .then(response => {
  //   if (response.status === 200) {
  //     this.props.history.push('/home')
  //   }

  fetcherwithkeeplogin = () => {
    fetch('http://10.58.1.185:8000/user/sign-in', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    }).then(response => {
      console.log(response)
      if (response.token) {
        localStorage.setItem('fishing', response.token)
      }
    })
  }
  // if (response.status === 200) {
  //       const tobe_enc_id = this.state.id
  //       const tobe_enc_pw = this.state.pw
  //       const pass = 'wefish'
  //       const encrypted_id = CryptoJS.SHA256.encrypt(tobe_enc_id, pass)
  //       const decrypted_id = CryptoJS.SHA256.decrypt(encrypted_id, pass)
  //       console.log(encrypted_id)
  //       console.log(decrypted_id)
  //       const encrypted_pw = CryptoJS.SHA256.encrypt(tobe_enc_pw, pass)
  //       const decrypted_pw = CryptoJS.SHA256.decrypt(encrypted_pw, pass)
  //       console.log(encrypted_pw)
  //       console.log(decrypted_pw)

  //       // 암호화 이전의 문자열은 toString 함수를 사용하여 추출할 수 있다.
  //       const decrypted_id_txt = decrypted_id.toString(CryptoJS.enc.Utf8)
  //       const decrypted_pw_txt = decrypted_pw.toString(CryptoJS.enc.Utf8)
  //       console.log(decrypted_id_txt)
  //       console.log(decrypted_pw_txt)
  //       localStorage.setItem('encrypt_id', encrypted_id)
  //       localStorage.setItem('encrypt_pw', encrypted_pw)
  //     }
  //     this.props.history.push('/home')
  //   })

  // kakaobutton = () => {
  //   Kakao.Auth.login({
  //     success: authObj => {
  //       console.log(authObj)
  //       console.log('a')
  //     },
  //     // fetch('')
  //     fail(err) {
  //       console.log(JSON.stringify(err))
  //     },
  //   })
  // }

  kakaobutton = () => {
    Kakao.Auth.login({
      success: authObj => {
        console.log(authObj)
        this.setState({
          kakaotoken: authObj.access_token,
        })
        fetch('http://52.79.185.94:8000/user/kakao', {
          method: 'POST',
          headers: { Authorization: this.state.kakaotoken },
          body: JSON.stringify({
            email: this.state.id,
            postcode: this.state.postcode,
            address: this.state.address,
            // detailed_address: this.state.address_detail,
          }),
        }).then(response => {
          console.log(response)
          if (response.status === 400) {
            alert(
              'WeFish 비회원 입니다! E-mail 과 주소 입력만으로 간단히 가입하세요!',
            )
            this.props.history.push('/signup')
          }

          if (response.status === 200) {
            alert('Welcome to WeFish! 회 많이 드세욥!')
            this.props.history.push('/home')
          }
        })
      },
    })
  }

  encrpytor = () => {
    const tobe_enc_id = this.state.id
    const pass = 'devdat'
    const encrypted_id = CryptoJS.AES.encrypt(tobe_enc_id, pass)
    const decrypted_id = CryptoJS.HmacSHA256.decrypt(encrypted_id, pass)
    console.log(encrypted_id)
    console.log(decrypted_id)

    // 암호화 이전의 문자열은 toString 함수를 사용하여 추출할 수 있다.
    const decrypted_id_txt = decrypted_id.toString(CryptoJS.enc.Utf8)
    console.log(decrypted_id_txt)
  }

  render() {
    return (
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
                  onChange={this.SetStater('pw')}
                  // onClick={this.encrpytor}
                />
                <section className="sectionAuthen">
                  <div className="checkboxwrap">
                    <div className="checkbox">
                      <div>
                        {this.state.isClicked === false ? (
                          <div className="checkbox">
                            <input className="checkboxinput" type="checkbox" />
                            <span
                              className="checkboxbtn"
                              onClick={this.onBtnClick}
                            />
                          </div>
                        ) : (
                          <div className="checkbox">
                            <input className="checkboxinput" type="checkbox" />
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
                    <div
                      className="findid"
                      // onClick={this.toFindId}
                    >
                      We Fish
                    </div>
                    <span className="IDPWLine">|</span>
                    <div
                      className="findpw"
                      // onClick={this.toFindPw}
                    >
                      We Code
                    </div>
                  </div>
                </section>
                {this.state.keepLogin === false ? (
                  <button
                    className="btnLogin"
                    type="button"
                    onClick={this.fetcher}
                  >
                    로그인하기
                  </button>
                ) : (
                  <button
                    className="btnLogin"
                    type="button"
                    onClick={this.fetcher}
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
    )
  }
}

export default withRouter(Login)
