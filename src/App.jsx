import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // <-- Use HashRouter

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./components/HomePage";
import AllProjects from "./components/AllProjects";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<AllProjects />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
