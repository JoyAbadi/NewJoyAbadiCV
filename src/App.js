import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="cv">
      <Header />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
