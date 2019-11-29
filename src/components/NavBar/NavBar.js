import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [state, setState] = useState(false);
    const toggleMenu = () => {
        setState(!state);
    }
	return (
		<nav className="NavBar">
          <div className="NavContainer">
          <button onClick={toggleMenu} className="NavButton">
          <i className="NavIcon fas fa-bars"></i>
                </button>
          <ul className={`${state ? null : "hide"} NavList`}>
                    <li className="NavItem">
                        <Link to="/home" className="NavLink">
                            home
                        </Link>
                    </li>
                    <li className="NavItem">
                        <Link to="/portfolio" className="NavLink">
                            projects
                        </Link>
                    </li>
                    <li className="NavItem">
                        <Link to="/about" className="NavLink">
                            about me
                        </Link>
                    </li>
                    <li className="NavItem">
                        <a href="#home" className="NavLink">
                            resume
                        </a>
                    </li>
                </ul>
          </div>
		</nav>
	);
};


export default NavBar;
