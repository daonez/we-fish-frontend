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
      agreement: true,
      totalagreemode: false,
      mustagreemode1: false,
      mustagreemode2: false,
      mktingagreemode: false,
      signupactmode: false
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

  addressLookforChecker = e => {
    this.setState({
      addresslookfor: e.target.value
    });
    console.log(e.target.value);
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

  handleSignUpAddressSearch = e => {
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

  onBtnClickTotal = () => {
    if (this.state.totalagreemode === false) {
      this.setState({
        totalagreemode: true,
        mustagreemode1: true,
        mustagreemode2: true,
        mktingagreemode: true,
        signupactmode: true
      });
    }
    if (this.state.totalagreemode === true) {
      this.setState({
        totalagreemode: false,
        mustagreemode1: false,
        mustagreemode2: false,
        mktingagreemode: false,
        signupactmode: false
      });
    }
  };

  onBtnClickMust1 = () => {
    if (this.state.mustagreemode1 === false) {
      this.setState({
        mustagreemode1: true
      });
    }
    if (this.state.mustagreemode1 === true) {
      this.setState({
        mustagreemode1: false
      });
    }
  };

  onBtnClickMust2 = () => {
    if (this.state.mustagreemode2 === false) {
      this.setState({
        mustagreemode2: true
      });
    }
    if (this.state.mustagreemode2 === true) {
      this.setState({
        mustagreemode2: false
      });
    }
  };

  // else {
  //   this.setState({
  //     totalagreemode: "unclicked"
  //   });

  // onAgreeClick = () => {
  //   if (this.state.totalagreemode === "clicked") {
  //     this.setState({
  //       mustagreemode1: true,
  //       mustagreemode2: true,
  //       mktingagreemode: true
  //     });
  //   }
  //   if (this.state.totalagreemode === "unclicked") {
  //     this.setState({
  //       mustagreemode1: false,
  //       mustagreemode2: false,
  //       mktingagreemode: false
  //     });
  //   }
  // };

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
                      &nbsp; 이메일 형식 맞춰라잉 ~ 맘대로 적으면 회 못먹음 ~ ^^
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
              {this.state.addressfindcheck === "unclicked" ? (
                <div>
                  <div className="postaddwrap">
                    <div className="inputpostwrap">
                      <input
                        className="inputpost"
                        placeholder="우편번호"
                        type="text"
                        onChange={this.handleSignUpPostCode}
                      ></input>
                    </div>

                    <div className="inputaddwrap">
                      <input
                        className="inputaddress"
                        placeholder="주소 찾기"
                        type="text"
                        onClick={this.addressFindChecker}
                        onKeyDown={this.addressLookforChecker}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <input
                      className="inputdetailadd"
                      placeholder="상세주소"
                      type="text"
                    ></input>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="postaddwrap">
                    <div className="inputpostwrap">
                      <input
                        className="inputpost"
                        placeholder="우편번호"
                        type="text"
                        onChange={this.handleSignUpPostCode}
                      ></input>
                    </div>

                    <div className="inputaddwrap">
                      <input
                        className="inputaddress"
                        placeholder="주소 찾기"
                        type="text"
                        value={this.state.address}
                        onClick={this.addressFindChecker}
                        onKeyDown={this.addressLookforChecker}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <Postcode></Postcode>
                  </div>

                  <div>
                    <input
                      className="inputdetailadd"
                      placeholder="상세주소"
                      type="text"
                    ></input>
                  </div>
                </div>
              )}

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
                      {this.state.totalagreemode === false ? (
                        <div className="agreediv">
                          <input className="agreeinput" type="checkbox"></input>
                          <span
                            className="agreespan"
                            onClick={this.onBtnClickTotal}
                            oncChange={this.onAgreeClick}
                          ></span>
                        </div>
                      ) : (
                        <div className="agreediv">
                          <input className="agreeinput" type="checkbox"></input>
                          <img
                            src={orange}
                            className="agreespanact"
                            onClick={this.onBtnClickTotal}
                            oncChange={this.onAgreeClick}
                          ></img>
                        </div>
                      )}
                    </label>
                  </article>
                </li>
                <li>
                  {this.state.mustagreemode1 === false ? (
                    <article className="articlewrap">
                      <header className="contentsee">
                        <h1 className="h1font1">
                          이용약관에 동의합니다 (필수)
                        </h1>
                        <button className="articleagreebtn">내용보기</button>
                      </header>
                      <label>
                        <div className="agreediv">
                          <input className="agreeinput" type="checkbox"></input>
                          <span
                            className="agreespan"
                            onClick={this.onBtnClickMust1}
                            onChange={this.onAgreeClick}
                          ></span>
                        </div>
                      </label>
                    </article>
                  ) : (
                    <article className="articlewrap">
                      <header className="contentsee">
                        <h1 className="h1font1">
                          이용약관에 동의합니다 (필수)
                        </h1>
                        <button className="articleagreebtn">내용보기</button>
                      </header>
                      <label>
                        <div className="agreediv">
                          <input className="agreeinput" type="checkbox"></input>
                          <img
                            src={orange}
                            className="agreespanact"
                            onClick={this.onBtnClickMust1}
                          ></img>
                        </div>
                      </label>
                    </article>
                  )}
                </li>
                <li>
                  {this.state.mustagreemode2 === false ? (
                    <article className="articlewrap">
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
                            onClick={this.onBtnClickMust2}
                            onChange={this.onAgreeClick}
                          ></span>
                        </div>
                      </label>
                    </article>
                  ) : (
                    <article className="articlewrap">
                      <header className="contentsee">
                        <h1 className="h1font1">
                          개인정보 수집 및 이용에 동의합니다 (필수)
                        </h1>
                        <button className="articleagreebtn">내용보기</button>
                      </header>
                      <label>
                        <div className="agreediv">
                          <input className="agreeinput" type="checkbox"></input>
                          <img
                            src={orange}
                            className="agreespanact"
                            onClick={this.onBtnClickMust2}
                          ></img>
                        </div>
                      </label>
                    </article>
                  )}
                </li>
                <li>
                  {this.state.mktingagreemode === false ? (
                    <article className="articlewrap">
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
                            onChange={this.onAgreeClick}
                          ></span>
                        </div>
                      </label>
                    </article>
                  ) : (
                    <article className="articlewrap">
                      <header className="contentsee">
                        <h1 className="h1font1">
                          마케팅 정보 수신에 동의합니다 (선택)
                        </h1>
                      </header>
                      <label>
                        <div className="agreediv">
                          <input className="agreeinput" type="checkbox"></input>
                          <img
                            src={orange}
                            className="agreespanact"
                            onClick={this.onBtnClick}
                          ></img>
                        </div>
                      </label>
                    </article>
                  )}
                </li>
              </ul>
            </section>
            {this.state.signupactmode === false ? (
              <button
                className="signup"
                type="button"
                value="회원가입"
                // onClick={this.signUpFetch}
              >
                회원가입
              </button>
            ) : (
              <button
                className="signupact"
                type="button"
                value="회원가입"
                onClick={this.signUpFetch}
              >
                회원가입
              </button>
            )}
          </form>
        </section>
      </>
    );
  }
}

export default SignUp;
