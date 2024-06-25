import React from "react";
import styled from "styled-components";

const FlippableCard = ({ children, onMouseEnter, onMouseLeave }) => {
  return (
    <Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </Wrapper>
  );
};

export default FlippableCard;

const Wrapper = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  perspective: 1000px;

  @media screen and (min-width: 361px) and (max-width: 410px) {
    width: 100%;
  }
`;
