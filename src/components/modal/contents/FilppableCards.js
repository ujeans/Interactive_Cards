import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
// components
import CardWrapper from "../../common/card/CardWrapper";
import FrontCardContent from "../../common/card/FrontCardContent";
import BackCardContent from "../../common/card/BackCardContent";

const FilppableCards = ({ bac, selectedCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ModalWrap>
      <FlippableCard
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <FlippableCardInner isFlipped={isFlipped}>
          <CardWrapperFront bac={bac}>
            <FrontCardContent card={selectedCard} />
          </CardWrapperFront>
          <CardWrapperBack bac={bac}>
            <BackCardContent card={selectedCard} expand={true} />
          </CardWrapperBack>
        </FlippableCardInner>
      </FlippableCard>
    </ModalWrap>
  );
};

export default FilppableCards;

const slideInFromDown = keyframes`
   0% {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
        }
        to {
            opacity: 1;
            transform: translateZ(0);
        }
`;

const ModalWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${slideInFromDown} 1s;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const FlippableCard = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  perspective: 1000px;

  @media (max-width: 400px) {
    width: 100%;
    /* height: auto; */
  }
`;

const FlippableCardInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${props =>
    props.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const CardWrapperFront = styled(CardWrapper)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(0deg);

  @media (max-width: 400px) {
  }
`;

const CardWrapperBack = styled(CardWrapper)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);

  @media (max-width: 400px) {
  }
`;
