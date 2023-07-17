import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import "./style.css";

const Experience = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      if (currentPosition > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`experience ${visible ? "visible" : ""}`}>
      <Fade bottom>
        <h2>Project Experience</h2>
      </Fade>
      <ul>
        <li>
          <strong>HidGemsIndo</strong> - Web Developer
          <p>May 2023 - June 2023</p>
          <Fade bottom>
            <p>
              Proyek yang saya buat ini adalah proyek website yang bertujuan
              untuk memperkenalkan 11 destinasi wisata di Indonesia yang belum
              banyak orang lain ketahui. Di projek ini, saya mengatur bagian
              display website tersebut seperti menyusun nama wisata, deskripsi
              singkat, gambar, serta video referensi yang di embed dari youtube.
            </p>
          </Fade>
          <Fade bottom>
            <a
              href="https://k1exrg.csb.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn third">Lihat Website</button>
            </a>
          </Fade>
        </li>
        <li>
          <strong>Game Tahu Bulat</strong> - Web Designer
          <p>March 2023 - April 2023</p>
          <Fade bottom>
            <p>
              Di game tahu bulat ini, saya bertugas untuk merapikan design game
              yaitu berupa CSS dari game tersebut supaya terlihat lebih rapi dan
              indah untuk dimainkan oleh user. Yang saya lakukan juga adalah
              dengan menghias design about us dari website itu dan memberikan
              design kepada game Tahu Bulat itu sendiri supaya terlihat lebih
              menarik.
            </p>
          </Fade>
          <Fade bottom>
            <a
              href="https://kelompok5-cl.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn third">Lihat Game</button>
            </a>
          </Fade>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
