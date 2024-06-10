import React, { useEffect, useState, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
// components
import Card from "../components/main/Card";

const cardText = [
  {
    id: 1,
    projectName: "dsds",
    position: "Front-end / Design",
    date: "Jun 2024",
    themeColor: "#f2332e",
  },
  {
    id: 2,
    projectName: "Card Project",
    position: "Front-end / Design",
    date: "Jun 2024",
    themeColor: "#e97640",
  },
  {
    id: 3,
    projectName: "Naver Webtoon",
    position: "Front-end",
    date: "May 2024",
    themeColor: "#0a9b4e",
  },
  {
    id: 4,
    projectName: "Yeoreum",
    position: "Front-end / Design",
    date: "Sep 2022 ~ Feb 2023",
    themeColor: "#3a74ba",
  },
  {
    id: 5,
    projectName: "StudyMate",
    position: "Front-end / Design",
    date: "Dec 2022",
    themeColor: "#df589a",
  },
];

const ProjectDetail = () => {
  const { projectName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const card = location.state.card || {}; // card 객체 가져오기

  const [currentIndex, setCurrentIndex] = useState(
    cardText.findIndex(c => c.projectName === card.projectName)
  );
  const [count, setCount] = useState(5);
  const cardRef = useRef(null);
  const intervalRef = useRef(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (count === 0) {
      handleNextCard();
      setCount(5);
    }
  }, [count]);

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);
    };

    const cardElement = cardRef.current;

    const handleAnimationEnd = () => {
      startInterval();
      setIsAnimating(false);
    };

    if (isInitialLoad) {
      cardElement.addEventListener("animationend", handleAnimationEnd);
    } else {
      startInterval();
    }

    return () => {
      clearInterval(intervalRef.current);
      cardElement.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [currentIndex, isInitialLoad]);

  const handleNextCard = () => {
    setIsAnimating(false);
    const nextIndex = (currentIndex + 1) % cardText.length;
    setCurrentIndex(nextIndex);
    navigate(`/project/${cardText[nextIndex].projectName}`, {
      state: { card: cardText[nextIndex] },
    });
  };

  return (
    <Container themeColor={cardText[currentIndex].themeColor}>
      <CardWrapper key={currentIndex} ref={cardRef} isAnimating={isAnimating}>
        <Card card={cardText[currentIndex]} />
      </CardWrapper>
      <Button onClick={handleNextCard}>{count}</Button>
    </Container>
  );
};

export default ProjectDetail;

const slideIn = keyframes`
  0% {
    transform: translateX(500px) scale(0.2);
  }
  100% {
    transform: translateX(0px) scale(1);
  }
`;

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

const CardWrapper = styled.div`
  position: absolute;
  width: 350px;
  height: 200px;
  color: #000;
  padding: 0.75em;
  transition: all 0.3s;
  background-color: #f5f5f5;
  box-shadow: -1px -1px 0 rgba(0, 0, 0, 0.2) inset;
  ${({ isAnimating }) =>
    isAnimating &&
    css`
      animation: ${slideIn} 1.5s ease-in-out forwards;
    `}
`;

const Button = styled.button`
  margin-top: 300px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #bf307f;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #a0276b;
  }
`;
