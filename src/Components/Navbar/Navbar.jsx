import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "./logo.svg";

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
        <a href="https://smp.gymkhana.iitb.ac.in/">
          <img src={logo} alt="smp logo" height="60" />
        </a>
        <button className="hamburger" onClick={toggleMobile}>
          ☰
        </button>
      </div>

      <div className={`navContainer ${mobileOpen ? "open" : ""}`}>
        {[
          "About Us",
          "Academics",
          "Extra Curriculars",
          "Incoming Students",
          "Life at IITB",
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
              <div className="dropdownMenu">{getDropdownItems(section)}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const getDropdownItems = (section) => {
  const items = {
    "About Us": [
      "Our Objective",
      "Mentorship",
      "ISMP",
      "English Learning Program",
      "CAT",
      "Team",
    ],
    Academics: [
      "Introduction",
      "Curriculum",
      "Departments",
      "Semester-Exchange",
      "IDDDP",
      "CPI Calculation",
    ],
    "Extra Curriculars": [
      "Gymkhana",
      "Culturals",
      "Media",
      "Technical Affairs",
      "Institute Bodies",
      "Sports",
    ],
    "Incoming Students": [
      "Introduction",
      "Onboarding",
      "Accommodation",
      "Scholarships",
      "Fee Structure",
      "Letter To Parents",
    ],
    "Life at IITB": [
      "Introduction",
      "In and Around of the campus",
      "Support Available",
      "IITB Culture",
    ],
  };
  return items[section].map((text, i) => (
    <div key={i} className="dropdownItem">
      {text}
    </div>
  ));
};

export default Navbar;