import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import HerbsPage from "./pages/HerbsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Use 'element' and pass JSX components */}
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/herbs" element={<HerbsPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          {/* <Route path="/blog/:id" element={<BlogDetailPage />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
