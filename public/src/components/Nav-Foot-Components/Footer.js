import React, { useEffect } from "react";
import styles from "./Footer.module.css";
// import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <footer id="contact">
      <div 
      className={styles.content}
      data-aos="zoom-in-up"
      data-aos-easing="ease-in-out"
      data-aos-delay="400"
      >
        <h3>Hussain Saifuddin</h3>
        <p>I aim to present myself as dedicated and detail-oriented electronic engineer and a web developer who thrives in a fast-paced environment. I seek to practice my learning through extensive hands on experience while helping organisations achieve their goal of excellence.</p>
        <ul className={styles.socials}>
          <li>
            <a href="https://www.facebook.com/hussain.quetta365/"><i className="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="mailto:hussainquetta53@gmail.com"><i className="fa fa-envelope"></i></a>
          </li>
          <li>
            <a href="https://github.com/hussain385"><i className="fa fa-github"></i></a>
          </li>
          <li>
            <a href="tel:+923236501386"><i className="fa fa-phone"></i></a>
          </li>
          <li>
            <a href="https://wa.me/923236501386"><i className="fa fa-whatsapp"></i></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hussain-saifuddin786/"><i className="fa fa-linkedin-square"></i></a>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <p>copyright &copy;2020 Hussain Saifuddin. designed by <span>Hussain</span></p>
      </div>
    </footer>
  );
};

export default Footer;
