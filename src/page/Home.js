import React, { Component } from 'react';
import Nav from '../component/nav/Nav'
import NavSideBar from '../component/nav/NavSideBar/NavSideBar'
import NavSideBarLogin from '../component/nav/NavSideBar/NavSideBarLogin'
import Mypage from '../../src/component/nav/NavSideBar/NavSideBarChild/MyPage'

class Home extends Component {
    render() {
        return (
            <div>
                <Nav/>
            </div>
        );
    }
}

export default Home;