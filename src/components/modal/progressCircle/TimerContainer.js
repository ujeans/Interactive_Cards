import React from "react";
import styled from "styled-components";

const TimerContainer = ({ children, show }) => {
  return <CircleContainer show={show}>{children}</CircleContainer>;
};

export default TimerContainer;

const CircleContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
  left: 0;

  @media screen and (min-width: 361px) and (max-width: 410px) {
    width: 40px;
    height: 40px;
  }
`;
