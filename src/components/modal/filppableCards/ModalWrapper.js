import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
// styles
import animations from "../../../styles/animations";

const ModalWrapper = forwardRef(({ children }, ref) => {
  return <ModalWrap ref={ref}>{children}</ModalWrap>;
});

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
