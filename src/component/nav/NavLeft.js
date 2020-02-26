import React, { Component } from 'react'
import "./Nav.scss";
import threebar from "../../img/threebar.svg";
import logo from "../../img/logotext.png";

class NavLeft extends Component {
    render() {
        return (
            <div>
                <div className="headerLogo">
                    <div className="btn">
                        <button onClick={this.props.handleChange} className="btn_menu_aside" type="button"> <img src={threebar} alt="bar"/></button>   
                    </div>    
                    <h1>
                        <img className="logo"src={logo} alt="logo"/>
                    </h1>         
                </div>    
            </div>
        );
    }
}

 export default NavLeft;
