import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  );
}

export default App;
