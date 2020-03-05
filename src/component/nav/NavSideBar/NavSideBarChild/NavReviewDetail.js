import React, { Component } from 'react'
import './NavReviewDetail.scss'
import { withRouter } from 'react-router-dom';

class NavReviewDetail extends Component {
    state={
        ask_list:[]
    }

    componentDidMount(){
        const queryId = this.props.location.search.split("=")[1];
        fetch(`http://52.79.185.94:8000/user/ask/${queryId}`,{
            method: 'GET',
            headers: {
                'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxNn0.i313BFWqrzy6A36imjxkkYyjLh_CBulLZ1o0X4-n_Sw'
            }
        })
         .then(res => {return res.json()})
         .then(res => {
             this.setState({ask_list: res.ask_list})
         })
    }
    // http://52.79.185.94:8000/user/ask/13
    goDelete = () =>{
        const queryId = this.props.location.search.split("=")[1];
        fetch(`http://52.79.185.94:8000/user/ask/${queryId}`,{
            method: 'Delete',
            headers: {
                'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxNn0.i313BFWqrzy6A36imjxkkYyjLh_CBulLZ1o0X4-n_Sw'
            }
        })
         .then(res => {return res})
         .then(res => {
             this.setState({ask_list: res.ask_list})
        })
        this.goToWhere()
        
         

    }
    
    goToWhere(){
        this.props.history.push('/ask')
    }

    render() {
        const { ask_list } =this.state;
        return (
            <div className="NavReviewDetail">
                {ask_list && ask_list.map((el)=>{
                    return(
                        <div className="reviewtitle">
                            <div className="title">{el.title}</div>
                            <div className="delete"
                            onClick={this.goDelete}>삭제하기</div>
                            <div className="detail"><span>{el.author}  </span><span>조회수 0  </span><span>2020.03.05</span></div>
                            <div className="content">{el.content}</div>
                            <div className="back"
                            onClick={this.goToWhere.bind(this)}> 목록으로가기 </div>
                        </div>
                    )})
                }
            </div>
        )
    }
}

export default withRouter(NavReviewDetail)
