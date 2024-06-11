import styled, { css, keyframes } from "styled-components";
import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// data
import { cardText } from "../data/cardData";
// components
import CardWrapper from "../components/common/CardWrapper";
import CardContent from "../components/common/CardContent";
import ProgressBtn from "../components/projectDetail/ProgressBtn";

const ProjectDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const card = location.state.card || {};

  const [currentIndex, setCurrentIndex] = useState(
    cardText.findIndex(c => c.projectName === card.projectName)
  );
  const [count, setCount] = useState(5);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const cardRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setCount(prevCount => {
          if (prevCount === 1) {
            handleNextCard();
            return 5;
          } else {
            return prevCount - 1;
          }
        });
      }, 1000);
    };

    if (isInitialLoad) {
      setIsInitialLoad(false);
      const cardElement = cardRef.current;
      if (cardElement) {
        cardElement.addEventListener("animationend", startInterval);
      }
    } else {
      startInterval();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, isInitialLoad]);

  const handleNextCard = () => {
    const nextIndex = (currentIndex + 1) % cardText.length;
    setCurrentIndex(nextIndex);
    navigate(`/project/${cardText[nextIndex].projectName}`, {
      state: { card: cardText[nextIndex] },
    });
  };

  const handleCloseCard = () => {
    setIsClosing(true);
    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  return (
    <Container
      themeColor={cardText[currentIndex].themeColor}
      isClosing={isClosing}
    >
      <CardWrapper className="card" ref={cardRef} isInitialLoad={isInitialLoad}>
        <CardContent card={cardText[currentIndex]} />
      </CardWrapper>
      <ProgressBtn handleCloseCard={handleCloseCard} count={count} />
    </Container>
  );
};

export default ProjectDetailPage;

const expand = keyframes`
  0% {
    transform: translateX(1400px);
  }
  100% {
    transform: translateX(0px);
  }
`;

const contract = keyframes`
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(1400px);
  }
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ themeColor }) => themeColor || "#151226"};
  animation: ${expand} 0.8s ease forwards;
  ${({ isClosing }) =>
    isClosing
      ? css`
          animation: ${contract} 0.8s ease forwards;
        `
      : css`
          animation: ${expand} 0.8s ease forwards;
        `};
  transition: background-color 0.3s ease;
`;
