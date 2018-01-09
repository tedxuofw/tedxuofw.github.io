import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Page } from './main.jsx';
import { About } from './about.jsx';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Page}/>
					<Route path='/about' component={About}/>
				</Switch>
			</BrowserRouter>
        );
	}
}

ReactDOM.render(<App />, document.getElementById('app'));