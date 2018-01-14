import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Switch } from 'react-router-dom';

import { Page } from './main.jsx';
import { About } from './about.jsx';

class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path='/' component={Page}/>
					<Route path='/about' component={About}/>
				</Switch>
			</HashRouter>
        );
	}
}

ReactDOM.render(<App />, document.getElementById('app'));