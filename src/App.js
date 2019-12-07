import React, {useContext} from 'react';
import {  Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css';
import { themeContext } from './Context';


import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = ({location}) => {

	const {darkMode} = useContext(themeContext);
	console.log(darkMode)
	return (
	

			<main className={`App ${darkMode ? "darkMode": null}`}>
				
					<NavBar />
					<TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
		  timeout={{ enter: 300, exit: 300 }}
		  classNames="fade"
        >
			 <section className="route-section">
					<Switch location={location}>
						<Route exact path="/" component={Home} />
						<Route exact path="/portfolio" component={Portfolio} />
						<Route exact path="/about" component={Contact} />
					</Switch>
			</section>
					</CSSTransition>
      </TransitionGroup>	
	
				<Footer/>
			</main>

	);
};

export default withRouter(App);
