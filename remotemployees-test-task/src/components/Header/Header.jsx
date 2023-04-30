import './Header.scss';
import logo from '../../images/logo_remotemployees.svg'
import '../../styles/grid.scss';
import arrowBottom from '../../images/arrow-bottom.svg';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <div className='header grid'>
      <div className='grid__item--desktop-4-33 grid__item--tablet-2-9'>
        <div className="header__container">
          <div className='header__logo--container'>
            <a href='/' className='header__logo--link'>
              <img className='header__logo--image' alt='main logo' src={logo}/>
            </a>
            <p className='header__logo--text'>Hounter</p>
          </div>
          <nav className='header__nav nav'>
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
            </ul>
            <p className='nav__autorization'>
              <a href='/' className='nav__autorization-link'>
                Sign Up!
              </a>
            </p>
          </nav>
        </div>
      </div>
    </div>
  )
};
