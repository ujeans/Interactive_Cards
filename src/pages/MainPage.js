import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
// data
import { cardText } from "../data/cardData";
// components
import Header from "../components/main/Header";
// pages
import MainCardScroll from "./MainCardScroll";

const MainPage = () => {
  // const cardWrapperRef = useRef(null);

  // useEffect(() => {
  //   const scrollGrid = () => {
  //     const bodyHeight = document.body.offsetHeight;
  //     const mainHeight = document.querySelector("main").offsetHeight;
  //     const cards = document.querySelector(".cards");
  //     const transY = (window.pageYOffset / (mainHeight - bodyHeight)) * -100;

  //     cards.style.setProperty("--scroll", `${transY}%`);
  //   };

  //   window.addEventListener("resize", scrollGrid);
  //   window.addEventListener("scroll", scrollGrid);

  //   // Initial call
  //   scrollGrid();

  //   // Cleanup function
  //   return () => {
  //     window.removeEventListener("resize", scrollGrid);
  //     window.removeEventListener("scroll", scrollGrid);
  //   };
  // }, []);

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
      <MainCardScroll cards={cards} />
    </>
  );
};

export default MainPage;
