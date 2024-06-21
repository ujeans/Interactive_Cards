import React, { useState } from "react";
import styled, { css } from "styled-components";

// components
import CardWrapper from "../components/common/card/CardWrapper";
import Modal from "../components/modal/Modal";
import FrontCardContent from "../components/common/card/FrontCardContent";

const MainCardScroll = ({ cards, cardWrapperRef, cardSize }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const onClickCard = (card, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    setSelectedCard(card);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setSelectedCard(null);
    }, 1000);
  };

  return (
    <Container>
      <Main>
        <Cards ref={cardWrapperRef}>
          {cards.map((card, index) => (
            <Stack key={index} href="#" onClick={e => onClickCard(card, e)}>
              <CardWrapper
                className="top"
                size={cardSize}
                bac={card.themeColor}
              >
                <FrontCardContent card={card} expand={true} />
              </CardWrapper>
              <CardWrapper
                className="mid-top"
                size={cardSize}
                bac={card.themeColor}
              >
                <FrontCardContent card={card} expand={true} />
              </CardWrapper>
              <CardWrapper
                className="mid-bottom"
                size={cardSize}
                bac={card.themeColor}
              >
                <FrontCardContent card={card} expand={true} />
              </CardWrapper>
              <CardWrapper
                className="bottom"
                size={cardSize}
                bac={card.themeColor}
              >
                <FrontCardContent card={card} expand={true} />
              </CardWrapper>
              <CardWrapper
                className="shadow"
                size={cardSize}
                bac={card.themeColor}
              />
            </Stack>
          ))}
        </Cards>
      </Main>
      {isOpen && selectedCard && (
        <Modal
          open={isOpen}
          isClosing={isClosing}
          selectedCard={selectedCard}
          clickPosition={clickPosition}
          onClose={handleClose}
          setSelectedCard={setSelectedCard}
          bac={selectedCard.themeColor}
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
  height: calc(var(--cardH, 8em) * 8 - 1.5em);
`;

const Cards = styled.div`
  position: absolute;
  --scroll: 0;
  display: grid;
  grid-template: repeat(8, var(--cardH, 8em)) / repeat(5, var(--cardW, 14em));
  grid-gap: 4em;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) rotateX(45deg) rotateZ(45deg)
    translateY(var(--scroll));
  transform-origin: 50% 0;
  transform-style: preserve-3d;
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
