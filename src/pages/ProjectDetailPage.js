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
  const card = location.state?.card || {};
  const { x, y } = location.state?.position || { x: "50%", y: "50%" };

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
    }, 1200); // 애니메이션 시간을 늘려 속도를 느리게 합니다.
  };

  return (
    <>
      <Container
        themeColor={cardText[currentIndex].themeColor}
        isClosing={isClosing}
        x={x}
        y={y}
      >
        <CardWrapper
          className="card"
          ref={cardRef}
          isInitialLoad={isInitialLoad}
        >
          <CardContent card={cardText[currentIndex]} />
        </CardWrapper>
        <ProgressBtn handleCloseCard={handleCloseCard} count={count} />
      </Container>
    </>
  );
};

export default ProjectDetailPage;

const expandCircle = keyframes`
  0% {
    clip-path: circle(0% at var(--x) var(--y));
  }
  100% {
    clip-path: circle(150% at var(--x) var(--y));
  }
`;

const contractCircle = keyframes`
  0% {
    clip-path: circle(150% at var(--x) var(--y));
  }
  100% {
    clip-path: circle(0% at var(--x) var(--y));
  }
`;

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ themeColor }) => themeColor || "transparent"};
  opacity: 1;
  overflow: hidden;
  animation: ${expandCircle} 1.2s ease forwards;
  ${({ isClosing }) =>
    isClosing &&
    css`
      animation: ${contractCircle} 1.2s ease forwards;
      opacity: 0;
    `}
  transition: background-color 0.3s ease, opacity 1.2s ease;
  --x: ${({ x }) => x}px;
  --y: ${({ y }) => y}px;
`;
