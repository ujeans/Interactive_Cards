import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// pages
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import ProjectDetail from "./pages/ProjectDetailPage";

// styles
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
// containers
import PageNavAnimation from "./containers/PageNavAnimation";

import * as loadingTime from "./styles/loadingTime";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/project/:projectName" element={<ProjectDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
