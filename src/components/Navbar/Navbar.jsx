import React from "react";
import "./navbar.css";
import { useTheme } from "./ThemeContext";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#">M</a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <img
              src={themeIcon}
              alt="Color mode icon"
              onClick={toggleTheme}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
