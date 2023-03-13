import { FC, useState } from "react";
import projects from "../workData";
import WorkCard from "./WorkCard";

import VisibilitySensor from 'react-visibility-sensor';
import { motion } from "framer-motion";



const Work: FC = () => {


  const [visibleCards, setVisibleCards] = useState<number>(0);

  const onChangeVisibility = (isVisible: boolean, index: number) => {
    if (isVisible) {
      setVisibleCards((prevState) => Math.max(prevState, index + 1));
    }
  };

  return (
    <motion.section
      id="work"
      className="card"
      layout
    >
<VisibilitySensor onChange={(isVisible: boolean) => onChangeVisibility(isVisible, -1)}>
  <h1 className={`projet ${visibleCards ? 'visible' : ''}`}>Mes projets</h1>
</VisibilitySensor>
      <div className="projet-container-all">
        {projects.map((project, index) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            onChange={(isVisible: boolean) => onChangeVisibility(isVisible, index)}
          >
            <div className={`project-container ${visibleCards >= index + 1 ? 'visible' : ''}`}>
              <motion.div className="project-item" whileHover={{ scale: 1.05 }}>
                <img src={project.images} alt="Project Image" />
                <span className="project-number">{project.number}</span>
                <p className="project-description">{project.description}</p>
                <a className="button-card" href={project.link}>Github</a>
              </motion.div>
            </div>
          </VisibilitySensor>
        ))}
      </div>
    </motion.section>
  );
};
export default Work;
