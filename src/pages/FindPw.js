import React, { Component } from "react"
import { withRouter } from "react-router"

class FindPw extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pw: "",
      mode: ""
    }
  }

  render() {
    return (
      <>
        <div>pw 찾으러~</div>
      </>
    )
  }
}

export default withRouter(FindPw)
