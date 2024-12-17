import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState("light");
  
  const [initheme,setTheme] = useState("info");
  const themeChange = (theme) =>{
         setTheme(theme);
         document.documentElement.classList.add("active");
  }

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
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} toggleTheme={themeChange} btnCheck={initheme}/>
      
      <Routes>
        <Route
          path="/"
          element={
            <TextForm 
            heading="Try TextUtils - word counter, character counter, remove extra spaces" 
            mode={mode}
            theme={initheme} />} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
