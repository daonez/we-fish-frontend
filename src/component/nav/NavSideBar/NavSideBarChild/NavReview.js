import React, { Component } from 'react'
import './NavReview.scss'
import { FaSearch } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';

class NavReview extends Component {
    render() {
        return (
            <div className="NavReview">
                <div className="NavReviewSearch">
                    <div>
                        <input></input>
                    </div>
                    <div>
                        <button className="faSearch"><FaSearch size="22"/></button>
                    </div>
                    <div>
                        <button className="faPencil"><FaPen size="22"/></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavReview
