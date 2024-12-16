import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About me</h1>
        <p>
          I am Malika Djurayeva, I am 15 years old. I'm a full-stack developer
          with a passion for creating digital solutions. I enjoy building
          websites and web applications that are both functional and visually
          appealing. I'm skilled in a variety of programming languages and
          technologies, including HTML, CSS, JavaScript, React, and Node.js. I'm
          always eager to learn new things and improve my skills. I'm a hard
          worker and a team player. I'm excited to work on new projects and
          contribute to the success of your team.
        </p>
      </div>
      <div className="skills">
        <div className="about-skills">
        <ul>
          <h2>Front-end skills:</h2>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li> <br />
        </ul>
        <ul>
          <h2>Back-end skills:</h2>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express.js</li>
        </ul></div>
        <h1>Skills</h1>
      </div>
    </section>
  );
};

export default About;
