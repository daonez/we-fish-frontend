import React, { Component } from "react";
import "./Nav.scss";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import NavSideBar from "./NavSideBar/NavSideBar";

class Nav extends Component {
  state = {
    toggle: true,
    transition: "",
    transform: "translateX(0px)",
    switch: true,
    display: "none"
  };
  handleChange = () => {
    ///threebar클릭하면 sidebar나타나고 사라짐.
    if (this.state.toggle) {
      this.setState({
        toggle: false,
        transition: "transform .3s ease-in",
        transform: "translateX(350px)"
      });
    } else if (!this.state.toggle) {
      this.setState({
        toggle: true,
        className: "NavSideBarOff"
      });
    }
  };
  handleChange2 = () => {
    if (!this.state.toggle) {
      this.setState({
        toggle: true,
        className: "NavSideBarBlock",
        transition: "transform .3s ease-in",
        transform: "translateX(0px)"
      });
    }
  };
  handleList = () => {
    if (this.state.switch) {
      this.setState({
        switch: false,
        display: "flex"
      });
    } else if (!this.state.switch) {
      this.setState({
        switch: true,
        display: "none"
      });
    }
<<<<<<< HEAD
    


    render() {
       return (
            <div>
                <div className="Nav">
                    <div onClick={this.handleChange2} className="main">
                        <div className='NavSideBarBlock' style={{transition: this.state.transition, transform: this.state.transform}}>
                            <NavSideBar/> 
                        </div>   
                        <div className="newHeader">
                            <NavLeft
                            handleChange={this.handleChange}/>
                            <div className="newHeaderList">
                                <div>후기많은상품</div>
                                <div>오늘회 꿀조합</div>
                                <div>오늘저녁배송</div>
                                <div>배송확인</div>
                            </div>
                            <NavRight
                            handleList={this.handleList}/>
                        </div>
                        
                        <div style={{display:this.state.display}}className="datePickerList">   
                            <div>26일(수)</div>
                            <div>27일(목)</div>
                            <div>28일(금)</div>
                            <div>29일(토)</div>
                            <div>2일(월)</div>
                        </div>

                    </div>
                </div>
=======
  };
>>>>>>> 25c0fbc0a9f7dea5cd77cc502d2b0c532ea5b8b4

  render() {
    return (
      <div>
        <div className="Nav">
          <div onClick={this.handleChange2} className="main">
            <div className="NSBB"></div>
            <div
              className="NavSideBarBlock"
              style={{
                transition: this.state.transition,
                transform: this.state.transform
              }}
            >
              <NavSideBar />
            </div>
            <div className="newHeader">
              <NavLeft handleChange={this.handleChange} />
              <NavRight handleList={this.handleList} />
            </div>
            <div
              style={{ display: this.state.display }}
              className="datePickerList"
            >
              <div>26일(수)</div>
              <div>27일(목)</div>
              <div>28일(금)</div>
              <div>29일(토)</div>
              <div>2일(월)</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
