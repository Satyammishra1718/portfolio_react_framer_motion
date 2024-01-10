import { useState } from "react";
import  { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./togglebutton/ToggleButton";

const variants = {
    open: {
      clipPath: "circle(950px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(25px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" initial="closed" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar;
