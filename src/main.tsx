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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="h-lvh w-full bg-black bg-dot-white/[0.2] relative flex items-center justify-center">
      <TobNavbar />
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] h-full"></div>
      <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 overflow-y-scroll scrollbar-thin h-screen w-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/connect" element={<Contact />} />
          </Routes>
          <Navbar />
        </BrowserRouter>
      </div>
    </div>
  </React.StrictMode>
);
