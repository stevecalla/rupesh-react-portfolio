import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap"; // Import all of Bootstrap's JS
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProjectGallery from "./pages/ProjectGallery";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<ProjectGallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
