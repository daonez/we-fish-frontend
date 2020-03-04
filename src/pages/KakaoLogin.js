import React, { Component } from "react"
import Kakao from "kakaojs"

class KakaoLogin extends Component {
  componentDidMount() {
    console.log("hello-------")
    Kakao.init("e3e82dffc2b3f62d521ecdb7a1954e17")
    // console.log(Kakao)
    Kakao.Auth.createLoginButton({
      container: "#kakao-login-btn",
      success(authObj) {
        console.log(JSON.stringify(authObj))
      },
      fail(err) {
        console.log(JSON.stringify(err))
      }
    })
  }

  render() {
    return (
      <div>
        <a id="kakao-login-btn" />
      </div>
    )
  }
}

export default KakaoLogin
