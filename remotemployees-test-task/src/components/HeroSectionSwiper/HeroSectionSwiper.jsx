/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useRef, useEffect } from "react";
import people from "../../images/3people.svg";
import './HeroSectionSwiper.scss';
import { SwipeCard } from "../SwipeCard";

export const HeroSectionSwiper = () => {
  const containerRef = useRef(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [startX, setStartX] = useState(null);
  const [currentX, setCurrentX] = useState(0);
  const [clipPathValue, setClipPathValue] = useState(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleTouchStart = (e) => {
      setIsSwiping(true);
      setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      if (!isSwiping) return;
      const diff = e.touches[0].clientX - startX;
      setCurrentX(diff < 0 ? Math.max(-1000, diff) : Math.min(1000, diff));
      if (currentX < -100) {
        setClipPathValue(
          `inset(0px 0px 0px ${currentX * -1 - 100}px)`
        );
      } else if (currentX > 0) {
        setClipPathValue(
          `inset(0px ${currentX}px 0px 0px)`
        );
      } else {
        setClipPathValue(null);
      }
    };

    const handleTouchEnd = () => {
      setIsSwiping(false);
      setStartX(null);
      setCurrentX(0);
      setClipPathValue(
        `inset(0px 0px 0px 0px)`
      );
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isSwiping, startX, currentX]);

  return (
    <div
      className="swiper"
      ref={containerRef}
      style={{
        marginLeft: "600px",
        display: "flex",
        transform: `translateX(${currentX}px)`,
        transition: isSwiping ? "none" : "transform 0.3s",
        clipPath: clipPathValue,
      }}
    >
      <SwipeCard />
    </div>
  );
};