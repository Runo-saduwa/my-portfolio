import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './Context';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
	<Provider>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.querySelector('#root')
);
