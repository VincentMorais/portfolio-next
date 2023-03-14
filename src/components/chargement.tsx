import React, { useState, useEffect } from 'react';
import Home from '../pages/index';
import styles from '../styles/loading.module.scss';

const LoadingPage = () => {
  // État pour gérer la progression de la barre de chargement
  const [progress, setProgress] = useState(0);

  // Utilisation de useEffect pour mettre à jour la progression de la barre de chargement
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 10);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 5000);
  }, []);

  // Si la progression est inférieure à 100, afficher la page de chargement avec la barre de progression
  if (progress < 100) {
    return (
        <div className={styles.container}>
          <div className={styles.bar}>
            <div className={styles.progress} style={{ width: `${progress}%` }} />
          </div>
          <p className={styles.text}>La page est en train de charger... <span>{progress}%</span></p>
        </div>
      );
    }

  // Si la progression est de 100, afficher l'application principale
  return (
    <div>
      <Home /> {/* ou <Index /> si votre composant principal est nommé Index */}
    </div>
  );
};

export default LoadingPage;
