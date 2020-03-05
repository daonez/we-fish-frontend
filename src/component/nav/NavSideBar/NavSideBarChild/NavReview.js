import React, { Component } from 'react'
import './NavReview.scss'
import { FaSearch } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

class NavReview extends Component {
    state={
        Ask:[]
    }

    componentDidMount(){
        fetch('http://52.79.185.94:8000/user/ask',{
            method: 'GET',
            headers: {
                'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxNn0.i313BFWqrzy6A36imjxkkYyjLh_CBulLZ1o0X4-n_Sw'
            }
        })
         .then(res => {return res.json()})
         .then(res => {
             this.setState({Ask: res.Ask})
         })
    }

    goToWhere = id => {
        // const queryId = this.state.Ask.title
        this.props.history.push(`/askdetail?keyword=${id}`)
    }
    goToWrite = () => {
        this.props.history.push('/askchild')
    }

    render() {
        const { Ask } =this.state;
        
        return (
            <div className="NavReview">
                {Ask && Ask.map((el)=>{
                    return(
                        <div className="navReviewrepl">
                        <div className="navReviewrepl1">
                            <div className="subject"
                            onClick={() => this.goToWhere(el.id)}
                            >{el.title}</div>
                            <div className="writer"><span className="writerspan">{el.email}</span></div>
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
                        <button className="faPencil" onClick={this.goToWrite}><FaPen size="22"/></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NavReview)
