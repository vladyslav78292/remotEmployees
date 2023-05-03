import './Footer.scss';
import logo from '../../images/logo_remotemployees.svg'
import twitter from '../../images/twitter.svg'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import { footerAddictional } from '../../api/footerAddictional';

export const Footer = () => (
  <footer className="footer grid">
    <div className='gradient__light-green'></div>
    <div className='gradient__light-blue'></div>
    <section className="footer__container grid__item--tablet-2-11  grid__item--mobile-2-11 grid__item--desktop-4-33">
      <section className='footer__main'>
        <span className='footer__logo-container'>
          <a href='/' className='footer__logo-link'>
            <img className='footer__logo-image' alt='main logo' src={logo}/>
          </a>
          <p className='header__logo-text'>Hounter</p>
        </span>
        <p className='footer__logo-paragraph'>We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
        <div className='footer__images-container'>
          <a href='/' className='footer__image-container'>
            <img className='footer__image' alt='main logo' src={facebook}/>
          </a>
          <a href='/' className='footer__image-container footer__image-container--twitter'>
            <img className='footer__image' alt='main logo' src={twitter}/>
          </a>
          <a href='/' className='footer__image-container'>
            <img className='footer__image' alt='main logo' src={instagram}/>
          </a>
        </div>
      </section>
      <section className="footer__addictional">
        {footerAddictional.map(element => (
          <span className='footer__addictional-container'>
            <h3 className='footer__addictional-header'>
              {element.title}
            </h3>
            <span className='footer__addictional-paragraphs'>
              <p className="footer__addictional-paragraph">{element.paragraph1}</p>
              <p className="footer__addictional-paragraph">{element.paragraph2}</p>
              <p className="footer__addictional-paragraph">{element.paragraph3}</p>
              <p className="footer__addictional-paragraph">{element?.paragraph4}</p>
            </span>
          </span>
        ))}
      </section>
    </section>
  </footer>
)