import React from "react";
import { Fade } from "react-reveal";
import "./style.css";

const Skills = () => {
  return (
    <section className="skills">
      <Fade>
        <h2>Skills</h2>
      </Fade>
      <ul>
        <Fade cascade>
          {" "}
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
              alt="HTML Logo"
              className="logo-icon"
            />
            HTML
          </li>
          <li>
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-svg-vector.svg"
              alt="CSS Logo"
              className="logo-icon"
            />
            CSS
          </li>
          <li>
            <img
              src="https://www.vhv.rs/dpng/d/524-5245981_react-js-logo-png-transparent-png-download.png"
              alt="React Logo"
              className="logo-icon"
            />
            React.js
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
              alt="JavaScript Logo"
              className="logo-icon"
            />
            JavaScript
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
              alt="Bootstrap Logo"
              className="logo-icon"
            />
            Boostrap
          </li>
        </Fade>
      </ul>
    </section>
  );
};

export default Skills;
