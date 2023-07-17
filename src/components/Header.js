import React from "react";
import { Fade } from "react-reveal";
import "./style.css";

const Header = () => {
  return (
    <header className="header-container">
      <Fade top>
        <div className="fade-content">
          <img
            src={"JoyRocknielAbadi.jpeg"}
            alt="Joy Rockniel Abadi"
            className="profile-photo"
          />
          <h1>Joy Rockniel Abadi</h1>
          <p>Informatika 2022</p>
        </div>
      </Fade>
    </header>
  );
};

export default Header;
