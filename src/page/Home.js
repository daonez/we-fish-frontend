import React, { Component } from "react";
import Nav from "../component/nav/Nav";
import NavSideBar from "../component/nav/NavSideBar/NavSideBar";
import NavSideBarLogin from "../component/nav/NavSideBar/NavSideBarLogin";
import NavMypage from "../component/nav/NavSideBar/NavSideBarChild/NavMyPage";
import NavOrderList from "../component/nav/NavSideBar/NavSideBarChild/NavOrderList";
import NavReview from "../component/nav/NavSideBar/NavSideBarChild/NavReview";
import NavMyPage from "../component/nav/NavSideBar/NavSideBarChild/NavMyPage";

class Home extends Component {
  render() {
    return (
      <div>
        <NavReview />
      </div>
    );
  }
}

export default Home;
