import React, { useState, useRef, useEffect } from "react";
import "./HeroSectionSwiper.scss";
import { SwipeInfo } from "../../api/swiper.js";
import classnames from 'classnames';

export const HeroSectionSwiper = () => {
  const containerRef = useRef(null);
  const [cards, setCards] = useState(SwipeInfo);
  const [left, setLeft] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLeft((prevLeft) => prevLeft + cards[counter].width);
      setCards((prevCards) => [...prevCards, prevCards[counter]]);
      setCounter((prevCount) => prevCount + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [cards, counter]);

  return (
    <div
      id="swiper"
      className="swiper"
      ref={containerRef}
      style={{
        marginLeft: "600px",
        display: "flex",
        transform: `translateX(-${left}px)`,
        transition: "transform 0.5s",
      }}
    >
      {cards.map((element) => (
        <span className="card__element" id={element.title}>
          <img
            className={classnames({
              "card__image": element.title !== "56 Houses" }, {
              "card__image--home": element.title === "56 Houses",
            })}
            src={element.image}
            alt="people"
          />
          <span className="card__text-container">
            <p className="card__text-top">{element.title}</p>
            <p className="card__text-bottom">{element.text}</p>
          </span>
        </span>
      ))}
    </div>
  );
};