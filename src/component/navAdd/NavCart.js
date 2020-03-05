import React, { Component } from 'react';
import './NavCart.scss';
import { FaAngleLeft } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import NavFooter from '../navAdd/NavFooter'
import { withRouter } from 'react-router-dom';

export class NavCart extends Component {
    state={
        item:1,
        name:"",
        price: "",
        image_url:""
    }
    NumberFormat = (inputNumber) => 
        inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //숫자 천단위마다 콤마찍어주는 함수.
     
    handlePlus = () =>{
        this.setState({
            item: this.state.item + 1
        });
        // this.setState({
        //     price: 25900 * this.state.item
        // })
    }
    handleMinus = () => {
        if (this.state.item >= 1){
            this.setState({
                item: this.state.item - 1
            })
        }else if (this.state.item < 0){
            this.setState({
                item: 0
            })
        }
    }

    handlePrice = () => {
        this.setState({
            price: this.state.price * this.state.item
        })
    }
    goTowhere = () => {
        this.props.history.push('/home')
    }

   

    render() {

        let text = this.state.price * this.state.item;     // 금액 천단위로 끊어주는 메소드를 변수로설정.
        let number = this.NumberFormat(text);
        console.log(number)

        return (
            <div className="NavCart">   
                <div className="NavCartHeader">
                    <div className="headerImage">< FaAngleLeft size="26"
                    onClick={this.goTowhere}/></div>
                    <div className="font">장바구니</div>
                </div>
                <div className="NavCartProduct">
                    <div className="productImage" 
                    style={{ backgroundImage: "url('https://cdn.onul-hoi.com/uploads/store_package/image/580/799b56_200225094425.jpg')"}}></div>
                    <div className="productTitleMany">
                        <div className="productTitle">[거제] 해금강 보리숭어</div>
                        <div className="productMany">
                            <div className="productSpan0">
                                <span className="productSpan1">수량</span>
                                <div className="productSpan2">
                                    <button className="span2button"
                                    onClick={this.handleMinus}>
                                        <FaMinus color="grey" size="15"/>
                                    </button>
                                    <span className="navCartItem">{this.state.item}</span>
                                    <button className="span2button1"
                                    onClick={this.handlePlus}>
                                        <FaPlus color="grey" size="15"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="cartClose"><FaTimes color="grey" size="23"/></div>
                        <div className="navCartBar"></div>
                        <div className="navCartPrice">
                            <div className="navCartPrice01">상품금액</div>
                            <div className="navCartPrice02">{text.toLocaleString()}원</div>
                        </div>
                        
                        
                    
                        
                        
                        
                        <div className="navCartBar2"></div>
                        <div className="navCartAdd">+ 메뉴 더 담으러 가기</div>
                        <div className="navCartDelivery">
                            <div className="navCartDelivery02">[배송받는 날]</div>
                            <div className="navCartDelivery03">지금 주문결제 시,<span>02월 28일 (금) 저녁</span>에 배송됩니다.</div>
                            <div className="navCartDelivery04">(매일 오후 3시까지 주문하면 당일저녁 수령 가능)</div>
                        </div>
                        <div className="navCartbar3"></div>
                     <div className="navCartTotal"><div className="navCartTotalText">상품금액 합계</div><div className="navCartTotalPrice">{number} 원</div></div>
                        <button className="navCartConfirmButton">구매하기</button>
                        
                    </div>
                

                </div>
                <div className="NavCartFooter">
                    <NavFooter/>
                </div>
       
            </div>
        )
    }
}

export default withRouter(NavCart)
