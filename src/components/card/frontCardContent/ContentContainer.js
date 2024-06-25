import React from "react";
import styled from "styled-components";

const ContentContainer = ({ children, card }) => {
  return <Container modalColor={card.modalColor}>{children}</Container>;
};

export default ContentContainer;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  color: ${props => props.modalColor};
  -webkit-font-smoothing: antialiased;
`;
