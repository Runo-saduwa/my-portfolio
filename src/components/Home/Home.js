import React, { useContext } from "react";
import Timeline from "../Timeline/Timeline";
import "./Home.css";

import { themeContext } from "../../Context";
import Resume from "../Resume/Resume";

const MyImg = "https://res.cloudinary.com/daaubcml6/image/upload/v1680250514/me_eqmwle_4e7010.jpg";
const Home = (props) => {
  const { darkMode } = useContext(themeContext);
  return (
    <>
      <header>
        <div className="HeaderContainer">
          <img className="MyImg" src={MyImg} alt="my passport" />
          <h1 className={`Intro ${darkMode ? "darkMode" : null}`}>
            Hi, I'm <span className="highlight">Runo Saduwa!</span>
          </h1>
          <p className={`IntroWords ${darkMode ? "darkMode" : null}`}>
            Professional and product-oriented Front End Engineer with 4+ years of experience working in a variety of fast-paced and highly-ambitious settings. Welcome to my little space on the internet!
          </p>
          <div className={`SocialIcons`}>
            <a
              className={`${darkMode ? "darkMode" : null}`}
              href="https://github.com/Runo-saduwa"
            >
              <i className="fab fa-github" />
            </a>
            <a
              className={`${darkMode ? "darkMode" : null}`}
              href="http://linkedin.com/in/peter-saduwa-ogheneruno-24922711a"
            >
              <i className="fab fa-linkedin" />
            </a>
            {/* <a
              className={`${darkMode ? "darkMode" : null}`}
              href="https://twitter.com/SaduwaRuno"
            >
              <i className="fab fa-twitter" />
            </a> */}
            <a
              className={`${darkMode ? "darkMode" : null}`}
              href="https://dev.to/runosaduwa"
            >
              <i className="fab fa-dev"></i>
            </a>
          </div>
        </div>
      </header>
      <Resume />
      <Timeline />
    </>
  );
};

export default Home;
