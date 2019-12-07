import React, { useContext } from 'react';
import Timeline from '../Timeline/Timeline';
import './Home.css';

import { themeContext } from '../../Context';
 
const world = "https://res.cloudinary.com/daaubcml6/image/upload/e_sharpen:100,q_auto:best/v1575721992/Earth_Globe_Europe_Africa_Emoji_vs2zm7.png";

const MyImg = "https://res.cloudinary.com/daaubcml6/image/upload/q_auto:best/v1575657812/passport_mmo7ue.jpg";
const Home = (props) => {
	const { darkMode } = useContext(themeContext);

	return (
		<>
		<header>
			<div className="HeaderContainer">
				<img className="MyImg" src={MyImg} alt="my passport" />
				<h1 className={`Intro ${darkMode ? 'darkMode' : null}`}>
					Hello <img className="emoji" src={world} alt="world emoji" />, I'm{' '}
					<span className="highlight">Runo Saduwa</span>.
				</h1>
				<p className={`IntroWords ${darkMode ? 'darkMode' : null}`}>
				A fullstack software engineer based in Nigeria. I solve problems in style using cutting edge web technologies, while doing this I adhere to industry standards, maintain best practices and manage time effectively. I use every slight opportunity to give back to the community by speaking in conferences and or through technical articles via my personal blog.
				</p>
				<div className={`SocialIcons`}>
					<a className={`${darkMode ? 'darkMode' : null}`} href="https://github.com/Runo-saduwa">
						<i className="fab fa-github" />
					</a>
					<a className={`${darkMode ? 'darkMode' : null}`} href="#github">
						<i className="fab fa-linkedin" />
					</a>
					<a className={`${darkMode ? 'darkMode' : null}`} href="https://twitter.com/SaduwaRuno">
						<i className="fab fa-twitter" />
					</a>
					<a className={`${darkMode ? 'darkMode' : null}`} href="https://dev.to/runosaduwa">
					<i className="fab fa-dev"></i>
					</a>
				</div>
			</div>
		</header>
        <Timeline/>
		</>
	);
};

export default Home;
