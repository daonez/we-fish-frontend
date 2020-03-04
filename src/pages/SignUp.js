import React, { Component } from "react"
import "../styles/signup.scss"
import Kakao from "kakaojs"
import DaumPostcode from "react-daum-postcode"
import fish from "../images/animal.svg"

class SignUp extends Component {
  componentDidMount() {
    Kakao.init("e3e82dffc2b3f62d521ecdb7a1954e17")
  }

  constructor() {
    super()

    this.state = {
      id: "",
      emailformcheck: true,
      pw: "",
      pwformcheck: true,
      pwc: "",
      pwccheck: true,
      name: "",
      postcode: "",
      addressfindcheck: false,
      address: "",
      address_detail: "",
      mobile: "",
      mobileformcheck: true,
      veri_code: "",
      agreement: false,
      totalagreemode: false,
      mustagreemode1: false,
      mustagreemode2: false,
      mktingagreemode: false,
      signupactmode: false,
      totaluserinfo: false,
      authenclick: true
    }
  }

  SetStater = key => {
    return function(e) {
      const fishstate = {}
      this.state[key] = e.target.value
      this.setState(fishstate)
    }.bind(this)
  }

  // handleInput = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  emailFormChecker = e => {
    if (e.target.value.includes("@", ".com")) {
      this.setState({
        emailformcheck: true,
        id: e.target.value
      })
    } else {
      this.setState({
        emailformcheck: false,
        id: e.target.value
      })
    }
  }

  passwordFormChecker = e => {
    if (e.target.value.length >= 6) {
      this.setState({
        pwformcheck: true,
        pw: e.target.value
      })
    }
    if (e.target.value.length < 6) {
      this.setState({
        pwformcheck: false,
        pw: e.target.value
      })
    }
  }

  pwcChecker = e => {
    if (this.state.pw !== e.target.value) {
      this.setState({
        pwccheck: false,
        pwc: e.target.value
      })
    }
    if (this.state.pw === e.target.value) {
      this.setState({
        pwccheck: true,
        pwc: e.target.value
      })
    }
  }

  mobileFormChecker = e => {
    if (!e.target.value.includes("-")) {
      this.setState({
        mobileformcheck: true,
        mobile: e.target.value
      })
    }
    if (e.target.value.includes("-")) {
      this.setState({
        mobileformcheck: false,
        mobile: e.target.value
      })
    }
  }

  addressFindChecker = () => {
    if (this.state.addressfindcheck === false) {
      this.setState({
        addressfindcheck: true
      })
    }
    if (this.state.addressfindcheck === true) {
      this.setState({
        addressfindcheck: false
      })
    }
  }

  handleAddress = data => {
    let fullAddress = data.address
    const extraAddress = data.zonecode

    if (data.addressType === "R") {
      fullAddress += data.buildingName
    }
    this.setState({
      address: fullAddress,
      postcode: extraAddress
    })
    console.log(this.state.searchAddress) // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }

  signUpFetcher = () => {
    fetch("http://10.58.6.8:8000/user/sign-up", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
        name: this.state.name,
        postcode: this.state.postcode,
        address: this.state.address,
        mobile: this.state.mobile,
        agreement: this.state.agreement
      })
    }).then(response => {
      console.log(response)
      if (response.status === 200) {
        this.props.history.push("/home")
      }
    })
  }

  authenFetcher = () => {
    fetch("http://10.58.5.89:8000/user/verify", {
      method: "POST",
      body: JSON.stringify({
        mobile: this.state.mobile
      })
    })
      .then(response => {
        console.log(response)
        return response
      })
      .then(response => {
        if (response.status === 200) {
          this.setState({
            authenclick: true
          })
        }
      })
  }

  authenPoster = () => {
    fetch("http://10.58.5.89:8000/user/confirm", {
      method: "POST",
      body: JSON.stringify({
        mobile: this.state.mobile,
        code: this.state.veri_code
      })
    })
      .then(response => {
        console.log(response)
        return response
      })
      .then(response => {
        if (response.status === 200) {
          this.setState({
            authenclick: true
          })
        }
      })
  }

  onBtnClickTotal = () => {
    if (this.state.totalagreemode === false) {
      this.setState({
        totalagreemode: true,
        mustagreemode1: true,
        mustagreemode2: true,
        mktingagreemode: true,
        signupactmode: true,
        agreement: true
      })
    }
    if (this.state.totalagreemode === true) {
      this.setState({
        totalagreemode: false,
        mustagreemode1: false,
        mustagreemode2: false,
        mktingagreemode: false,
        signupactmode: false,
        agreement: false
      })
    }
  }

  onBtnClickMust1 = () => {
    if (this.state.mustagreemode1 === false) {
      this.setState({
        mustagreemode1: true
      })
    }
    if (
      this.state.mustagreemode1 === false &&
      (this.state.mustagreemode2 && this.state.mktingagreemode) === true
    ) {
      this.setState({
        totalagreemode: true,
        mustagreemode1: true,
        agreement: true,
        signupactmode: true
      })
    }
    if (
      this.state.mustagreemode1 &&
      this.state.mustagreemode2 &&
      this.state.totalagreemode &&
      this.state.mktingagreemode === true
    ) {
      this.setState({
        mustagreemode1: false,
        totalagreemode: false,
        signupactmode: false
      })
    }
    if (this.state.mustagreemode1 === true) {
      this.setState({
        mustagreemode1: false
      })
    }
  }

  onBtnClickMust2 = () => {
    if (this.state.mustagreemode2 === false) {
      this.setState({
        mustagreemode2: true
      })
    }
    if (
      this.state.mustagreemode2 === false &&
      (this.state.mustagreemode1 && this.state.mktingagreemode) === true
    ) {
      this.setState({
        totalagreemode: true,
        mustagreemode2: true,
        agreement: true,
        signupactmode: true
      })
    }
    if (
      this.state.mustagreemode1 &&
      this.state.mustagreemode2 &&
      this.state.totalagreemode &&
      this.state.mktingagreemode === true
    ) {
      this.setState({
        mustagreemode2: false,
        totalagreemode: false,
        signupactmode: false
      })
    }
    if (this.state.mustagreemode2 === true) {
      this.setState({
        mustagreemode2: false
      })
    }
  }

  onBtnClickMkting = () => {
    if (this.state.mktingagreemode === false) {
      this.setState({
        mktingagreemode: true,
        agreement: true
      })
    }
    if (
      this.state.mktingagreemode === false &&
      this.state.mustagreemode1 &&
      this.state.mustagreemode2 === true
    ) {
      this.setState({
        mktingagreemode: true,
        agreement: true,
        totalagreemode: true
      })
    }
    if (this.state.mktingagreemode === true) {
      this.setState({
        mktingagreemode: false,
        totalagreemode: false,
        agreement: false
      })
    }
  }

  totalUserInfoChecker = () => {
    if (
      (this.state.emailformcheck &&
        this.state.pwformcheck &&
        this.state.pwccheck &&
        this.state.mobileformcheck) === true
    ) {
      this.setState({
        totaluserinfo: true
      })
    }
  }

  // handleInput = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  kakaobutton = () => {
    Kakao.Auth.login({
      success: authObj => {
        console.log(authObj)
      },
      fail(err) {
        console.log(JSON.stringify(err))
      }
    })
  }

  render() {
    return (
      <>
        <div className="signupdiv">
          <section className="signupsection">
            <header className="texttop">
              <h1 className="signuptoptxt">
                SNS계정으로도
                <br />
                간편하게 가입할 수 있습니다
              </h1>
            </header>
            <a className="kakaologinbtn" onClick={this.kakaobutton}>
              <img alt="temp" className="imgfish" src={fish} />
              카카오톡으로 로그인하기
            </a>
            <form>
              <section className="sectionupper">
                <h2 className="signupemailtxt">이메일 회원가입</h2>
                {this.state.emailformcheck === false ? (
                  <div>
                    <div>
                      <input
                        placeholder="이메일 주소 입력"
                        type="text"
                        onChange={this.emailFormChecker}
                      />
                    </div>
                    <div className="emailformfalse">
                      <p>&nbsp; 이메일 형식을 맞춰주세요</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>
                      <input
                        placeholder="이메일 주소 입력"
                        type="text"
                        onChange={this.emailFormChecker}
                      />
                    </div>
                  </div>
                )}

                <div>
                  <div>
                    <input
                      placeholder="이름"
                      type="text"
                      onChange={this.SetStater("name")}
                    />
                  </div>
                </div>
                {this.state.pwformcheck === false ? (
                  <div>
                    <div>
                      <input
                        placeholder="비밀번호(6자리 이상)"
                        type="text"
                        onChange={this.passwordFormChecker}
                      />
                    </div>
                    <div className="passwordformfalse">
                      <p>&nbsp; 패스워드 6자 이상!</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>
                      <input
                        placeholder="비밀번호(6자리 이상)"
                        type="text"
                        onChange={this.passwordFormChecker}
                      />
                    </div>
                  </div>
                )}
                {this.state.pwccheck === false ? (
                  <div>
                    <div>
                      <input
                        placeholder="비밀번호 확인"
                        type="text"
                        onChange={this.pwcChecker}
                      />
                    </div>
                    <div className="inputpwcheckfalse">
                      <p>&nbsp; 패스워드 불일치!</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>
                      <input
                        placeholder="비밀번호 확인"
                        type="text"
                        onChange={this.pwcChecker}
                      />
                    </div>
                  </div>
                )}

                {this.state.addressfindcheck === false ? (
                  <div>
                    <div className="postaddwrap">
                      <div className="inputpostwrap">
                        <input
                          className="inputpost"
                          placeholder="우편번호"
                          type="text"
                          value={this.state.postcode}
                          onChange={this.SetStater("postcode")}
                        />
                      </div>

                      <div className="inputaddwrap">
                        <input
                          className="inputaddress"
                          placeholder="주소 찾기"
                          type="text"
                          name="testing"
                          value={this.state.address}
                          onClick={this.addressFindChecker}
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        placeholder="상세주소"
                        type="text"
                        onChange={this.SetStater("address_detail")}
                      />
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
                          value={this.state.postcode}
                        />
                      </div>

                      <div className="inputaddwrap">
                        <input
                          className="inputaddress"
                          placeholder="주소 찾기"
                          type="text"
                          value={this.state.address}
                        />
                      </div>
                    </div>

                    <DaumPostcode
                      onComplete={this.handleAddress}
                      autoClose="true"
                    />
                    <div>
                      <input
                        placeholder="상세주소"
                        type="text"
                        onChange={this.SetStater("address_detail")}
                      />
                    </div>
                  </div>
                )}
                {this.state.mobileformcheck === false ? (
                  <div>
                    <div className="phoneauthenwrap">
                      <div>
                        <input
                          className="phonenum"
                          placeholder="휴대전화번호 ( ' - ' 제외)"
                          type="text"
                          onChange={this.mobileFormChecker}
                        />
                      </div>

                      <div>
                        <button className="authenbtn" type="button">
                          인증번호 받기
                        </button>
                      </div>
                    </div>
                    <div className="phonenumfalse">
                      <p>' - ' 없이 번호만 입력!</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    {this.state.authenclick === false ? (
                      <div className="phoneauthenwrap">
                        <div>
                          <input
                            className="phonenum"
                            placeholder="휴대전화번호 ( ' - ' 제외)"
                            type="text"
                            onChange={this.mobileFormChecker}
                            // onChange={this.totalUserInfoChecker}
                          />
                        </div>
                        <div>
                          <button
                            className="authenbtn"
                            type="button"
                            onClick={this.authenfetcher}
                          >
                            인증번호 받기
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="phoneauthenwrap">
                          <div>
                            <input
                              className="phonenum"
                              placeholder="휴대전화번호 ( ' - ' 제외)"
                              type="text"
                              onChange={this.mobileFormChecker}
                            />
                          </div>
                          <div className="authennumwrap">
                            <div>
                              <button
                                className="authenbtn"
                                type="button"
                                onClick={this.authenFetcher}
                              >
                                인증번호 받기
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="mobileauthenwrap">
                          <input
                            className="authennuminput"
                            placeholder="인증번호 입력"
                            type="text"
                            onChange={this.SetStater("veri_code")}
                            // onClick={this.authenPoster}
                          />
                          <button
                            className="toauthenbtn"
                            onClick={this.authenPoster}
                          >
                            인증하기
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
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
                            <input className="agreeinput" type="checkbox" />
                            <span
                              className="agreespan"
                              onClick={this.onBtnClickTotal}
                            />
                          </div>
                        ) : (
                          <div className="agreediv">
                            <input className="agreeinput" type="checkbox" />
                            <img
                              src={fish}
                              className="agreespanact"
                              onClick={this.onBtnClickTotal}
                            />
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
                            <input className="agreeinput" type="checkbox" />
                            <span
                              className="agreespan"
                              onClick={this.onBtnClickMust1}
                            />
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
                            <input className="agreeinput" type="checkbox" />
                            <img
                              src={fish}
                              className="agreespanact"
                              onClick={this.onBtnClickMust1}
                            />
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
                            <input className="agreeinput" type="checkbox" />
                            <span
                              className="agreespan"
                              onClick={this.onBtnClickMust2}
                            />
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
                            <input className="agreeinput" type="checkbox" />
                            <img
                              src={fish}
                              className="agreespanact"
                              onClick={this.onBtnClickMust2}
                            />
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
                            <input className="agreeinput" type="checkbox" />
                            <span
                              className="agreespan"
                              onClick={this.onBtnClickMkting}
                            />
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
                            <input className="agreeinput" type="checkbox" />
                            <img
                              src={fish}
                              className="agreespanact"
                              onClick={this.onBtnClickMkting}
                            />
                          </div>
                        </label>
                      </article>
                    )}
                  </li>
                </ul>
              </section>
              {(this.state.signupactmode &&
                this.state.mustagreemode1 &&
                this.state.mustagreemode2 &&
                this.state.totaluserinfo &&
                this.state.mktingagreemode === true) |
              ((this.state.mustagreemode1 &&
                this.state.mustagreemode2 &&
                this.state.totaluserinfo) ===
                true) ? (
                <button
                  className="signupact"
                  type="button"
                  onClick={this.signUpFetcher}
                >
                  회원가입
                </button>
              ) : (
                <button className="signup" type="button">
                  회원가입
                </button>
              )}
            </form>
          </section>
        </div>
      </>
    )
  }
}

export default SignUp
