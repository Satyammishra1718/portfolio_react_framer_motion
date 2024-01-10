import "./me.scss";
import {motion} from 'framer-motion';

const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
}

function Me() {
  return (
    <div className="me">
    <div className="wrapper">
       <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <h2 >SATYAM MISHRA</h2>
        <h1>MERN STACK DEVELOPER</h1> 
        <div className="buttons">
            <button className="btn_projects"><a href="https://github.com/Satyammishra1718">Explore my projects</a></button>
            <button className="btn_contact"><a href="../../Resume.pdf" download="Resume.pdf">Download CV</a></button>
        </div>
        <motion.img variants={textVariants}  animate="scrollButton"  src="/scroll.png" alt="" />
      </motion.div>
    </div>
      <div className="imageContainer">
        <img src="/man.gif" alt="" className="gif_img" />
      </div>
    </div>
  )
}

export default Me
