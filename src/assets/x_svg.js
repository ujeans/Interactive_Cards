import React from "react";
import styled from "styled-components";

const XIcon = ({ color }) => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
  >
    <path
      d="M6 18L18 6M6 6L18 18"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default XIcon;

const Svg = styled.svg`
  width: 40px;
  height: 40px;
  path {
    stroke: ${({ color }) => color};
  }
`;
