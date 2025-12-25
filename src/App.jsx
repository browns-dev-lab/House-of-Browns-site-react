import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Launch from "./pages/Launch";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch" element={<Launch />} />
      </Routes>
    </Router>
  );
}
