import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
// components
import ScrollCards from "../components/main/ScrollCards";
import Logo from "../components/common/Log";

const cardText = [
  {
    projectName: "dsds",
    position: "Front-end / Design",
    email: "dbwlsxkal95@gmail.com",
    phone: "010-9171-4297",
    address: "Jun 2024",
    city: "Seoul",
    // themeColor: "#7ec198".,
    themeColor: "#f2332e",
  },
  {
    projectName: "Card Project",
    position: "Front-end / Design",
    email: "dbwlsxkal95@gmail.com",
    phone: "010-9171-4297",
    address: "Jun 2024",
    city: "Seoul",
    // themeColor: "#f6eb68",
    themeColor: "#e97640",
  },

  {
    projectName: "Naver Webtoon",
    position: "Front-end",
    email: "dbwlsxkal95@gmail.com",
    phone: "010-9171-4297",
    address: "May 2024",
    city: "Seoul",
    // themeColor: "#ef94b9",
    themeColor: "#0a9b4e",
  },
  {
    projectName: "Yeoreum",
    position: "Front-end / Design",
    email: "dbwlsxkal95@gmail.com",
    phone: "010-9171-4297",
    address: "Sep 2022 ~ Feb 2023",
    city: "Seoul",
    // themeColor: "#87cfed",
    themeColor: "#3a74ba",
  },
  {
    projectName: "StudyMate",
    position: "Front-end / Design",
    email: "dbwlsxkal95@gmail.com",
    phone: "010-9171-4297",
    address: "Dec 2022",
    city: "Seoul",
    // themeColor: "#f2a75b",
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
