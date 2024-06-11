import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
// data
import { cardText } from "../data/cardData";
// components
import ScrollCards from "../components/main/ScrollCards";
import Logo from "../components/common/Log";
// pages
import MainCardScroll from "./MainCardScroll";

const MainPage = () => {
  const cardWrapperRef = useRef(null);

  useEffect(() => {
    const scrollGrid = () => {
      const bodyHeight = document.body.offsetHeight;
      const mainHeight = document.querySelector("main").offsetHeight;
      const cardWrapper = cardWrapperRef.current;

      if (cardWrapper) {
        const transY = (window.pageYOffset / (mainHeight - bodyHeight)) * -100;
        cardWrapper.style.setProperty("--scroll", transY + "%");
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

      <Logo />
      <MainCardScroll cards={cards} cardWrapperRef={cardWrapperRef} />
      {/* <ScrollCards cards={cards} cardWrapperRef={cardWrapperRef} /> */}
    </>
  );
};

export default MainPage;
