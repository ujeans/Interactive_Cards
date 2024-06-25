import React from "react";
import styled, { css } from "styled-components";

const Layout = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Layout;

const Main = styled.main`
  display: block;
  margin: auto;
  position: relative;
  height: calc(var(--cardH, 8em) * 36 - 1.5em);

  ${props => css`
    @media screen and (min-width: 361px) {
      height: calc(var(--cardH, 8em) * 8 - 1.5em);
    }
    @media screen and (min-width: 641px) {
      height: calc(var(--cardH, 8em) * 12 - 1.5em);
    }
    @media screen and (min-width: 961px) {
      height: calc(var(--cardH, 8em) * 9 - 1.5em);
    }
    @media screen and (min-width: 1281px) {
      height: calc(var(--cardH, 8em) * 8 - 1.5em);
    }
  `}
`;
