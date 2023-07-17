import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-reveal";
import "./style.css";

const About = () => {
  const aboutRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const aboutElement = aboutRef.current;
    const handleScroll = () => {
      // Periksa apakah elemen "about" masuk dalam viewport saat di-scroll
      const topPosition = aboutElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const bottomPosition = aboutElement.getBoundingClientRect().bottom;

      // Setelah melampaui 20% dari atas atau bawah viewport, elemen akan dianggap visible
      const isVisibleFromTop = topPosition < windowHeight * 0.8;
      const isVisibleFromBottom = bottomPosition > windowHeight * 0.2;

      if (isVisibleFromTop && isVisibleFromBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Hapus event listener saat komponen unmount untuk mencegah memory leak
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="about">
      <div
        ref={aboutRef}
        className={isVisible ? "about-visible" : "about-hidden"}
      >
        <Fade>
          <div>
            <h2>About Me</h2>
            <p>
              Hai, saya Joy Rockniel Abadi. Saya lahir di Makassar, 31 Maret
              2004. Saat ini, menempuh pendidikan tinggi di Universitas
              Multimedia Nusantara, Tangerang, Banten. Saya mengambil jurusan
              informatika angkatan 2022. Saya tertarik untuk mempelajari tentang
              website. Memiliki ketelitian yang baik, bertanggung jawab, punya
              jiwa kepemimpinan dan jiwa mengajar yang baik.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
