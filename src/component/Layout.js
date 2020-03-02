/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import SectionLeft from './LayoutLeft'
import Header from './nav/Nav'
import '../styles/layout.scss'

class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="wrap">
        <SectionLeft />
        <section className="section-right">
          <section className="section-right__main">
            {/* <Header /> */}
            <main>{children}</main>
          </section>
        </section>
      </div>
    )
  }
}

export default Layout
