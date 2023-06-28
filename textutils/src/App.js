
import './App.css';
import React, { useState } from 'react';
// import About from './components/About';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#000"
    }else{
      setMode("light")
      document.body.style.backgroundColor = "#fff"
    }
  }
  return (
   <>

<Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
<div className="container my-4">
<TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>

{/* <About mode={mode}/> */}
  
</div>
   </>
  );
}

export default App;
