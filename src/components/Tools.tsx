import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaAngular, FaReact } from "react-icons/fa";

const Tools: FC = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setAnimationTriggered(true);
    }
  }, [inView]);

  const skills = [
    { icon: FaAngular, label: "Angular" },
    { icon: FaReact, label: "React" },
    { icon: FaReact, label: "React" },
    { icon: FaReact, label: "React" },
    { icon: FaReact, label: "React" },
    { icon: FaReact, label: "React" },
    { icon: FaReact, label: "React" },
    { icon: FaReact, label: "React" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="tools">
      <h1 className="competences">Mes Skills</h1>
      <motion.div
        className="container-skills"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={animationTriggered ? "visible" : "hidden"}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skills"
            variants={skillVariants}
          >
            <div className="angular-container">
              <skill.icon className="icon-skills" size={50}/>
              <p>{skill.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Tools;
