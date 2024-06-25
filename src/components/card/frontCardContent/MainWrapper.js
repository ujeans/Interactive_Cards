import React from "react";
import styled, { css } from "styled-components";

const MainWrapper = ({ card, expand }) => {
  return (
    <Wrapper>
      <ProjectName expand={expand}>{card.projectName}</ProjectName>
      <Desc expand={expand}>{card.desc}</Desc>
    </Wrapper>
  );
};

export default MainWrapper;

const Wrapper = styled.div`
  width: 90%;
  height: auto;
`;

const ProjectName = styled.div`
  margin-bottom: 20px;
  font-size: 2em;

  ${props =>
    props.expand &&
    css`
      margin-bottom: 1px;
      font-size: 1.3em;
    `}
`;

const Desc = styled.div`
  ${props =>
    props.expand &&
    css`
      font-size: 0.6em;
    `}
`;
