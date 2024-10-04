import {
  Route,
  Routes
} from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Work from "./Pages/Work";

import React from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About />} /> 
    </Routes>
  );
}

export default App;
