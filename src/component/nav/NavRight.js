import React, { Component } from "react";
import "./Nav.scss";
import dropdown from "../../img/dropdown.png";
import cart from "../../img/cart.png";

export class NavRight extends Component {
  render() {
    return (
      <div>
        <div className="datePicker">
          <button
            onClick={this.props.handleList}
            className="datePickerButton"
            type="button"
          >
            <div className="datePickerButtonDiv">
              <span>25일(화)도착</span>
              <img className="imgim" src={dropdown} alt="dropdown"></img>
            </div>
          </button>
          <div className="goToCartButton">
            <img src={cart} alt="cart"></img>
            <div>0</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavRight;
