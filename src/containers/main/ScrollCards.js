import React, { useState } from "react";
// components
import Layout from "../../components/main/scrollCards/Layout";
import CardsWrapper from "../../components/main/scrollCards/CardsWrapper";
import Stack from "../../components/main/scrollCards/Stack";
import CardWrapper from "../../components/common/card/CardWrapper";
import Modal from "../../components/modal/Modal";
import FrontCardContent from "../../components/common/card/FrontCardContent";

const ScrollCards = ({ cards, cardSize }) => {
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
    <>
      <Layout>
        <CardsWrapper>
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
        </CardsWrapper>
      </Layout>
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
    </>
  );
};

export default ScrollCards;
