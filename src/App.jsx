
import './App.css'
import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Project from "./components/Project/Project.jsx";
import ContactMe from "./components/ContactMe/ContactMe.jsx";
import Footer from "./components/Footer/Footer.jsx";



function App() {


  return (
    <div  >
      <Navbar/>
        <div className= "container" >
            <Hero/>
            <Skills/>
            <Project/>
            <ContactMe/>
        </div>
        <Footer/>
    </div>
  )
}

export default App
