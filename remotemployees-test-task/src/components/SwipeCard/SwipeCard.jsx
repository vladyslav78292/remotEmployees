/* eslint-disable jsx-a11y/img-redundant-alt */
import './SwipeCard.scss';
import { SwipeInfo } from "../api/swiper";
import classnames from 'classnames';
import home from "../../images/HomeSwipe.png";

export const SwipeCard = () => (
  SwipeInfo.map(element => (
    <span className="card__element">
      <img className={classnames("card__image", { "card__image--home": element.title === '56 Houses' })} src={element.image} alt="people image" />
      <span className="card__text-container">
        <p className="card__text-top">{element.title}</p>
        <p className="card__text-bottom">{element.text}</p>
      </span>
    </span>
  ))
);