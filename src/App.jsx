import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {

  return (
    <Theme>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </Theme>
    

  )
}

export default App
