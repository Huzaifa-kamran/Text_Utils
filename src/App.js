import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
    }
  };
  return (
    <BrowserRouter>
      <Navbar title="Text Utils By Huzaifa" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route
          path="/"
          element={
            <TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
