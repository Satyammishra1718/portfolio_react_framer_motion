import "./skillset.scss";
import {motion, useScroll, useTransform ,useInView} from "framer-motion";

import html from "./assets/HTML.png"
import css from "./assets/CSS.png"
import javascript from "./assets/JavaScript.png"
import nodejs from "./assets/NodeJS.png"
import reactjs from "./assets/ReactJS.png"
import redux from "./assets/Redux.png"
import sql from "./assets/SQL.png"
import tailwindcss from "./assets/TailwindCSS.png"
import scss from "./assets/SCSS.png"
import mongodb from "./assets/MongoDB.png"
import github from "./assets/Github.png"
import nextjs from "./assets/NextJS.png"
import { useRef , useEffect } from "react";

function Skillset() {
    const ref = useRef(null);
    const whileInView = useInView(ref,{margin:"-100px" });
    const {scrollYProgress} = useScroll({
      target:ref,
      offset:["start end", "end end"]
    })

    const scaleProgress=useTransform(scrollYProgress,[0,1],[0.7,1]);
    const isMobile = window.innerWidth <= 768;

     const techs = [
        { id: 1, src: html, title: "HTML", style: "orange" },
        { id: 2, src: css, title: "CSS", style: "blue" },
        { id: 3, src: javascript, title: "JavaScript", style: "yellow" },
        { id: 4, src: reactjs, title: "ReactJS", style: "lightblue" },
        { id: 5, src: redux, title: "Redux", style: "purple" },
        { id: 6, src: tailwindcss, title: "Tailwind", style: "lightblue" },
        { id: 7, src: scss, title: "SCSS", style: "pink" },
        { id: 8, src: nextjs, title: "NextJS", style: "white" },
        { id: 9, src: nodejs, title: "NodeJS", style: "green" },
        { id: 10, src: mongodb, title: "MongoDB", style: "lightgreen" },
        { id: 11, src: sql, title: "SQL", style: "orange" },
        { id: 12, src: github, title: "Github", style: "grey" },
      ];

      useEffect(() => {
        if (isMobile) {
          const items = Array.from(ref.current.querySelectorAll(".skill-icon"));
          items.forEach((item, index) => {
            item.style.opacity = whileInView ? 1 : 0;
            item.style.transform = whileInView
              ? "translateX(0) translateY(0)"
              : `translateX(${index % 2 === 0 ? -150 : 150}%) translateY(0px)`;
            item.style.transition = "opacity 1.5s, transform 1.5s";
            item.style.transitionDelay = `${index * 0.1}s`;
          });
        }
      }, [whileInView]);

      return (
        <motion.div className={`skillset ${isMobile ? 'mobile' : ''}`} ref={ref}>
          {isMobile ? (
            <motion.div className="mobskillset">
              {techs.map(({ id, src, title, style }) => (
                <div key={id} className={`skill-icon ${style}`}>
                  <img src={src} alt="" />
                  <p>{title}</p>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div style={{ scale: scaleProgress, opacity: scrollYProgress }}>
              {techs.map(({ id, src, title, style }) => (
                <div key={id} className={`skill-icon ${style}`}>
                  <img src={src} alt="" />
                  <p>{title}</p>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      );
      
    };
    
    export default Skillset;