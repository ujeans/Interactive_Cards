import React from "react";
import styled from "styled-components";
// components
import CardWrapper from "../../card/CardWrapper";
import FrontCardWrapper from "../../../containers/card/FrontCardWrapper";
import BackCardContent from "../../../containers/card/BackCardContent";

const FlippableCardInner = ({ isFlipped, bac, selectedCard }) => {
  return (
    <Wrapper isFlipped={isFlipped}>
      <StyledCardWrapperFront bac={bac}>
        <FrontCardWrapper card={selectedCard} />
      </StyledCardWrapperFront>
      <StyledCardWrapperBack bac={bac}>
        <BackCardContent card={selectedCard} expand={true} />
      </StyledCardWrapperBack>
    </Wrapper>
  );
};

export default FlippableCardInner;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${props =>
    props.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const StyledCardWrapperFront = styled(CardWrapper)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(0deg);
`;

const StyledCardWrapperBack = styled(CardWrapper)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
