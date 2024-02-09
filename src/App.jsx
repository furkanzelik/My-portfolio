
import './App.css'
import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Skills from "./components/Skills/Skills.jsx";



function App() {


  return (
    <div  >
      <Navbar/>
        <div className= "container" >
            <Hero/>
            <Skills/>
        </div>
    </div>
  )
}

export default App
