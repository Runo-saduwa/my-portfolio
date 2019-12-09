import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import { themeContext } from '../../Context';

const NavBar = () => {
	const { darkMode, toggleDarkMode } = useContext(themeContext);
	console.log(darkMode);
	const [ state, setState ] = useState(false);
	const toggleMenu = () => {
		setState(!state);
	};
	return (
		<nav className="NavBar">
			<div className="NavContainer">
				<button onClick={toggleMenu} className={`NavButton ${darkMode ? 'darkMode' : null}`}>
					<i className="NavIcon fas fa-bars" />
				</button>
				<ul className={`${state ? null : 'hide'} NavList`}>
					<li className="NavItem">
						<button onClick={toggleDarkMode} className="darkModeBtn">
							{darkMode ?  <i className="sun fas fa-sun" /> :<i className="moon fas fa-moon" />}
						</button>
					</li>
					<li className="NavItem">
						<Link to="/" className={`${darkMode ? 'darkMode' : 'NavLink'}`}>
							home
						</Link>
					</li>
					<li className="NavItem">
						<Link to="/portfolio" className={`${darkMode ? 'darkMode' : 'NavLink'}`}>
							projects
						</Link>
					</li>
					<li className="NavItem">
						<Link to="/about" className={`${darkMode ? 'darkMode' : 'NavLink'}`}>
							contact me
						</Link>
					</li>
					{/* <li className="NavItem">
						<a href="#home" className={`NavLink ${darkMode ? 'darkMode' : null}`}>
							resume
						</a>
					</li> */}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
