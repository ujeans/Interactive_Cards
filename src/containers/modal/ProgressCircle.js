import React, { useEffect, useState } from "react";
// containers
import Container from "../../components/modal/progressCircle/Container";
import ProgressTimer from "./ProgressTimer";
// components
import CloseBtn from "../../components/modal/progressCircle/CloseBtn";
// data
import { cardText } from "../../data/cardData";

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
        <ProgressTimer
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
