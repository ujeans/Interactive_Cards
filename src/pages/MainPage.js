import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
// components
import ScrollCards from "../components/main/ScrollCards";
import Logo from "../components/main/Logo";

const cardText = [
  {
    strong: "profile",
    name: "Hong yu jin1",
    position: "Frontend Developer",
    email: "dbwlsxkal95@gmail.com",
    phone: "010-9171-4297",
    city: "Seoul",
    themeColor: "#FF5733",
  },
  {
    strong: "project",
    name: "Hong yu jin2",
    position: "Frontend Developer",
    email: "dbwlsxkal95@gmail.com",
    phone: "010-9171-4297",
    city: "Seoul",
    themeColor: "#33FF57",
  },
  {
    strong: "projecttttttttt",
    name: "Hong yu jin3",
    position: "Frontend Developer",
    email: "dbwlsxkal95@gmail.com",
    phone: "010-9171-4297",
    city: "Seoul",
    themeColor: "#3357FF",
  },
  {
    strong: "profileeeeeeeeee",
    name: "Hong yu jin4",
    position: "Frontend Developer",
    email: "dbwlsxkal95@gmail.com",
    phone: "010-9171-4297",
    city: "Seoul",
    themeColor: "#F333FF",
  },
];

const MainPage = () => {
  useEffect(() => {
    const scrollGrid = () => {
      const bodyHeight = document.body.offsetHeight;
      const mainHeight = document.querySelector("main").offsetHeight;
      const cards = document.querySelector(".cards");

      const transY = (window.pageYOffset / (mainHeight - bodyHeight)) * -100;

      cards.style.setProperty("--scroll", transY + "%");
    };

    window.addEventListener("resize", scrollGrid);
    window.addEventListener("scroll", scrollGrid);

    scrollGrid();

    return () => {
      window.removeEventListener("resize", scrollGrid);
      window.removeEventListener("scroll", scrollGrid);
    };
  }, []);

  const cards = Array.from({ length: 36 }, (_, i) => i % cardText.length);

  return (
    <>
      <Helmet>
        <title>ULog - Main</title>
      </Helmet>

      <Logo />
      <ScrollCards cards={cards} cardText={cardText} />
    </>
  );
};

export default MainPage;
