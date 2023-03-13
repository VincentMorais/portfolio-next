import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
      </button>
      <motion.div
        className={`navbar-collapse ${isMenuOpen ? "show" : ""}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="navbar-liste">
          <div className="navbar-work">
            <Link
              className="navbar-button-list"
              to="work"
              activeClass="active"
              smooth
              duration={200}
              onClick={toggleMenu}
            >
              Mes Projets
            </Link>
          </div>
          <div className="navbar-tools">
            <Link
              className="navbar-button-list"
              to="tools"
              activeClass="active"
              smooth
              duration={200}
              onClick={toggleMenu}
            >
              Compétences
            </Link>
          </div>
          <div className="navbar-contact">
            <Link
              className="navbar-button-list"
              to="contact"
              activeClass="active"
              smooth
              duration={200}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
          <div className="navbar-alternances">
            <Link
              className="navbar-button-list"
              to="alternances"
              activeClass="active"
              smooth
              duration={200}
              onClick={toggleMenu}
            >
              Alternances
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

