import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { FC } from "react";
import { HiMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import RocketButton from './rocketb';

const AlternancesList: FC = () => {
  const alternances = [
    { entreprise: 'MFSolution', poste: 'Développeur web', date: '08/2022 - 02/2023', link: '/Maddam'},
    { entreprise: 'Maddam', poste: 'Développeur web', date: '07/2020 - 08/2022', link: 'lien2' },
    { entreprise: 'Sequana Mairie de Paris', poste: 'Assistant aux utilisateurs', date: '07/2019 - 07/2020', link: 'lien3' },
  ];

  const [visibleCards, setVisibleCards] = useState<number>(0);

  const onChangeVisibility = (isVisible: boolean, index: number) => {
    if (isVisible) {
      setVisibleCards((prevState) => Math.max(prevState, index + 1));
    }
  };

  const handleRocketClick = () => {
    window.location.href = "https://www.monlien.com";
  }

  return (
    
    <div className="alternances-list">
      <h1 className='mesalternances'>Alternances</h1>
      <div className='container-alternances-list'>
      {alternances.map((alternance, index) => (
  <VisibilitySensor key={index} onChange={(isVisible: boolean) => onChangeVisibility(isVisible, index)}>
    <div className={`card ${index < visibleCards ? 'visible' : ''}`}>
      <h2>{alternance.entreprise}</h2>
      <p>{alternance.poste}</p>
      <p>{alternance.date}</p>
      <RocketButton link={alternance.link} />
      <p>cliquer ici</p>
    </div>
  </VisibilitySensor>
))}
      </div>
    </div>
  );
};

export default AlternancesList;