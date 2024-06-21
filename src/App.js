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
  useEffect(() => {
    const scrollGrid = () => {
      const bodyHeight = document.body.offsetHeight;
      const mainHeight = document.querySelector("main").offsetHeight;
      const cards = document.querySelector(".cards");
      const transY = (window.pageYOffset / (mainHeight - bodyHeight)) * -100;

      cards.style.setProperty("--scroll", `${transY}%`);
    };

    window.addEventListener("resize", scrollGrid);
    window.addEventListener("scroll", scrollGrid);

    // Initial call
    scrollGrid();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", scrollGrid);
      window.removeEventListener("scroll", scrollGrid);
    };
  }, []);
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
