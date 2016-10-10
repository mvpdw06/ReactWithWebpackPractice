import ReactDom from 'react-dom';
import React from 'react';
import App from './app';
import { AppContainer } from 'react-hot-loader';

const rootElement = document.getElementById('app');

ReactDom.render(
	<AppContainer> 
		<App />
	</AppContainer>,
	rootElement
);

if (module.hot) {   
	module.hot.accept('./app', () => {
		const NextApp = require('./app').default;
		ReactDom.render(
			<AppContainer> 
				<NextApp />
			</AppContainer>,
			rootElement
		);
	}); 
}

