import React, { useContext } from 'react';
import './Home.css';
import { themeContext } from '../../Context';
import MyImg from '../../images/passport.jpeg';
import world from '../../images/world.png';

const Home = () => {
	const { darkMode } = useContext(themeContext);

	return (
		<header>
			<div className="HeaderContainer">
				<img className="MyImg" src={MyImg} alt="my passport" />
				<h1 className={`Intro ${darkMode ? 'darkMode' : null}`}>
					Hello <img className="emoji" src={world} alt="world emoji" />, I'm{' '}
					<span className="highlight">Runo Saduwa</span>.
				</h1>
				<p className={`IntroWords ${darkMode ? 'darkMode' : null}`}>
					A Fullstack Software Engineer based in Nigeria. I use React and Node.js to bring ideas to life.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nisi illo assumenda nulla, maiores
					quasi aut possimus provident illum ut!
				</p>
				<div className={`SocialIcons`}>
					<a className={`${darkMode ? 'darkMode' : null}`} href="#github">
						<i className="fab fa-github" />
					</a>
					<a className={`${darkMode ? 'darkMode' : null}`} href="#github">
						<i className="fab fa-linkedin" />
					</a>
					<a className={`${darkMode ? 'darkMode' : null}`} href="#github">
						<i className="fab fa-twitter" />
					</a>
					<a className={`${darkMode ? 'darkMode' : null}`} href="#github">
						<i className="fab fa-facebook-f" />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Home;
