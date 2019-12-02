import React, {useContext} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { themeContext } from './Context';


import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';


const App = (props) => {

	const {darkMode} = useContext(themeContext);
	console.log(darkMode)
	return (
	

			<Router>
				<div className={`App ${darkMode ? "darkMode": null}`}>
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/portfolio" component={Portfolio} />
						<Route exact path="/about" component={Contact} />
					</Switch>
				</div>
			</Router>

	);
};

export default App;
