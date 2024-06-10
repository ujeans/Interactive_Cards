// src/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --cardW: ${props => props.theme.cardW};
    --cardH: ${props => props.theme.cardH};
    --cardZInc: ${props => props.theme.cardZInc};
  }

  body {
    font: 1em "Open Sans", sans-serif;
    height: 100vh;
    overflow-x: hidden;
  }

  *,
*:before,
*:after {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyle;
