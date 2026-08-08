import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact.tsx";
import { Navbar } from "./components/navbar/BottomNavbar.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Projects from "./pages/Projects.tsx";
import TobNavbar from "./components/navbar/TobNavbar.tsx";
import Gaming from "./pages/Gaming.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="relative min-h-lvh w-full">
      {/* Dotted backdrop, fixed so it never takes part in content paint */}
      <div className="fixed inset-0 z-0 bg-black bg-dot-white/[0.2]"></div>
      {/* Radial gradient to give a faded look */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <TobNavbar />
      <div className="relative z-10">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/connect" element={<Contact />} />
            <Route path="/gaming" element={<Gaming />} />
          </Routes>
          <Navbar />
        </BrowserRouter>
      </div>
    </div>
  </React.StrictMode>
);
