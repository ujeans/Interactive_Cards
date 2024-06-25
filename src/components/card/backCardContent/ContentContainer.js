import React from "react";
import styled from "styled-components";

const ContentContainer = ({ children, modalColor }) => {
  return <Container modalColor={modalColor}>{children}</Container>;
};

export default ContentContainer;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => props.modalColor};
`;
