import React from "react"
import DaumPostcode from "react-daum-postcode"
import "../styles/signup.scss"

class Postcode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchAddress: ""
    }
  }

  handleAddress = data => {
    let fullAddress = data.address
    const extraAddress = data.zonecode

    if (data.addressType === "R") {
      fullAddress += extraAddress !== "" ? ` (${data.buildingName})` : ""
    }
    this.setState({
      searchAddress: fullAddress,
      searchZonecode: extraAddress
    })
    console.log(this.state.searchAddress) // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }

  render() {
    return (
      <>
        <div>
          <div className="postaddwrap">
            <div className="inputpostwrap">
              <input
                className="inputpost"
                placeholder="우편번호"
                type="text"
                value={this.state.searchZonecode}
              />
            </div>

            <div className="inputaddwrap">
              <input
                className="inputaddress"
                placeholder="주소 찾기"
                type="text"
                value={this.state.searchAddress}
              />
              <button className="DaumApiButton" />
            </div>
          </div>
        </div>
        <DaumPostcode onComplete={this.handleAddress} autoClose="true" />
      </>
    )
  }
}

export default Postcode
