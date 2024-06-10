import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
// components
import ScrollCards from "../components/main/ScrollCards";
import Logo from "../components/common/Log";

const cardText = [
  {
    id: 1,
    projectName: "dsds",
    position: "Front-end / Design",
    date: "Jun 2024",
    themeColor: "#f2332e",
  },
  {
    id: 2,
    projectName: "Card Project",
    position: "Front-end / Design",
    date: "Jun 2024",
    themeColor: "#e97640",
  },

  {
    id: 3,
    projectName: "Naver Webtoon",
    position: "Front-end",
    date: "May 2024",
    themeColor: "#0a9b4e",
  },
  {
    id: 4,
    projectName: "Yeoreum",
    position: "Front-end / Design",
    date: "Sep 2022 ~ Feb 2023",
    themeColor: "#3a74ba",
  },
  {
    id: 5,
    projectName: "StudyMate",
    position: "Front-end / Design",
    date: "Dec 2022",
    themeColor: "#df589a",
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
