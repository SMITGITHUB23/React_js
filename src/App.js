import "./App.css";
import React from "react";
import Home from "app/portals/Home";
import Slider from "./app/portals/Home/components/Mainconntent/Slider";
import Card from "app/portals/Home/components/Mainconntent/Card";
import Footer from "app/portals/Home/components/Footer";
import Header from "app/portals/Home/components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "app/layouts/MainLayouts";
import About from "../src/app/portals/About/Components/Details";
import Contact from "../src/app/portals/Contact";
import Men from "../src/app/portals/Men";
import Women from "../src/app/portals/Women";

function App() {
  return (
    <div className="home">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="slider" element={<Slider />} />
            <Route path="card" element={<Card />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="*" element={<Men />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
