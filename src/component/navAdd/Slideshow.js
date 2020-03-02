import React, { Component } from 'react';
import './Slideshow.scss';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'https://cdn.onul-hoi.com/uploads/store_banner/image/78/66652b_200224013133.jpg',
  'https://cdn.onul-hoi.com/uploads/store_banner/image/88/c092a3_200224012803.jpg',
  'https://cdn.onul-hoi.com/uploads/store_banner/image/83/1e1f9a_200224012844.jpg'
];
 
const properties = {
  duration: 3000,
  transitionDuration: 200,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow


