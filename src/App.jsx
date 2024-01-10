import React, { useState, useEffect } from "react";
import {Bars} from "react-loader-spinner";
import "./app.scss";
import Me from "./components/Me/Me";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Sidebar from "./components/sidebar/Sidebar";
import Skillset from "./components/skillset/Skillset";
import Education from "./components/education/Education";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  const [loading, setLoading] = useState(true);
  const color = "#663399";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader-wrapper">
          <Bars color={color} loading={loading} size={150} />
        </div>
      ) : (
        <>
          <Cursor />
          <Sidebar />
          <section id="Homepage">
            <Navbar />
            <Me />
          </section>
          <section id="Education">
            <Education />
          </section>
          <section id="Skillset">
            <Parallax type="Skillset" />
          </section>
          <section>
            <Skillset />
          </section>
          <section id="Portfolio">
            <Parallax type="Portfolio" />
          </section>
          <Portfolio />
          <section id="Contact">
            <Contact />
          </section>
        </>
      )}
    </div>
  );
};

export default App;
