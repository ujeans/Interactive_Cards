import React from "react";
import styled, { keyframes } from "styled-components";

const ModalWrapper = ({ children }) => {
  return <div>{children}</div>;
};

export default ModalWrapper;

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

const ModalWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${slideInFromDown} 1s;

  @media screen and (min-width: 361px) and (max-width: 410px) {
    width: 100%;
  }
`;
