import '../../styles/grid.scss';
import './HeroSection.scss'
import heroImage from '../../images/heroSection_image.png';
import { HeroSectionSwiper } from '../HeroSectionSwiper';
import tripadvisor from '../../images/tripadvisor.svg';
import airbnb from '../../images/airbnb.svg';
import traveloka from '../../images/traveloka.svg'
import tiket from '../../images/tiket.svg'
import location from '../../images/location.svg';
import arrowRight from '../../images/arrow-right.svg';
import { useState } from 'react';
import { useWindowSize } from '../../utils/helper';

export const HeroSection = () => {
  const [query, setQuery] = useState('');

  const windowWidth = useWindowSize().width;

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery('')
  };

  return (
    <section className='hero-section grid'>
      <div className='background_gradient'></div>
      <div className='hero-section__container grid__item--desktop-4-36  grid__item--mobile-2-11 grid__item--tablet-2-11'>
        <div className='hero-section__info'>
          {windowWidth > 720 ? (
            <h1 className='hero-section__title'>
              Find the place to <br></br> live <h1 className='hero-section__title hero-section__title--transparent'>Your dreams</h1> <br></br> easily here
            </h1>
          ) : (
            <h1 className='hero-section__title'>
              Find the place to live <h1 className='hero-section__title hero-section__title--transparent'>Your dreams</h1> easily here
            </h1>
          )}
          <p className='hero-section__addictional'>Everything you need about finding your place to live will be here,<br></br> where it will be easier for you</p>
          <span className='hero-section__input-container'>
            <img 
              src={location} 
              className='hero-section__location-img'
              alt='location'
            />
            <form className='hero-section__form' onSubmit={(event) => handleSubmit(event)}>
              <input
                placeholder='Search for the location you want!'
                type='text' 
                className='hero-section__input'
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
                <button
                  className='hero-section__input-button' 
                  type='submit'
                >
                  Search
                  <img
                    alt='arrow right'
                    src={arrowRight}
                    className='hero-section__image-arrow-right'
                  />
                </button>
            </form>
          </span>
          <p className='hero-section__partners-text'>Our parthership</p>
          <span className='hero-section__partners'>
            <img
              src={traveloka}
              alt="traveloka logo"
              className='hero-section__partner'
            />
            <img
              src={tiket}
              alt="tiket com logo"
              className='hero-section__partner'
            />
            <img
              src={airbnb}
              alt="airbnb logo"
              className='hero-section__partner' 
            />
            <img
              src={tripadvisor}
              alt="tripadvisor logo"
              className='hero-section__partner'
            />
          </span>
        </div>
        <div className='hero-section__main-page-image__container'>
          <img className='hero-section__main-page-image' src={heroImage} alt='hero section main page' />
          <HeroSectionSwiper />
        </div>
      </div>
    </section>
  )
};