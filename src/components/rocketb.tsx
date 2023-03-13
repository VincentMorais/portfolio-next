import React, { useState } from 'react';
import { FC } from "react";
import { HiMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const RocketButton: React.FC<{ link: string }> = ({ link }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <a href={link} className="rocket-button-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`rocket-button ${hovered ? 'hovered' : ''}`}>
        <div className="rocket-icon"></div>
      </div>
    </a>
  );
};

export default RocketButton;