import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *, *:before, *:after {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    font-size: 18px;
    --cardW: ${props => props.theme.cardW};
    --cardH: ${props => props.theme.cardH};
    --cardZInc: ${props => props.theme.cardZInc};
  }
  body {
    font: 1em "Open Sans", sans-serif;
    height: 100vh;
    overflow-x: hidden;
  }
  @media screen and (prefers-color-scheme: dark) {
    body {
      background: #3d3d3d;
    }
  }
`;

export default GlobalStyle;
