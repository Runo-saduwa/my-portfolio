import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {themeContext} from '../../Context';

const NavBar = () => {
     const {darkMode} = useContext(themeContext)
     console.log(darkMode);
    const [state, setState] = useState(false);
    const toggleMenu = () => {
        setState(!state);
    }
	return (
		<nav className="NavBar">
          <div className="NavContainer">
          <button onClick={toggleMenu} className={`NavButton ${darkMode ? "darkMode" : null}`}>
          <i className="NavIcon fas fa-bars"></i>
                </button>
          <ul className={`${state ? null : "hide"} NavList`}>
                    <li className="NavItem">
                        <Link to="/" className={`NavLink ${darkMode ? "darkMode" : null}`}>
                            home
                        </Link>
                    </li>
                    <li className="NavItem">
                        <Link to="/portfolio" className={`NavLink ${darkMode ? "darkMode" : null}`}>
                            projects
                        </Link>
                    </li>
                    <li className="NavItem">
                        <Link to="/about" className={`NavLink ${darkMode ? "darkMode" : null}`}>
                            about me
                        </Link>
                    </li>
                    <li className="NavItem">
                        <a href="#home" className={`NavLink ${darkMode ? "darkMode" : null}`}>
                            resume
                        </a>
                    </li>
                </ul>
          </div>
		</nav>
	);
};


export default NavBar;
