import { Routes, Route } from "react-router-dom";
// pages
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from "./pages/ProjectPage";
import PageNavAnimation from "./containers/PageNavAnimation";

import * as loadingTime from "./styles/loadingTime";
function App() {
  return (
    <PageNavAnimation limitTime={loadingTime.page}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </PageNavAnimation>
  );
}

export default App;
