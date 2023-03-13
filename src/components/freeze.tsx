import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaUniversity } from 'react-icons/fa';


interface TimelineData {
  title: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const timelineData: TimelineData[] = [
  {
    title: 'Premier événement',
    date: 'Janvier 2022',
    description: 'Ceci est une description du premier événement.',
    icon: <FaBriefcase />,
    className: 'vertical-timeline-element--work',
  },
  {
    title: 'Deuxième événement',
    date: 'Mars 2022',
    description: 'Ceci est une description du deuxième événement.',
    icon: <FaUniversity />,
    className: 'vertical-timeline-element--education',
  },
  {
    title: 'Deuxième événement',
    date: 'Mars 2022',
    description: 'Ceci est une description du deuxième événement.',
    icon: <FaUniversity />,
    className: 'vertical-timeline-element--education',
  },
  {
    title: 'Deuxième événement',
    date: 'Mars 2022',
    description: 'Ceci est une description du deuxième événement.',
    icon: <FaUniversity />,
    className: 'vertical-timeline-element--education',
  },
  {
    title: 'Deuxième événement',
    date: 'Mars 2022',
    description: 'Ceci est une description du deuxième événement.',
    icon: <FaUniversity />,
    className: 'vertical-timeline-element--education',
  },
  // Ajoutez plus d'événements ici
];

const Frise = () => {
  return (
    <VerticalTimeline>
      {timelineData.map((data, index) => (
        <VerticalTimelineElement
          key={index}
          date={data.date}
          icon={data.icon}
          className={`vertical-timeline-element ${data.className}`}
        >
          <h3 className="vertical-timeline-element-title">{data.title}</h3>
          <p>{data.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Frise;


