import React, { Component } from 'react';
import './NavAskWrite.scss';
import { FaCamera } from 'react-icons/fa';

class NavAskWrite extends Component {
    render() {
        return (
            <div className="NavAskWrite">
                <div className="AskWrite">
                    <div className="subject"><div>제목</div><input></input></div>
                    <div className="writer"><div>글쓴이</div><input></input></div>
                    <div className="email"><div>이메일</div><input></input></div>
                    <div className="content"><div>내용</div><textarea></textarea></div>
                    <div className="upload">
                        <div>이미지 업로드</div>
                        <button><FaCamera size="23"/></button>
                    </div>
                    <div className="buttonClick">
                        <input type="checkbox" ></input> <span>공개 여부</span>
                    </div>
                    <div class="bottomBack">
                        <button>목록으로 가기</button><button>저장하기</button>
                    </div>


                </div>
                
            </div>
        )
    }
}

export default NavAskWrite
