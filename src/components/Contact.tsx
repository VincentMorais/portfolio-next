import React from "react";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <h1 className="contact-title">Me contacter</h1>
      <div className="contact-container">
        <div className="contact-description">
          <div className="contact-description-content">
            <h1 className="contact-description-title">
              vous pouvez me contacter sur les plateformes suivantes:
            </h1>
          </div>
        </div>
        <div className="contact-platforms">
          <ul className="contact-platforms-list">
            <li className="contact-platforms-item">
              <a
                href="https://www.linkedin.com/in/vincent-morais-5592061b1/"
                className="contact-platforms-link"
              >
                 <FaLinkedin size={30} color="#0077B5" />
                <p className="contact-platforms-text">Linkedin</p>
              </a>
            </li>
            <li className="contact-platforms-item">
              <a
                href="mailto:vincent.morais2001@outlook.fr"
                className="contact-platforms-link"
              >
                <HiMail size={30} color="#3b82E1" />
                <p className="contact-platforms-text">
                  vincent.morais2001@outlook.fr
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;

