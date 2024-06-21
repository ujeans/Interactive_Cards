import React from "react";
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

const MainPage2 = () => {
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

  const cards = Array.from(
    { length: 36 },
    (_, i) => cardText[i % cardText.length]
  );

  return (
    <Main>
      <Cards className="cards">
        {cards.map((data, index) => (
          <div>sss</div>
          // <Card key={index} data={data} index={index} />
        ))}
      </Cards>
    </Main>
  );
};

export default MainPage2;
