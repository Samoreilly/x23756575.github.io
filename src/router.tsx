import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.tsx";
import JavaBlog from "./Javablog.tsx";
import ProjectsPage from "./ProjectsPage.tsx";
import PersonalPage from "./PersonalPage.tsx";
import KafkaDameroPage from "./KafkaDameroPage.tsx";
import FraudDetectorPage from "./FraudDetectorPage.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/diving-into-java" element={<JavaBlog />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/projects/kafka-damero" element={<KafkaDameroPage />} />
        <Route path="/projects/fraud-detector" element={<FraudDetectorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
