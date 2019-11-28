import React, {useState} from 'react';
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
                        <a href="#home" className="NavLink">
                            home
                        </a>
                    </li>
                    <li className="NavItem">
                        <a href="#home" className="NavLink">
                            projects
                        </a>
                    </li>
                    <li className="NavItem">
                        <a href="#home" className="NavLink">
                            about me
                        </a>
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
