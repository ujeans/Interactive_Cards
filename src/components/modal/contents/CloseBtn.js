import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
// assets
import XIcon from "../../../assets/x_svg";

function CloseBtn({ onClose, selectedCard }) {
  const [hover, setHover] = useState(false);

  const handleClose = () => {
    onClose?.();
  };

  return (
    <Wrapper
      onClick={handleClose}
      themeColor={selectedCard.themeColor}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <XIcon
        color={hover ? selectedCard.modalColor : selectedCard.themeColor}
      />
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
