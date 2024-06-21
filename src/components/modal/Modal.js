import styled, { css, keyframes } from "styled-components";
import { useEffect, useState } from "react";
// components
import ModalContainer from "./ModalContainer";
import CardWrapper from "../common/card/CardWrapper";
import FrontCardContent from "../common/card/FrontCardContent";
import BackCardContent from "../common/card/BackCardContent";
import ProgressCircleComponent from "./ProgressCircle";
// data
import { cardText } from "../../data/cardData";
// assets
import github from "../../assets/github.svg";
import gmail from "../../assets/gmail.svg";
import linkedin from "../../assets/linkedin.svg";
import XIcon from "../../assets/x_svg";

const Modal = ({
  onClose,
  isClosing,
  selectedCard,
  clickPosition,
  bac,
  setSelectedCard,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hover, setHover] = useState(false);
  const [count, setCount] = useState(5);
  const [showProgressCircle, setShowProgressCircle] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(
    cardText.findIndex(c => c.projectName === selectedCard.projectName)
  );

  const handleClose = () => {
    onClose?.();
  };

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
        <LinkWrapper>
          <a href={selectedCard.githubLink}>
            <Icon src={github} alt="github" delay="0.5s" />
          </a>
          <a href="mailto:dbwlsxkal95@gmail.com">
            <Icon src={gmail} alt="gmail" delay="0.7s" />
          </a>
          <a href="https://www.linkedin.com/in/%EC%9C%A0%EC%A7%84-%ED%99%8D-15097b304/">
            <Icon src={linkedin} alt="linked-in" delay="0.9s" />
          </a>
        </LinkWrapper>
        <ModalWrap>
          <FlippableCard
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <FlippableCardInner isFlipped={isFlipped}>
              <CardWrapperFront bac={bac}>
                <BackCardContent card={selectedCard} />
              </CardWrapperFront>
              <CardWrapperBack bac={bac}>
                <FrontCardContent card={selectedCard} expand={true} />
              </CardWrapperBack>
            </FlippableCardInner>
          </FlippableCard>
        </ModalWrap>

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

          <CloseButton
            onClick={handleClose}
            themeColor={selectedCard.themeColor}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <XIcon
              color={hover ? selectedCard.modalColor : selectedCard.themeColor}
            />
          </CloseButton>
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

const slideInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
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

  @media (max-width: 400px) {
    flex-direction: column;
    align-content: space-between;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    flex-direction: row;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  opacity: 0;
  animation: ${slideInFromLeft} 0.5s ease-in-out forwards;
  animation-delay: ${({ delay }) => delay};
  cursor: pointer;

  @media (max-width: 400px) {
    width: 30px;
    margin-right: 10px;
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

const ProgressContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${({ themeColor }) => themeColor};
  cursor: pointer;
  animation: ${slideInFromRight} 1s ease-in-out forwards;
  opacity: 0;

  &:hover {
    background-color: ${({ themeColor }) => themeColor};
  }

  @media (max-width: 400px) {
    width: 28px;
    height: 28px;
  }
`;
