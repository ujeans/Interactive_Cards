import React, { useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import MainPage2 from "./test/MainPage2"; // 수정된 경로
import MainPage from "./pages/MainPage";
import theme from "./styles/theme";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    font-size: 18px;
    --cardW: 14em;
    --cardH: 8em;
    --cardZInc: 2em;
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

const App = () => {
  // useEffect(() => {
  //   const scrollGrid = () => {
  //     const bodyHeight = document.body.offsetHeight;
  //     const mainHeight = document.querySelector("main").offsetHeight;
  //     const cards = document.querySelector(".cards");
  //     const transY = (window.pageYOffset / (mainHeight - bodyHeight)) * -100;

  //     cards.style.setProperty("--scroll", `${transY}%`);
  //   };

  //   window.addEventListener("resize", scrollGrid);
  //   window.addEventListener("scroll", scrollGrid);

  //   // Initial call
  //   scrollGrid();

  //   // Cleanup function
  //   return () => {
  //     window.removeEventListener("resize", scrollGrid);
  //     window.removeEventListener("scroll", scrollGrid);
  //   };
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <MainPage2 /> */}
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
