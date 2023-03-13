import React from "react";
import { ReactSVG } from "react-svg";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="animated-background">
      <ReactSVG
        src="your-svg-file.svg"
        className="animated-svg"
        beforeInjection={(svg) => {
          svg.setAttribute("style", "width: 100%; height: 100%;");
        }}
        fallback={() => <span>Error!</span>}
      />
    </div>
  );
};

export default AnimatedBackground;