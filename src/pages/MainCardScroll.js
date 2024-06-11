import React, { useState } from "react";
import styled, { css } from "styled-components";

// components
import CardWrapper from "../components/common/CardWrapper";
import Modal from "../components/modal/Modal";

const DateOnly = ({ date }) => (
  <Contents>
    <Date>{date}</Date>
  </Contents>
);

const MainCardScroll = ({ cards, cardWrapperRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const onClickCard = card => {
    setSelectedCard(card);
    setIsOpen(true);
  };

  return (
    <Container>
      <Main>
        <Cards ref={cardWrapperRef}>
          {cards.map((card, index) => (
            <Stack key={index} href="#" onClick={() => onClickCard(card)}>
              <CardWrapper className="top">
                <CardContent>{card.projectName}</CardContent>
              </CardWrapper>
              <CardWrapper className="mid-top">
                <DateOnly date={card.date} />
              </CardWrapper>
              <CardWrapper className="mid-bottom">
                <DateOnly date={card.date} />
              </CardWrapper>
              <CardWrapper className="bottom">
                <DateOnly date={card.date} />
              </CardWrapper>
              <CardWrapper className="shadow" />
            </Stack>
          ))}
        </Cards>
      </Main>
      {isOpen && selectedCard && (
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          selectedCard={selectedCard}
        />
      )}
    </Container>
  );
};

export default MainCardScroll;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  display: block;
  margin: auto;
  position: relative;
  height: calc(var(--cardH, 8em) * 36 - 1.5em);
  ${props => css`
    @media screen and (min-width: 361px) {
      height: calc(var(--cardH, 8em) * 18 - 1.5em);
    }
    @media screen and (min-width: 641px) {
      height: calc(var(--cardH, 8em) * 12 - 1.5em);
    }
    @media screen and (min-width: 961px) {
      height: calc(var(--cardH, 8em) * 9 - 1.5em);
    }
    @media screen and (min-width: 1281px) {
      height: calc(var(--cardH, 8em) * 8 - 1.5em);
    }
  `}
`;

const Cards = styled.div`
  --scroll: 0;
  display: grid;
  grid-template: repeat(36, var(--cardH, 8em)) / var(--cardW, 14em);
  grid-gap: 4em;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) rotateX(45deg) rotateZ(45deg)
    translateY(var(--scroll));
  transform-origin: 50% 0;
  transform-style: preserve-3d;
  ${props => css`
    @media screen and (min-width: 361px) {
      grid-template: repeat(18, var(--cardH, 8em)) / repeat(
          2,
          var(--cardW, 14em)
        );
    }
    @media screen and (min-width: 641px) {
      grid-template: repeat(12, var(--cardH, 8em)) / repeat(
          3,
          var(--cardW, 14em)
        );
    }
    @media screen and (min-width: 961px) {
      grid-template: repeat(9, var(--cardH, 8em)) / repeat(
          4,
          var(--cardW, 14em)
        );
    }
    @media screen and (min-width: 1281px) {
      grid-template: repeat(8, var(--cardH, 8em)) / repeat(
          5,
          var(--cardW, 14em)
        );
    }
  `}
`;

const Stack = styled.a`
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;

  &:hover .top,
  &:focus .top {
    transform: translateZ(calc(var(--cardZInc, 2em) * 4));
  }
  &:hover .mid-top,
  &:focus .mid-top {
    transform: translateZ(calc(var(--cardZInc, 2em) * 3));
  }
  &:hover .mid-bottom,
  &:focus .mid-bottom {
    transform: translateZ(calc(var(--cardZInc, 2em) * 2));
  }
  &:hover .bottom,
  &:focus .bottom {
    transform: translateZ(var(--cardZInc, 2em));
  }
  &:hover .shadow,
  &:focus .shadow {
    filter: blur(5px);
    -webkit-filter: blur(5px);
    opacity: 0.2;
  }
`;

const CardContent = styled.div`
  z-index: 1;
  color: #000;
  transition: transform 0.3s;
  position: relative;
`;

const Contents = styled.div`
  color: #000;
  font-size: 0.5em;
  line-height: 1.25;
  -webkit-font-smoothing: antialiased;
`;

const Date = styled.div`
  margin-top: 11.75em;
`;
