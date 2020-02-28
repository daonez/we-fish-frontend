import React, { Component } from "react";
import SectionLeft from "./LayoutLeft";
import Header from "./nav/Nav";
import "../styles/layout.scss";

class Layout extends Component {
  render() {
    return (
      <div className="wrap">
        <SectionLeft />
        <section className="section-right">
          <section className="section-right__main">
            <Header />
            <main>{this.props.children}</main>
          </section>
        </section>
      </div>
    );
  }
}

export default Layout;