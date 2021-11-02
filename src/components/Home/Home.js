import React, { useContext } from "react";
import Timeline from "../Timeline/Timeline";
import "./Home.css";

import { themeContext } from "../../Context";
import Resume from "../Resume/Resume";

const world =
  "https://res.cloudinary.com/daaubcml6/image/upload/e_sharpen:100,q_auto:best/v1575721992/Earth_Globe_Europe_Africa_Emoji_vs2zm7.png";

const MyImg =
  "https://res.cloudinary.com/daaubcml6/image/upload/v1635849171/my-image_qnujcu.jpg";
const Home = (props) => {
  const { darkMode } = useContext(themeContext);

  return (
    <>
      <header>
        <div className="HeaderContainer">
          <img className="MyImg" src={MyImg} alt="my passport" />
          <h1 className={`Intro ${darkMode ? "darkMode" : null}`}>
            Hey 👋🏾, I'm <span className="highlight">Runo Saduwa!</span>
          </h1>
          <p className={`IntroWords ${darkMode ? "darkMode" : null}`}>
            Popularly known as Runo, I'm a Software Engineer based in Nigeria.
            Welcome to my spot on the web where i showcase projects i've worked
            on, musings, technical articles i've written and my contributions to
            the tech community, home and abroad!
          </p>
          <div className={`SocialIcons`}>
            <a
              className={`${darkMode ? "darkMode" : null}`}
              href="https://github.com/Runo-saduwa"
            >
              <i className="fab fa-github" />
            </a>
            <a className={`${darkMode ? "darkMode" : null}`} href="http://linkedin.com/in/peter-saduwa-ogheneruno-24922711a">
              <i className="fab fa-linkedin" />
            </a>
            <a
              className={`${darkMode ? "darkMode" : null}`}
              href="https://twitter.com/SaduwaRuno"
            >
              <i className="fab fa-twitter" />
            </a>
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
