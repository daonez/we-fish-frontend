import React from 'react'
import '../../styles/product.scss'
import dropDownArrow from '../../images/down-chevron.png'

export default class Selector extends React.Component {
  constructor() {
    super()
    this.state = {
      // menu를 false로 하여 보여주지 않게함.
      showMenu: false,
    }
  }

  showMenu = event => {
    event.preventDefault()
    this.setState(
      {
        showMenu: true,
      },
      () => {
        document.addEventListener('click', this.closeMenu)
      },
    )
  }

  closeMenu = event => {
    if (!this.dropDownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu)
      })
    }
  }

  render() {
    return (
      <div className="filterDropdown">
        <button className="dropDown" onClick={this.showMenu}>
          신상품순
          <img src={dropDownArrow} alt="" />
        </button>
        {this.state.showMenu ? (
          <div
            className="dropDown_lists"
            ref={element => {
              this.dropDownMenu = element
            }}
          >
            <ul className="dropDown_lists">
              <li className="dropDown_lists_item">
                <button className="dropDown__button">신상품순</button>
              </li>
              <li className="dropDown_lists_item">
                <button className="dropDown__button">추천순</button>
              </li>
              <li className="dropDown_lists_item">
                <button className="dropDown__button">인기상품순</button>
              </li>
              <li className="dropDown_lists_item">
                <button className="dropDown__button">낮은 가격순</button>
              </li>
              <li className="dropDown_lists_item">
                <button className="dropDown__button">높은 가격순</button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    )
  }
}
