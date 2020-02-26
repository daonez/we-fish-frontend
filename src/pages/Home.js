import React, { Component } from "react";
import "../styles/home.scss";
import SectionLeft from "./SectionLeft";


class Home extends Component {
  render() {
    return (
      <div className="wrap">
        <SectionLeft />
        <section className="section-right">
          <section className="section-right__main"></section>
        </section>
      </div>
    );
  }
}

export default Home;
