import React, { Component } from "react"
import SectionLeft from "./LayoutLeft"
import Header from "./nav/Nav"
import NavFooter from "./navAdd/NavFooter"
import SlideShow from "./navAdd/Slideshow"
import "../styles/layout.scss"

class Layout extends Component {
  render() {
    return (
      <div className="wrap">
        <SectionLeft />
        <section className="section-right">
          <section className="section-right__main">
            <Header />
            <SlideShow />
            <main>{this.props.children}</main>
          </section>
          <NavFooter />
        </section>
      </div>
    )
  }
}

export default Layout
