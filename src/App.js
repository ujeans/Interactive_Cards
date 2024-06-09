// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// pages
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from "./pages/ProjectPage";
import MainPage from "./pages/MainPage";
import PageNavAnimation from "./containers/PageNavAnimation";
import ProjectDetail from "./pages/ProjectDetail";

// styles
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import * as loadingTime from "./styles/loadingTime";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageNavAnimation limitTime={loadingTime.page}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/main" element={<MainPage />} /> */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
        </Routes>
      </PageNavAnimation>
    </ThemeProvider>
  );
}

export default App;
