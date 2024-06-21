import styled, { css, keyframes } from "styled-components";
import { useEffect, useState } from "react";
// components
import ModalContainer from "./ModalContainer";
import LinkIcons from "./contents/LinkIcons";
import CloseBtn from "./contents/CloseBtn";
import FilppableCards from "./contents/FilppableCards";
import ProgressCircleComponent from "./ProgressCircle";
// data
import { cardText } from "../../data/cardData";

const Modal = ({
  onClose,
  isClosing,
  selectedCard,
  clickPosition,
  bac,
  setSelectedCard,
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

  return (
    <ModalContainer>
      <Overlay
        themeColor={selectedCard.modalColor}
        clickPosition={clickPosition}
        isClosing={isClosing}
      >
        <LinkIcons selectedCard={selectedCard} />

        <FilppableCards bac={bac} selectedCard={selectedCard} />

        <ProgressContainer>
          {showProgressCircle && (
            <ProgressCircleComponent
              duration={count}
              setCount={setCount}
              themeColor={selectedCard.themeColor}
              show={showProgressCircle}
              handleNextCard={handleNextCard}
            />
          )}
          <CloseBtn onClose={onClose} selectedCard={selectedCard} />
        </ProgressContainer>
      </Overlay>
    </ModalContainer>
  );
};

export default Modal;

const expandCircle = (x, y) => keyframes`
  0% {
    clip-path: circle(0% at ${x}px ${y}px);
  }
  100% {
    clip-path: circle(150% at ${x}px ${y}px);
  }
`;

const contractCircle = (x, y) => keyframes`
  0% {
    clip-path: circle(150% at ${x}px ${y}px);
  }
  100% {
    clip-path: circle(0% at ${x}px ${y}px);
  }
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ themeColor }) => themeColor};
  z-index: 9999;
  ${({ clickPosition, isClosing }) => css`
    animation: ${isClosing
        ? contractCircle(clickPosition.x, clickPosition.y)
        : expandCircle(clickPosition.x, clickPosition.y)}
      1s ease-in-out forwards;
  `}

  @media (min-width: 361px) {
    flex-direction: column;
    align-content: space-between;
  }
`;

const ProgressContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
