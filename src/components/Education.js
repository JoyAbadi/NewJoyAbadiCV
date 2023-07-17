import React from "react";
import { Fade } from "react-reveal";
import "./style.css";

const Education = () => {
  return (
    <section className="education">
      <Fade>
        <h2>Education</h2>
      </Fade>
      <ul>
        <Fade bottom cascade>
          {" "}
          <li>
            <strong>SMA Zion Makassar</strong>
            <p> 2019 - 2022</p>
          </li>
          <li>
            <strong>SMP Kristen IPEKA Makassar</strong>
            <p> 2016 - 2019</p>
          </li>
          <li>
            <strong>SD Kristen IPEKA Makassar</strong>
            <p> 2010 - 2016</p>
          </li>
        </Fade>
      </ul>
    </section>
  );
};

export default Education;
