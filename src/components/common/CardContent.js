import React from "react";
import styled from "styled-components";

// SVG 컴포넌트
const DonutLogo = ({ color, expand }) => (
  <SvgWrapper
    expand={expand}
    viewBox="0 0 132 142"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="65" cy="66" r="50" fill={color} />
    <path
      d="M82 50C82 22.3858 104.386 0 132 0V0V100V100C104.386 100 82 77.6142 82 50V50Z"
      fill={color}
    />
    <path
      d="M50.0001 91.0887C77.6143 91.0397 100.04 113.386 100.089 141V141L0.0888882 141.177V141.177C0.0398822 113.563 22.3859 91.1377 50.0001 91.0887V91.0887Z"
      fill={color}
    />
  </SvgWrapper>
);

const SvgWrapper = styled.svg`
  width: ${props => (props.expand ? "167px" : "70px")};
  position: absolute;
  bottom: 0;
  right: 1px;
`;

const CardContent = ({ card, expand }) => {
  return (
    <Content modalColor={card.modalColor}>
      <Introduce expand={expand}>
        {card.introduce.split(",").map((text, index) => (
          <div key={index}>{text}</div>
        ))}
      </Introduce>
      <ProjectName expand={expand}>{card.projectName}</ProjectName>
      <DonutLogo color={card.modalColor} expand={expand} />
    </Content>
  );
};

export default CardContent;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${props => props.modalColor};
  line-height: 1.25;
  -webkit-font-smoothing: antialiased;
`;

const Introduce = styled.h2`
  padding: 10px 0 0 10px;
  font-size: ${props => (props.expand ? "2.5em" : "1.2em")};
  font-weight: bold;
`;

const ProjectName = styled.h3`
  padding: 0 0 5px 10px;
  font-size: ${props => (props.expand ? "1.4em" : "0.8em")};
`;
