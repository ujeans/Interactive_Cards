import React, { forwardRef, useState } from "react";
// components
import ModalWrapper from "../../components/modal/filppableCards/ModalWrapper";
import FlippableCard from "../../components/modal/filppableCards/FlippableCard";
import FlippableCardInner from "../../components/modal/filppableCards/FlippableCardInner";

const FilppableCards = forwardRef(({ bac, selectedCard }, ref) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ModalWrapper ref={ref}>
      <FlippableCard
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <FlippableCardInner
          isFlipped={isFlipped}
          bac={bac}
          selectedCard={selectedCard}
        />
      </FlippableCard>
    </ModalWrapper>
  );
});

export default FilppableCards;
