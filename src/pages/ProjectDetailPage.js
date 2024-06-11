import styled, { keyframes } from "styled-components";
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

  const cardRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (count === 0) {
      handleNextCard();
      setCount(5);
    }
  }, [count]);

  useEffect(() => {
    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);
    };

    const cardElement = cardRef.current;

    const handleAnimationEnd = () => {
      startInterval();
      setIsInitialLoad(false);
    };

    if (isInitialLoad && cardElement) {
      cardElement.addEventListener("animationend", handleAnimationEnd);
    } else if (cardElement) {
      startInterval();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (cardElement) {
        cardElement.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, [currentIndex, isInitialLoad]);

  const handleNextCard = () => {
    setIsInitialLoad(false);
    const nextIndex = (currentIndex + 1) % cardText.length;
    setCurrentIndex(nextIndex);
    navigate(`/project/${cardText[nextIndex].projectName}`, {
      state: { card: cardText[nextIndex] },
    });
  };

  return (
    <Container themeColor={cardText[currentIndex].themeColor}>
      <CardWrapper className="card" ref={cardRef} isInitialLoad={isInitialLoad}>
        <CardContent card={cardText[currentIndex]} />
      </CardWrapper>
      <ProgressBtn handleNextCard={handleNextCard} count={count} />
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

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ themeColor }) => themeColor || "#151226"};
  animation: ${expand} 0.8s ease forwards;
  transition: background-color 0.3s ease;
`;
