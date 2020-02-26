import React, { Component } from "react";
import "../styles/signup.scss";
import orange from "../images/animal.svg";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: "a"
    };
  }

  render() {
    return (
      <>
        <section className="signupsection">
          <header class="texttop">
            <h1>
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
              {/* <input></input> */}
              <div>
                <div>
                  <input
                    className="inputemail"
                    placeholder="이메일 주소 입력"
                    type="text"
                  ></input>
                </div>
              </div>
              <div>
                <div>
                  <input
                    className="inputname"
                    placeholder="이름"
                    type="text"
                  ></input>
                </div>
              </div>
              <div>
                <div>
                  <input
                    className="inputpw"
                    placeholder="비밀번호(6자리 이상)"
                    type="text"
                  ></input>
                </div>
              </div>
              <div>
                <div>
                  <input
                    className="inputpwcheck"
                    placeholder="비밀번호 확인"
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="postaddwrap">
                <div className="inputpostwrap">
                  <input
                    className="inputpost"
                    placeholder="우편번호"
                    type="text"
                  ></input>
                </div>
                <div className="inputaddwrap">
                  <input
                    className="inputaddress"
                    placeholder="주소 찾기"
                    type="text"
                  ></input>
                </div>
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
                  <input
                    className="phonenum"
                    placeholder="휴대전화번호"
                    type="text"
                  ></input>
                </div>
                <div>
                  <button className="authenbtn" type="button">
                    인증번호 받기
                  </button>
                </div>
              </div>
              <p className="under14txt">
                만 14세 이상 가입 가능합니다.
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
                    <label className="agreelabel">
                      <div>
                        <input
                          className="agreecheckbox"
                          type="checkbox"
                        ></input>
                        <span></span>
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
                      <div>
                        <input type="checkbox"></input>
                        <span></span>
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
                      <button className="personalagreebtn">내용보기</button>
                    </header>
                    <label>
                      <div>
                        <input input type="checkbox"></input>
                        <span></span>
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
                      <div>
                        <input type="checkbox"></input>
                        <span></span>
                      </div>
                    </label>
                  </article>
                </li>
              </ul>
            </section>
            <input className="signup" type="submit" value="회원가입"></input>
          </form>
        </section>
      </>
    );
  }
}

export default SignUp;
