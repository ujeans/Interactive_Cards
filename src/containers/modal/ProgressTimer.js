import React, { useState, useEffect } from "react";
import styled from "styled-components";
// components
import TimerContainer from "../../components/modal/progressCircle/TimerContainer";
import StyledSvg from "./StyledSvg";

const ProgressTimer = ({
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
    }, (duration * 1000) / 100);

    return () => clearInterval(interval);
  }, [duration, handleNextCard, setCount]);

  return (
    <TimerContainer show={show}>
      <StyledSvg percentage={percentage} themeColor={themeColor} />
    </TimerContainer>
  );
};

export default ProgressTimer;
