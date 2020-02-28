import React, { Component } from "react";
import "../styles/signup.scss";
import orange from "../images/animal.svg";
import Postcode from "./DaumSearch";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      emailformcheck: true,
      id: "",
      pwformcheck: true,
      pw: "",
      pwc: "",
      name: "",
      postcode: "",
      addressfindcheck: "unclicked",
      address: "",
      detailed_address: true,
      mobile: "",
      agreement: true
    };
  }

  emailFormChecker = e => {
    if (e.target.value.includes("@")) {
      this.setState({
        emailformcheck: true
      });
    }
    if (!e.target.value.includes("@")) {
      this.setState({
        emailformcheck: false
      });
    }
  };

  passwordFormChecker = e => {
    if (e.target.value.length >= 6) {
      this.setState({
        pwformcheck: true
      });
    }
    if (e.target.value.length < 6) {
      this.setState({
        pwformcheck: false
      });
    }
  };

  addressFindChecker = e => {
    console.log("a");
    if (this.state.addressfindcheck === "unclicked") {
      this.setState({
        addressfindcheck: "clicked"
      });
    }
    if (this.state.addressfindcheck === "clicked") {
      this.setState({
        addressfindcheck: "unclicked"
      });
    }
  };

  handleSignUpID = e => {
    this.setState({
      id: e.target.value
    });
  };

  handleSignUpPW = e => {
    this.setState({
      pw: e.target.value
    });
  };

  handleSignUpPWC = e => {
    this.setState({
      pwc: e.target.value
    });
  };

  handleSignUpName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSignUpPostCode = e => {
    this.setState({
      postcode: e.target.value
    });
  };

  handleSignUpAddress = e => {
    this.setState({
      address: e.target.value
    });
  };

  handleSignUpMobile = e => {
    this.setState({
      mobile: e.target.value
    });
  };

  signUpFetch = () => {
    fetch("http://10.58.6.8:8000/user/sign-up", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
        name: this.state.name,
        postcode: this.state.postcode,
        address: this.state.address,
        mobile: this.state.mobile
        // agreement: this.state.agreement
      })
    });
  };

  render() {
    return (
      <>
        <section className="signupsection">
          <header class="texttop">
            <h1 className="signuptoptxt">
              SNS계정으로도
              <br />
              간편하게 가입할 수 있습니다
            </h1>
          </header>
          <a className="kakaologinbtn">
            <img alt="temp" className="imgorange" src={orange} />
            {/* <span className="kakaobtnimg"></span> */}
            카카오톡으로 로그인하기
          </a>
          <form>
            <section>
              <h2 className="signupemailtxt">이메일 회원가입</h2>
              {this.state.emailformcheck === false ? (
                <div>
                  <div>
                    <input
                      className="inputemail"
                      placeholder="이메일 주소 입력"
                      type="text"
                      // onChange={this.handleSignUpID}
                      onChange={this.emailFormChecker}
                    ></input>
                  </div>
                  <div className="emailformfalse">
                    <p>
                      &nbsp; 이메일 형식 맞춰라잉 ~ 거짓말 하면 혼납니다 ~ ^^
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    <input
                      className="inputemail"
                      placeholder="이메일 주소 입력"
                      type="text"
                      // onChange={this.handleSignUpID}
                      onChange={this.emailFormChecker}
                    ></input>
                  </div>
                </div>
              )}

              <div>
                <div>
                  <input
                    className="inputname"
                    placeholder="이름"
                    type="text"
                    onChange={this.handleSignUpName}
                  ></input>
                </div>
              </div>
              {this.state.pwformcheck === false ? (
                <div>
                  <div>
                    <input
                      className="inputpw"
                      placeholder="비밀번호(6자리 이상)"
                      type="text"
                      // onChange={this.handleSignUpPW}
                      onChange={this.passwordFormChecker}
                    ></input>
                  </div>
                  <div className="passwordformfalse">
                    <p>&nbsp; 패스워드도 6자 이상 요건 지켜주고 ~ ^^</p>
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    <input
                      className="inputpw"
                      placeholder="비밀번호(6자리 이상)"
                      type="text"
                      // onChange={this.handleSignUpPW}
                      onChange={this.passwordFormChecker}
                    ></input>
                  </div>
                </div>
              )}
              <div>
                <div>
                  <input
                    className="inputpwcheck"
                    placeholder="비밀번호 확인"
                    type="text"
                    onChange={this.handleSignUpPWC}
                  ></input>
                </div>
              </div>
              <div className="postaddwrap">
                <div className="inputpostwrap">
                  <input
                    className="inputpost"
                    placeholder="우편번호"
                    type="text"
                    onChange={this.handleSignUpPostCode}
                  ></input>
                </div>
                {this.state.addressfindcheck === "unclicked" ? (
                  <div>
                    <div className="inputaddwrap">
                      <button
                        className="inputaddress"
                        placeholder="주소 찾기"
                        type="text"
                        onClick={this.addressFindChecker}
                      ></button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="inputaddwrap">
                      <input
                        className="inputaddress"
                        placeholder="주소 찾기"
                        type="text"
                        onClick={this.addressFindChecker}
                      ></input>
                      <div>
                        <Postcode onClick={this.addressFindChecker} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div>
                  <input
                    className="inputdetailadd"
                    placeholder="상세주소"
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="phoneauthenwrap">
                <div>
                  {/* 휴대폰 번호만 넘기자  */}
                  <input
                    className="phonenum"
                    placeholder="휴대전화번호 ( ' - ' 제외)"
                    type="text"
                    onChange={this.handleSignUpMobile}
                  ></input>
                </div>
                <div>
                  <button className="authenbtn" type="button">
                    인증번호 받기
                  </button>
                </div>
              </div>
              <p className="under14txt">
                만 14세 이상 가입 가능합니다. &nbsp;&nbsp;
                <span>내용보기</span>
              </p>
            </section>
            <section className="sectionbottom">
              <h2 className="articleagree">약관 전체동의</h2>
              <ul className="articlelist">
                <li>
                  <article className="articlewrap">
                    <header>
                      <h1 className="h1font1">전체 동의하기</h1>
                    </header>
                    <label>
                      <div className="agreediv">
                        <input className="agreeinput" type="checkbox"></input>
                        <span
                          className="agreespan"
                          onClick={this.onBtnClick}
                        ></span>
                      </div>
                    </label>
                  </article>
                </li>
                <li>
                  <article className="agreemust">
                    <header className="contentsee">
                      <h1 className="h1font1">이용약관에 동의합니다 (필수)</h1>
                      <button className="articleagreebtn">내용보기</button>
                    </header>
                    <label>
                      <div className="agreediv">
                        <input className="agreeinput" type="checkbox"></input>
                        <span
                          className="agreespan"
                          onClick={this.onBtnClick}
                        ></span>
                      </div>
                    </label>
                  </article>
                </li>
                <li>
                  <article className="agreemust">
                    <header className="contentsee">
                      <h1 className="h1font1">
                        개인정보 수집 및 이용에 동의합니다 (필수)
                      </h1>
                      <button className="articleagreebtn">내용보기</button>
                    </header>
                    <label>
                      <div className="agreediv">
                        <input className="agreeinput" type="checkbox"></input>
                        <span
                          className="agreespan"
                          onClick={this.onBtnClick}
                        ></span>
                      </div>
                    </label>
                  </article>
                </li>
                <li>
                  <article className="agreemust">
                    <header className="contentsee">
                      <h1 className="h1font1">
                        마케팅 정보 수신에 동의합니다 (선택)
                      </h1>
                    </header>
                    <label>
                      <div className="agreediv">
                        <input className="agreeinput" type="checkbox"></input>
                        <span
                          className="agreespan"
                          onClick={this.onBtnClick}
                        ></span>
                      </div>
                    </label>
                  </article>
                </li>
              </ul>
            </section>
            <button
              className="signup"
              type="button"
              value="회원가입"
              onClick={this.signUpFetch}
            >
              회원가입
            </button>
          </form>
        </section>
      </>
    );
  }
}

export default SignUp;
