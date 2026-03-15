import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaseStudies from "./components/home/CaseStudies";
import Neumorphism from "./pages/designs/Neumorphism";
import Skeuomorphism from "./pages/designs/Skeumorphism";
import Glassmorphism from "./pages/designs/Glassmorphism";
import LiquidGlass from "./pages/designs/LiquidGlass";
import Contemporary from "./pages/designs/Contemporary";
import Brutalist from "./pages/designs/Brutalist";
import Claymorphism from "./pages/designs/Claymorphism";
import Animated from "./pages/designs/Animated";

import WebDevelopment from "./pages/expertise/WebDevelopment";
import SaaSBuild from "./pages/expertise/SaasBuild";
import AppDevelopment from "./pages/expertise/AppDevelopment";
import Branding from "./pages/expertise/Branding";
import Digitalisation from "./pages/expertise/Digitalization";
import SocialMedia from "./pages/expertise/SocialMedia";
import GraphicDesign from "./pages/expertise/GraphicDesign";
import UiUxDesign from "./pages/expertise/UIUXDesign";

export default function App() {
  return (
    <Router>
      <Navbar />

      {/* Push content below fixed navbar */}
      <main className="min-h-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />

          {/* design routes */}
          <Route path="/designs/neumorphism" element={<Neumorphism />} />
          <Route path="/designs/skeuomorphism" element={<Skeuomorphism />} />
          <Route path="/designs/glassmorphism" element={<Glassmorphism />} />
          <Route path="/designs/liquid-glass" element={<LiquidGlass />} />
          <Route path="/designs/contemporary" element={<Contemporary />} />
          <Route path="/designs/brutalist" element={<Brutalist />} />
          <Route path="/designs/claymorphism" element={<Claymorphism />} />
          <Route path="/designs/animated" element={<Animated />} />

          {/* expertise routes */}
          <Route
            path="/expertise/web-development"
            element={<WebDevelopment />}
          />
          <Route path="/expertise/saas-build" element={<SaaSBuild />} />
          <Route
            path="/expertise/app-development"
            element={<AppDevelopment />}
          />
          <Route path="/expertise/branding" element={<Branding />} />
          <Route
            path="/expertise/digitalisation"
            element={<Digitalisation />}
          />
          <Route path="/expertise/social-media" element={<SocialMedia />} />
          <Route path="/expertise/graphic-design" element={<GraphicDesign />} />
          <Route path="/expertise/ui-ux-design" element={<UiUxDesign />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
