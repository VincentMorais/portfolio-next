import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Frise: React.FC = () => {
  const years = [
    { year: '2020', text: 'J\'ai commencé mon cursus universitaire en informatique' },
    { year: '2022', text: 'J\'ai effectué un stage en développement web et mobile' },
    { year: '2023', text: 'J\'ai travaillé sur un projet de recherche sur l\'apprentissage automatique' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const yearVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const [ref, inView] = useInView({
    rootMargin: '-50px 0px',
    triggerOnce: true,
  });

  return (
    <motion.div className="frise-container" variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} ref={ref}>
      {years.map(({ year, text }, index) => (
        <motion.div
          key={year}
          className="frise-year"
          variants={yearVariants}
        >
          {year}
          <motion.div className="frise-text">
            {text}
          </motion.div>
          {index < years.length - 1 && (
            <motion.div
              className="frise-line"
              color='white'
              initial={{ width: 150 }}
              animate={{ width: '150px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Frise;


