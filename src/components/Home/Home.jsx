import React from "react";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import telegramLight from "../../assets/telegram-light.svg";
import telegramDark from "../../assets/telegram-dark.svg";
import m from "../../assets/m.png";
import mb from "../../assets/Malika.png";
import CV from "./Resume.pdf";
import { useTheme } from "../Navbar/ThemeContext.jsx";
import "./home.css";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  const githubIcon = theme === "light" ? githubLight : githubDark;
  const telegram = theme === "light" ? telegramLight : telegramDark;
  const malika = theme === "light" ? mb : m;

  return (
    <section className="container">
      <div className="home-text">
        <h1>
          <span className="red">Hi</span>, I'm <br />
          <span className="red">Fullstack</span>
          <br /> developer
        </h1>
        <span className="icon">
          <a href="https://github.com/malika7177" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://t.me/malikadjrv" target="_blank">
            <img src={telegram} alt="Telegram icon" />
          </a>
        </span>
        <a href={CV} download>
          <button className="button-57" role="button">
            <span className="text">Resume</span>
            <span>Click to Download</span>
          </button>
        </a>
      </div>
      <div className="home-img">
        <img src={malika} alt="logo" />
      </div>
    </section>
  );
};

export default Home;
