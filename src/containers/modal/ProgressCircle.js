import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import ProgressCircleComponent from "../../components/modal/ProgressCircle";
import CloseBtn from "../../components/modal/contents/CloseBtn";
// data
import { cardText } from "../../data/cardData";
// components

const ProgressCircle = ({
  selectedCard,
  setSelectedCard,
  onClose,
  themeColor,
  modalColor,
}) => {
  const [count, setCount] = useState(5);

  const [showProgressCircle, setShowProgressCircle] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(
    cardText.findIndex(c => c.projectName === selectedCard.projectName)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgressCircle(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.location.hash = selectedCard.projectName
      .replace(/\s+/g, "-")
      .toLowerCase();

    return () => {
      window.location.hash = "";
    };
  }, [selectedCard]);

  useEffect(() => {
    setSelectedCard(cardText[currentIndex]);
  }, [currentIndex]);

  const handleNextCard = () => {
    const nextIndex = (currentIndex + 1) % cardText.length;
    setCurrentIndex(nextIndex);
  };

  const handleClose = () => {
    onClose?.();
  };

  return (
    <Container>
      {showProgressCircle && (
        <ProgressCircleComponent
          duration={count}
          setCount={setCount}
          themeColor={themeColor}
          show={showProgressCircle}
          handleNextCard={handleNextCard}
        />
      )}
      <CloseBtn
        onClose={handleClose}
        themeColor={themeColor}
        modalColor={modalColor}
      />
    </Container>
  );
};

export default ProgressCircle;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
