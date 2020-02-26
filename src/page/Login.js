import React, { Component } from "react";
import "../styles/login.scss";
import orange from "/home/dev_dat/wecode/we-fish-frontend/src/images/animal.svg";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "unclicked",
      id:"",
      pw:""
    };
  }

  onBtnClick = e => {
    if (this.state.mode === "unclicked") {
      this.setState({
        mode: "clicked"
      });
    } else {
      this.setState({
        mode: "unclicked"
      });
    }
  };

  handleSignID = (e) => {
    this.setState({
      id : e.target.value
    })
    console.log(this.state.id)

  }

  handleSignPW = (e) => {
    this.setState({
      pw : e.target.value
    })
    console.log(this.state.pw)
  }

  fetcher = () => {
    fetch('http://10.58.2.98:8000/user/sign-in', {
     method: 'POST',
     headers: {'Content-type' : 'application/json'},
     body: JSON.stringify({
    'email': this.state.id,
    'password': this.state.pw
      })
    })
      .then(response => { 
        console.log(response)
        return response.json();
    })
    .then(response => { 
        console.log(response)
        if (response.token) {
            console.log(response)
            localStorage.setItem('fish', response.token);
            
        }
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
                  onChange={this.handleSignID}
                /> {/*box1*/}
                <input
                  className="loginPW"
                  placeholder="비밀번호(8-16자리 영문,숫자 조합)"
                  onChange={this.handleSignPW}
                /> {/*box2*/}
                
                <section className="sectionAuthen">
                  <div className="checkboxwrap">
                    {/*box3-1*/}
                    <div className="checkbox">
                      <div>
                        {this.state.mode === "unclicked" ? (
                          <div className="checkbox">
                            <input
                              className="checkboxinput"
                              type="checkbox"
                            ></input>
                            <span
                              className="checkboxbtn"
                              onClick={this.onBtnClick}
                            ></span>
                          </div>
                        ) : (
                          <div className="checkbox">
                            <input
                              className="checkboxinput"
                              type="checkbox"
                            ></input>
                            <img
                              src={orange}
                              className="checkboxbtnact"
                              onClick={this.onBtnClick}
                            ></img>
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
                <input
                  className="btnLogin"
                  type="submit"
                  value="로그인하기"
                  onChange={this.fetcher}
                ></input>
                <a className="kakaologinbtn">
                  <img alt="temp" className="imgorange" src={orange} />
                  {/* <span className="kakaobtnimg"></span> */}
                  카카오톡으로 로그인하기
                </a>
              </form>
              <p className="signuplink">
                오늘회가 처음이신가요?
                <a className="signupclick" href="./SignUp">
                  회원가입하기
                </a>
              </p>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
