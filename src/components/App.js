import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './../styles/App.css';
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

