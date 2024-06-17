import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap');

  :root {
    --cardW: ${props => props.theme.cardW};
    --cardH: ${props => props.theme.cardH};
    --cardZInc: ${props => props.theme.cardZInc};
  }

  body {
    height: 100vh;
    overflow-x: hidden;
  font-family: "Ubuntu Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
  }

  *,
  *:before,
  *:after {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .ubuntu-light {
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    font-style: normal;
  }
`;

export default GlobalStyle;
