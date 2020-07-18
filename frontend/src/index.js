import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<h1>olar</h1>
	</React.StrictMode>,
	document.getElementById('root')
);
serviceWorker.unregister();
