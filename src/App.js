import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/portfolio" component={Portfolio}/>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
