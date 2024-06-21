import React, { useEffect } from "react";
import styled from "styled-components";

const Main = styled.main`
  display: block;
  margin: auto;
  position: relative;
  height: calc(var(--cardH) * 36 - 1.5em);
  @media screen and (min-width: 361px) {
    height: calc(var(--cardH) * 18 - 1.5em);
  }
  @media screen and (min-width: 641px) {
    height: calc(var(--cardH) * 12 - 1.5em);
  }
  @media screen and (min-width: 961px) {
    height: calc(var(--cardH) * 9 - 1.5em);
  }
  @media screen and (min-width: 1281px) {
    height: calc(var(--cardH) * 8 - 1.5em);
  }
`;

const Cards = styled.div`
  --scroll: 0;
  display: grid;
  grid-template: repeat(36, var(--cardH)) / var(--cardW);
  grid-gap: 1.5em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) rotateX(45deg) rotateZ(45deg)
    translateY(var(--scroll));
  transform-origin: 50% 0;
  transform-style: preserve-3d;
  @media screen and (min-width: 361px) {
    grid-template: repeat(18, var(--cardH)) / repeat(2, var(--cardW));
  }
  @media screen and (min-width: 641px) {
    grid-template: repeat(12, var(--cardH)) / repeat(3, var(--cardW));
  }
  @media screen and (min-width: 961px) {
    grid-template: repeat(9, var(--cardH)) / repeat(4, var(--cardW));
  }
  @media screen and (min-width: 1281px) {
    grid-template: repeat(8, var(--cardH)) / repeat(5, var(--cardW));
  }
`;

const Stack = styled.a`
  display: block;
  position: relative;
  transform-style: preserve-3d;
  &:hover .top,
  &:focus .top {
    transform: translateZ(calc(var(--cardZInc) * 4));
  }
  &:hover .mid-top,
  &:focus .mid-top {
    transform: translateZ(calc(var(--cardZInc) * 3));
  }
  &:hover .mid-bottom,
  &:focus .mid-bottom {
    transform: translateZ(calc(var(--cardZInc) * 2));
  }
  &:hover .bottom,
  &:focus .bottom {
    transform: translateZ(var(--cardZInc));
  }
  &:hover .shadow,
  &:focus .shadow {
    filter: blur(5px);
    -webkit-filter: blur(5px);
    opacity: 0.2;
  }
  &:nth-of-type(even) .contents {
    color: #fff;
  }
  &:nth-of-type(4n + 2) .card {
    background-position: 0 100%;
  }
  &:nth-of-type(4n + 3) .card {
    background-position: 100% 0;
  }
  &:nth-of-type(4n + 4) .card {
    background-position: 100% 100%;
  }
  &:nth-child(8n + 5) .card,
  &:nth-child(8n + 6) .card,
  &:nth-child(8n + 7) .card,
  &:nth-child(8n + 8) .card {
    filter: hue-rotate(90deg);
    -webkit-filter: hue-rotate(90deg);
  }
  &:nth-child(12n + 9) .card,
  &:nth-child(12n + 10) .card,
  &:nth-child(12n + 11) .card,
  &:nth-child(12n + 12) .card {
    filter: hue-rotate(180deg);
    -webkit-filter: hue-rotate(180deg);
  }
`;

const CardContainer = styled.div`
  background-image: url(https://i.postimg.cc/Vspg0Nn2/business-card-backgrounds.png);
  background-size: 200% 200%;
  box-shadow: -1px -1px 0 rgba(0, 0, 0, 0.2) inset;
  color: #000;
  padding: 0.75em;
  position: absolute;
  transition: all 0.3s;
  width: 100%;
  height: 100%;
  &.top {
    transform: translateZ(4px);
    z-index: 4;
  }
  &.mid-top {
    transform: translateZ(3px);
    z-index: 3;
  }
  &.mid-bottom {
    transform: translateZ(2px);
    z-index: 2;
  }
  &.bottom {
    transform: translateZ(1px);
    z-index: 1;
  }
  &.shadow {
    background: #000;
    filter: blur(2px);
    -webkit-filter: blur(2px);
    opacity: 0.4;
  }
`;

const Contents = styled.div`
  color: #000;
  font-size: 0.5em;
  line-height: 1.25;
  -webkit-font-smoothing: antialiased;
`;

const Heading2 = styled.h2`
  color: #aff;
  font-size: 2em;
  font-weight: 400;
  margin-bottom: 0.25em;
`;

const City = styled.div`
  margin-top: 11.75em;
`;

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
  <Contents>
    <Heading2>
      <strong>ABC</strong>Design
    </Heading2>
    <h3>{name}</h3>
    <p>{position}</p>
    <p>✉️ {email}</p>
    <p>📞 {phone}</p>
    <p>{address}</p>
    <p>{city}</p>
  </Contents>
);

const CityOnly = ({ city }) => <Contents className="city">{city}</Contents>;

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
    <Stack href="#" className={`${hueRotate}`}>
      <CardContainer className={`${cardClass} top`}>
        <CardText {...data} />
      </CardContainer>
      <CardContainer className="card mid-top">
        <CityOnly city={data.city} />
      </CardContainer>
      <CardContainer className="card mid-bottom">
        <CityOnly city={data.city} />
      </CardContainer>
      <CardContainer className="card bottom">
        <CityOnly city={data.city} />
      </CardContainer>
      <CardContainer className="card shadow"></CardContainer>
    </Stack>
  );
};

const MainPage2 = () => {
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
    <Main>
      <Cards className="cards">
        {cards.map((data, index) => (
          <Card key={index} data={data} index={index} />
        ))}
      </Cards>
    </Main>
  );
};

export default MainPage2;
