import React, { Component } from 'react';
import './NavAskWrite.scss';
import { FaCamera } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import ImageUploader from 'react-images-upload';


class NavAskWrite extends Component {
    state={
        title:"",
        author:"",
        email:"",
        content:"",
        image:"",
        Ask:[],
        pictures:[]
    }
    onDrop = this.onDrop.bind(this);
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
    goToWhere(){
        this.props.history.push('/ask')
    }

    handleSave = e => {
        this.setState({
            [e.target.name]: e.target.value   
        })
    }
    handleClick = (e) => {
        // console.log(e.target.name)
        this.state.Ask.push(this.state.title);
        this.state.Ask.push(this.state.author);
        this.state.Ask.push(this.state.email);
        this.state.Ask.push(this.state.content);
        this.goToSave()
        this.goToWhere()
    }

    // 52.79.185.94:8000/ask
    goToSave = () => {
        fetch('http://52.79.185.94:8000/user/ask', {
            method: 'POST',
            headers: {
                'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxNn0.i313BFWqrzy6A36imjxkkYyjLh_CBulLZ1o0X4-n_Sw'
            },
            body: JSON.stringify({
                title: this.state.title,
                author: this.state.author,
                email: this.state.email,
                content: this.state.content

            })
          })
          .then(response => { 
            if (response.status === 404) {
                alert(" no exist id");
            } else if (response.status === 200) {
                return response
            }
          })
          .then(response => 
            console.log(response)
          )
    }
    goToWhere(){
        this.props.history.push('/ask')
    }





    
    render() {
        console.log('Ask:',this.state)
        return (
            <div className="NavAskWrite">
                <div className="AskWrite">
                    <div className="subject">
                        <div>제목</div>
                        <input
                        type="text"
                        onChange={this.handleSave}
                        // value={this.state.title}
                        name="title"></input>
                    </div>
                    <div className="writer">
                        <div>글쓴이</div>
                        <input
                        type="text"
                        onChange={this.handleSave}
                        // value={this.state.author}
                        name="author"></input>
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
                        placeholder={this.state.picture}
                        name="content"></textarea>
                    </div>
                    <div className="upload">
                        <div>이미지 업로드</div>
                        <input className="camera"
                        type="file"></input>
                    </div>
                    <div className="buttonClick">
                        <input type="checkbox" ></input> <span>공개 여부</span>
                    </div>
                    <div class="bottomBack">
                        <button onClick={this.goToWhere.bind(this)}>목록으로 가기</button>
                        <button
                        onClick={this.handleClick}>저장하기</button>
                    </div>
                    <div>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default withRouter(NavAskWrite)



