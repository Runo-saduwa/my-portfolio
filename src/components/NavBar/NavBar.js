import React from 'react';
import './NavBar.css';

const NavBar = () => {
	return (
		<nav className="NavBar">
			<ul className="NavList">
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
		</nav>
	);
};


export default NavBar;
