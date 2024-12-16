import React, { useState } from "react";
import "./navbar.css";
import { useTheme } from "./ThemeContext";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const themeIcon = theme === "light" ? sun : moon;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <a href="#">M</a>
      </div>
      
      <div className="group">
        <nav className={isMenuOpen ? "open" : ""}>
          <ul>
            <li>
              <a href="#" onClick={() => scrollToSection("#")}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>About</a>
            </li>
            <li>
              <a href="#projects" onClick={() => scrollToSection("projects")}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a>
            </li>
          </ul>
        </nav>
        <img
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
          className="theme-icon"
        />
      <div className="menu-container">
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
