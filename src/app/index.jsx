import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Switch } from 'react-router-dom';

import { Home } from './main.jsx';
import { About } from './about.jsx';
import { Sponsors } from './sponsors.jsx';

class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/about' component={About}/>
                    <Route path='/sponsors' component={Sponsors}/>
				</Switch>
			</HashRouter>
        );
	}
}

ReactDOM.render(<App />, document.getElementById('app'));