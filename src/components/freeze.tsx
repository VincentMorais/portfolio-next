import React from 'react';
import { Chrono } from 'react-chrono';

const educationItems = [
  {
    title: 'Baccalauréat',
    cardTitle: 'Baccalauréat en sciences',
    cardSubtitle: '2016 - 2018',
    cardDetailedText: 'J\'ai obtenu mon baccalauréat en sciences de l\'Université de Paris.',
  },
  {
    title: 'Licence',
    cardTitle: 'Licence en informatique',
    cardSubtitle: '2018 - 2021',
    cardDetailedText: 'J\'ai étudié l\'informatique à l\'Université de Paris.',
  },
  {
    title: 'Master',
    cardTitle: 'Master en informatique',
    cardSubtitle: '2021 - présent',
    cardDetailedText: 'Je suis actuellement en train de poursuivre mes études en informatique à l\'Université de Paris.',
  },
];

const Frise = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Chrono items={educationItems} />
    </div>
  );
};

export default Frise;


