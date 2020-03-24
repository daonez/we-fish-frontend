import React, { Component } from 'react'
import './Slideshow.scss'
import { Slide } from 'react-slideshow-image'

const slideImages = [
  'https://cdn.onul-hoi.com/uploads/store_banner/image/83/be3f0d_200323060144.jpg',
  'https://cdn.onul-hoi.com/uploads/store_banner/image/89/4b0097_200322150231.jpg',
  'https://cdn.onul-hoi.com/uploads/store_banner/image/78/d35c50_200315145630.jpg',
  'https://cdn.onul-hoi.com/uploads/store_banner/image/88/2bf6f6_200322150158.jpg',
  'https://cdn.onul-hoi.com/uploads/store_banner/image/86/628e2e_200323062310.png',
]

const properties = {
  duration: 3000,
  transitionDuration: 200,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`)
  },
}

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }} />
        </div>
      </Slide>
    </div>
  )
}

export default Slideshow
