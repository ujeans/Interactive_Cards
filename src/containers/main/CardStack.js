import React from "react";
import styled from "styled-components";
import CardWrapper from "../../components/common/card/CardWrapper";
import FrontCardContent from "../../components/common/card/FrontCardContent";
// components

const CardStack = ({ card, index, cardSize, onClickCard }) => {
  return (
    <Stack key={index} href="#" onClick={e => onClickCard(card, e)}>
      <CardWrapper className="top" size={cardSize} bac={card.themeColor}>
        <FrontCardContent card={card} expand={true} />
      </CardWrapper>
      <CardWrapper className="mid-top" size={cardSize} bac={card.themeColor}>
        <FrontCardContent card={card} expand={true} />
      </CardWrapper>
      <CardWrapper className="mid-bottom" size={cardSize} bac={card.themeColor}>
        <FrontCardContent card={card} expand={true} />
      </CardWrapper>
      <CardWrapper className="bottom" size={cardSize} bac={card.themeColor}>
        <FrontCardContent card={card} expand={true} />
      </CardWrapper>
      <CardWrapper className="shadow" size={cardSize} bac={card.themeColor} />
    </Stack>
  );
};

export default CardStack;

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
