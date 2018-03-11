import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/main.jsx';
import { About } from './pages/about.jsx';
import { Speakers } from './pages/speakers.jsx';
import { Sponsors } from './pages/sponsors.jsx';
import { Contact } from './pages/contact.jsx';
import { Attend } from './pages/attend.jsx';


class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/about' component={About}/>
                    <Route path='/speakers' component={Speakers}/>
                    <Route path='/sponsors' component={Sponsors}/>
                    <Route path='/contact'  component={Contact}/>
                    <Route path='/attend'   component={Attend}/>
                </Switch>
			</HashRouter>
        );
	}
}

ReactDOM.render(<App />, document.getElementById('app'));