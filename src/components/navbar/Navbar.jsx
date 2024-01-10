import "./navbar.scss"
import {motion} from "framer-motion";

const Navbar=()=> {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span 
        initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className="signature">
        Satyam Mishra
        </motion.span>
        <div className="social">
            <a href="https://leetcode.com/Satyam_1718/"><img src="/leetcode.png" alt="" className="socialimgsize" /></a>
            <a href="https://auth.geeksforgeeks.org/user/satyam_1718"><img src="/gfg.png" alt="" className="socialimgsize" /></a>
            <a href="https://github.com/Satyammishra1718"><img src="/github.png" alt="" className="socialimgsize" /></a>
            <a href="https://www.linkedin.com/in/satyam1718/"><img src="/linkedin.png" alt="" className="socialimgsize" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
