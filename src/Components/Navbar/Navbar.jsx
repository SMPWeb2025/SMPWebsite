import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { sectionTranslations, dropdownTranslations } from "../../translations/navTranslations";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
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

  const displaySection = (section) =>
    language === "hi" ? sectionTranslations[section] || section : section;

  return (
    <div className={`navbarsmp ${scrolled ? "scrolled" : ""}`}>
      <div className="navLogo">
        <Link
          to="/"
          className="inline-block"
          onClick={() => {
            setDropdown(null);
            setMobileOpen(false);
          }}
        >
          <img src={logo} alt="smp logo" className="h-16 w-auto" />
        </Link>

        <div className="navbar-right-controls">
          {/* <div className="lang-toggle">
            <button
              className={`lang-btn ${language === "en" ? "active" : ""}`}
              onClick={() => language !== "en" && toggleLanguage()}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              className={`lang-btn ${language === "hi" ? "active" : ""}`}
              onClick={() => language !== "hi" && toggleLanguage()}
              aria-label="Switch to Hindi"
            >
              हिं
            </button>
          </div> */}
          <button className="hamburger" onClick={toggleMobile}>
            ☰
          </button>
        </div>
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
            {displaySection(section)}
            {dropdown === section && (
              <div className="dropdownMenu">
                {getDropdownItems(section, () => setMobileOpen(false), language)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const getDropdownItems = (section, closeMobileMenu, language) => {
  const items = {
    "About Us": [
      { text: "Our Objective", link: "/about/our-objective" },
      { text: "Mentorship", link: "/about/mentorship" },
      { text: "English Learning Program", link: "/about/elp" },
      { text: "CTO", link: "/about/cto" },
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
      { text: "Sports", link: "/extra-curriculars/gymkhana" },
      { text: "Culturals", link: "/extra-curriculars/culturals" },
      { text: "Media", link: "/extra-curriculars/media" },
      { text: "Technical Affairs", link: "/extra-curriculars/technical-affairs" },
      { text: "Institute Bodies", link: "/extra-curriculars/institute-bodies" },
    ],
    "Incoming Students": [
      { text: "Introduction", link: "/incoming-students/introduction" },
      { text: "Onboarding", link: "/incoming-students/onboarding" },
      { text: "Things to bring", link: "/incoming-students/things-to-bring" },
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

  return items[section].map(({ text, link }, i) => {
    const displayText =
      language === "hi"
        ? dropdownTranslations[section]?.[text] || text
        : text;
    return (
      <Link
        to={link}
        key={i}
        className="dropdownItem"
        onClick={() => {
          if (window.innerWidth <= 992) closeMobileMenu();
        }}
      >
        {displayText}
      </Link>
    );
  });
};

export default Navbar;
