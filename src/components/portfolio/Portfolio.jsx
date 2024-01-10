import { useRef, useEffect } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import ecommerce from "./assets/E_Commerce.png";
import foodorder from "./assets/Food_Order.png"
import weatherapi from "./assets/Weather_API.jpg"

const items = [
  {
    id: 1,
    title: "E-Commerce Website",
    img: ecommerce,
    desc: "This E-Commerce Website project, built using Node.js, Express.js and MongoDB is a feature-rich platform that combines seamless user authentication with Authorization of web pages using JSON web tokens (JWT).",
    code_link:"https://github.com/Satyammishra1718/E_Commerce_Website",
  },
  {
    id: 2,
    title: "Food Ordering Website",
    img: foodorder,
    desc: "This is a user responsive MERN Stack website that has essential features such as cart management and order history tracking. Technologies used in the making of the project are Node.js, React.js, MongoDB, Express and other fundamentals of MERN Stack.",
    code_link:"https://github.com/Satyammishra1718/Order_Food_App",
  },
  {
    id: 3,
    title: "Weather Detection Website",
    img: weatherapi,
    desc: "This is a visually captivating weather detection website, harnessing HTML, CSS, and JavaScript to tap into OpenWeatherMap's API and display forecasts with stunning icon-based effects.",
    code_link:"https://github.com/Satyammishra1718/Weather_API",
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.code_link}>View Code</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end 90%", "start 90%"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1 className="topic">My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
