import React, { Component } from "react"
import { withRouter } from "react-router"
import "../styles/findid.scss"

class FindId extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: "",
      mode: ""
    }
  }

  render() {
    return (
      <>
        <div className="findidcontainer">
          <div className="findidh1div">
            <h1 className="findidh1">계정 찾기</h1>
          </div>
          <div className="findidsubcontainer">
            <div className="findidnamediv">
              <input className="findidname" type="text" placeholder="이름" />
            </div>
            <div className="findmobilenumdiv">
              <input
                className="findidmobilenum"
                type="text"
                placeholder="핸드폰 번호  -  제외하고 넣어주세요"
              />
            </div>
            <div className="findidbtndiv">
              <button className="findidbtn">아이디 찾기</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(FindId)
