import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
// components
import ScrollCards from "../components/main/ScrollCards";
import Logo from "../components/main/Logo";

const cardText = [
  {
    projectName: "Naver Webtoon",
    position: "Frontend Developer",
    email: "dbwlsxkal95@gmail.com",
    phone: "010-9171-4297",
    city: "Seoul",
    themeColor: "#3d7b5b",
  },
  {
    projectName: "Yeoreum",
    position: "Frontend Developer",
    email: "dbwlsxkal95@gmail.com",
    phone: "010-9171-4297",
    city: "Seoul",
    themeColor: "#aac9d1",
  },
  {
    projectName: "StudyMate",
    position: "Frontend Developer",
    email: "dbwlsxkal95@gmail.com",
    phone: "010-9171-4297",
    city: "Seoul",
    themeColor: "#cf5932",
  },
];

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
      <ScrollCards cards={cards} cardWrapperRef={cardWrapperRef} />
    </>
  );
};

export default MainPage;
