import { Routes, Route } from "react-router-dom";
// pages
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from "./pages/ProjectPage";
import MainPage from "./pages/MainPage";
import PageNavAnimation from "./containers/PageNavAnimation";
import ProjectDetail from "./pages/ProjectDetail";

import * as loadingTime from "./styles/loadingTime";
function App() {
  return (
    <PageNavAnimation limitTime={loadingTime.page}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project-detail" element={<ProjectDetail />} />
      </Routes>
    </PageNavAnimation>
  );
}

export default App;
