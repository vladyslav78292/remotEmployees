import email from '../../images/email.svg';
import './SubscribeSection.scss';
import subscribeSmallImg1 from '../../images/subscribe1image.png';
import subscribeSmallImg2 from '../../images/subscribe2image.png';
import subscribeSmallImg3 from '../../images/subscribe3image.png';
import subscribeSmallImg4 from '../../images/subscribe4image.png';
import subscribeSmallImg5 from '../../images/subscribe5image.png';
import subscribeSmallImg6 from '../../images/subscribe6image.png';
import subscribeSmallImg7 from '../../images/subscribe7image.png';
import subscribeSmallImg8 from '../../images/subscribe8image.png';
import { useState } from 'react';
import { useWindowSize } from '../../utils/helper';

export const SubscribeSection = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery('');
  };

  const windowSize = useWindowSize().width
  console.log(windowSize)
  return (
    <section className="subscribe grid">
      <article className='subscribe__container-grid grid__item--desktop-4-33 grid__item--mobile-2-11 grid__item--tablet-2-11'>
        <span className="subscribe__container">
          {windowSize >= 1200 && (
            <>
              <img className='subscribe__small-image1' src={subscribeSmallImg1} alt='interier' />
              <img className='subscribe__small-image2' src={subscribeSmallImg2} alt='person' />
              <img className='subscribe__small-image3' src={subscribeSmallImg3} alt='person' />
              <img className='subscribe__small-image4' src={subscribeSmallImg4} alt='villa' />
              <img className='subscribe__small-image5' src={subscribeSmallImg5} alt='house' />
              <img className='subscribe__small-image6' src={subscribeSmallImg6} alt='person' />
              <img className='subscribe__small-image7' src={subscribeSmallImg7} alt='person' />
              <img className='subscribe__small-image8' src={subscribeSmallImg8} alt='interier' />
            </>
          )}
          <h1 className="subscribe__title">Subscribe For More Info<br></br> and update from Hounter</h1>
          <span className='subscribe__input-container'>
            <img 
              src={email} 
              className='subscribe__email-img'
              alt='location'
            />
            <form className='subscribe__form' onSubmit={(event) =>handleSubmit(event)}>
              <input
                placeholder='Your email here'
                type='email'
                className='subscribe__input'
                required
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
                <button
                  className='subscribe__input-button' 
                  type='submit'
                >
                  Subscribe Now
                </button>
            </form>
          </span>
        </span>
      </article>
    </section>
  )
};
