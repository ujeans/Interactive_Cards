import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// pages
import LoadingPage from "./pages/LoadingPage";
import MainPage from "./pages/MainPage";

// styles
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        {/* <Route path="/" element={<MainPage />} /> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
