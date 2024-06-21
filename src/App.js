import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
// pages
import MainPage from "./pages/MainPage";

// styles
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

// const GlobalStyle = createGlobalStyle`
//   *, *:before, *:after {
//     border: 0;
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
//   :root {
//     font-size: 18px;
//     --cardW: 14em;
//     --cardH: 8em;
//     --cardZInc: 2em;
//   }
//   body {
//     font: 1em "Open Sans", sans-serif;
//     height: 100vh;
//     overflow-x: hidden;
//   }
//   @media screen and (prefers-color-scheme: dark) {
//     body {
//       background: #3d3d3d;
//     }
//   }
// `;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      {/* <MainPage /> */}
    </ThemeProvider>
  );
};

export default App;
