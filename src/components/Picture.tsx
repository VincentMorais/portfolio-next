import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profileImage from "../img/dessin.png";
import EarthCanvas from "./Earth";
const Picture: FC = () => {
  return (
    <motion.div
     
      layout
    >
<motion.div
  className="image-container"
  animate={{ y: -10, transition:{ duration: 2, ease: "easeInOut", repeat:Infinity, repeatType: "reverse" }}}
  initial={{ y: 10 }}
>
        <Image
        className="image-accueil"
          src={profileImage}
          alt="Profile"
          width={150}
          height={150}
          priority
          
        />
      </motion.div>
      <motion.h1
        className="welcome"
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        initial={{ opacity: 0 }}
      >
     <span><h1 className="name-top">Je suis Vincent Morais.</h1></span>
      </motion.h1>
      <motion.p
       className="welcome-text"
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5}
        }}
        initial={{ opacity: 0, y: -30 }}
      >
       <span>
        <p className="hero">Bienvenue dans mon</p></span>  
       <span>
       <span>
        <h1 className="universe">univers</h1>
       </span>
       </span>
       <br />
        <div className="container-earth">
        <EarthCanvas />
        </div>
      </motion.p>
      
    </motion.div>
   
  );
};

export default Picture;
