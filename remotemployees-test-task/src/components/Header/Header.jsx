import './Header.scss';
import logo from '../../images/logo_remotemployees.svg'
import '../../styles/grid.scss';
import arrowBottom from '../../images/arrow-bottom.svg';
import { useState } from 'react';
import { useWindowSize } from '../../utils/helper';

export const Header = () => {
  const WindowWidth = useWindowSize().width;
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <span className='header grid'>
      <span className='grid__item--desktop-4-33 grid__item--tablet-2-11 grid__item--mobile-1-12'>
        <span className="header__container">
          <div className='header__logo--container'>
            <a href='/' className='header__logo--link'>
              <img className='header__logo--image' alt='main logo' src={logo}/>
            </a>
            <p className='header__logo--text'>Hounter</p>
          </div>
          <nav className='header__nav nav'>
            {WindowWidth >= 720 && (
              <ul className='nav__list'>
                <li className="nav__list-element">
                  <a href='/' className='nav__list-link'>
                    About Us
                  </a>
                </li>
                <li className="nav__list-element">
                  <a href='/' className='nav__list-link'>
                    Article
                  </a>
                </li>
                {isMenuOpened ? (
                  <span className='nav__list-container'>
                    <li className="nav__list-element nav__list-element--burger-menu">
                      <button className='nav__list-element--burger-menu-button' onClick={() => setIsMenuOpened(!isMenuOpened)}>
                        <p className='nav__list-link'>Property</p>
                        <svg className='nav__list--burger-menu-arrow' width="11" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.528758 5.47136C0.268409 5.21101 0.268409 4.7889 0.528758 4.52855L4.52876 0.528555C4.78911 0.268206 5.21122 0.268206 5.47157 0.528556L9.47157 4.52856C9.73192 4.78891 9.73192 5.21102 9.47157 5.47137C9.21122 5.73171 8.78911 5.73171 8.52876 5.47136L5.00016 1.94277L1.47157 5.47136C1.21122 5.73171 0.789108 5.73171 0.528758 5.47136Z" fill="white"/>
                        </svg>
                      </button>
                    </li>
                    <div className='nav__list-link--container'>
                      <p className='nav__list-link--open nav__list-link'>House</p>
                      <p className='nav__list-link--open nav__list-link'>Villa</p>
                      <p className='nav__list-link--open nav__list-link'>Apartment</p>
                    </div>
                  </span>
                ) : (
                  <li className="nav__list-element nav__list-element--burger-menu">
                    <button className='nav__list-element--burger-menu-button' onClick={() => setIsMenuOpened(!isMenuOpened)}>
                      <p className='nav__list-link'>Property</p>
                      <img
                        src={arrowBottom}
                        alt="arrow bottom"
                        className='nav__list--burger-menu-arrow'
                      />
                    </button>
                  </li>
                )}
              </ul>
            )}
            <p className='nav__autorization'>
              <a href='/' className='nav__autorization-link'>
                Sign Up!
              </a>
            </p>
          </nav>
        </span>
        {WindowWidth <= 720 && (
          <ul className='nav__list'>
            <li className="nav__list-element">
              <a href='/' className='nav__list-link'>
                About Us
              </a>
            </li>
            <li className="nav__list-element">
              <a href='/' className='nav__list-link'>
                Article
              </a>
            </li>
            {isMenuOpened ? (
              <span className='nav__list-container'>
                <li className="nav__list-element nav__list-element--burger-menu">
                  <button className='nav__list-element--burger-menu-button' onClick={() => setIsMenuOpened(!isMenuOpened)}>
                    <p className='nav__list-link'>Property</p>
                    <svg className='nav__list--burger-menu-arrow' width="11" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.528758 5.47136C0.268409 5.21101 0.268409 4.7889 0.528758 4.52855L4.52876 0.528555C4.78911 0.268206 5.21122 0.268206 5.47157 0.528556L9.47157 4.52856C9.73192 4.78891 9.73192 5.21102 9.47157 5.47137C9.21122 5.73171 8.78911 5.73171 8.52876 5.47136L5.00016 1.94277L1.47157 5.47136C1.21122 5.73171 0.789108 5.73171 0.528758 5.47136Z" fill="white"/>
                    </svg>
                  </button>
                </li>
                <div className='nav__list-link--container'>
                  <p className='nav__list-link--open nav__list-link'>House</p>
                  <p className='nav__list-link--open nav__list-link'>Villa</p>
                  <p className='nav__list-link--open nav__list-link'>Apartment</p>
                </div>
              </span>
            ) : (
              <li className="nav__list-element nav__list-element--burger-menu">
                <button className='nav__list-element--burger-menu-button' onClick={() => setIsMenuOpened(!isMenuOpened)}>
                  <p className='nav__list-link'>Property</p>
                  <img
                    src={arrowBottom}
                    alt="arrow bottom"
                    className='nav__list--burger-menu-arrow'
                  />
                </button>
              </li>
            )}
          </ul>
        )}
      </span>
    </span>
  )
};
