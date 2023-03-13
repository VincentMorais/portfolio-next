import { FC } from "react";
import { FiFileText } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const CVGit: FC = () => {
  return (
    <div className="button-container-cv">
      <motion.a
        href="https://github.com/mon-username"
        className="button-git"
        whileHover={{ y: -10 }}
      >
        <span>GIT</span>
        <AiFillGithub size={30} />
        <div className="button-bg"></div>
      </motion.a>
      <motion.a
        href="../images/cv.pdf"
        className="button-cv"
        whileHover={{ y: -10 }}
      >
        <span>CV</span>
        <FiFileText size={30} />
        <div className="button-bg"></div>
      </motion.a>
    </div>
  );
};

export default CVGit;
