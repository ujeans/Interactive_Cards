import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
