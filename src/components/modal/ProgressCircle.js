import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProgressCircleComponent = ({
  duration,
  themeColor,
  show,
  handleNextCard,
  setCount,
}) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev < 100) {
          return prev + 1;
        } else {
          handleNextCard();
          setCount(5);
          return 0;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, [duration, handleNextCard, setCount]);

  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <CircleContainer show={show}>
      <StyledSvg width="60" height="60">
        <BackgroundCircle cx="30" cy="30" r={radius} />
        <ProgressCircle
          cx="30"
          cy="30"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          themeColor={themeColor}
        />
      </StyledSvg>
    </CircleContainer>
  );
};

export default ProgressCircleComponent;

const CircleContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
  left: 0;
`;

const StyledSvg = styled.svg``;

const BackgroundCircle = styled.circle`
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 5;
`;

const ProgressCircle = styled.circle`
  fill: none;
  stroke: ${({ themeColor }) => themeColor};
  stroke-width: 5;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.05s linear;
  transform-origin: center;
`;
