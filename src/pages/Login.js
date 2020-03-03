import React, { Component } from "react"
import "../styles/login.scss"
import { withRouter } from "react-router"
import orange from "../images/animal.svg"

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mode: "unclicked",
      id: "",
      pw: ""
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
    if (this.state.mode === "unclicked") {
      this.setState({
        mode: "clicked"
      })
    } else {
      this.setState({
        mode: "unclicked"
      })
    }
  }

  toSignUp = () => {
    this.props.history.push("/signup")
  }

  fetcher = () => {
    fetch("http://10.58.6.8:8000/user/sign-in", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw
      })
    })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(response => {
        if (response.token) {
          localStorage.setItem("fish", response.token)
        }
      })
      .then(response => {
        if (response.status === 200) {
        }
        this.props.history.push("/home")
      })
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
                  onChange={this.SetStater("id")}
                />
                <input
                  className="loginPW"
                  placeholder="비밀번호(8-16자리 영문,숫자 조합)"
                  onChange={this.SetStater("pw")}
                />
                <section className="sectionAuthen">
                  <div className="checkboxwrap">
                    <div className="checkbox">
                      <div>
                        {this.state.mode === "unclicked" ? (
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
                              src={orange}
                              className="checkboxbtnact"
                              onClick={this.onBtnClick}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <label className="labeltext">로그인 상태 유지하기</label>
                  </div>

                  <div>
                    <a className="findid">아이디 찾기</a>
                    <span className="IDPWLine">|</span>
                    <a className="findpw">비밀번호 찾기</a>
                  </div>
                </section>
                <button
                  className="btnLogin"
                  type="button"
                  onClick={this.fetcher}
                >
                  로그인하기
                </button>
                <a className="kakaologinbtn">
                  <img alt="temp" className="imgorange" src={orange} />
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
