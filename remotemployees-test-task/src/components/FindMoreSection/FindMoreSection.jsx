import './FindMoreSection.scss';
import line from "../../images/line.svg";
import bigHouse from "../../images/findMoreBigHouse.png";
import clock from "../../images/clock.svg";
import { findMoreData } from '../../api/findMoreData';
import bigHouseOwner from "../../images/bigHouseOwner.svg";

export const FindMoreSection = () => {
  return (
    <section className='find-more'>
      <header className='find-more__header'>
        <img className='find-more__image' src={line} alt='line' />
        <h4 className='find-more__pre-title'>
          See tips and trick from our parthership
        </h4>
        <h1 className="find-more__title">
          Find out more about<br></br>
          elling and buying homes
        </h1>
        <a href='/' className='find-more__link'>
          More Artikel
        </a>
      </header>
      <div className='grid find-more__container'>
        <div className='gradient__blue'></div>
        <div className='gradient__green'></div>
        <main className='grid__item--desktop-4-33 grid__item--tablet-2-11 grid__item--mobile-2-11 find-more__main'>
          <article className="find-more__small-articles">
            {findMoreData.map(element => (
              <article className="find-more__small-article">
                <img className='find-more__small-house-image' src={element.house} alt='small house'/>
                <span className='find-more__house-info'>
                  <span className="find-more__house-owner">
                    <img className='find-more__owner-image' alt='owner' src={element.person} />
                    <p className='find-more__owner-name'>{element.name}</p>
                  </span>
                  <p className='find-more__house-title'>{element.title}</p>
                  <span className="find-more__date-info">
                    <img alt='owner' src={clock} />
                    <p className='find-more__date'>{element.date}</p>
                  </span>
                </span>
              </article>
            ))}
          </article>
          <article className="find-more__big-article">
            <img className='find-more__big-house' src={bigHouse} alt='big house' />
            <span className='find-more__big-house-owner'>
              <img src={bigHouseOwner} alt='big house owner' />
              <p className='find-more__owner-name'>Cameron Willamson</p>
            </span>
            <h1 className='find-more__big-house-title'>12 Things to know before buying a house</h1>
            <p className='find-more__big-house-paragraph'>Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house</p>
            <span className="find-more__date-info">
              <img alt='owner' src={clock} />
              <p className='find-more__date'>8 min read | 25 Apr 2021</p>
            </span>
          </article>
        </main>
      </div>
    </section>
  )
};