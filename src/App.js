import React from "react";
import "./components/pages/styles/App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages";
import About from "./components/pages/about";
import SignUp from "./components/pages/signup";
import CollegeList from "./components/pages/CollgeList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/college-list" element={<CollegeList />} />
      </Routes>
    </Router>
  );
}

export default App;
