import React, { Component } from "react"
import Nav from "../component/nav/Nav"
import NavSideBar from "../component/nav/NavSideBar/NavSideBar"
import NavSideBarLogin from "../component/nav/NavSideBar/NavSideBarLogin"
import NavMypage from "../component/nav/NavSideBar/NavSideBarChild/NavMyPage"
import NavOrderList from "../component/nav/NavSideBar/NavSideBarChild/NavOrderList"
import NavReview from "../component/nav/NavSideBar/NavSideBarChild/NavReview"
import NavMyPage from "../component/nav/NavSideBar/NavSideBarChild/NavMyPage"
import "../styles/layout.scss"
import SectionLeft from "../component/LayoutLeft"
import Slideshow from "../component/navAdd/Slideshow"
import NavFooter from "../component/navAdd/NavFooter"
import NavCart from "../component/navAdd/NavCart"
import Login from "./Login"
import SignUp from "./SignUp"

class LayoutPrac extends Component {
  render() {
    return (
      <>
        <div>
          <Nav>
            <Login />
            {/* <SignUp /> */}

            <NavFooter />
          </Nav>
        </div>
        <div className="wrap">
          <SectionLeft />
          <section className="section-right">
            <section className="section-right__main" />
          </section>
        </div>
      </>
    )
  }
}

export default LayoutPrac
