import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profileImage from "../img/dessin.png";
import EarthCanvas from "./Earth";
const Picture: FC = () => {
  return (
    <motion.div
     style={{height: "100vh"}}
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
      <h1 className="name-top" style={{textAlign: "center"}}>Je suis <span className="nom-prenom">Vincent Morais</span> developpeur full Stack, pasionnée par le developpement front-end et les innovations technologiques. 
      <br />
      Bienvenue dans mon <span className="universe">univers</span>.</h1>
      
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
      
        <div className="container-earth">
        <EarthCanvas />
        </div>
      </motion.p>
      
    </motion.div>
   
  );
};

export default Picture;
