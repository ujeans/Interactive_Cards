import React, { useEffect } from "react";
import "./App.css";

const cardText = [
  {
    name: "Don Joel",
    position: "Web Developer",
    email: "donjoel@example.com",
    phone: "216-362-0665",
    address: "2699 Glenwood Avenue",
    city: "Brook Park, OH 44142",
  },
  {
    name: "Joe Schmoe",
    position: "Graphic Designer",
    email: "joeschmoe@example.com",
    phone: "407-712-8549",
    address: "469 Grand Avenue",
    city: "Winter Park, FL 32789",
  },
  {
    name: "Clint Westwood",
    position: "Customer Support",
    email: "clintwestwood@example.com",
    phone: "865-217-3165",
    address: "2212 Brown Avenue",
    city: "Hartford, TN 37753",
  },
  {
    name: "Ann Thrax",
    position: "Project Manager",
    email: "annthrax@example.com",
    phone: "808-293-4613",
    address: "3801 Stratford Drive",
    city: "Laie, HI 96762",
  },
];

const CardText = ({ name, position, email, phone, address, city }) => (
  <div className="contents">
    <h2>
      <strong>ABC</strong>Design
    </h2>
    <h3>{name}</h3>
    <p>{position}</p>
    <p>✉️ {email}</p>
    <p>📞 {phone}</p>
    <p>{address}</p>
    <p>{city}</p>
  </div>
);

const CityOnly = ({ city }) => <div className="contents city">{city}</div>;

const Card = ({ data, index }) => {
  const cardClass = `card ${
    index % 4 === 1
      ? "background2"
      : index % 4 === 2
      ? "background3"
      : index % 4 === 3
      ? "background4"
      : ""
  }`;
  const hueRotate =
    index % 8 >= 4 && index % 8 <= 7
      ? "hue-rotate90"
      : index % 12 >= 8
      ? "hue-rotate180"
      : "";

  return (
    <a href="#" className={`stack ${hueRotate}`}>
      <div className={`${cardClass} top`}>
        <CardText {...data} />
      </div>
      <div className="card mid-top">
        <CityOnly city={data.city} />
      </div>
      <div className="card mid-bottom">
        <CityOnly city={data.city} />
      </div>
      <div className="card bottom">
        <CityOnly city={data.city} />
      </div>
      <div className="card shadow"></div>
    </a>
  );
};

const App = () => {
  useEffect(() => {
    const scrollGrid = () => {
      const bodyHeight = document.body.offsetHeight;
      const mainHeight = document.querySelector("main").offsetHeight;
      const cards = document.querySelector(".cards");
      const transY = (window.pageYOffset / (mainHeight - bodyHeight)) * -100;

      cards.style.setProperty("--scroll", `${transY}%`);
    };

    window.addEventListener("resize", scrollGrid);
    window.addEventListener("scroll", scrollGrid);

    // Initial call
    scrollGrid();

    // Cleanup function
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
    <main>
      <div className="cards">
        {cards.map((data, index) => (
          <Card key={index} data={data} index={index} />
        ))}
      </div>
    </main>
  );
};

export default App;
