import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// pages
import MainPage from "./pages/MainPage";
import MainPage2 from "./test/MainPage2";

// styles
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Routes> */}
      {/* <Route path="/" element={<MainPage />} /> */}
      <MainPage2 />
      {/* </Routes> */}
    </ThemeProvider>
  );
}

export default App;
