import React from "react";
import styled, { css } from "styled-components";

const Date = ({ expand, date }) => {
  return <Box expand={expand}>{date}</Box>;
};

export default Date;

const Box = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;

  ${props =>
    props.expand &&
    css`
      bottom: 8px;
      font-size: 10px;
    `}
`;
