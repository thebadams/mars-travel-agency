import React from "react";
import { Link } from "react-router-dom"
import "./style.css"

//Animation
import { motion } from "framer-motion";
import { titleAnim, fadeAnim } from "../animation";

const Confirm = () => {
    return (
        <div className="space">
        <motion.h1 
            className="confirm" 
            variants={fadeAnim} 
            exit="exit"
            initial="hidden"
            animate="show"
        >
            Flight Is Confirmed 
        </motion.h1>
            <motion.h3 
                className="text2" 
                variants={titleAnim} 
                exit="exit"
                initial="hidden"
                animate="show"
            >
                Pack Your Bags! 
                
            </motion.h3>
            <Link to="/profile">
            <motion.h3 
                className="text3" 
                variants={titleAnim} 
                exit="exit"
                initial="hidden"
                animate="show"
            >
               
               Click to View Ticket 
            </motion.h3>
                  
                </Link>
           
        <div className="ship">
            <div className="ship-rotate">
            <div className="pod"></div>
            <div className="fuselage"></div>
            </div>
        </div>
        <div className="ship-shadow"></div>
        <div className="mars">
            <div className="tentacle"></div>
            <div className="flag">
            <div className="small-tentacle"></div>
            </div>
            <div className="planet">
            <div className="surface"></div>
            <div className="crater1"></div>
            <div className="crater2"></div>
            <div className="crater3"></div>
            </div>
        </div>
        <div className="test"></div>
        </div>
    )
}

export default Confirm;