import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage.tsx";
import JavaBlog from "./Javablog.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/diving-into-java" element={<JavaBlog />} />
      </Routes>
    </BrowserRouter>
  );
}
