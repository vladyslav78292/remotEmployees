import './ContactSection.scss';
import '../../styles/grid.scss';
import line from '../../images/line.svg';
import woman from "../../images/house1Owner.svg";
import houseSection3 from '../../images/houseSection3.png';
import video from "../../images/video.svg";
import React, { useState, useRef, useEffect } from "react";
import { concactImagesData } from '../../api/contactImagesData';

export const ContactSection = ({ setModalImages, modalImages, setIsModalOpen }) => {
  const containerRef = useRef(null);
  const [images, setImages] = useState(concactImagesData);
  const [left, setLeft] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    let intervalId = '';

    if (!isHover) {
      intervalId = setInterval(() => {
        setLeft((prevLeft) => prevLeft + images[counter].width);
        setImages((prevCards) => [...prevCards, prevCards[counter]]);
        setCounter((prevCount) => prevCount + 1);
      }, 5000);
    }
    else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [images, counter, isHover]);

  return (
    <section className="contact contact-section grid">
      <div className='color-gradient'></div>
      <div className='color-gradient--orange'></div>
      <span className="contact-section__container grid__item--mobile-2-11  grid__item--tablet-2-11 grid__item--desktop-5-33">
        <span className="contact-section__info-container">
          <p  className='contact-section__point'><img className='contact-section__point-image' alt='line' src={line}/>Ready To Sell!</p>
          <h2 className="contact-section__title">Let’s tour and see our house!</h2>
          <p className='contact-section__addictional'>Houses recommended by our partners that have been<br></br> curated to become the home of your dreams!</p>
          <h4 className='contact-section__details'>House Detail</h4>
          <span className='contact-section__details-info'>
            <span className='contact-section__details-info-container'>
              <p className='contact-section__details-info-first-paragraph'>
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8 6.76923C22.0713 6.76923 24 8.66184 24 11.0769V14.7692H22.2V16H21V14.7692H3V16H1.8V14.7692H0V11.0769C0 8.74741 1.86341 6.76923 4.2 6.76923H19.8ZM18.6 0C20.2133 0 21.6004 1.33021 21.6 3.07692L21.6004 6.01703C21.0548 5.71017 20.4443 5.53846 19.8 5.53846L18.6 5.53784C18.6 4.48392 17.7586 3.69231 16.8 3.69231H13.2C12.739 3.69231 12.3185 3.87004 12.0001 4.16234C11.682 3.87026 11.2613 3.69231 10.8 3.69231H7.2C6.20609 3.69231 5.40033 4.51853 5.4 5.53784L4.2 5.53846C3.55587 5.53846 2.9456 5.71006 2.4 6.01675V3.07692C2.4 1.4223 3.69394 0 5.4 0H18.6ZM10.8 4.92277C11.1256 4.92277 11.4 5.23046 11.4 5.53846L6.6 5.53784C6.6 5.16134 6.8923 4.92308 7.2 4.92308L10.8 4.92277ZM16.8 4.92722C17.1395 4.92277 17.3997 5.22253 17.4 5.53784H12.6C12.6 5.15596 12.8923 4.92308 13.2 4.92308L16.8 4.92722Z" fill="#888B97"/>
                </svg>
                4 Bedrooms
              </p>
              <p className='contact-section__details-info-first-paragraph'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.3838 6.62854L13.357 0.379261C12.5309 -0.130863 11.4665 -0.125647 10.6453 0.390214L0.608163 6.63375C-0.0150927 7.02547 -0.187308 7.82508 0.222729 8.41971C0.633312 9.01433 1.47088 9.17915 2.09468 8.78691L12.0105 2.61848L21.9142 8.79213C22.1417 8.93244 22.3959 8.99868 22.6474 8.99868C23.0913 8.99868 23.5243 8.79161 23.7829 8.41084C24.1886 7.81309 24.0092 7.01608 23.3838 6.62854Z" fill="#888B97"/>
                <path d="M20.2107 14.7531C20.1341 14.3031 19.7525 13.9702 19.3075 13.9702H18.7961L18.6017 11.8962C18.3942 9.6781 16.5985 7.99997 14.4248 7.99997H9.5761C7.4019 7.99997 5.60672 9.67862 5.39869 11.8962L5.20486 13.9702H4.69289C4.2474 13.9702 3.86634 14.3031 3.78871 14.7531L3.02761 19.1768C2.93323 19.725 3.08444 20.2895 3.43353 20.715C3.76943 21.1249 4.26414 21.3694 4.78169 21.3876V22.1221C4.78169 23.1619 5.59454 24 6.60985 24H7.18727C8.20156 24 9.02659 23.1619 9.02659 22.1221V21.3995H14.9794V22.1205C14.9794 23.1609 15.7978 24 16.8121 24H17.39C18.4043 24 19.2238 23.1609 19.2238 22.1205V21.3876C19.7413 21.3694 20.233 21.127 20.5679 20.7176C20.917 20.291 21.0662 19.7297 20.9728 19.1804L20.2107 14.7531ZM6.39065 19.6933C5.53467 19.6933 4.84055 18.9822 4.84055 18.1036C4.84055 17.225 5.53467 16.5134 6.39065 16.5134C7.24714 16.5134 7.94177 17.2245 7.94177 18.1036C7.94177 18.9822 7.24714 19.6933 6.39065 19.6933ZM6.77729 13.9702L6.9564 12.0569C7.0868 10.6659 8.21272 9.61828 9.5761 9.61828H9.85568V10.2196C9.85568 10.7414 10.2601 11.157 10.7685 11.157H13.2324C13.7408 11.157 14.1523 10.7414 14.1523 10.2196V9.6188H14.4248C15.7882 9.6188 16.9141 10.6665 17.044 12.0575L17.2236 13.9707L6.77729 13.9702ZM17.6082 19.6933C16.7522 19.6933 16.0581 18.9822 16.0581 18.1036C16.0581 17.225 16.7522 16.5134 17.6082 16.5134C18.4647 16.5134 19.1593 17.2245 19.1593 18.1036C19.1593 18.9822 18.4647 19.6933 17.6082 19.6933Z" fill="#888B97"/>
              </svg>
                1 Carport
              </p>
            </span>
            <span className='contact-section__details-info-container'>
              <p className='contact-section__details-info-first-paragraph'>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.0391 11.9554H1.96091C1.13081 11.9554 0.455322 12.6308 0.455322 13.4609C0.455322 14.291 1.13081 14.9665 1.96091 14.9665H23.0391C23.8692 14.9665 24.5447 14.291 24.5447 13.4609C24.5447 12.6308 23.8692 11.9554 23.0391 11.9554Z" fill="#888B97"/>
                <path d="M23.1776 13.9819C22.9056 13.9056 22.6325 14.0602 22.5573 14.3272L22.5181 14.4647H2.48279L2.44266 14.3272C2.36738 14.0602 2.09237 13.9076 1.82236 13.9819C1.55535 14.0581 1.40178 14.3362 1.4781 14.6022L2.86121 19.4441C3.28978 20.9447 4.67897 21.9926 6.23875 21.9926H18.7602C20.3209 21.9926 21.7091 20.9447 22.1377 19.4441L23.5208 14.6022C23.5981 14.3362 23.4435 14.0581 23.1776 13.9819ZM6.23974 19.9851C5.57126 19.9851 4.97505 19.5364 4.79236 18.893L4.14096 16.6106C4.06469 16.3436 4.21925 16.0665 4.48522 15.9903C4.7542 15.914 5.03024 16.0695 5.10552 16.3356L5.75692 18.618C5.81916 18.8318 6.01687 18.9824 6.23969 18.9824C6.51672 18.9824 6.74157 19.2072 6.74157 19.4843C6.74162 19.7613 6.51677 19.9851 6.23974 19.9851Z" fill="#888B97"/>
                <path d="M7.20338 21.041C6.95548 20.9196 6.65535 21.017 6.52987 21.2659L5.52616 23.2733C5.4027 23.5212 5.50306 23.8224 5.75101 23.9469C5.82426 23.983 5.90058 24.0001 5.97586 24.0001C6.15954 24.0001 6.33621 23.8987 6.42452 23.7221L7.42823 21.7146C7.55169 21.4666 7.45129 21.1655 7.20338 21.041Z" fill="#888B97"/>
                <path d="M19.4738 23.2743L18.4701 21.2669C18.3457 21.0179 18.0445 20.9186 17.7966 21.042C17.5487 21.1665 17.4483 21.4676 17.5717 21.7155L18.5754 23.723C18.6638 23.8986 18.8404 24 19.0241 24C19.0994 24 19.1757 23.9829 19.249 23.9478C19.4969 23.8233 19.5973 23.5222 19.4738 23.2743Z" fill="#888B97"/>
                <path d="M20.6151 0C20.1032 0 19.6214 0.199725 19.2591 0.5621L17.6662 2.15501C17.4705 2.35073 17.4705 2.66893 17.6662 2.86465C17.8619 3.06038 18.1801 3.06038 18.3758 2.86465L19.9687 1.27274C20.1403 1.10011 20.3702 1.00474 20.6201 1.00474C21.124 1.00474 21.5335 1.41426 21.5335 1.91811V12.4572C21.5335 12.7342 21.7583 12.9591 22.0354 12.9591C22.3124 12.9591 22.5372 12.7342 22.5382 12.4562V1.91713C22.5383 0.860206 21.6791 0 20.6151 0Z" fill="#888B97"/>
                <path d="M18.8776 2.65687L17.8739 1.65317C17.7595 1.53874 17.5999 1.48553 17.4373 1.51263L14.928 1.92417C14.7433 1.95428 14.5917 2.08475 14.5325 2.26142C14.4733 2.43809 14.5185 2.63481 14.649 2.76829L17.6601 5.86979C17.7555 5.96916 17.887 6.02237 18.0195 6.02237C18.0666 6.02237 18.1148 6.01536 18.162 6.00129C18.3406 5.94911 18.4761 5.80157 18.5123 5.61887L19.0141 3.10958C19.0472 2.94594 18.996 2.77628 18.8776 2.65687Z" fill="#888B97"/>
                <path d="M12.3525 6.08054C12.1567 5.88481 11.8385 5.88481 11.6428 6.08054L10.6391 7.08425C10.4434 7.27998 10.4434 7.59817 10.6391 7.7939C10.7375 7.89124 10.8659 7.94046 10.9944 7.94046C11.1229 7.94046 11.2514 7.89129 11.3488 7.7939L12.3525 6.79019C12.5482 6.59442 12.5482 6.27627 12.3525 6.08054Z" fill="#888B97"/>
                <path d="M14.3599 8.08796C14.1641 7.89223 13.846 7.89223 13.6502 8.08796L12.6465 9.09166C12.4508 9.28739 12.4508 9.60559 12.6465 9.80131C12.7449 9.89866 12.8733 9.94787 13.0018 9.94787C13.1303 9.94787 13.2588 9.89871 13.3562 9.80131L14.3599 8.79761C14.5556 8.60188 14.5556 8.28368 14.3599 8.08796Z" fill="#888B97"/>
                <path d="M15.3636 5.07679C15.1679 4.88106 14.8497 4.88106 14.654 5.07679L13.6503 6.0805C13.4545 6.27622 13.4545 6.59442 13.6503 6.79014C13.7487 6.88749 13.8771 6.9367 14.0056 6.9367C14.1341 6.9367 14.2625 6.88754 14.3599 6.79014L15.3636 5.78644C15.5594 5.59071 15.5594 5.27251 15.3636 5.07679Z" fill="#888B97"/>
              </svg>
                2 Bathrooms
              </p>
              <p className='contact-section__details-info-first-paragraph'>
                <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.2884 4.00006H18.9324C18.2631 4.00006 17.7207 4.53672 17.7207 5.19962V8.31357H14.5759C13.9064 8.31357 13.3641 8.85003 13.3641 9.51298V12.6271H10.2192C9.5497 12.6271 9.00752 13.1644 9.00752 13.8266V17.0907H5.71171C5.39012 17.0907 5.08195 17.217 4.85482 17.4417C4.6275 17.6665 4.5 17.973 4.5 18.2902L4.50039 20.7999C4.50039 21.4635 5.04297 22.0001 5.71206 22.0001H23.2884C23.9579 22.0001 24.5 21.4635 24.5 20.7999V5.19957C24.5001 4.53672 23.9579 4.00006 23.2884 4.00006Z" fill="#888B97"/>
                  <path d="M17.264 0.245364C16.9425 -0.0760517 16.4158 -0.0822289 16.0863 0.23049C10.7431 5.30554 5.65982 10.2624 0.744094 15.055C0.587683 15.2075 0.5 15.4146 0.5 15.6297V21.1877C0.5 21.6356 0.87278 22.0001 1.33294 22.0001C1.79264 22.0001 2.16608 21.6358 2.16608 21.1877V15.9657C7.00203 11.2504 12.0017 6.37802 17.2485 1.39375C17.5778 1.08108 17.5845 0.566583 17.264 0.245364Z" fill="#888B97"/>
                </svg>
                2 Floors
              </p>
            </span>
          </span>
          <span className="contact-section__person-container">
            <div className='contact-section__line'></div>
            <span className='contact-section__person-data'>
              <img alt='woman' src={woman} />
              <span className='contact-section__person-info'>
                <p className='contact-section__person-name'>Dianne Russell</p>
                <p className='contact-section__person-position'>Manager Director</p>
              </span>
              <a className='contact-section__person-phone' href="tel:123456789">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.38439 0.479185C4.90949 0.320866 5.47298 0.347168 5.98104 0.553714C6.48911 0.760259 6.91111 1.13459 7.1768 1.61439L7.26679 1.79319L8.05999 3.55839C8.30108 4.09417 8.37934 4.689 8.28504 5.26891C8.19074 5.84882 7.92803 6.3882 7.52959 6.81999L7.37119 6.97839L6.11839 8.14599C5.8928 8.35959 6.06199 9.18639 6.87919 10.6C7.61239 11.872 8.21119 12.466 8.50399 12.4984H8.55559L8.61919 12.4864L11.0792 11.734C11.4098 11.6326 11.7626 11.6286 12.0955 11.7224C12.4283 11.8163 12.727 12.004 12.956 12.2632L13.0664 12.4012L14.6936 14.6572C15.0129 15.0992 15.1721 15.6369 15.1451 16.1815C15.118 16.7261 14.9063 17.2453 14.5448 17.6536L14.3984 17.8048L13.7468 18.4216C13.1627 18.9747 12.4322 19.3485 11.6419 19.4984C10.8516 19.6484 10.0349 19.5683 9.28879 19.2676C6.96679 18.3316 4.85719 16.1932 2.94079 12.874C1.02079 9.54639 0.222795 6.64599 0.579195 4.16199C0.687148 3.41097 0.996527 2.70322 1.47446 2.11394C1.9524 1.52465 2.58104 1.07584 3.2936 0.815185L3.52519 0.738385L4.38439 0.479185Z" fill="white"/>
                </svg>
                Contact Now
              </a>
            </span>
          </span>
        </span>
        <span className="contact-section__images-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button
            className='contact-section__modal-button'
            onClick={() =>{
              setIsModalOpen(true);
              setModalImages(
                modalImages
              )
            }}
          >
            <div>
              <img className='contact-section__main-image' alt='house' src={houseSection3}/>
              <img src={video} alt='video' className='contact-section__image-video'/>
            </div>
          </button>
          <div
            className='contact-section__slider-images'
            ref={containerRef}
            style={{
              display: 'flex',
              transform: `translateX(-${left}px)`,
              transition: "transform 0.5s",
              alignItems: 'flex-end',
              gap: '8px',
            }}
          >
            {images.map((image) => (
              <button
                id={image.image}
                className='contact-section__modal-button'
                onClick={() =>{
                  setIsModalOpen(true);
                  setModalImages(
                    modalImages.slice(image.image_number).concat(modalImages.slice(0, image.image_number))
                  )
                }}
              >
                <img className={image.className} alt={image.image} src={image.image}/>
              </button>
            ))}
          </div>
        </span>
      </span>
    </section>
    )
};
