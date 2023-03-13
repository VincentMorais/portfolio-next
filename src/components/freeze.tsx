import { FC, useEffect } from "react";
import dateData from "../dateData";

interface FreezeChronoProps {
  items: {
    year: number;
    label: string;
  }[];
}

const FreezeChrono: FC<FreezeChronoProps> = ({ items = dateData }) => {
  useEffect(() => {
    function hideIfOffscreen() {
      const spaceShip = document.querySelector('.space-ship');
      
      if (spaceShip) {
        const rect = spaceShip.getBoundingClientRect();
    
        if (rect.right < 0 || rect.left > window.innerWidth) {
          spaceShip.classList.add('hidden');
        } else {
          spaceShip.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('resize', hideIfOffscreen);
    hideIfOffscreen();
    return () => {
      window.removeEventListener('resize', hideIfOffscreen);
    };
  }, []);

  const firstYear = items[0].year;
  const lastYear = items[items.length - 1].year;
  const distanceBetweenYears = lastYear - firstYear;
  const yearRange = Array.from(Array(distanceBetweenYears + 1).keys()).map(
    (year) => year + firstYear
  );
  const numYearRanges = yearRange.length - 1;
  const yearRangeWidth = 100 / numYearRanges;
  const freezeWidth = `${100 / items.length}%`;

  return (
    <div className="freeze-date-container">
      <div className="freeze-chrono-container">
        <div className="year-line"></div>
        <div className="space-ship" />
      </div>
      <div className="freeze-date">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const marginLeft = isLast ? "0px" : `${yearRangeWidth}%`;
          const yearPosition = ((item.year - firstYear) / distanceBetweenYears) * 100;
          return (
            <div key={index} className="container-year-label">
              <p className="year">{item.year}</p>
              <p className="label">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FreezeChrono;


