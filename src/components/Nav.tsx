import { motion, AnimatePresence } from "framer-motion";
import { FC, useState, useRef, useEffect } from "react";
import { BsPerson } from "react-icons/bs";

import { useMediaQuery } from "react-responsive";
import { Link, animateScroll as scroll } from 'react-scroll'
import Image from "next/image";
import profileImage from "../img/vincent.png";

const Nav: FC = () => {
  const [animationState, setAnimationState] = useState("notHovered");
  const navRef = useRef<HTMLElement>(null);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [hamburgerState, setHamburgerState] = useState<boolean>(false);
 
 
  
  return (
    <motion.nav className="navbar-container-all" layout>
      <motion.div
        className={
          isTabletOrMobile ? "flex justify-between items-center w-full" : ""
        }
        layout
      >
        <motion.div
          className="flex space-x-6 items-center"
          onHoverStart={() => {
            setAnimationState("hovered");
          }}
          onHoverEnd={() => {
            setAnimationState("notHovered");
          }}
          onTap={() => {
            setAnimationState("hovered");
            setTimeout(() => {
              setAnimationState("notHovered");
            }, 2000);
          }}
          layout
        >
          <motion.div
            className="border border-[#303436] rounded-md flex justify-center items-center overflow-hidden h-12 w-12"
            layout
          >
            <AnimatePresence mode= 'wait'>
              {animationState === "notHovered" && (
                <motion.figure
                  animate={{ x: 0, scale: 1, rotate: 0 }}
                  initial={{ x: -100 }}
                  exit={{
                    scale: 0,
                    rotate: 0,
                    transition: {
                      ease: [0.07, -0.04, 1, 0.4],
                      duration: 0.8,
                    },
                  }}
                  transition={{ duration: 0.5, type: "spring" }}
                  key={animationState}
                >
                  <BsPerson color="#C3C1BA" size={25} />
                </motion.figure>
              )}
              {animationState === "hovered" && (
                <motion.figure
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  initial={{ opacity: 0, y: 0, scale: 0 }}
                  exit={{ 
                    x: 100,
                    scale: 0
                   }}
                  transition={{ duration: 0.8, type: "spring" }}
                  key={animationState}
                >
                  <Image
                    src={profileImage}
                    alt="image"
                    width={100}
                    height={100}
                    className="max-h-full max-w-full object-cover"
                  />
                </motion.figure>
              )}
            </AnimatePresence>
          </motion.div>
          <p className="Username">
           <a href="">Morais Vincent</a> 
          </p>
        </motion.div>
        {isTabletOrMobile && (
          <div onClick={() => setHamburgerState(!hamburgerState)}>
            <motion.div
              animate={{
                rotate: hamburgerState ? 40 : 0,
                transformOrigin: "top left",
                marginBottom: hamburgerState ? "20px" : "10px",
              }}
              className="bg-white h-0.5 rounded-full w-9"
             />
            <motion.div
              animate={{
                rotate: hamburgerState ? -40 : 0,
                transformOrigin: "bottom left",
                marginTop: hamburgerState ? "20px" : "10px",
              }}
              className="bg-white h-0.5 rounded-full w-9"
             />
          </div>
        )}
      </motion.div>
      {!isTabletOrMobile && (
        <div className="liste">
          <div className="work">
          <button><Link className="button-list" to="work" activeClass="active" smooth duration={200} >Mes Projet</Link></button> 
          </div>
          <div className="tools">
          <button><Link className="button-list" to="tools" activeClass="active" smooth duration={200}>Compétences</Link></button>
          </div>
          <div className="contact">
          <button><Link className="button-list" to="contact" activeClass="active" smooth duration={200}>Contact</Link></button>
          </div>
          <div className="alternances">
          <button><Link className="button-list" to="contact" activeClass="active" smooth duration={200}>Alternances</Link></button>
          </div>
        </div>
      )}
      <AnimatePresence>
        {isTabletOrMobile && hamburgerState && (
          <motion.div 
          style={{color: "#FFFFFF"}}
            className="hamburger-menu"
            key={`${hamburgerState}`}
            layout
          >
            <a className="hamburger-projets" onClick={() => setHamburgerState(false)} href="#work">
              Mes Projets
            </a>
            <a className="hamburger-tools"  onClick={() => setHamburgerState(false)} href="#tools">
              Mes Compétences
            </a>
            <a className="hamburger-contact"  onClick={() => setHamburgerState(false)} href="#contact">
              Me Contacter
            </a>
            <a className="hamburger-alternances"  onClick={() => setHamburgerState(false)} href="#contact">
              Alternances
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
