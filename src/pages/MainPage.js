import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
// data
import { cardText } from "../data/cardData";
// components
import Header from "../components/main/Header";
// pages
import MainCardScroll from "./MainCardScroll";

const MainPage = () => {
  const cardWrapperRef = useRef(null);

  useEffect(() => {
    const scrollGrid = () => {
      const main = document.querySelector("main");
      const cardWrapper = cardWrapperRef.current;

      if (main && cardWrapper) {
        const mainHeight = main.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollableHeight = mainHeight - windowHeight;
        const scrollY = window.pageYOffset;

        const transY = (scrollY / scrollableHeight) * -100;

        // transY 값을 최대 -100%로 제한하여 모양 변경 방지
        const clampedTransY = Math.max(transY, -100);

        cardWrapper.style.setProperty("--scroll", `${clampedTransY}%`);
      }
    };

    window.addEventListener("resize", scrollGrid);
    window.addEventListener("scroll", scrollGrid);

    scrollGrid();

    return () => {
      window.removeEventListener("resize", scrollGrid);
      window.removeEventListener("scroll", scrollGrid);
    };
  }, []);

  const cards = Array.from(
    { length: 36 },
    (_, i) => cardText[i % cardText.length]
  );

  return (
    <>
      <Helmet>
        <title>ULog - Main</title>
      </Helmet>

      <Header />
      <MainCardScroll cards={cards} cardWrapperRef={cardWrapperRef} />
    </>
  );
};

export default MainPage;
