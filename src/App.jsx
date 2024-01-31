import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


function App() {


  return (
    <div className = 'p-[20px]  ' >
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default App
