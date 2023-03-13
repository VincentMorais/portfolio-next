import { FC } from "react";
import { RiAdminFill, RiComputerLine, RiStrikethrough } from "react-icons/ri";
import { FiArchive, FiDatabase } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

import { FaAnchor, FaStrikethrough } from "react-icons/fa";


const Tools: FC = () => {
 
  return (
    <section
      id="tools"
      className="container-all"

    >
      <h1 className="competences">
        Mes Compétences
      </h1>
      <div className="container-2" >
        <div className="container-front">
          <div className="container-text-front">
          <h1 className="title-all-w" >
            Front-End
          </h1>
          <ul >
            <li>HTML, CSS </li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>ReactJS, NextJS</li>
            <li>Angular</li>
            <li>TailwindCSS, SCSS</li>
          </ul>
          </div>
          <div className="container-img">
            <img className="image-front" src="/images/terre.png" alt="caca" />
          </div>  

        </div>
        <div className="container-back">
          <div className="container-text-front">
          <h1 className="title-all-w">
            Back-End
          </h1>
          <ul >
            <li>C, C#, CPP</li>
            <li>Python</li>
            <li>Shell</li>
            <li>Java</li>
            <li>Mongodb</li>
            <li>Node JS, Express JS</li>
            <li>PHP</li>
            <li>SQL</li>
          </ul>
          </div>
          <div className="container-img">
            <img className="image-front" src="/images/lune.png" alt="caca" />
          </div>  
        </div>
        <div className="container-ux">
          <div className="container-text-front">
          <h1 className="title-all-w">
            UX/UI Design
          </h1>
          <ul >
            <li>Canva</li>
            <li>Figma</li>
            <li>Suite Adobe</li>
            <li>Wordpress</li>
            <li>Elementor</li>
          </ul>
          </div>
          <div className="container-img">
            <img className="image-front" src="/images/mars.png" alt="caca" />
          </div> 
        </div>
        <div className="container-devops">
          <div>
          <h1 className="title-all-w">
            DevOps
          </h1>
          <ul >
            <li>Aws</li>
            <li>Aws CodeCommit</li>
            <li>Git</li>
            <li>Terraform</li>
            <li>Kubernetes</li>
            <li>Docker</li>
          </ul>
          </div>
          <div className="container-img">
            <img className="image-front" src="/images/mercure.png" alt="caca" />
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Tools;
