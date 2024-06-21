import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap');

 *, *:before, *:after {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    /* font-size: 18px; */
    --cardW: ${props => props.theme.cardW};
    --cardH: ${props => props.theme.cardH};
    --cardZInc: ${props => props.theme.cardZInc};
  }
  body {
    font: 1em "Open Sans", sans-serif;
    height: 100vh;
    overflow-x: hidden;

    font-family: "Ubuntu Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-variation-settings:
      "wdth" 100;
  }

  .ubuntu-light {
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    font-style: normal;
  }
  
  @media screen and (prefers-color-scheme: dark) {
    body {
      background: #3d3d3d;
    }
  }
`;

export default GlobalStyle;
