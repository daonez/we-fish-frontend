import React, { Component } from 'react'
import './NavReview.scss'
import { FaSearch } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

class NavReview extends Component {
    state={
        profiles:[]
    }

    componentDidMount(){
        fetch('http://localhost:3000/data/nav.json')
         .then(res => {return res.json()})
         .then(res => {
             this.setState({profiles: res.profiles})
         })
    }

    goToWhere(){
        this.props.history.push('/askchild')
    }

    render() {
        const { profiles } =this.state;
        return (
            <div className="NavReview">
                {/* <div className="navReviewrepl">
                    <div className="navReviewrepl1">
                        <div className="subject">오늘회</div>
                        <div className="writer"><span className="writerspan">김현준</span></div>
                    </div>
                </div> */}
                {profiles.map((el)=>{
                    return(
                        <div className="navReviewrepl">
                        <div className="navReviewrepl1">
                            <div className="subject">{el.subject}</div>
                            <div className="writer"><span className="writerspan">{el.writer}</span></div>
                        </div>
                    </div>
                    )})
                }

                <div className="NavReviewSearch">
                    
                    <div>
                        <input></input>
                    </div>
                    <div>
                        <button className="faSearch"><FaSearch size="22"/></button>
                    </div>
                    <div>
                        <button className="faPencil" onClick={this.goToWhere.bind(this)}><FaPen size="22"/></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NavReview)
