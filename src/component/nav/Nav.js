import React, { Component } from 'react'
import './Nav.scss'
import { withRouter, Link } from 'react-router-dom'
import NavSideBar from './NavSideBar/NavSideBar'
import TextLogo from '../../img/logotext.png'
import ThreeBar from '../../img/threebar.svg'
import DownArrow from '../../img/dropdown.png'
import Cart from '../../img/cart.png'
import Slideshow from '../navAdd/Slideshow'

class Nav extends Component {
  state = {
    toggle: true,
    transition: '',
    transform: 'translateX(0px)',
    switch: true,
    display: 'none',
  }

  handleChange = () => {
    if (this.state.toggle) {
      this.setState(
        {
          toggle: false,
          transition: 'transform .3s ease-in',
          transform: 'translateX(410px)',
        },
        () => {
          console.log(this.state)
        },
      )
    } else if (!this.state.toggle) {
      this.setState({
        toggle: true,
        transition: 'transform .3s ease-in',
        transform: 'translateX(0px)',
      })
    }
  }

  handleChange1 = () => {
    if (!this.state.toggle) {
      this.setState({
        toggle: true,
        transition: 'transform .3s ease-in',
        transform: 'translateX(0px)',
      })
    }
  }

  handleDisplay = () => {
    // 클릭하면 날짜선택하는 창이 나타나고 다시누르면 창이 사라진다
    if (this.state.switch) {
      this.setState({
        switch: false,
        display: 'block',
      })
    } else if (!this.state.switch) {
      this.setState({
        switch: true,
        display: 'none',
      })
    }
  }

  handleDisplayOff = () => {
    // 클릭하면 날짜선택하는 창이 사라진다.
    if (!this.state.switch) {
      this.setState({
        switch: true,
        display: 'none',
      })
    }
  }

  goToWhere() {
    this.props.history.push('/cart')
  }

  goToHome() {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="Nav">
        <div className="nmain" onClick={this.handleChange1}>
          <div className="nmain_right">
            <img
              className="right"
              src={ThreeBar}
              alt="bar"
              onClick={this.handleChange}
            />
            <img
              className="left"
              src={TextLogo}
              alt="Textlogo"
              onClick={this.goToHome.bind(this)}
            />
          </div>
          <div className="nmain_left">
            <div>
              <span onClick={this.handleDisplay}>28일(토)도착</span>
              <img
                className="right"
                onClick={this.handleDisplay}
                src={DownArrow}
              />
              <img
                className="left"
                src={Cart}
                onClick={this.goToWhere.bind(this)}
              />
              <strong className="picker">0</strong>
            </div>
          </div>
        </div>
        <div className="nav_bar" />
        <div className="nav_bottom">
          <Link to="/mostreviewpage">
            <div>후기많은상품</div>
          </Link>
          <div>오늘회 꿀조합</div>
          <Link to="/tonightdelivery">
            <div>오늘저녁배송</div>
          </Link>
          <Link to="/delivery">
            <div>배송확인</div>
          </Link>
        </div>
        <div className="datePickerList" style={{ display: this.state.display }}>
          <div>1일(일)</div>
          <div>2일(월)</div>
          <div>3일(화)</div>
          <div>4일(수)</div>
          <div>5일(목)</div>
        </div>
        <div
          className="navsidebarDiv"
          style={{
            transition: this.state.transition,
            transform: this.state.transform,
          }}
        >
          <NavSideBar />
        </div>
        <div className="navChildren">{this.props.children}</div>
      </div>
    )
  }
}

export default withRouter(Nav)
