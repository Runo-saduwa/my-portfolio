import React, { useState, createContext } from 'react';

export const themeContext = createContext();

export const Provider = (props) => {
	const [ darkMode, setDarkModeState ] = useState(false);

	const toggleDarkMode = () => {
		setDarkModeState(!darkMode);
	};

	return <themeContext.Provider value={{ darkMode, toggleDarkMode }}>{props.children}</themeContext.Provider>;
};



