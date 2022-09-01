import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeContext from "./themeContext";

import "./index.css";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Page from "./components/Page";
import Cart from "./components/Cart";
import About from "./components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContext.Provider value={main}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeContext.Provider>
);
