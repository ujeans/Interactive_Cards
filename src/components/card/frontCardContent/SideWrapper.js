import React from "react";
import styled, { css } from "styled-components";

const SideWrapper = ({ card, expand }) => {
  const text = "Interactive Project Business Card Introduction";

  return (
    <Container>
      <ProjectDescWrapper expand={expand}>
        {card.position
          .split(" ")
          .filter(text => text !== "/")
          .map((text, index) => (
            <div key={index}>{text}</div>
          ))}
        <div>/</div>
        <div>Web</div>
        <div>{card.project}</div>
      </ProjectDescWrapper>
      <CardDescWrapper>
        <CardDescText expand={expand}>
          {text.split(" ").map((word, index) => (
            <div key={index}>{word}</div>
          ))}
        </CardDescText>
        <Name expand={expand}>Eugean Hong</Name>
      </CardDescWrapper>
    </Container>
  );
};

export default SideWrapper;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardDescWrapper = styled.div`
  align-items: flex-end;
  div {
    text-align: right;
  }
`;

const ProjectDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.8em;

  ${props =>
    props.expand &&
    css`
      font-size: 4px;
    `}

  div {
    text-align: right;
  }
`;

const CardDescText = styled.div`
  margin-bottom: 10px;
  font-size: 0.7em;

  ${props =>
    props.expand &&
    css`
      margin-bottom: 4px;
      font-size: 4px;
    `}
`;

const Name = styled.div`
  font-size: 0.1em;

  ${props =>
    props.expand &&
    css`
      font-size: 4px;
    `}
`;
