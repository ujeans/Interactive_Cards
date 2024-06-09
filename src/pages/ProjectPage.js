import React, { useEffect } from "react";
// css
import "../css/projectPage.css";
// components
import Card from "../components/card/Card";

const cardText = [
  {
    strong: "profile",
    name: "Hong yu jin",
    position: "Frontend Developer",
    email: "dbwlsxkal95@gmail.com",
    phone: "010-9171-4297",
    city: "Seoul",
  },
  {
    strong: "project",
    name: "Hong yu jin",
    position: "Frontend Developer",
    email: "dbwlsxkal95@gmail.com",
    phone: "010-9171-4297",
    city: "Seoul",
  },
];

const CityOnly = ({ city }) => (
  <div className="contents">
    <div className="city">{city}</div>
  </div>
);

const ProjectPage = () => {
  useEffect(() => {
    const scrollGrid = () => {
      const bodyHeight = document.body.offsetHeight;
      const mainHeight = document.querySelector("main").offsetHeight;
      const cards = document.querySelector(".cards");

      console.log("bodyHeight:", bodyHeight);
      console.log("mainHeight:", mainHeight);
      console.log("cards:", cards);

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
    <main>
      <div className="cards">
        {cards.map((c, index) => (
          <a href="#" key={index} className="stack">
            <div className="card top">
              <Card {...cardText[c]} />
            </div>
            <div className="card mid-top">
              <CityOnly city={cardText[c].city} />
            </div>
            <div className="card mid-bottom">
              <CityOnly city={cardText[c].city} />
            </div>
            <div className="card bottom">
              <CityOnly city={cardText[c].city} />
            </div>
            <div className="card shadow" />
          </a>
        ))}
      </div>
    </main>
  );
};

export default ProjectPage;
