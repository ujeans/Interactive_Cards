import React from "react";
import styled from "styled-components";

const CardBottom = ({ card }) => {
  return (
    <>
      <ProjectName>{card.projectName}</ProjectName>
      <CircleLog className="one" modalColor={card.modalColor} />
      <CircleLog className="two" modalColor={card.modalColor} />
      <CircleLog className="three" modalColor={card.modalColor} />
    </>
  );
};

export default CardBottom;

const ProjectName = styled.h3`
  font-size: 0.8em;
`;

const CircleLog = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.modalColor};

  &.one {
    top: 50%;
    left: 75%;
  }

  &.two {
    width: 50px;
    height: 25px;
    top: 87%;
    left: 70%;
    border-radius: 25px 25px 0 0;
  }

  &.three {
    width: 25px;
    height: 50px;
    top: 40%;
    left: 93%;
    border-radius: 25px 0 0 25px;
  }
`;
