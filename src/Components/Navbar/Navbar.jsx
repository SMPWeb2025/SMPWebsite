import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Add/remove class to body to push content down when mobile menu is open
    if (mobileOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
  }, [mobileOpen]);

  const handleMouseEnter = (item) => {
    if (window.innerWidth > 992) setDropdown(item);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 992) setDropdown(null);
  };

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
    setDropdown(null);
  };

  return (
    <div className={`navbarsmp ${scrolled ? "scrolled" : ""}`}>
      <div className="navLogo">
        <Link to='/' 
              className="inline-block"
              onClick={() => {
                  setDropdown(null);
                  setMobileOpen(false);
                }}    
          >
          <img src={logo} alt="smp logo" className="h-16 w-auto"/>
        </Link>

        
        <button className="hamburger" onClick={toggleMobile}>
          ☰
        </button>
      </div>

      <div className={`navContainer ${mobileOpen ? "open" : ""}`}>
        {[
          "Incoming Students",
          "Academics",
          "Life at IITB",
          "Extra Curriculars",
          "About Us",        
          
        ].map((section) => (
          <div
            key={section}
            className={`navItem ${dropdown === section ? "selected" : ""}`}
            onMouseEnter={() => handleMouseEnter(section)}
            onMouseLeave={handleMouseLeave}
            onClick={() =>
              dropdown === section ? setDropdown(null) : setDropdown(section)
            }
          >
            {section}
            {dropdown === section && (
              <div className="dropdownMenu">
                {getDropdownItems(section, () => setMobileOpen(false))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const getDropdownItems = (section, closeMobileMenu) => {
  const items = {
    "About Us": [
      { text: "Our Objective", link: "/about/objective" },
      { text: "Mentorship", link: "/about/mentorship" },
      { text: "ISMP", link: "/about/ismp" },
      { text: "English Learning Program", link: "/about/elp" },
      { text: "CAT", link: "/about/cat" },
      { text: "Team", link: "/about/team" },
    ],
    Academics: [
      { text: "Introduction", link: "/academics/introduction" },
      { text: "Curriculum", link: "/academics/curriculum" },
      { text: "Departments", link: "/academics/departments" },
      { text: "Semester-Exchange", link: "/academics/exchange" },
      { text: "IDDDP", link: "/academics/idddp" },
      { text: "CPI Calculation", link: "/academics/cpi" },
    ],
    "Extra Curriculars": [
      { text: "Gymkhana", link: "/extra/gymkhana" },
      { text: "Culturals", link: "/extra/culturals" },
      { text: "Media", link: "/extra/media" },
      { text: "Technical Affairs", link: "/extra/tech" },
      { text: "Institute Bodies", link: "/extra/bodies" },
      { text: "Sports", link: "/extra/sports" },
    ],
    "Incoming Students": [
      { text: "Introduction", link: "/incoming/introduction" },
      { text: "Onboarding", link: "/incoming/onboarding" },
      { text: "Accommodation", link: "/incoming/accommodation" },
      { text: "Scholarships", link: "/incoming/scholarships" },
      { text: "Fee Structure", link: "/incoming/fee" },
      { text: "Letter To Parents", link: "/incoming/letter" },
    ],
    "Life at IITB": [
      { text: "Introduction", link: "/life/introduction" },
      { text: "In and Around of the campus", link: "/life/around" },
      { text: "Support Available", link: "/life/support" },
      { text: "IITB Culture", link: "/life/culture" },
    ],
  };

  return items[section].map(({ text, link }, i) => (
    <Link to={link} 
          key={i} 
          className="dropdownItem" 
          onClick={() => {
        if (window.innerWidth <= 992) closeMobileMenu();
      }}>
          {text}
    </Link>
  ));
};

export default Navbar;
