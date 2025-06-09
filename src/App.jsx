import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

function App() {

  return (
    <Theme>

      <Navbar />
      <Outlet />
      <Footer />
    </Theme>
    

  )
}

export default App
