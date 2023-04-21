import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import Experiences from "./components/Experiences";
import Formations from "./components/Formations";
import Certifications from "./components/Certifications";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <div className="container mt-8">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </div>
      </Router>
      <footer className="footer">
        <p>Contactez-moi : aimrane.essakhi@gmail.com | 0640832823</p>
      </footer>
    </>
  );
}

export default App;
