import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
// assets
import XIcon from "../../../assets/x_svg";
// styles
import animations from "../../../styles/animations";

function CloseBtn({ onClose, themeColor, modalColor }) {
  const [hover, setHover] = useState(false);

  return (
    <Wrapper
      onClick={onClose}
      themeColor={themeColor}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <XIcon color={hover ? modalColor : themeColor} />
    </Wrapper>
  );
}

export default CloseBtn;

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

const Wrapper = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${({ themeColor }) => themeColor};
  cursor: pointer;
  animation: ${animations.slideInFromRight} 1s ease-in-out forwards;
  opacity: 0;

  &:hover {
    background-color: ${({ themeColor }) => themeColor};
  }

  @media screen and (min-width: 361px) and (max-width: 410px) {
    width: 28px;
    height: 28px;
  }
`;
