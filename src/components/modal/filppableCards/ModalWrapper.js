import React from "react";
import styled, { css } from "styled-components";
// styles
import animations from "../../../styles/animations";

const ModalWrapper = ({ children }) => {
  return <ModalWrap>{children}</ModalWrap>;
};

export default ModalWrapper;

const ModalWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${css`
    ${animations.slideInFromDown} 1s
  `};

  @media screen and (min-width: 361px) and (max-width: 410px) {
    width: 100%;
  }
`;
