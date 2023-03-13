import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollTop: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {visible && (
        <motion.a
          href="#top"
          className="scroll-top"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img
            src="../images/fusée.gif"
            alt="Rocket"
            style={{ height: "80px", width: "80px" }}
          />
        </motion.a>
      )}
    </>
  );
};

export default ScrollTop;