import { Navigate, Route, Routes } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail";
import ProjectInnerPage from "../components/ProjectInnerPage";
import Projects from "../components/Projects";
import Registration from "../components/Registration";
import HeaderLayout from "../layout/HeaderLayout";

const AllRoute = (isAutentificated) => {
  if (isAutentificated) {
    return (
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/" element={<Navigate to="projects" />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="projects/:id/:id/:id" element={<ProjectInnerPage />} />
        </Route>
        <Route path="*" element={<Navigate to="projects" />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route path="/" element={<Navigate to="signup" />} />
        <Route path="signup" element={<Registration />} />
      </Route>
      <Route path="*" element={<Navigate to="signup" />} />
    </Routes>
  );
};
export default AllRoute;
