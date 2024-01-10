import React, { useRef } from "react";
import "./education.scss";
import vgec from "./assets/Vgec.png";
import xaviers from "./assets/Xaviers.jpg";
import {motion , useInView } from "framer-motion";

function Education() {
  const ref = useRef(null);
  const whileInView = useInView(ref,{margin:"-100px" });
 
  const textStack = [
    {
      id: 1,
      Name: "VGEC, Ahmedabad",
      Degree: "Bachelors of Engineering",
      Course: "Electronics & Communication",
      Grade: "8.65/10",
      Year: "2020-2024",
      Style:"college",
      src: vgec,
    },
    {
      id: 2,
      Name: "St. Xavier's High School, Surat",
      Degree: "Higher Secondary Schooling (HSC)",
      Course: "Science/Maths",
      Percentage: "73.38%",
      Year: "2018-2020",
      Style:"school",
      src: xaviers,
    },
  ];

  return (
    <div className="education-container">
      <motion.h1 className="acad-profile" initial={{opacity:0,translateY:-50}}
       animate={whileInView ?  { opacity: 1, translateY: 0 } : {}} transition={{duration:1.5}} ref={ref}>Education Background</motion.h1>
      <div className="education">
        {textStack.map(({ id, Name, Degree, Course, Grade, Percentage, src, Year,Style }) => (
          <motion.div key={id} className={`education-item ${Style}`} initial={{opacity:0,translateX:id % 2 ===0 ?50 : -50,translateY:-50}}
          animate={whileInView ?  { opacity: 1, translateX: 0, translateY: 0 } : {}} 
          transition={{duration:0,delay:id*0.5}} ref={ref} >
            <img src={src} alt="" />
            <h1>{Name}</h1>
            <h2>{Degree}</h2>
            <h3>{Course}</h3>
            <p>{Year}</p>
            <p>
              {Grade ? `CGPA: ${Grade}` : Percentage ? `Percentage: ${Percentage}` : null}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Education;
