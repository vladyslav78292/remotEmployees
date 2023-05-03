import './Modal.scss';
import React, { useState } from 'react'
import Slider from 'react-slick'
import classNames from 'classnames'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Modal = ({ setIsModalOpen, modalImages }) => {
  const slider = React.useRef(null)

  const [currentSlide, setCurrentSlide] = useState(0)
  console.log(modalImages)
  const settings = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    speed: 400,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setCurrentSlide(next)
    },
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className='dots_list'>
        {
          <div
            className={classNames('dots', {
              'dots_active': i === currentSlide,
            })}
          ></div>
        }
      </div>
    ),
  }

  return (
  <div className="modal">
    <div className="modalconent">
      <button className='modal__button' onClick={() => setIsModalOpen(false)}>×</button>
      <div className='container'>
        <div className='content'>
          <Slider ref={slider} {...settings}>
            {modalImages.map(image => (
              <img className='modal__image' src={image} alt='modal'/>
            ))}
          </Slider>
        </div>
      </div>
   </div>
 </div>
  )
}