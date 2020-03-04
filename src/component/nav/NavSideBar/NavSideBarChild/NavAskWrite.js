import React, { Component } from 'react';
import './NavAskWrite.scss';
import { FaCamera } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import ImageUploader from "react-images-upload";

class NavAskWrite extends Component {
    state={
        subject:"",
        writer:"",
        email:"",
        content:"",
        image:"",
        data:[],
        picture:[]
    }
    onDrop = this.onDrop
    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
          pictures: this.state.pictures.concat(pictureFiles)
        });
      }

    handleSave = e => {
        this.setState({
            [e.target.name]: e.target.value   
        })
    }
    handleClick = (e) => {
        console.log(e.target.name)
        this.state.data.push(this.state.subject);
        this.state.data.push(this.state.writer);
        this.state.data.push(this.state.email);
        this.state.data.push(this.state.content);
    }
    goToSave = () => {
        fetch('http://10.58.5.89:8000/user/profile', {
            method: 'POST',
            headers: {
                'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.SAa5RFLev-OZMBqY2mDjAeftZE0kH4FJUSOwCS4HsGA'
            },
            body: JSON.stringify({
                address: this.state.address,
                mobile: this.state.mobile,
                name: this.state.name,
                postcode: this.state.postcode

            })
          })
          .then(response => { 
            if (response.status === 400) {
                alert(" no exist id");
            } else if (response.status === 200) {
                return response
            }
          })
          .then(response => 
            console.log(typeof response)
            // if (response.token) {
            //   localStorage.setItem('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.SAa5RFLev-OZMBqY2mDjAeftZE0kH4FJUSOwCS4HsGA', response.token);
            // }
          )
    }
    goToWhere(){
        this.props.history.push('/ask')
    }
    render() {
        console.log(this.state.data)
        return (
            <div className="NavAskWrite">
                <div className="AskWrite">
                    <div className="subject">
                        <div>제목</div>
                        <input
                        type="text"
                        onChange={this.handleSave}
                        // value={this.state.subject}
                        name="subject"></input>
                    </div>
                    <div className="writer">
                        <div>글쓴이</div>
                        <input
                        type="text"
                        onChange={this.handleSave}
                        // value={this.state.writer}
                        name="writer"></input>
                    </div>
                    <div className="email">
                        <div>이메일</div>
                        <input
                        type="text"
                        onChange={this.handleSave}
                        // value={this.state.email}
                        name="email"></input>
                    </div>
                    <div className="content">
                        <div>내용</div>
                        <textarea
                        type="text"
                        onChange={this.handleSave}
                        // placeholder={this.state.content}
                        name="content"></textarea>
                    </div>
                    <div className="upload">
                        <div>이미지 업로드</div>
                    </div>
                    <div className="buttonClick">
                        <input type="checkbox" ></input> <span>공개 여부</span>
                    </div>
                    <div class="bottomBack">
                        <button onClick={this.goToWhere.bind(this)}>목록으로 가기</button>
                        <button
                        onClick={this.handleClick}>저장하기</button>
                    </div>
                    <ImageUploader
                    withIcon={true}
                    buttonText=""
                    onChange={this.onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                     />


                </div>
                
            </div>
        )
    }
}

export default withRouter(NavAskWrite)
