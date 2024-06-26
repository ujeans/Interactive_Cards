import React, { useRef, useState } from "react";
// components
import Layout from "../../components/main/scrollCards/Layout";
import CardsWrapper from "../../components/main/scrollCards/CardsWrapper";
import Stack from "../../components/main/scrollCards/Stack";
import CardWrapper from "../../components/card/CardWrapper";
import FrontCardWrapper from "../card/FrontCardWrapper";
// pages
import ModalPage from "../../pages/ModalPage";
// data
import { cardText } from "../../data/cardData";
// hooks
import useScrollGrid from "../../hooks/useScrollGrid";

const ScrollCards = ({ cardSize }) => {
  const cardsRef = useRef(null);
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

  const cards = Array.from(
    { length: 36 },
    (_, i) => cardText[i % cardText.length]
  );

  useScrollGrid(cardsRef);

  return (
    <>
      <Layout>
        <CardsWrapper ref={cardsRef}>
          {cards.map((card, index) => (
            <Stack key={index} href="#" onClick={e => onClickCard(card, e)}>
              <CardWrapper
                className="top"
                size={cardSize}
                bac={card.themeColor}
              >
                <FrontCardWrapper card={card} expand={true} />
              </CardWrapper>
              <CardWrapper
                className="mid-top"
                size={cardSize}
                bac={card.themeColor}
              >
                <FrontCardWrapper card={card} expand={true} />
              </CardWrapper>
              <CardWrapper
                className="mid-bottom"
                size={cardSize}
                bac={card.themeColor}
              >
                <FrontCardWrapper card={card} expand={true} />
              </CardWrapper>
              <CardWrapper
                className="bottom"
                size={cardSize}
                bac={card.themeColor}
              >
                <FrontCardWrapper card={card} expand={true} />
              </CardWrapper>
              <CardWrapper
                className="shadow"
                size={cardSize}
                bac={card.themeColor}
              />
            </Stack>
          ))}
        </CardsWrapper>
      </Layout>
      {isOpen && selectedCard && (
        <ModalPage
          open={isOpen}
          isClosing={isClosing}
          selectedCard={selectedCard}
          clickPosition={clickPosition}
          onClose={handleClose}
          setSelectedCard={setSelectedCard}
          bac={selectedCard.themeColor}
        />
      )}
    </>
  );
};

export default ScrollCards;
