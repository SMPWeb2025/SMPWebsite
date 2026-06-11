import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import ScrollToTop from './Components/scrollToTop/scrollToTop.jsx';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Theme>
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
      </Theme>
    </LanguageProvider>
  )
}

export default App
