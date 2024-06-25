import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 361px) and (max-width: 410px) {
    flex-direction: row;
  }
`;
