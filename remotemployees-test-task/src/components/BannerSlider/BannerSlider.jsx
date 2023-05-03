import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EstherFoward from "../../images/Esther.svg";
import './BannerSlider.scss';
import star from '../../images/star.svg';
import { bannerSlderData } from '../../api/bannerSlider.js';
import classNames from 'classnames';

export const BannerSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    cssEase: 'linear',
    swipeToSlide: true,
    variableWidth: true,
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    arrows: false,
    appendDots: (dots) => (
      <div style={{ position: 'absolute', bottom: '10px', left: '0', right: '0', margin: '0 auto', width: 'max-content' }}>
        {dots}
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      {bannerSlderData.map(element => (
        <div className='slide'>
          <img className='slide__main' src={element.main} alt="slide 2"/>
          <span className='slide__modal'>
            <article className='slide__info'>
              <h2 className='slide__header'>{element.title}</h2>
              <p className='slide__paragraph'>{element.info}</p>
            </article>
            <span className='slide__feedback'>
              <span className="slide__person-container">
                <span className="slide__person">
                  <img className={classNames('person_image', {'Esther': element.person_image === EstherFoward })} alt='person' src={element.person_image}/>
                  <span className='slide__person-info'>
                    <p className='slide__person-name'>{element.person_name}</p>
                    <p className='slide__person-position'>{element.person_position}</p>
                  </span>
                </span>
                <span className={classNames('slide__rating', {'EstherStar': element.person_image === EstherFoward })}>
                  <img alt='star' src={star}/>
                  <p className='slide__rating-number'>{element.rating}</p>
                </span>
              </span>
            </span>
          </span>
        </div>
      ))}
    </Slider>
  );
};