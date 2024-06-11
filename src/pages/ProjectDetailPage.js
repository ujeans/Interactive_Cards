import styled, { css, keyframes } from "styled-components";
import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// data
import { cardText } from "../data/cardData";
// components
import CardWrapper from "../components/projectDetail/CardWrapper";
import ProgressBtn from "../components/projectDetail/ProgressBtn";

const ProjectDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const card = location.state.card || {};
  const initialPosition = location.state.position || {};

  const [currentIndex, setCurrentIndex] = useState(
    cardText.findIndex(c => c.projectName === card.projectName)
  );
  const [count, setCount] = useState(5);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const cardRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (count === 0) {
      // handleNextCard();
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

    if (isInitialLoad) {
      cardElement.addEventListener("animationend", handleAnimationEnd);
    } else {
      startInterval();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      cardElement.removeEventListener("animationend", handleAnimationEnd);
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

  const handleCloseCard = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate("/", { state: { initialPosition } });
    }, 800);
  };

  return (
    <Container themeColor={cardText[currentIndex].themeColor}>
      <CardWrapper
        cardText={cardText}
        currentIndex={currentIndex}
        cardRef={cardRef}
        isInitialLoad={isInitialLoad}
      />
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

const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${({ themeColor }) => themeColor || "#151226"};
  animation: ${expand} 0.8s ease forwards;
  transition: background-color 0.3s ease;
`;
