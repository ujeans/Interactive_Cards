import { Routes, Route } from "react-router-dom";
// pages
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/project" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
