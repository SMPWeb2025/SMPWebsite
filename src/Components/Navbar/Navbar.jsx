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
      { text: "Our Objective", link: "/about/our-objective" },
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
      { text: "CPI Calculation", link: "/academics/cpi-calculation" },
      { text: "IDDDP", link: "/academics/idddp" },
      { text: "Semester-Exchange", link: "/academics/semester-exchange" },
    ],
    "Extra Curriculars": [
      { text: "Gymkhana", link: "/extra-curriculars/gymkhana" },
      { text: "Culturals", link: "/extra-curriculars/culturals" },
      { text: "Media", link: "/extra-curriculars/media" },
      { text: "Technical Affairs", link: "/extra-curriculars/technical-affairs" },
      { text: "Institute Bodies", link: "/extra-curriculars/institute-bodies" }
    ],
    "Incoming Students": [
      { text: "Introduction", link: "/incoming-students/introduction" },
      { text: "Onboarding", link: "/incoming-students/onboarding" },
      { text: "Accomodation", link: "/incoming-students/accomodation" },
      { text: "Scholarships", link: "/incoming-students/scholarships" },
      { text: "Fee Structure", link: "/incoming-students/fee-structure" },
      { text: "Letter To Parents", link: "/incoming-students/letter-to-parents" },
    ],
    "Life at IITB": [
      { text: "Introduction", link: "/life-at-iitb/introduction" },
      { text: "In and Around of the campus", link: "/life-at-iitb/in-and-around-the-campus" },
      { text: "Support Available", link: "/life-at-iitb/support-available" },
      { text: "IITB Culture", link: "/life-at-iitb/culture-at-iitb" },
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
